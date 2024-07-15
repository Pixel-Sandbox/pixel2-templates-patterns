<template>
  <mp-modal size="full" :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>
        <mp-flex justify="space-between" margin-right="36px">
          <mp-flex gap="2" align="center">
            <mp-heading as="h1" font-size="2xl">
              Transport claim - {{ data[activePage].name }}
            </mp-heading>
            <mp-badge
              v-if="data[activePage].status === 'Awaiting approval'"
              variant="solid"
              variant-color="orange"
            >
              Awaiting approval
            </mp-badge>
            <mp-badge
              v-if="data[activePage].status === 'Approved'"
              variant="solid"
              variant-color="green"
            >
              Approved
            </mp-badge>
            <mp-badge
              v-if="data[activePage].status === 'Rejected'"
              variant="solid"
              variant-color="red"
            >
              Rejected
            </mp-badge>
          </mp-flex>
          <mp-flex gap="2">
            <mp-button-icon
              name="chevrons-left"
              :is-disabled="activePage <= 0"
              v-mp-tooltip="'Previous request'"
              @click="
                () => {
                  activePage -= 1;
                  activeItem = 0;
                }
              "
            />
            <mp-button-icon
              name="chevrons-right"
              :is-disabled="activePage >= data.length - 1"
              v-mp-tooltip="'Next request'"
              @click="
                () => {
                  activePage += 1;
                  activeItem = 0;
                }
              "
            />
          </mp-flex>
        </mp-flex>
        <mp-modal-close-button top="12px!important" />
      </mp-modal-header>
      <mp-modal-body padding-x="6" padding-y="8">
        <mp-flex gap="6">
          <mp-flex
            direction="column"
            w="920px"
            h="calc(100vh - 202px)"
            bg="gray.25"
            border="1px solid"
            border-color="gray.100"
            border-radius="md"
          >
            <mp-box
              padding-x="4"
              padding-y="2"
              border-bottom="1px solid"
              border-color="gray.100"
            >
              <mp-flex justify="space-between" align="center">
                <mp-flex flex="1 0 0" justify="center">
                  <mp-text color="gray.600"
                    >{{ activeItem + 1 }} of
                    {{ data[activePage].attachments.length }}</mp-text
                  >
                </mp-flex>
                <mp-flex flex="1 0 1" justify="flex-end">
                  <mp-popover placement="top-end">
                    <mp-popover-trigger>
                      <mp-button-icon name="download" />
                    </mp-popover-trigger>
                    <mp-popover-content
                      max-width="214px"
                      bg="white"
                      rounded="md"
                      shadow="lg"
                      border="1px solid"
                      border-color="gray.400"
                    >
                      <mp-popover-list display="grid">
                        <mp-popover-list-item>
                          Download this attachment
                        </mp-popover-list-item>
                        <mp-popover-list-item>
                          Download all attachment
                        </mp-popover-list-item>
                      </mp-popover-list>
                    </mp-popover-content>
                  </mp-popover>
                </mp-flex>
              </mp-flex>
            </mp-box>
            <mp-carousel
              width="full"
              height="calc(100vh - 251px)"
              :is-auto-play="false"
              :is-show-indicator="false"
              indicator-active-color="dark"
              :is-show-button-nav="true"
              :is-loop="false"
              :active="activeItem"
              bg="gray.25"
              border-radius="md"
              border="none"
              @change="handleChange"
              :key="activePage"
            >
              <mp-carousel-item
                v-for="(attachment, index) in data[activePage].attachments"
                :key="`${index}-${activePage}`"
                width="full"
                height="calc(100vh - 251px)"
                bg="gray.25"
              >
                <mp-flex justify="center" align="center" height="inherit">
                  <img v-if="attachment !== ''" :src="attachment" />
                  <mp-flex
                    v-else
                    z-index="skipLink"
                    bg="gray.25"
                    justify="center"
                    align="center"
                    width="300px"
                    height="calc(100vh - 251px)"
                    flex-direction="column"
                  >
                    <mp-icon name="img-break" size="xl" />
                    <mp-text
                      z-index="skipLink"
                      color="dark"
                      font-weight="semibold"
                      mt="4"
                      text-align="center"
                    >
                      Attachment file is currently unavailable or unsupported.
                      Please download to see attachment.
                    </mp-text>
                  </mp-flex>
                </mp-flex>
              </mp-carousel-item>
            </mp-carousel>
          </mp-flex>
          <mp-flex direction="column" flex="auto">
            <mp-heading as="h2" font-size="xl" mb="5">
              Request information
            </mp-heading>

            <mp-flex align="center" mb="5">
              <mp-avatar
                :name="data[activePage].name"
                size="md"
                background-color="gray"
              />
              <mp-box ml="4">
                <mp-heading as="h3" font-size="lg">
                  {{ data[activePage].name }}
                </mp-heading>
                <mp-text font-size="sm" color="gray.600">
                  CP078 | Cashier | Front of House
                </mp-text>
              </mp-box>
            </mp-flex>

            <mp-flex gap="4" direction="column">
              <mp-flex gap="2" align="center">
                <mp-icon name="company" size="sm" />
                <mp-text color="gray.600">Kantor Pusat</mp-text>
              </mp-flex>
              <mp-flex gap="2" align="center">
                <mp-icon name="envelope" size="sm" />
                <mp-text is-link>{{ data[activePage].email }}</mp-text>
              </mp-flex>
              <mp-flex gap="2" align="center">
                <mp-icon name="phone" size="sm" />
                <mp-text is-link>+6287899999999</mp-text>
              </mp-flex>
            </mp-flex>

            <mp-divider margin-y="5" />

            <mp-box>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600"> Transaction ID </mp-text>
                </template>
                <template #right-side>
                  <mp-flex align="center">
                    <mp-text> 202305001 </mp-text>
                    <input id="copy-clipboard" value="202305001" hidden />
                    <mp-button-icon
                      name="copy"
                      ml="2"
                      @click="handleCopyToClipboard"
                    />
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600"> Request date </mp-text>
                </template>
                <template #right-side>
                  <mp-text> 20 Sep 2023 </mp-text>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600"> Reimbursement name </mp-text>
                </template>
                <template #right-side>
                  <mp-text> Transport claim </mp-text>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600"> Total request amount </mp-text>
                </template>
                <template #right-side>
                  <mp-box>
                    <mp-text> Rp330.000 </mp-text>
                    <mp-text color="gray.600" font-size="sm">
                      Total paid amount: Rp320.000
                    </mp-text>
                  </mp-box>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600"> Description </mp-text>
                </template>
                <template #right-side>
                  <mp-text>Reimbursement for business trip to Jogja </mp-text>
                </template>
              </DescriptionList>
            </mp-box>
          </mp-flex>
        </mp-flex>
      </mp-modal-body>
      <mp-modal-footer
        as="footer"
        display="flex"
        :padding-y="5"
        :padding-x="6"
        border-top="1px solid"
        border-color="gray.100"
        justifyContent="flex-end"
        data-pixel-component="MpModalFooter"
      >
        <mp-button variant="ghost" margin-right="3">Reject</mp-button>
        <mp-button>Approve</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpIcon,
  MpBadge,
  MpAvatar,
  MpButton,
  MpDivider,
  MpButtonIcon,
  MpHeading,
  MpCarousel,
  MpCarouselItem,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import DescriptionList from "../components/DescriptionList.vue";

