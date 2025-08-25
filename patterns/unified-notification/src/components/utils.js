/**
 * Shared utility functions for unified notification
 */

import {
  FacebookMessengerIcon,
  GoogleBusinessIcon,
  InstagramIcon,
  LineIcon,
  MekariQontakIcon,
  ShopeeIcon,
  TelegramIcon,
  TokopediaIcon,
  WhatsappIcon,
  XIcon,
} from './channel-icon'

/**
 * @readonly
 */
export const CATEGORY_MAP = /** @type {const} */ ({
  REMINDER: 'reminder',
  AVATAR: 'avatar',
  CHANNEL_EMAIL: 'channel-email',
  CHANNEL_FACEBOOK: 'channel-facebook',
  CHANNEL_GOOGLE_BUSINESS: 'channel-google-business',
  CHANNEL_INSTAGRAM: 'channel-instagram',
  CHANNEL_LINE: 'channel-line',
  CHANNEL_SHOPEE: 'channel-shopee',
  CHANNEL_TOKOPEDIA: 'channel-tokopedia',
  CHANNEL_WHATSAPP: 'channel-whatsapp',
  CHANNEL_X: 'channel-x',
  CHANNEL_WEB_CHAT: 'channel-web-chat',
  CHANNEL_MOBILE_CHAT: 'channel-mobile-chat',
  CHANNEL_WHATSAPP_GROUP: 'channel-whatsapp-group',
  CHANNEL_BLOCKED_CONTACT: 'channel-blocked-contact',
  ASSIGNMENT_INBOX: 'assignment-inbox',
  ASSIGNMENT_TICKET: 'assignment-ticket',
  ASSIGNMENT_DEALS: 'assignment-deals',
  ASSIGNMENT_TASK: 'assignment-task',
  ASSIGNMENT_CUSTOMER: 'assignment-customer',
  DOWNLOAD_UPLOAD_GENERAL: 'download-upload-general',
  DOWNLOAD_UPLOAD_DEALS: 'download-upload-deals',
  DOWNLOAD_UPLOAD_TICKET: 'download-upload-ticket',
  DOWNLOAD_UPLOAD_REPORT: 'download-upload-report',
  DOWNLOAD_UPLOAD_COMPANY: 'download-upload-company',
  DOWNLOAD_UPLOAD_TASK: 'download-upload-task',
  DOWNLOAD_UPLOAD_PRODUCT: 'download-upload-product',
  DOWNLOAD_UPLOAD_EXPENSE: 'download-upload-expense',
  UPDATE_GENERAL: 'update-general',
  UPDATE_DEALS: 'update-deals',
  UPDATE_TICKET: 'update-ticket',
  UPDATE_COMPANY: 'update-company',
  UPDATE_TASK: 'update-task',
})

/**
 * @typedef {typeof CATEGORY_MAP[keyof typeof CATEGORY_MAP]} NotificationCategory
 */

/**
 * Get the first character of a name in uppercase
 * @param {string} name
 * @returns {string}
 */
export function getInitialName(name) {
  if (!name) {
    return ''
  }
  return name.charAt(0).toUpperCase()
}

/**
 * Get category group from notification category
 * @param {NotificationCategory} category
 * @returns {string}
 */
export function getCategoryGroup(category) {
  if (category === 'avatar') return 'avatar'
  if (category === 'reminder') return 'reminder'
  if (category.startsWith('channel-')) return 'channel'
  if (category.startsWith('assignment-')) return 'assignment'
  if (category.startsWith('download-upload-')) return 'download-upload'
  if (category.startsWith('update-')) return 'update'
  return 'unknown'
}

/**
 * Get the appropriate channel icon component
 * @param {NotificationCategory} category
 * @returns {import('vue').Component | null}
 */
export function getChannelIcon(category) {
  const iconMap = {
    'channel-facebook': FacebookMessengerIcon,
    'channel-google-business': GoogleBusinessIcon,
    'channel-instagram': InstagramIcon,
    'channel-line': LineIcon,
    'channel-shopee': ShopeeIcon,
    'channel-telegram': TelegramIcon,
    'channel-tokopedia': TokopediaIcon,
    'channel-whatsapp': WhatsappIcon,
    'channel-x': XIcon,
    'channel-web-chat': MekariQontakIcon,
  }

  return iconMap[category] || null
}

/**
 * Get special channel icon (for channels that use regular icons instead of components)
 * @param {NotificationCategory} category
 * @returns {string | null}
 */
