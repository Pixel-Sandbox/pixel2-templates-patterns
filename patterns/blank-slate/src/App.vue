<template>
  <mp-box p="20">
    <mp-flex justify="space-between" align="center" width="full" mb="2">
      <mp-text mb="2" font-size="xl" font-weight="semibold" width="full"
        >Blank Slate: Illustration</mp-text
      >
      <mp-input
        v-model="illustration"
        placeholder="Illustration URL"
        is-clearable
      />
    </mp-flex>

    <mp-flex
      direction="column"
      border="1px solid"
      border-color="gray.50"
      border-radius="md"
      align="center"
      bg="background"
      p="10"
      mb="8"
    >
      <blank-slate variant="illustration" :src="illustration" />
    </mp-flex>
    <mp-flex justify="space-between" width="full" mb="2">
      <mp-text mb="2" font-size="xl" font-weight="semibold" width="full"
        >Blank Slate: Icon</mp-text
      >
      <mp-input
        v-model="icon"
        align="center"
        placeholder="Icon Name"
        is-clearable
      />
    </mp-flex>
    <mp-flex
      direction="column"
      border="1px solid"
      border-color="gray.50"
      border-radius="md"
      align="center"
      bg="background"
      p="10"
      mb="8"
    >
      <blank-slate variant="icon" :name="icon" />
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpText, MpBox, MpFlex, MpInput } from "@mekari/pixel";
import BlankSlate from "./components/BlankSlate";

export default {
  name: "App",
  components: {
    MpText,
    MpBox,
    MpFlex,
    MpInput,
    BlankSlate,
  },
  data() {
    return {
      illustration:
        "https://mekari.com/wp-content/themes/mekari-website-theme/images/img-404.png",
      icon: "reports",
    };
  },
};
</script>
