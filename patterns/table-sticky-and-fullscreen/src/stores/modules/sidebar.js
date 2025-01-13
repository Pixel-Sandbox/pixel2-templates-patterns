export default {
  namespaced: true,
  state: {
    isLoading: true,
    datas: [],
  },
  actions: {
    async getData({ commit }) {
      commit('SET_LOADING', true);

      commit('SET_DATA', [
        {
          parentId: 1,
          name: "Beranda",
          icon: "home",
          link: "/beranda",
          isActive: false,
          childItems: []
        },
        {
          parentId: 2,
          name: "Ringkasan bisnis",
          icon: "dashboard",
          link: "/dashboard",
          isActive: false,
          hasChild: true,
          childItems: []
        },
        {
          parentId: 3,
          name: "Laporan",
          icon: "reports",
          link: "/report",
          isActive: true,
          childItems: []
        },
        {
          parentId: 4,
          name: "Manajemen anggaran",
          icon: "finance",
          link: "/manajemen-anggaran",
          isActive: false,
          childItems: []
        },
        {
          parentId: 5,
          name: "",
          icon: "",
          link: "",
          isActive: false,
          childItems: []
        },
        {
          parentId: 6,
          name: "Kas & Bank",
          icon: "bank",
          link: "/kas-bank",
          isActive: false,
          childItems: []
        },
        {
          parentId: 7,
          name: "Penjualan",
          icon: "sales",
          link: "/penjualan",
          isActive: false,
          childItems: []
        },
        {
          parentId: 8,
          name: "Pembelian",
          icon: "cart",
          link: "/pembelian",
          isActive: false,
          childItems: []
        },
        {
          parentId: 9,
          name: "Biaya",
          icon: "expenses",
          link: "/biaya",
          isActive: false,
          childItems: []
        },
        {
          parentId: 10,
          name: "Mekari Pay",
          icon: "mekari_pay",
          link: "/mekari-pay",
          isActive: false,
          childItems: []
        },
        {
          parentId: 11,
          name: "",
          icon: "",
          link: "",
          isActive: false,
          childItems: []
        },
        {
          parentId: 12,
          name: "Kontak",
          icon: "contact",
          link: "/kontak",
          isActive: false,
          childItems: []
        },
        {
          parentId: 13,
          name: "Produk",
          icon: "products",
          link: "/produk",
          isActive: false,
          childItems: []
        },
        {
          parentId: 14,
          name: "Pemenuhan",
          icon: "truck",
          link: "/pemenuhan",
          isActive: false,
          childItems: []
        },
        {
          parentId: 15,
          name: "Pengaturan aset",
          icon: "assets",
          link: "/pengaturan-aset",
          isActive: false,
          childItems: []
        },
        {
          parentId: 16,
          name: "Daftar akun",
          icon: "chart-of-account",
          link: "/daftar-akun",
          isActive: false,
          childItems: []
        },
        {
          parentId: 17,
          name: "",
          icon: "",
          link: "",
          isActive: false,
          childItems: []
        },
        {
          parentId: 18,
          name: "Mekari Expense",
          icon: "expense-brand",
          link: "/mekari-expense",
          isActive: false,
          childItems: []
        },
        {
          parentId: 19,
          name: "Mekari Capital",
          icon: "capital-brand",
          link: "/mekari-capital",
          isActive: false,
          childItems: []
        },
        {
          parentId: 20,
          name: "e-Meterai",
          icon: "sign-brand",
          link: "/e-materai",
          isActive: false,
          childItems: []
        },
        {
          parentId: 21,
          name: "Payroll",
          icon: "talenta-brand",
          link: "/payroll",
          isActive: false,
          childItems: []
        },
        {
          parentId: 22,
          name: "Pengelolaan pajak",
          icon: "klikpajak-brand",
          link: "/klik-pajak",
          isActive: false,
          childItems: []
        },
        {
          parentId: 23,
          name: "",
          icon: "",
          link: "",
          isActive: false,
          childItems: []
        },
        {
          parentId: 24,
          name: "Daftar lainnya",
          icon: "doc",
          link: "/daftar-lainnya",
          isActive: false,
          childItems: []
        },
        {
          parentId: 25,
          name: "Add Ons",
          icon: "add-ons",
          link: "/add-ons",
          isActive: false,
          childItems: []
        },
        {
          parentId: 26,
          name: "Pengaturan",
          icon: "settings",
          link: "/pengaturan",
          isActive: false,
          childItems: [{
            category: 'PROFIL',
            datas: [
              {
                id: 1,
                name: "Perusahaan",
                link: "/pengaturan/perusahaan",
                childs: [],
              },
              {
                id: 2,
                name: "Pengguna",
                link: "/pengaturan/pengguna",
                childs: [],
              },
              {
                id: 3,
                name: "Tagihan",
                link: "/pengaturan/tagihan",
                childs: [],
              },
            ],
          },
          {
            category: 'TRANSAKSI',
            datas: [
              {
                id: 1,
                name: "Penjualan",
                link: "/pengaturan/penjualan",
                childs: [],
              },
              {
                id: 2,
                name: "Pembelian",
                link: "/pengaturan/pembelian",
                childs: [],
              },
              {
                id: 3,
                name: "Template",
                link: "",
                childs: [
                  {
                    id: 1,
                    name: "Email",
                    link: "/pengaturan/email",
                    childs: [],
                  },
                  {
                    id: 2,
                    name: "PDF",
                    link: "/pengaturan/pdf",
                    childs: [],
                  },
                  {
                    id: 3,
                    name: "Whatsapp",
                    link: "/pengaturan/whatsapp",
                    childs: [],
                  },
                ],
              },
              {
                id: 4,
                name: "Pemetaan akun",
                link: "/pengaturan/pemetaan-akun",
                childs: [],
              },
              {
                id: 5,
                name: "Aturan approval",
                link: "/pengaturan/aturan-approval",
                childs: [],
              },
              {
                id: 6,
                name: "Aturan tagging",
                link: "/pengaturan/aturan-taggin",
                childs: [],
              },
            ],
          }
          ]
        },
      ],);

      setTimeout(() => {
        commit('SET_LOADING', false);
      }, 0)
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.datas = data;
    },
    SET_LOADING(state, data) {
      state.isLoading = data
    }
  }
}
