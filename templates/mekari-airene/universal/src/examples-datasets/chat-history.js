/**
 * @typedef {Object} ChatItem
 * @property {string} id - Unique identifier for the chat item
 * @property {string} name - Name or title of the chat item
 */

/**
 * @typedef {Object} ChatGroup
 * @property {string} groupName - Name of the chat group
 * @property {ChatItem[]} datas - Array of chat items in the group
 */

/**
 * Array of chat groups representing the chat history
 * @type {ChatGroup[]}
 */
export const CHAT_HISTORY = [
  {
    groupName: "Hari ini",
    datas: [{ id: "a1b2c3d4", name: "Percakapan baru" }],
  },
  {
    groupName: "Minggu ini",
    datas: [
      { id: "e5f6g7h8", name: "Stok yang harus segera dibeli" },
      { id: "i9j0k1l2", name: "Saran proyeksi pembelian produk" },
    ],
  },
  {
    groupName: "30 hari terakhir",
    datas: [
      {
        id: "m3n4o5p6",
        name: "Pembelian yang harus segera dilunasi",
      },
      {
        id: "q7r8s9t0",
        name: "Bagaimana performa penjualan bulan ini dibandingkan bulan lalu?",
      },
      {
        id: "u1v2w3x4",
        name: "Produk apa yang paling laris saat ini?",
      },
      {
        id: "y5z6a7b8",
        name: "Apakah ada produk yang penjualannya menurun drastis?",
      },
      {
        id: "c9d0e1f2",
        name: "Siapa pelanggan terbesar bulan ini?",
      },
      {
        id: "g3h4i5j6",
        name: "Berapa rata-rata nilai transaksi penjualan?",
      },
      {
        id: "k7l8m9n0",
        name: "Apakah ada faktur penjualan yang belum lunas?",
      },
    ],
  },
];
