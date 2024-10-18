/**
 * @typedef {Object} TableVisualizationData
 * @property {string[]} headers - Column headers for the table
 * @property {Array<Array<string>>} rows - Rows of data for the table
 */

/**
 * @typedef {Object} ChartVisualizationData
 * @property {string[]} labels - Labels for the chart
 * @property {Array<{label: string, data: number[]}>} datasets - Datasets for the chart
 * @property {string} xLabel - Label for the x-axis
 * @property {string} yLabel - Label for the y-axis
 */

/**
 * @typedef {Object} DataSource
 * @property {string} name - Name of the data source
 * @property {string} url - URL of the data source
 *
 * @typedef {Object} ChatResult
 * @property {number} id - Unique identifier for the chat result
 * @property {boolean} isShowFullScreen - If true answer will be shown in full screen
 * @property {('answer' | 'question')} type - Type of the chat result
 * @property {string} textQuestion - The text content of the question (only for type 'question')
 * @property {string} textAnswer - The text content of the answer (only for type 'answer')
 * @property {boolean} isShowDataVisualization - If true will show data visualization
 * @property {('bar' | 'line' | 'pie' | 'table' | '')} dataVisualizationType - The type of data visualization
 * @property {TableVisualizationData} tableVisualizationData - Data for table visualization
 * @property {ChartVisualizationData} chartVisualizationData - Data for chart visualization
 * @property {boolean} isShowButtonSuggestion - If true will show button suggestion
 * @property {string[]} buttonSuggestionDatas - Data for button suggestion
 * @property {boolean} isShowAction - If true will show action sets
 * @property {'copy-text' | 'export-answer' | 'open-url'} actionType - Type of action
 * @property {string} actionUrl - Url for actionType = open-url
 * @property {string} actionLabel - Label for actionType = open-url
 * @property {DataSource[]} dataSources - Array of data sources
 * @property {boolean} isShowFollowupQuestions - If true will show follow-up questions
 * @property {string[]} followupQuestionsDatas - Array of follow-up questions
 */

