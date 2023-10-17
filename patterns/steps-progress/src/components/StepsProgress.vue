<template>
  <mp-flex
    width="full"
    justify-content="center"
    align-items="flex-start"
    flex-direction="column"
    flex="1 1 0%"
  >
    <mp-flex
      justify-content="center"
      align-items="center"
      flex-direction="row"
      flex="1 0 0%"
      margin-bottom="4"
    >
      <mp-flex
        width="7"
        height="7"
        outline="solid 2px"
        border-radius="full"
        justify-content="center"
        align-items="center"
        margin-right="4"
        transition="all .2s ease"
        :background-color="
          getStepProps({
            isTrue: 'blue.400',
            isFalse: 'white',
          })
        "
        :outline-color="
          getStepProps({
            isTrue: 'blue.400',
            isFalse: 'gray.100',
          })
        "
      >
        <mp-text
          font-size="md"
          font-weight="semibold"
          text-align="center"
          transition="all .2s ease"
          :color="getStepProps({ isTrue: 'white', isFalse: 'dark' })"
        >
          {{ currentId }}
        </mp-text>
      </mp-flex>
      <mp-flex
        justify-content="center"
        align-items="flex-start"
        flex-direction="column"
      >
        <mp-heading
          as="h3"
          font-size="lg"
          transition="all .2s ease"
          :color="getStepProps({ isTrue: 'blue.400', isFalse: 'dark' })"
        >
          {{ title }}
        </mp-heading>
        <mp-text
          font-size="md"
          font-weight="regular"
          line-height="lg"
          color="gray.600"
        >
          {{ description }}
        </mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex
      justify-content="flex-start"
      align-items="flex-start"
      flex-direction="row"
      width="full"
      gap="1.5"
    >
      <slot />
    </mp-flex>
  </mp-flex>
</template>

<script>
    import { MpFlex, MpText, MpHeading } from "@mekari/pixel";

    export default {
        name: "StepsProgress",
        components: { MpFlex, MpText, MpHeading },
        props: {
            currentId: [String, Number],
            completedId: [String, Number],
            title: [String],
            description: [String],
        },
        methods: {
            getStepProps(values) {
                if (this.completedId >= this.currentId) return values.isTrue;
                else return values.isFalse;
            },
        },
    };
</script>