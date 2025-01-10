import {
  parseISO,
  isToday,
  isThisWeek,
  isSameMonth,
  subMonths,
  format,
} from "date-fns";

/**
 * Groups chat items by date categories.
 * @param {Array} chats - Array of chat objects with created_at property.
 * @param {string} [groupKey="groupName"] - The property to group by, defaults to "groupName".
 * @returns {Array} An array of grouped chat objects, where each group contains a groupName and an array of chat items.
 * @description This function categorizes chats into groups based on their creation date:
 * - Today
 * - This Week
 * - This Month
 * - Last Month (by name)
 * - Two Months Ago (by name)
 * Chats older than two months are excluded from the grouping.
 */
export function groupChatsByDate(chats, groupKey = "groupName") {
  const today = new Date();
  const lastMonth = subMonths(today, 1);
  const twoMonthsAgo = subMonths(today, 2);

  console.log("1. chats", chats);

  const rawDatas = chats.map((item) => {
    const date = parseISO(item.created_at);

    let groupName;
    if (isToday(date)) {
      groupName = "Today";
    } else if (isThisWeek(date, { weekStartsOn: 1 })) {
      groupName = "This Week";
    } else if (isSameMonth(date, today)) {
      groupName = "This Month";
    } else if (isSameMonth(date, lastMonth)) {
      groupName = format(lastMonth, "MMMM");
    } else if (isSameMonth(date, twoMonthsAgo)) {
      groupName = format(twoMonthsAgo, "MMMM");
    } else {
      groupName = null; // Set groupName to null for older items
    }

    return {
      ...item,
      groupName,
    };
  });

  console.log("2. rawDatas", rawDatas);

  const filteredDatas = rawDatas.filter((v) => v.groupName);
  console.log("3. filteredDatas", filteredDatas);
  return convertToGroupArray(groupBy(filteredDatas, groupKey));
}

/**
 * Groups an array of objects by a specified key.
 * @param {Array} array - The array to group.
 * @param {string} key - The key to group by.
 * @returns {Object} An object with keys as group names and values as arrays of grouped items.
 */
export function groupBy(array, key) {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
}

/**
 * Converts a grouped object into an array of group objects.
 * @param {Object} groupedObject - The object with grouped data.
 * @returns {Array} An array of objects, each containing a groupName and its corresponding data.
 */
export function convertToGroupArray(groupedObject) {
  return Object.entries(groupedObject).map(([groupName, datas]) => ({
    groupName,
    datas,
  }));
}

/**
 * Generates a date relative to current date
 * @param {number} daysOffset - Number of days to subtract from current date (negative for past)
 * @returns {string} ISO date string
 */
export const generateRelativeDate = (daysOffset) => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date.toISOString();
};
