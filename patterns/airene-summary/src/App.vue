<template>
  <mp-box margin="10">
    <mp-box bg="lightPurple" rounded="md" w="684px" p="3">
      <mp-flex justify="space-between">
        <mp-flex gap="2" align="center">
          <mp-icon name="airene-brand" />
          <mp-box>
            <mp-heading as="h3" font-size="lg">
              Coffee bean summary by AI
            </mp-heading>
             <mp-text font-size="sm" color="gray.600">
              Generated on 20 Jan 24 19:00
            </mp-text>
          </mp-box>
        </mp-flex>
        <mp-flex gap="1" align="center">
          <mp-button-icon name="help" />
          <mp-button-icon :name="isOpen ? 'chevrons-down' : 'chevrons-right'" @click="onToggle" />
        </mp-flex>
      </mp-flex>

      <mp-collapse :isOpen="isOpen" mt="3">
        <mp-text>
          Coffee beans are the seeds of the Coffea plant, primarily grown in tropical regions. They come in two main varieties: Arabica and Robusta, each with distinct flavors and caffeine levels. After harvesting, the beans undergo processing and roasting to develop their aroma and flavor, which vary by origin and roast style. The beans are then ground and brewed, creating coffee—a widely consumed beverage known for its rich taste and energizing effects.
        </mp-text>
      </mp-collapse>
    </mp-box>
    <mp-flex justify="space-between" w="684px" mt="3">
      <mp-flex gap="4" align="center">
        <mp-popover use-portal close-on-select>
          <mp-popover-trigger>
            <mp-input-group w="106px">
              <mp-input-left-addon :with-background="false">
                <mp-text font-weight="bold">{{lang === 'ID' ? '🇮🇩' : '🇬🇧'}}</mp-text>
              </mp-input-left-addon>
              <mp-input v-model="lang" is-read-only :_hover="{ cursor: 'pointer' }" />
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" />
              </mp-input-right-addon>
            </mp-input-group>
          </mp-popover-trigger>
          <mp-popover-content 
            background-color="white"
            border-radius="md"
            border-width="1px"
            border-color="gray.400"
            box-shadow="lg"
            max-width="106px"
          >
            <mp-popover-list>
              <mp-popover-list-item :is-active="lang === 'ID'" @click="onChangeLang('ID')">🇮🇩 ID</mp-popover-list-item>
              <mp-popover-list-item :is-active="lang === 'EN'" @click="onChangeLang('EN')">🇬🇧 EN</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
        <mp-button-icon name="copy" />
        <mp-button-icon name="refresh" />
        <mp-button-icon name="download" />
      </mp-flex>
      <mp-flex gap="1" align="center">
        <mp-text font-size="sm" color="gray.600">
          Is this summary helpful so far?
        </mp-text>
        <mp-button-icon name="like" />
        <mp-button-icon name="dislike" />
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
  import { 
    MpBox,
    MpFlex,
    MpIcon,
    MpHeading,
    MpButtonIcon,
    MpText,
    MpCollapse,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon
  } from "@mekari/pixel";

  export default {
    name: "App",
    components: {
      MpBox,
      MpFlex,
      MpIcon,
      MpHeading,
      MpButtonIcon,
      MpText,
      MpCollapse,
      MpPopover,
      MpPopoverTrigger,
      MpPopoverContent,
      MpPopoverList,
      MpPopoverListItem,
      MpInput,
      MpInputGroup,
      MpInputLeftAddon,
      MpInputRightAddon
    },
    data() {
      return {
        lang: 'ID',
        isOpen: true
      }
    },
    methods: {
      onToggle() {
        this.isOpen = !this.isOpen
      },
      onChangeLang(newLang) {
        this.lang = newLang
      }
    }
  };
</script>
