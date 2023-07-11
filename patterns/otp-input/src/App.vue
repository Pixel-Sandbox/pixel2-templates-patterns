<template>
  <mp-box p="8">
    <OTP
      id="phone"
      @completed="handleCompleted"
      :digits="6"
      v-model="otpValue"
    />

    <code style="display: block; margin-top: 16px">
      State : {{ otpValue }}
    </code>
  </mp-box>
</template>

<script>
import OTP from "./components/OTP";
import { MpBox } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    OTP,
  },
  data() {
    return {
      otpValue: "",
    };
  },
  mounted() {
    window.addEventListener("paste", this.handlePaste);
  },
  destroyed() {
    window.removeEventListener("paste", this.handlePaste);
  },
  methods: {
    handleCompleted(val) {
      console.log("COMPLETED: ", val);
    },
    handlePaste(event) {
      event.preventDefault();

      const pasteData = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
      console.log("PASTE :", pasteData);
      this.otpValue = pasteData;
    },
  },
};
</script>
