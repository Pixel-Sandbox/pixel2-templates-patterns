<template>
  <mp-flex
    justify-content="center"
    align-items="center"
    flex-direction="column"
    height="100%"
  >
    <mp-heading as="h2" font-size="xl" mb="1">
      Try one of these topic
    </mp-heading>
    <mp-text mb="6">
      Airene uses the power of AI to provide you with insights, answers and
      more.
    </mp-text>

    <mp-flex gap="4">
      <mp-flex
        width="280px"
        align-items="center"
        justify-content="space-between"
        border="1px solid"
        border-radius="md"
        border-color="gray.400"
        p="5"
        bg="white"
        cursor="pointer"
        @click.native="handleToggle(false)"
        transition="all .2s ease"
        :_hover="{
          borderColor: 'blue.400',
          boxShadow: 'md',
        }"
      >
        <mp-flex align-items="center">
          <mp-flex
            d="inline-flex"
            bg="#D3CBFF"
            justify-content="center"
            align-items="center"
            border-radius="md"
            w="40px"
            h="40px"
          >
            <mp-icon name="employee" color="#4C35CB" />
          </mp-flex>
          <mp-text ml="4"> Employee </mp-text>
        </mp-flex>
        <mp-icon name="arrows-right" />
      </mp-flex>
      <mp-flex
        width="280px"
        align-items="center"
        justify-content="space-between"
        border="1px solid"
        border-radius="md"
        border-color="gray.400"
        p="5"
        bg="white"
        cursor="pointer"
        transition="all .2s ease"
        :_hover="{
          borderColor: 'blue.400',
          boxShadow: 'md',
        }"
      >
        <mp-flex align-items="center">
          <mp-flex
            d="inline-flex"
            bg="#FFC9C9"
            justify-content="center"
            align-items="center"
            border-radius="md"
            w="40px"
            h="40px"
          >
            <mp-icon name="time" color="#BC5555" />
          </mp-flex>
          <mp-text ml="4"> Attendance </mp-text>
        </mp-flex>
        <mp-icon name="arrows-right" />
      </mp-flex>
    </mp-flex>

    <mp-flex gap="4" mt="4">
      <mp-flex
        width="280px"
        align-items="center"
        justify-content="space-between"
        border="1px solid"
        border-radius="md"
        border-color="gray.400"
        p="5"
        bg="white"
        cursor="pointer"
        transition="all .2s ease"
        :_hover="{
          borderColor: 'blue.400',
          boxShadow: 'md',
        }"
      >
        <mp-flex align-items="center">
          <mp-flex
            d="inline-flex"
            bg="#CBECFF"
            justify-content="center"
            align-items="center"
            border-radius="md"
            w="40px"
            h="40px"
          >
            <mp-icon name="payroll" color="#3568CB" />
          </mp-flex>
          <mp-text ml="4"> Payroll </mp-text>
        </mp-flex>
        <mp-icon name="arrows-right" />
      </mp-flex>
      <mp-flex
        width="280px"
        align-items="center"
        justify-content="space-between"
        border="1px solid"
        border-radius="md"
        border-color="gray.400"
        p="5"
        bg="white"
        cursor="pointer"
        transition="all .2s ease"
        :_hover="{
          borderColor: 'blue.400',
          boxShadow: 'md',
        }"
      >
        <mp-flex align-items="center">
          <mp-flex
            d="inline-flex"
            bg="#B0EEAF"
            justify-content="center"
            align-items="center"
            border-radius="md"
            w="40px"
            h="40px"
          >
            <mp-icon name="overtime" color="#158A36" />
          </mp-flex>
          <mp-text ml="4"> Compliance & Legal </mp-text>
        </mp-flex>
        <mp-icon name="arrows-right" />
      </mp-flex>
    </mp-flex>

    <mp-box color="gray.600" font-size="sm" mt="6">
      Airene responses can be inaccurate or misleading.
      <mp-text
        display="inline-block"
        font-size="sm"
        is-link
        @click.native="onLearnModalToggle(true)"
      >
        Learn more
      </mp-text>
    </mp-box>

    <SmartAssistModal
      :isModalOpen="isLearnModalOpen"
      :onModalToggle="onLearnModalToggle"
    />
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading, MpIcon } from "@mekari/pixel";
import SmartAssistModal from "./SmartAssistModal";

export default {
  name: "SmartAssistTopic",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpIcon,
    SmartAssistModal,
  },
  props: {
    handleToggle: [Function],
  },
  data: function () {
    return {
      isLearnModalOpen: false,
    };
  },
  methods: {
    onLearnModalToggle: function (data) {
      this.isLearnModalOpen = data;
    },
  },
};
</script>
