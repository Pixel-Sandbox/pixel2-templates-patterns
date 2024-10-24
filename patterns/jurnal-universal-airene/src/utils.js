import {
  parseISO,
  isToday,
  isThisWeek,
  isSameMonth,
  subMonths,
  format,
} from "date-fns";

export function groupChatsByDate(chats) {
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
  return convertToGroupArray(groupBy(filteredDatas, "groupName"));
}

// Assuming these functions are already in your utils file
// If not, you'll need to add them:
export function groupBy(array, key) {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
}

export function convertToGroupArray(groupedObject) {
  return Object.entries(groupedObject).map(([groupName, datas]) => ({
    groupName,
    datas,
  }));
}