export function getSpecialChannelIcon(category) {
  const iconMap = {
    'channel-email': 'envelope',
    'channel-mobile-chat': 'mobile',
    'channel-whatsapp-group': 'people',
    'channel-blocked-contact': 'team',
  }

  return iconMap[category] || null
}

/**
 * Get special channel background color
 * @param {NotificationCategory} category
 * @returns {string | null}
 */
export function getSpecialChannelBackground(category) {
  const backgroundMap = {
    'channel-email': 'gray.25',
    'channel-mobile-chat': 'blue.50',
    'channel-whatsapp-group': 'gray.25',
    'channel-blocked-contact': '#FCEEED',
  }

  return backgroundMap[category] || null
}

/**
 * Get special channel icon color
 * @param {NotificationCategory} category
 * @returns {string | null}
 */
export function getSpecialChannelIconColor(category) {
  console.log('getSpecialChannelIconColor: ', category)
  const colorMap = {
    'channel-email': 'violet.400',
    'channel-mobile-chat': 'blue.400',
    'channel-whatsapp-group': 'gray.600',
    'channel-blocked-contact': '#C33E35',
  }

  return colorMap[category] || null
}

/**
 * Get assignment icon name
 * @param {NotificationCategory} category
 * @returns {string | null}
 */
export function getAssignmentIcon(category) {
  const iconMap = {
    'assignment-inbox': 'inbox',
    'assignment-ticket': 'voucher',
    'assignment-deals': 'sales',
    'assignment-task': 'task-todo',
    'assignment-customer': 'team',
  }

  return iconMap[category] || null
}

/**
 * Get download/upload icon name
 * @param {NotificationCategory} category
 * @returns {string | null}
 */
export function getDownloadUploadIcon(category) {
  const iconMap = {
    'download-upload-general': 'info',
    'download-upload-deals': 'sales',
    'download-upload-ticket': 'voucher',
    'download-upload-report': 'reports',
    'download-upload-company': 'company',
    'download-upload-task': 'task-todo',
    'download-upload-product': 'products',
    'download-upload-expense': 'expenses',
  }

  return iconMap[category] || null
}

/**
 * Get update icon name
 * @param {NotificationCategory} category
 * @returns {string | null}
 */
export function getUpdateIcon(category) {
  const iconMap = {
    'update-general': 'info',
    'update-deals': 'sales',
    'update-ticket': 'voucher',
    'update-company': 'company',
    'update-task': 'task-todo',
  }

  return iconMap[category] || null
}

/**
 * Get background color for notification icon
 * @param {NotificationCategory} category
 * @param {string} name - Required for avatar category
 * @returns {string}
 */
export function getNotificationBackground(category, name) {
  if (category === 'avatar') {
    return generateAvatarBackground(name)
  }
  if (category === 'reminder') return 'amber.400'
  if (category.startsWith('assignment')) return 'sky.400'
  if (category.startsWith('download-upload')) return 'teal.400'
  if (category.startsWith('update')) return 'violet.400'

  // Special channel backgrounds
  const specialChannelBg = getSpecialChannelBackground(category)
  if (specialChannelBg) return specialChannelBg

  return 'white'
}

/**
 * Generate avatar background color based on the first character of a name
 * @param {string} name
 * @returns {string}
 */
export function generateAvatarBackground(name) {
  const COLORS = ['sky.400', 'teal.400', 'violet.400', 'amber.400', 'rose.400', 'leaf.400', 'fuchsia.400']

  if (!name || typeof name !== 'string') {
    return COLORS[0]
  }

  const firstChar = name.charAt(0).toUpperCase()
  const charCode = firstChar.charCodeAt(0)
  const colorIndex = (charCode - 65) % COLORS.length
  const safeIndex = colorIndex < 0 ? Math.abs(charCode) % COLORS.length : colorIndex

  return COLORS[safeIndex]
}

/**
 * Group notifications by date
 * @param {Array} notifications
 * @returns {object}
 */
export function groupNotificationsByDate(notifications) {
  const groups = {
    today: [],
    older: [],
  }

  notifications.forEach((notification) => {
    // For demo purposes, we'll simulate date grouping
    if (notification.timestamp === 'Just now' || notification.timestamp.includes('minutes ago') || notification.timestamp.includes('hour ago')) {
      groups.today.push(notification)
    }
    else {
      groups.older.push(notification)
    }
  })

  return groups
}
