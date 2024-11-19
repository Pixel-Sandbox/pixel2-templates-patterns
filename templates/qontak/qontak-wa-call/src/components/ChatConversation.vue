<template>
  <mp-flex direction="column" gap="4" p="4" pb="10">
    <mp-flex position="relative" direction="column" justify="center" align-items="center" mb="4">
      <mp-text font-size="sm" font-weight="semibold" color="gray.600" background="#F1F5F9" px="2" z-index="1">
        Today
      </mp-text>
      <mp-box width="full" height="1px" background="gray.100" position="absolute" />
    </mp-flex>

    <mp-flex gap="2">
      <mp-avatar name="eka" background-color="stone" />
      <mp-flex direction="column" gap="1">
        <mp-text>Eka Setiawan</mp-text>
        <mp-flex direction="column" width="fit-content" bg="white" p="4" gap="1" rounded="lg" border-top-left-radius="0">
          <mp-text>Halo.</mp-text>
          <mp-text color="gray.400" font-size="sm" text-align="right">11:53</mp-text>
        </mp-flex>
      </mp-flex>
    </mp-flex>

    <mp-text font-size="sm" text-align="center">11:53 - <b>Fajar Nugraha</b> has been assigned to this conversation by
      <b>Christin Purnama Sari</b></mp-text>

    <mp-flex gap="2" justify-content="flex-end">
      <mp-flex direction="column" gap="1">
        <mp-text text-align="right">Fajar Nugraha</mp-text>
        <mp-flex direction="column" width="fit-content" bg="ice.50" p="4" gap="1" rounded="lg" border-top-right-radius="0">
          <mp-text>Selamat pagi kak Eka, Saya Fajar yang akan membantu anda.</mp-text>
          <mp-flex gap="1" align-self="flex-end">
            <mp-text color="gray.400" font-size="sm" text-align="right">11:53</mp-text>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8.66667L4.33333 12L11.6667 4" stroke="#3B82F6" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M7.43752 12L7.01983 12.4307C7.13502 12.5424 7.29015 12.6033 7.45056 12.5999C7.61098 12.5964 7.76331 12.5288 7.87354 12.4122L7.43752 12ZM15.436 4.41217C15.6637 4.17137 15.653 3.79162 15.4122 3.56398C15.1714 3.33634 14.7916 3.34702 14.564 3.58783L15.436 4.41217ZM7.25051 10.9829L6.81977 10.5652L5.9844 11.4267L6.41514 11.8444L7.25051 10.9829ZM7.87354 12.4122L15.436 4.41217L14.564 3.58783L7.0015 11.5878L7.87354 12.4122ZM6.41514 11.8444L7.01983 12.4307L7.8552 11.5693L7.25051 10.9829L6.41514 11.8444Z"
                fill="#3B82F6" />
            </svg>
          </mp-flex>
        </mp-flex>
      </mp-flex>
      <mp-avatar name="fajar" background-color="stone" />
    </mp-flex>

    <mp-flex gap="2">
      <mp-avatar name="eka" background-color="stone" />
      <mp-flex direction="column" gap="1">
        <mp-text>Eka Setiawan</mp-text>
        <mp-flex direction="column" width="fit-content" bg="white" p="4" gap="1" rounded="lg" border-top-left-radius="0">
          <mp-text>Mesin kopi saya tidak mau nyala</mp-text>
          <mp-text color="gray.400" font-size="sm" text-align="right">11:54</mp-text>
        </mp-flex>
        <mp-flex direction="column" width="fit-content" bg="white" p="4" gap="1" rounded="lg" border-top-left-radius="0">
          <mp-text>Indicator powernya berkedip merah</mp-text>
          <mp-text color="gray.400" font-size="sm" text-align="right">11:55</mp-text>
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpAvatar,
} from "@mekari/pixel";

export default {
  name: "ChatConversation",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpAvatar,
  },
};
</script>