export function genRandomId(length = 4, specials = "") {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + specials;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * @type {ChatResult[]}
 */
export const EXAMPLE_CHAT_RESULT = [
  {
    id: genRandomId(),
    type: "question",
    textQuestion: "Saya mau nanya",
  },
  {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan analisis penjualan terkini, iPhone masih memimpin pasar dengan total transaksi mencapai 20 juta. Samsung mengikuti di posisi kedua dengan 15 juta transaksi. Vivo, Oppo, dan Realme melengkapi lima besar dengan masing-masing mencatatkan 10 juta, 8 juta, dan 7 juta transaksi. Tren ini menunjukkan dominasi merek-merek smartphone terkemuka di pasar, dengan persaingan ketat di segmen menengah. Penting untuk memperhatikan pergerakan merek-merek seperti Xiaomi dan Huawei yang terus menunjukkan pertumbuhan signifikan.",
    isShowDataVisualization: true,
    dataVisualizationType: "bar",
    tableVisualizationData: {},
    chartVisualizationData: {
      labels: [
        "iPhone",
        "Samsung",
        "Vivo",
        "Oppo",
        "Realme",
        "Xiaomi",
        "Huawei",
        "OnePlus",
        "Google",
        "Sony",
        "LG",
        "Motorola",
        "Nokia",
        "HTC",
        "Asus",
        "Lenovo",
        "BlackBerry",
        "ZTE",
        "Alcatel",
        "Meizu",
      ],
      datasets: [
        {
          label: "Produk",
          data: [
            20000000, 15000000, 10000000, 8000000, 7000000, 6000000, 5500000,
            5000000, 4500000, 4000000, 3500000, 3000000, 2500000, 2000000,
            1800000, 1600000, 1400000, 1200000, 1000000, 800000,
          ],
        },
      ],
      xLabel: "Nama Produk",
      yLabel: "Nominal Transaksi",
    },
    isShowAction: true,
    actionType: "export-answer",
    isShowDataSource: true,
    dataSources: [
      {
        name: "Laporan penjualan September 2024",
        url: "https://my.jurnal.id/",
      },
      { name: "Analisis margin produk Q3 2024", url: "https://my.jurnal.id/" },
      { name: "Tren penjualan iPhone 2022-2024", url: "https://my.jurnal.id/" },
      { name: "Laporan inventaris terkini", url: "https://my.jurnal.id/" },
      {
        name: "Survei kepuasan pelanggan Agustus 2024",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Analisis kompetitor pasar smartphone 2024",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Laporan kinerja penjualan online vs offline",
        url: "https://my.jurnal.id/",
      },
      { name: "Proyeksi penjualan Q4 2024", url: "https://my.jurnal.id/" },
      {
        name: "Analisis efektivitas kampanye marketing 2024",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Laporan performa produk baru 2024",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Laporan tren teknologi dan preferensi konsumen 2024",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Analisis dampak inflasi terhadap penjualan elektronik",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Studi komparatif harga produk dengan kompetitor",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Laporan efisiensi rantai pasokan Q3 2024",
        url: "https://my.jurnal.id/",
      },
      {
        name: "Analisis pola pembelian pelanggan berulang",
        url: "https://my.jurnal.id/",
      },
    ],
    isShowFollowupQuestions: true,
    followupQuestionsDatas: [
      "Analisis margin keuntungan per produk untuk memastikan promosi tetap menguntungkan",
      "Identifikasi produk potensial untuk bundling dengan iPhone 13",
      "Evaluasi efektivitas strategi pemasaran untuk produk Apple terbaru",
      "Analisis tren penjualan aksesori Apple dalam 6 bulan terakhir",
    ],
  },
  {
    id: genRandomId(),
    type: "question",
    textQuestion: "Saya mau nanya lagi",
  },
  {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan analisis penjualan terkini, kami melihat peningkatan signifikan dalam penjualan produk elektronik premium. iPhone 14 Pro Max menjadi produk terlaris dengan margin keuntungan tertinggi. Namun, stok terbatas menjadi tantangan utama. Rekomendasi: tingkatkan persediaan iPhone 14 Pro Max dan pertimbangkan promosi bundling dengan aksesori untuk meningkatkan nilai transaksi rata-rata. Juga, perhatikan potensi MacBook Pro yang memiliki nilai transaksi tinggi namun penjualan lebih rendah - mungkin perlu strategi pemasaran yang lebih agresif.",
    isShowDataVisualization: true,
    dataVisualizationType: "table",
    tableVisualizationData: {
      headers: [
        "Nama",
        "Qty terjual",
        "Nominal",
        "Kategori",
        "Stok",
        "Harga Satuan",
        "Margin",
        "Rating",
      ],
      rows: [
        [
          "iPhone 14 Pro Max",
          "8 unit",
          "Rp90.000.000",
          "Smartphone",
          "15",
          "Rp11.250.000",
          "20%",
          "4.8",
        ],
        [
          "iPhone 14 Pro",
          "12 unit",
          "Rp120.000.000",
          "Smartphone",
          "20",
          "Rp10.000.000",
          "18%",
          "4.7",
        ],
        [
          "iPhone 13",
          "15 unit",
          "Rp105.000.000",
          "Smartphone",
          "25",
          "Rp7.000.000",
          "15%",
          "4.6",
        ],
        [
          'MacBook Pro 16"',
          "5 unit",
          "Rp150.000.000",
          "Laptop",
          "10",
          "Rp30.000.000",
          "25%",
          "4.9",
        ],
        [
          "MacBook Air M2",
          "10 unit",
          "Rp180.000.000",
          "Laptop",
          "18",
          "Rp18.000.000",
          "22%",
          "4.8",
        ],
        [
          'iPad Pro 12.9"',
          "7 unit",
          "Rp98.000.000",
          "Tablet",
          "12",
          "Rp14.000.000",
          "19%",
          "4.7",
        ],
        [
          "iPad Air",
          "9 unit",
          "Rp72.000.000",
          "Tablet",
          "15",
          "Rp8.000.000",
          "17%",
          "4.6",
        ],
        [
          "Apple Watch Series 8",
          "20 unit",
          "Rp80.000.000",
          "Wearable",
          "30",
          "Rp4.000.000",
          "21%",
          "4.5",
        ],
      ],
    },
  },
  {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan data penjualan yang ditampilkan dalam grafik garis, terlihat adanya tren peningkatan penjualan yang konsisten sepanjang tahun. Penjualan dimulai dari sekitar 12.000 unit pada bulan Januari dan terus meningkat hingga mencapai puncaknya di bulan Desember dengan 40.000 unit. Peningkatan ini menunjukkan pertumbuhan yang stabil dan positif dalam kinerja penjualan perusahaan. Beberapa faktor yang mungkin berkontribusi terhadap tren ini termasuk strategi pemasaran yang efektif, peluncuran produk baru, atau peningkatan permintaan pasar secara umum. Untuk analisis lebih lanjut, disarankan untuk membandingkan data ini dengan periode tahun sebelumnya dan mengidentifikasi faktor-faktor spesifik yang mendorong pertumbuhan di setiap bulan.",
    isShowDataVisualization: true,
    dataVisualizationType: "line",
    chartVisualizationData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Penjualan",
          data: [
            12000, 15000, 18000, 20000, 22000, 25000, 28000, 30000, 32000,
            35000, 38000, 40000,
          ],
        },
      ],
    },
  },
  {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan data penjualan yang ditampilkan dalam grafik garis, terlihat adanya tren peningkatan penjualan yang konsisten sepanjang tahun. Penjualan dimulai dari sekitar 12.000 unit pada bulan Januari dan terus meningkat hingga mencapai puncaknya di bulan Desember dengan 40.000 unit. Peningkatan ini menunjukkan pertumbuhan yang stabil dan positif dalam kinerja penjualan perusahaan. Beberapa faktor yang mungkin berkontribusi terhadap tren ini termasuk strategi pemasaran yang efektif, peluncuran produk baru, atau peningkatan permintaan pasar secara umum. Untuk analisis lebih lanjut, disarankan untuk membandingkan data ini dengan periode tahun sebelumnya dan mengidentifikasi faktor-faktor spesifik yang mendorong pertumbuhan di setiap bulan.",
    isShowDataVisualization: true,
    dataVisualizationType: "pie",
    chartVisualizationData: {
      xLabel: "Produk",
      yLabel: "Nominal",
      labels: [
        "Apple iPhone 14 Pro Max (2022, 6GB RAM, 1TB Storage)",
        "Apple MacBook Air M2",
        "Apple iPad Pro 12.9-inch",
        "Apple Watch Series 8",
        "Apple AirPods Pro 2nd Generation",
      ],
      datasets: [
        {
          label: "Penjualan",
          data: [24500000, 18500000, 16900000, 6150000, 3850000],
        },
      ],
    },
  },
];