export default {
  name: "FullPageModalPreview",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpIcon,
    MpAvatar,
    MpBadge,
    MpButton,
    MpDivider,
    MpButtonIcon,
    MpHeading,
    MpCarousel,
    MpCarouselItem,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    DescriptionList,
  },
  props: {
    isOpen: [Boolean],
    handleOpen: [Function],
    handleClose: [Function],
  },
  data() {
    return {
      activeItem: 0,
      activePage: 0,
      data: [
        {
          name: "Joko",
          status: "Awaiting approval",
          email: "joko@centralperk.co.id",
          attachments: [
            "https://uhdwallpapers.org/uploads/converted/18/10/08/dreaming-summer-image-1920x1080_48774-mm-90.webp",
            "https://via.placeholder.com/400x546/D0D6DD/FFFFFF",
            "https://via.placeholder.com/400x546/D0D6DD/FFFFFF",
          ],
        },
        {
          name: "Richard",
          status: "Approved",
          email: "richard@centralperk.co.id",
          attachments: [
            "https://via.placeholder.com/400x546/D0D6DD/FFFFFF",
            "https://via.placeholder.com/400x546/D0D6DD/FFFFFF",
          ],
        },
        {
          name: "Nathan",
          status: "Rejected",
          email: "nathan@centralperk.co.id",
          attachments: [""],
        },
      ],
    };
  },
  methods: {
    handleChange(index) {
      this.activeItem = index;
    },
    handleCopyToClipboard() {
      const copyText = document.getElementById("copy-clipboard");

      console.log(copyText);

      copyText.select();
      copyText.setSelectionRange(0, 99999);
      if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(copyText.value);
      } else {
        document.execCommand("copy");
      }

      this.$toast({
        variant: "success",
        title: "Copied to clipboard successfully!",
        position: "bottom",
      });
    },
  },
};
</script>
