<template>
  <mp-box>
    <mp-heading as="h2" color="dark" font-size="xl" margin-bottom="2">
      General information
    </mp-heading>
    <mp-flex flex-direction="column">
      <mp-form-control margin-bottom="5" is-required>
        <mp-form-label>Compensation rule name</mp-form-label>
        <mp-input />
      </mp-form-control>
    </mp-flex>
    <mp-flex flex-direction="row" gap="5">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5" is-required>
          <mp-form-label>Overtime conversion</mp-form-label>
          <mp-input-group>
            <mp-input />
            <mp-input-right-addon>
              <mp-text font-weight="bold" padding-x="3">Hour(s)</mp-text>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-input-group>
            <mp-input />
            <mp-input-right-addon>
              <mp-text font-weight="bold" padding-x="3">Minute(s)</mp-text>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column">
      <mp-form-control margin-bottom="5">
        <mp-form-label>Convert overtime to</mp-form-label>
        <mp-radio-group spacing="10" is-inline>
          <mp-radio>1 day off</mp-radio>
          <mp-radio>0.5 day off</mp-radio>
        </mp-radio-group>
      </mp-form-control>
    </mp-flex>
    <mp-flex flex-direction="column" width="50%" padding-right="2.5">
      <mp-form-control margin-bottom="5">
        <mp-form-label>
          Overtime expired after
          <mp-tooltip position="right" label="Overtime balance will expire on">
            <mp-icon name="info" margin-left="1" />
          </mp-tooltip>
        </mp-form-label>
        <mp-select value="no-expiration" v-model="overtimeExpiredAfter">
          <option value="no-expiration">No expiration</option>
          <option value="date">Date</option>
          <option value="month">Month</option>
          <option value="expired-immediatly">Expired immediatly</option>
        </mp-select>
      </mp-form-control>
    </mp-flex>
    <mp-flex
      v-if="overtimeExpiredAfter === 'date'"
      flex-direction="row"
      gap="5"
    >
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label> Month </mp-form-label>
          <mp-select value="1">
            <option value="1">Janaury</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </mp-select>
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label> Date </mp-form-label>
          <mp-select value="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </mp-select>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex
      v-if="overtimeExpiredAfter === 'month'"
      flex-direction="row"
      width="50%"
      padding-right="2.5"
    >
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Total month</mp-form-label>
          <mp-input-group>
            <mp-input />
            <mp-input-right-addon>
              <mp-text font-weight="bold" padding-x="3">Month(s)</mp-text>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex
      v-if="overtimeExpiredAfter === 'expired-immediatly'"
      flex-direction="row"
      gap="5"
    >
      <mp-flex flex-direction="column">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Expired date on</mp-form-label>
          <mp-radio-group spacing="10" is-inline>
            <mp-radio>Approved date</mp-radio>
            <mp-radio>Requested date</mp-radio>
          </mp-radio-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column" width="50%" padding-right="2.5">
      <mp-form-control margin-bottom="5">
        <mp-form-label>
          Time off expired after
          <mp-tooltip
            position="right"
            label="Converted time off (day) will expire after"
          >
            <mp-icon name="info" margin-left="1" />
          </mp-tooltip>
        </mp-form-label>
        <mp-select value="no-expiration" v-model="timeOffExpiredAfter">
          <option value="no-expiration">No expiration</option>
          <option value="date">Date</option>
          <option value="month">Month</option>
          <option value="day">Day</option>
        </mp-select>
      </mp-form-control>
    </mp-flex>
    <mp-flex v-if="timeOffExpiredAfter === 'date'" flex-direction="row" gap="5">
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label> Month </mp-form-label>
          <mp-select value="1">
            <option value="1">Janaury</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </mp-select>
        </mp-form-control>
      </mp-flex>
      <mp-flex flex-direction="column" justify-content="flex-end" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label> Date </mp-form-label>
          <mp-select value="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </mp-select>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex
      v-if="timeOffExpiredAfter === 'month'"
      flex-direction="row"
      width="50%"
      padding-right="2.5"
    >
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Total month</mp-form-label>
          <mp-input-group>
            <mp-input />
            <mp-input-right-addon>
              <mp-text font-weight="bold" padding-x="3">Month(s)</mp-text>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
    <mp-flex
      v-if="timeOffExpiredAfter === 'day'"
      flex-direction="row"
      width="50%"
      padding-right="2.5"
    >
      <mp-flex flex-direction="column" flex="1 0 0">
        <mp-form-control margin-bottom="5">
          <mp-form-label>Total day</mp-form-label>
          <mp-input-group>
            <mp-input />
            <mp-input-right-addon>
              <mp-text font-weight="bold" padding-x="3">Day(s)</mp-text>
            </mp-input-right-addon>
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>
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
  MpRadioGroup,
  MpRadio,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
} from "@mekari/pixel";

export default {
  name: "FormWithVuelidateView",
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
    MpRadioGroup,
    MpRadio,
    MpInputGroup,
    MpInputRightAddon,
  },
  data: function () {
    return {
      overtimeExpiredAfter: "no-expiration",
      timeOffExpiredAfter: "no-expiration",
    };
  },
};
</script>