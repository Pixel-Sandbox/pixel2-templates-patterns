<template>
  <mp-box :width="['100%', '800px']" position="relative">
    <mp-heading
      as="h3"
      color="dark"
      font-size="lg"
      margin-top="4"
      margin-bottom="3"
    >
      Billing info
    </mp-heading>
    <mp-flex :flex-direction="['column', 'row']" :gap="[0, 5]">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>Billing date</mp-form-label>
          <mp-date-picker
            v-model="billingDate"
            value-type="date"
            format="DD/MM/YYYY"
            placeholder="Select date"
          />
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>
            Due date
            <mp-tooltip
              position="right"
              label="Due date is calculated based on the billing date"
            >
              <mp-icon size="sm" name="info" margin-left="1" />
            </mp-tooltip>
          </mp-form-label>
          <mp-select value="14-days">
            <option value="14-days">14 days</option>
          </mp-select>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex :flex-direction="['column', 'row']" :gap="[0, 5]">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>Duration</mp-form-label>
          <mp-input-group>
            <mp-input type="number" />
            <mp-input-right-addon>
              <mp-text font-weight="bold" padding-x="3">Months</mp-text>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>
            Additional period
            <mp-tooltip
              position="right"
              label="Due date is calculated based on the billing date"
            >
              <mp-icon size="sm" name="info" margin-left="1" />
            </mp-tooltip>
          </mp-form-label>
          <mp-input-group>
            <mp-input type="number" />
            <mp-input-right-addon>
              <mp-box>
                <mp-popover use-portal>
                  <mp-popover-trigger>
                    <mp-flex
                      as="button"
                      padding-x="2"
                      gap="2"
                      align-items="center"
                    >
                      <mp-text font-weight="bold">Months</mp-text>
                      <mp-icon name="chevrons-down" size="sm" />
                    </mp-flex>
                  </mp-popover-trigger>
                  <mp-popover-content
                    width="100px"
                    background-color="white"
                    border-radius="md"
                    border-width="1px"
                    border-color="gray.400"
                    box-shadow="lg"
                  >
                    <mp-popover-list>
                      <mp-popover-list-item is-active>
                        Months
                      </mp-popover-list-item>
                      <mp-popover-list-item>Days</mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-box>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>

    <mp-flex :flex-direction="['column', 'row']" :gap="[0, 5]">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Active date</mp-form-label>
          <mp-date-picker
            v-model="activeDate"
            value-type="date"
            format="DD/MM/YYYY"
            placeholder="Select date"
          />
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>End date</mp-form-label>
          <mp-date-picker
            v-model="endDate"
            value-type="date"
            format="DD/MM/YYYY"
            placeholder="Select date"
          />
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-form-control margin-bottom="5">
      <mp-checkbox> Activate company later </mp-checkbox>
    </mp-form-control>
    <mp-button variant="link" margin-bottom="4">Add promotional code</mp-button>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpFormControl,
  MpFormLabel,
  MpTooltip,
  MpIcon,
  MpCheckbox,
  MpButton,
  MpSelect,
  MpDatePicker,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "CreateSubscriptionSecB",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpFormControl,
    MpFormLabel,
    MpTooltip,
    MpIcon,
    MpInput,
    MpSelect,
    MpDatePicker,
    MpCheckbox,
    MpButton,
    MpInputGroup,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data: function () {
    return {
      billingDate: "",
      activeDate: "",
      endDate: "",
    };
  },
};
</script>