/**
 * @typedef {Object.<string, ChatResult>} FakeChatResult
 */

/**
 * @type {FakeChatResult}
 */
export const FAKE_CHAT_RESULT = {
  TEXT: {
    id: genRandomId(),
    type: "answer",
    textAnswer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  LIST: {
    id: genRandomId(),
    type: "answer",
    textAnswer: `<p>Berdasarkan analisis penjualan terkini, berikut adalah ringkasan transaksi smartphone terkemuka di pasar:</p>
      <ul>
        <li>iPhone: Memimpin pasar dengan total transaksi mencapai 20 juta</li>
        <li>Samsung: Mengikuti di posisi kedua dengan 15 juta transaksi</li>
        <li>Vivo: Mencatatkan 10 juta transaksi</li>
        <li>Oppo: Mencapai 8 juta transaksi</li>
        <li>Realme: Melengkapi lima besar dengan 7 juta transaksi</li>
      </ul>
      <p>Tren ini menunjukkan dominasi merek-merek smartphone terkemuka di pasar, dengan persaingan ketat di segmen menengah. Penting untuk memperhatikan pergerakan merek-merek seperti Xiaomi dan Huawei yang terus menunjukkan pertumbuhan signifikan.</p>`,
  },
  BAR: {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan analisis penjualan terkini, iPhone masih memimpin pasar dengan total transaksi mencapai 20 juta. Samsung mengikuti di posisi kedua dengan 15 juta transaksi. Vivo, Oppo, dan Realme melengkapi lima besar dengan masing-masing mencatatkan 10 juta, 8 juta, dan 7 juta transaksi. Tren ini menunjukkan dominasi merek-merek smartphone terkemuka di pasar, dengan persaingan ketat di segmen menengah. Penting untuk memperhatikan pergerakan merek-merek seperti Xiaomi dan Huawei yang terus menunjukkan pertumbuhan signifikan.",
    isShowDataVisualization: true,
    dataVisualizationType: "bar",
    tableVisualizationData: {},
    chartVisualizationData: {
      labels: [
        "iPhone",
        "Samsung",
        "Vivo",
        "Oppo",
        "Realme",
        "Xiaomi",
        "Huawei",
        "OnePlus",
        "Google",
        "Sony",
        "LG",
        "Motorola",
        "Nokia",
        "HTC",
        "Asus",
        "Lenovo",
        "BlackBerry",
        "ZTE",
        "Alcatel",
        "Meizu",
      ],
      datasets: [
        {
          label: "Produk",
          data: [
            20000000, 15000000, 10000000, 8000000, 7000000, 6000000, 5500000,
            5000000, 4500000, 4000000, 3500000, 3000000, 2500000, 2000000,
            1800000, 1600000, 1400000, 1200000, 1000000, 800000,
          ],
        },
      ],
      xLabel: "Nama Produk",
      yLabel: "Nominal Transaksi",
    },
    isShowAction: true,
    actionType: "export-answer",
    isShowDataSource: true,
    dataSources: [
      {
        name: "Laporan penjualan September 2024",
        url: "https://my.jurnal.id/",
      },
      { name: "Analisis margin produk Q3 2024", url: "https://my.jurnal.id/" },
      { name: "Tren penjualan iPhone 2022-2024", url: "https://my.jurnal.id/" },
      { name: "Laporan inventaris terkini", url: "https://my.jurnal.id/" },
      {
        name: "Survei kepuasan pelanggan Agustus 2024",
        url: "https://my.jurnal.id/",
      },
    ],
    isShowFollowupQuestions: true,
    followupQuestionsDatas: [
      "Analisis margin keuntungan per produk untuk memastikan promosi tetap menguntungkan",
      "Identifikasi produk potensial untuk bundling dengan iPhone 13",
      "Evaluasi efektivitas strategi pemasaran untuk produk Apple terbaru",
      "Analisis tren penjualan aksesori Apple dalam 6 bulan terakhir",
    ],
  },
  TABLE: {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan analisis penjualan terkini, kami melihat peningkatan signifikan dalam penjualan produk elektronik premium. iPhone 14 Pro Max menjadi produk terlaris dengan margin keuntungan tertinggi. Namun, stok terbatas menjadi tantangan utama. Rekomendasi: tingkatkan persediaan iPhone 14 Pro Max dan pertimbangkan promosi bundling dengan aksesori untuk meningkatkan nilai transaksi rata-rata. Juga, perhatikan potensi MacBook Pro yang memiliki nilai transaksi tinggi namun penjualan lebih rendah - mungkin perlu strategi pemasaran yang lebih agresif.",
    isShowDataVisualization: true,
    dataVisualizationType: "table",
    tableVisualizationData: {
      headers: [
        "Nama",
        "Qty terjual",
        "Nominal",
        "Kategori",
        "Stok",
        "Harga Satuan",
        "Margin",
        "Rating",
      ],
      rows: [
        [
          "iPhone 14 Pro Max",
          "8 unit",
          "Rp90.000.000",
          "Smartphone",
          "15",
          "Rp11.250.000",
          "20%",
          "4.8",
        ],
        [
          "iPhone 14 Pro",
          "12 unit",
          "Rp120.000.000",
          "Smartphone",
          "20",
          "Rp10.000.000",
          "18%",
          "4.7",
        ],
        [
          "iPhone 13",
          "15 unit",
          "Rp105.000.000",
          "Smartphone",
          "25",
          "Rp7.000.000",
          "15%",
          "4.6",
        ],
        [
          'MacBook Pro 16"',
          "5 unit",
          "Rp150.000.000",
          "Laptop",
          "10",
          "Rp30.000.000",
          "25%",
          "4.9",
        ],
        [
          "MacBook Air M2",
          "10 unit",
          "Rp180.000.000",
          "Laptop",
          "18",
          "Rp18.000.000",
          "22%",
          "4.8",
        ],
        [
          'iPad Pro 12.9"',
          "7 unit",
          "Rp98.000.000",
          "Tablet",
          "12",
          "Rp14.000.000",
          "19%",
          "4.7",
        ],
        [
          "iPad Air",
          "9 unit",
          "Rp72.000.000",
          "Tablet",
          "15",
          "Rp8.000.000",
          "17%",
          "4.6",
        ],
        [
          "Apple Watch Series 8",
          "20 unit",
          "Rp80.000.000",
          "Wearable",
          "30",
          "Rp4.000.000",
          "21%",
          "4.5",
        ],
      ],
    },
  },
  LINE: {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan data penjualan yang ditampilkan dalam grafik garis, terlihat adanya tren peningkatan penjualan yang konsisten sepanjang tahun. Penjualan dimulai dari sekitar 12.000 unit pada bulan Januari dan terus meningkat hingga mencapai puncaknya di bulan Desember dengan 40.000 unit. Peningkatan ini menunjukkan pertumbuhan yang stabil dan positif dalam kinerja penjualan perusahaan. Beberapa faktor yang mungkin berkontribusi terhadap tren ini termasuk strategi pemasaran yang efektif, peluncuran produk baru, atau peningkatan permintaan pasar secara umum. Untuk analisis lebih lanjut, disarankan untuk membandingkan data ini dengan periode tahun sebelumnya dan mengidentifikasi faktor-faktor spesifik yang mendorong pertumbuhan di setiap bulan.",
    isShowDataVisualization: true,
    dataVisualizationType: "line",
    chartVisualizationData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Penjualan",
          data: [
            12000, 15000, 18000, 20000, 22000, 25000, 28000, 30000, 32000,
            35000, 38000, 40000,
          ],
        },
      ],
    },
  },
  PIE: {
    id: genRandomId(),
    isShowFullScreen: true,
    type: "answer",
    textAnswer:
      "Berdasarkan data penjualan yang ditampilkan dalam grafik garis, terlihat adanya tren peningkatan penjualan yang konsisten sepanjang tahun. Penjualan dimulai dari sekitar 12.000 unit pada bulan Januari dan terus meningkat hingga mencapai puncaknya di bulan Desember dengan 40.000 unit. Peningkatan ini menunjukkan pertumbuhan yang stabil dan positif dalam kinerja penjualan perusahaan. Beberapa faktor yang mungkin berkontribusi terhadap tren ini termasuk strategi pemasaran yang efektif, peluncuran produk baru, atau peningkatan permintaan pasar secara umum. Untuk analisis lebih lanjut, disarankan untuk membandingkan data ini dengan periode tahun sebelumnya dan mengidentifikasi faktor-faktor spesifik yang mendorong pertumbuhan di setiap bulan.",
    isShowDataVisualization: true,
    dataVisualizationType: "pie",
    chartVisualizationData: {
      xLabel: "Produk",
      yLabel: "Nominal",
      labels: ["Produk A", "Produk B", "Produk C", "Produk D", "Produk E"],
      datasets: [
        {
          label: "Penjualan",
          data: [35000, 28000, 22000, 18000, 15000],
        },
      ],
    },
  },
  OUTSIDE_TOPIC: {
    id: genRandomId(),
    type: "answer",
    textAnswer:
      "Mohon maaf, Airene belum bisa memberikan informasi terkait hal tersebut untuk saat ini. Namun, Airene dapat membantu Anda dengan informasi penjualan, pembelian atau akuntansi lainnya.",
    isShowButtonSuggestion: true,
    buttonSuggestionDatas: [
      "Berapa keuntungan perusahaan bulan ini",
      "Produk mana yang penjualan terlaris minggu ini",
    ],
  },
  AST_DATA_TODAY: {
    id: genRandomId(),
    type: "answer",
    textAnswer:
      "Mohon maaf, Airene memiliki keterbatasan untuk menjawab topik yang berkaitan dengan periode hari ini. Namun, Anda dapat memeriksa data “Penjualan hari ini” di <strong>Laporan penjualan per produk</strong> .",
    isShowAction: true,
    actionType: "open-url",
    actionUrl: "https://my.jurnal.id/",
    actionLabel: "Lihat laporan",
  },
};

export async function getChatResult(prompt) {
  // Simulate a 3-second loading delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // After the delay, process the prompt
  if (prompt.includes("table")) {
    return FAKE_CHAT_RESULT.TABLE;
  }
  if (prompt.includes("line")) {
    return FAKE_CHAT_RESULT.LINE;
  }
  if (prompt.includes("list")) {
    return FAKE_CHAT_RESULT.LIST;
  }
  if (prompt.includes("pie")) {
    return FAKE_CHAT_RESULT.PIE;
  }
  if (prompt.includes("bar")) {
    return FAKE_CHAT_RESULT.BAR;
  }
  if (prompt.includes("fitur batch")) {
    return FAKE_CHAT_RESULT.OUTSIDE_TOPIC;
  }
  if (prompt.includes("hari ini")) {
    return FAKE_CHAT_RESULT.AST_DATA_TODAY;
  }

  return FAKE_CHAT_RESULT.TEXT;
}
