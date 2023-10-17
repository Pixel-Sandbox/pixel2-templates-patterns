<template>
  <mp-pseudo-box
    display="flex"
    flex="1 0 0%"
    height="1.5"
    transition="all .2s ease"
    :_hover="{
      height: '3',
      cursor: 'pointer',
      backgroundColor: getStepProps(
        { isCompleted: 'blue.500', isCurrent: 'blue.500' },
        'gray.100'
      ),
    }"
    :background-color="
      getStepProps(
        { isCompleted: 'blue.400', isCurrent: 'blue.400' },
        'gray.100'
      )
    "
    @mouseover="$emit('mouseover', id)"
    @mouseleave="$emit('mouseleave', id)"
    @click="$emit('click', id)"
  />
</template>

<script>
    import { MpPseudoBox } from "@mekari/pixel";

    export default {
        name: "StepsProgressItem",
        components: { MpPseudoBox },
        props: {
            id: [String, Number],
            isCompleted: [Boolean],
            isCurrent: [Boolean],
        },
        methods: {
            getStepProps(values, optionalValue) {
                if (this.isCompleted) return values.isCompleted;
                else if (this.isCurrent) return values.isCurrent;
                else return optionalValue;
            },
        },
    };
</script>