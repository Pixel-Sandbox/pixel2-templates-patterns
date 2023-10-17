<template>
  <mp-box padding="6">
    <StepsProgress
    :currentId="currentId"
    :completedId="completedId"
    title="Title"
    description="Description"
  >
    <StepsProgressItem
      id="1"
      :is-completed="completedId >= '1'"
      :is-current="lastId === '1'"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @click="onClick"
    />
    <StepsProgressItem
      id="2"
      :is-completed="completedId >= '2'"
      :is-current="lastId === '2'"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @click="onClick"
    />
    <StepsProgressItem
      id="3"
      :is-completed="completedId >= '3'"
      :is-current="lastId === '3'"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @click="onClick"
    />
  </StepsProgress>
  </mp-box>
</template>

<script>
  import { MpBox } from '@mekari/pixel'
  import StepsProgress from "./components/StepsProgress";
  import StepsProgressItem from "./components/StepsProgressItem";

  export default {
    name: "App",
    components: { MpBox, StepsProgress, StepsProgressItem },
    data: function () {
      return {
        currentId: "2",
        lastId: "2",
        completedId: "2",
      };
    },
    methods: {
      onMouseOver: function (id) {
        this.lastId = this.currentId;
        this.currentId = id;
      },
      onMouseLeave: function () {
        this.currentId = this.lastId;
      },
      onClick: function (id) {
        this.currentId = id;
        this.lastId = id;
        this.completedId = id;
      },
    },
  };
</script>
