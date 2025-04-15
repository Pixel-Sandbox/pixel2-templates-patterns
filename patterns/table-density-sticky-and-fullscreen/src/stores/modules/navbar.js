export default {
  namespaced: true,
  state: {
    isLoading: true,
    user: {
      id: 1,
      name: 'Rizal Chandra',
      email: 'rizal.chandra@mekari.com'
    },
    company: {
      id: '12311',
      name: 'PT Central Perk Indonesia'
    },
    notifactions: [],
    companyList: [],
    accountList: []
  },
  actions: {
    async getUserInformation({ commit }) {
      commit('SET_LOADING', true);

      const data = {
        avatar: 'https://i.pravatar.cc/300',
        fullName: 'Rizal Chandra Budi Wicaksono',
        company: 'PT Mid Solusi Nusantara',
        email: 'rizal.chandra@mekari.com'
      }
      commit('SET_DATA', data);

      setTimeout(() => {
        commit('SET_LOADING', false);
      }, 0)
    },
    async getNotifications({ commit }) {
      const data = [
        {
          date: "Hari ini",
          data: [
            {
              title:
                "Mohon konfirmasi pembuatan perusahaan <b>Prima FnB</b> pada email <b>jaka@mekari.com</b>",
              date: "11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Konfirmasikan email",
              actionIcon: "envelope",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Ekspor file <b>Laporan laba rugi</b> sedang berlangsung",
              date: "11:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "Lihat progress",
              actionIcon: "time",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Ekspor file <b>Laporan laba rugi</b> gagal",
              date: "12:00 (GMT+7)",
              icon: "error",
              type: "Download",
              actionText: "Lihat detail",
              actionIcon: "book",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Ekspor file <b>Laporan laba rugi</b> selesai",
              date: "12:00 (GMT+7)",
              icon: "done",
              type: "Download",
              actionText: "Download laporan",
              actionIcon: "download",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Impor file <b>Faktur penjualan</b> sedang berlangsung",
              date: "12:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "Lihat progress",
              actionIcon: "time",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Impor file <b>Faktur penjualan</b> gagal",
              date: "12:00 (GMT+7)",
              icon: "error",
              type: "Download",
              actionText: "Lihat detail",
              actionIcon: "book",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "Impor file <b>Faktur penjualan</b> selesai",
              date: "12:00 (GMT+7)",
              icon: "done",
              type: "Download",
              actionText: "Lihat penjualan",
              actionIcon: "sales",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "<b>Perhitungan ulang stok produk</b> sedang berjalan",
              date: "12:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "Lihat progress",
              actionIcon: "time",
              isNew: false,
              hasMenu: false,
            },
          ],
        },
        {
          date: "Lebih lama",
          data: [
            {
              title: "Stok <b>Indomie 85gr</b> sudah habis",
              date: "13 Sep 2023, 11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Lihat produk",
              actionIcon: "products",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "Penyusutan <b>Kijang Innova 2016</b> tertundas",
              date: "13 Sep 2023, 11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Lihat aset",
              actionIcon: "assets",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Jetz 15gr</b> tersisa <b> 2 dari min.stok 5 pcs</b> pada gudang <b>Bandung, Jakarta & Yogyakarta</b>",
              date: "13 Sep 2023, 11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Lihat aset",
              actionIcon: "assets",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "<b>Persiapan penutupan buku sedang berjalan</b>",
              date: "12 Sep 2023, 11:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "",
              actionIcon: "",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Persiapan penutupan buku sudah selesai.</b> Anda dapat melanjutkan untuk menutup buku",
              date: "12 Sep 2023, 11:00 (GMT+7)",
              icon: "done",
              type: "Download",
              actionText: "Lanjutkan tutup buku",
              actionIcon: "book",
              isNew: false,
              hasMenu: false,
            },
          ],
        },
      ]
      commit('SET_NOTICATIONS', data)
    },
    async getCompanyList({ commit }) {
      const data = [{
        id: '12310',
        name: 'PT Abadi Jaya Sentosa',
      },
      {
        id: '12311',
        name: 'PT Central Perk Indonesia',
      },
      {
        id: '12312',
        name: 'PT Dinamika Sukses Sejahtera',
      },
      {
        id: '12313',
        name: 'PT Fajar Bersama Jaya',
      },
      {
        id: '12314',
        name: 'PT Gemilang Abadi Perkasa',
      },
      {
        id: '12315',
        name: 'PT Harmoni Indah Makmur',
      },
      {
        id: '12316',
        name: 'PT Inti Sejahtera Utama',
      },
      {
        id: '12317',
        name: 'PT Jaya Prima Lestari',
      },
      {
        id: '12318',
        name: 'PT Karya Sentosa Abadi',
      },
      {
        id: '12319',
        name: 'PT Laju Berkah Mandiri',
      },
      {
        id: '12320',
        name: 'PT Maju Jaya Abadi',
      },
      {
        id: '12321',
        name: 'PT Nusantara Makmur Bersama',
      },
      {
        id: '12322',
        name: 'PT Optimis Sukses Sejahtera',
      },
      {
        id: '12323',
        name: 'PT Prima Cipta Sukses',
      },
      {
        id: '12324',
        name: 'PT Quantum Berkat Makmur',
      },
      {
        id: '12325',
        name: 'PT Raja Cendekia Prima',
      },
      {
        id: '12326',
        name: 'PT Sentosa Sejahtera Perkasa',
      },
      {
        id: '12327',
        name: 'PT Tunggal Sukses Makmur',
      },
      ]

      commit('SET_COMPANY_LIST', data)
    }
  },
  mutations: {
    SET_LOADING(state, data) {
      state.isLoading = data
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_NOTICATIONS(state, data) {
      state.notifactions = data;
    },
    SET_COMPANY_LIST(state, data) {
      state.companyList = data;
    },
    SET_ACCOUNT_LIST(state, data) {
      state.accountList = data;
    },
  }
}
