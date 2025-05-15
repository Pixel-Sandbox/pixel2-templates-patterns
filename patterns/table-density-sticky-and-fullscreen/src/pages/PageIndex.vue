<template>
  <PixelPageContainer :is-full-screen="isFullScreen">
    <mp-box id="pixelPageHeader">
      <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
        <mp-box>
          <mp-heading as="h1" font-size="2xl" font-weight="semibold">
            Laporan laba rugi
            <mp-text as="span" font-size="lg" color="gray.600" font-weight="semibold">
              (dalam rupiah)
            </mp-text>
          </mp-heading>
        </mp-box>

        <!-- Only show in fullscreen mode -->
        <mp-flex align-items="center" gap="3" :transform="isFullScreen ? 'scale(1)' : 'scale(0.2)'"
          :opacity="isFullScreen ? 1 : 0" transition="all 0.3s ease-out">
          <mp-popover use-portal>
            <mp-popover-trigger>
              <mp-button-icon v-mp-tooltip="'Kepadatan tabel'" name="table-view-column" />
            </mp-popover-trigger>

            <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px"
              border-color="gray.400" px="3" py="4">
              <mp-box pt="2">
                <mp-text color="gray.400">
                  K E P A D A T A N
                </mp-text>
                <mp-radio-group v-model="density" mt="2" @change="onChangeDensity">
                  <mp-radio id="default" value="default">
                    Default
                    <template #description>
                      Tampilan ini memberikan lebih banyak ruang antarakun transaksi untuk kemudahan membaca.
                    </template>
                  </mp-radio>

                  <mp-radio id="compact" value="compact">
                    Rapat
                    <template #description>
                      Tampilan ini memuat lebih banyak akun transaksi di layar, sehingga ideal untuk memeriksa data
                      lebih
                      cepat.
                    </template>
                  </mp-radio>
                </mp-radio-group>
              </mp-box>
            </mp-popover-content>
          </mp-popover>
          <mp-button-icon v-mp-tooltip="'Perkecil'" name="minimize" @click="setFullscreen(false)" />
        </mp-flex>
      </mp-flex>
    </mp-box>

    <PixelPageContent ref="pageContent" variant="card" :is-full-screen="isFullScreen">
      <mp-collapse :is-open="!isFullScreen">
        <mp-box>
          <mp-flex justify-content="space-between" mb="6">
            <mp-flex align-items="center" gap="3">
              <mp-form-control width="140px">
                <mp-form-label>
                  Tanggal awal
                </mp-form-label>
                <mp-date-picker placeholder="Pilih tanggal" />
              </mp-form-control>

              <mp-form-control width="140px">
                <mp-form-label>
                  Tanggal akhir
                </mp-form-label>
                <mp-date-picker placeholder="Pilih tanggal" />
              </mp-form-control>

              <mp-form-control width="140px">
                <mp-form-label>
                  Periode
                </mp-form-label>
                <mp-autocomplete placeholder="Pilih periode" value="Bulan lalu"
                  :data="['Hari ini', 'Mingguan', 'Bulanan', 'Triwulanan', 'Tahunan', 'Bulan lalu', 'Tahun lalu', 'Per bulan tahun ini, Custom']" />
              </mp-form-control>

              <mp-flex gap="3" mt="21px">
                <mp-button> Tampilkan </mp-button>

                <mp-button variant="outline">
                  <mp-icon name="filter" variant="duotone" mr="2" />
                  Filter
                </mp-button>
              </mp-flex>
            </mp-flex>

            <mp-flex align-items="center" gap="3">
              <mp-popover>
                <mp-popover-trigger>
                  <mp-button-icon v-mp-tooltip="'Kepadatan tabel'" name="table-view-column" />
                </mp-popover-trigger>

                <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px"
                  border-color="gray.400" px="3" py="4">
                  <mp-box pt="2">
                    <mp-text color="gray.400">
                      K E P A D A T A N
                    </mp-text>
                    <mp-radio-group v-model="density" mt="2" @change="onChangeDensity">
                      <mp-radio id="default" value="default">
                        Default
                        <template #description>
                          Tampilan ini memberikan lebih banyak ruang antarakun transaksi untuk kemudahan membaca.
                        </template>
                      </mp-radio>

                      <mp-radio id="compact" value="compact">
                        Rapat
                        <template #description>
                          Tampilan ini memuat lebih banyak akun transaksi di layar, sehingga ideal untuk memeriksa
                          data lebih
                          cepat.
                        </template>
                      </mp-radio>
                    </mp-radio-group>
                  </mp-box>
                </mp-popover-content>
              </mp-popover>

              <mp-button-icon v-mp-tooltip="'Perluas'" name="full-screen" @click="setFullscreen(true)" />

              <mp-button variant="outline" right-icon="caret-down">
                Template
              </mp-button>

              <mp-button variant="outline" right-icon="caret-down">
                Ekspor
              </mp-button>
            </mp-flex>
          </mp-flex>
        </mp-box>

        <mp-flex justify="space-between" align-items="center" mb="6">
          <mp-flex align-items="center" gap="2">
            <mp-text>
              Terakhir diperbarui: 19 Nov 2023 pada 19:19 (GMT+7)
            </mp-text>
            <mp-icon v-mp-tooltip="{
              position: 'right',
              label: 'Untuk mendapat laporan terbaru, Anda dapat memuat ulang halaman ini atau menghubungi tim support kami',
            }" size="sm" name="info" />
          </mp-flex>

          <mp-flex align-items="center" gap="2">
            <mp-icon name="pdf-document" />
            <mp-text is-link>
              Lihat contoh
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-collapse>

      <mp-box position="relative" display="flex" flex-direction="column" overflow-x="auto" :style="{
        '--main-table-width': `${mainTableWidth}px`,
        '--pnl-table-padding': density === 'compact' ? '4px' : '8px',
      }">
        <!-- Sticky on top container -->
        <TableStickyContainer :is-visible="isStickyHeaderVisible"
          :top-offset="isFullScreen ? '0' : 'var(--jurnal-navbar-height)'">
          <MpTableContainer ref="stickyHeaderTable" width="var(--main-table-width)" max-width="var(--main-table-width)"
            overflow="hidden">
            <mp-table-lite :is-hoverable="false" :style="{ tableLayout: 'fixed' }">
              <mp-table-head-lite>
                <mp-table-row-lite>
                  <mp-table-cell-lite as="th" scope="col" rowspan="2" height="auto" py="var(--pnl-table-padding)"
                    px="var(--pnl-table-padding)" :width="`${stickyHeaderWidth[0]}px`"
                    transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)" left="0" box-shadow="inset -2px 0px #D0D6DD"
                    is-fixed>
                    <mp-flex justify="space-between">
                      <mp-text font-weight="semibold">
                        Nama Akun
                      </mp-text>
                      <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12.5h11.667m0 0-2.084-2.084m2.084 2.084-2.084 2.083M15 7.084H2.5m0 0L4.583 5M2.5 7.084l2.083 2.083"
                            stroke="#626B79" stroke-width="1.313" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </mp-flex>
                  </mp-table-cell-lite>

                  <mp-table-cell-lite v-for="head in generatedHeads" :key="head" as="th" scope="col" height="auto"
                    py="var(--pnl-table-padding)" px="var(--pnl-table-padding)" text-align="right"
                    :width="head.includes('compare') ? '60px' : '132px'"
                    :min-width="head.includes('compare') ? '60px' : '132px'">
                    <span v-if="!head.includes('compare')">
                      {{ head }}
                    </span>
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </mp-table-head-lite>
            </mp-table-lite>
          </MpTableContainer>
        </TableStickyContainer>

        <!-- Main table -->
        <MpTableContainer ref="mainTable" width="full" max-width="full" overflow="scroll">
          <mp-table-lite ref="table" :is-hoverable="false">
            <mp-table-head-lite>
              <mp-table-row-lite ref="tableHeader" border-top-width="1px">
                <mp-table-cell-lite as="th" scope="col" height="auto" py="var(--pnl-table-padding)"
                  px="var(--pnl-table-padding)" left="0" box-shadow="inset -2px 0px #D0D6DD" is-fixed width="300px"
                  min-width="300px" max-width="300px">
                  <mp-flex justify="space-between">
                    <mp-text font-weight="semibold">
                      Nama Akun
                    </mp-text>
                    <button>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12.5h11.667m0 0-2.084-2.084m2.084 2.084-2.084 2.083M15 7.084H2.5m0 0L4.583 5M2.5 7.084l2.083 2.083"
                          stroke="#626B79" stroke-width="1.313" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </mp-flex>
                </mp-table-cell-lite>
                <mp-table-cell-lite v-for="head in generatedHeads" :key="head" as="th" scope="col" height="auto"
                  py="var(--pnl-table-padding)" px="var(--pnl-table-padding)" text-align="right"
                  :width="head.includes('compare') ? '60px' : '132px'"
                  :min-width="head.includes('compare') ? '60px' : '132px'">
                  <span v-if="!head.includes('compare')">
                    {{ head }}
                  </span>
                </mp-table-cell-lite>
              </mp-table-row-lite>
            </mp-table-head-lite>

            <mp-table-body-lite>
              <template v-for="(data, index) in generatedDatas">
                <mp-table-row-lite v-if="data.type === 'title'" :key="`header-${index}`" data-row-type="title">
                  <mp-table-cell-lite as="td" scope="row" height="auto" width="300px" py="var(--pnl-table-padding)"
                    px="var(--pnl-table-padding)" left="0" box-shadow="inset -2px 0px #D0D6DD" is-fixed
                    :border-bottom-width="datas[index + 1].type === 'sub-total' ? '0px' : '1px'"
                    :data-level="data.level" :style="{
                      'padding-left': `${(data.level + 1) * 8}px`,
                    }">
                    <mp-flex>
                      <mp-text font-weight="semibold">
                        {{ data.title }}
                      </mp-text>
                    </mp-flex>
                  </mp-table-cell-lite>

                  <mp-table-cell-lite v-for="head in heads" :key="head" as="td" scope="row" height="auto"
                    py="var(--pnl-table-padding)" px="var(--pnl-table-padding)" text-align="right"
                    :border-bottom-width="datas[index + 1].type === 'sub-total' ? '0px' : '1px'" />
                </mp-table-row-lite>

                <!-- Account row -->
                <mp-table-row-lite v-else-if="data.type === 'account'" :key="`account-${index}`"
                  data-row-type="account">
                  <mp-table-cell-lite as="td" scope="row" height="auto" width="300px" py="var(--pnl-table-padding)"
                    px="var(--pnl-table-padding)" left="0" box-shadow="inset -2px 0px #D0D6DD"
                    :border-bottom-width="datas[index + 1].type === 'sub-total' ? '0px' : '1px'" is-fixed>
                    <mp-flex pl="4" gap="2">
                      <mp-text as="a" href="https://my.jurnal.id/accounts/82351898" target="_blank" width="80px"
                        white-space="pre-wrap" is-link>
                        {{ data.account }}
                      </mp-text>

                      <mp-text as="a" href="https://my.jurnal.id/accounts/82351898" target="_blank" width="200px"
                        white-space="pre-wrap" is-link>
                        {{ data.accountName }}
                      </mp-text>
                    </mp-flex>
                  </mp-table-cell-lite>

                  <mp-table-cell-lite v-for="(head, headIndex) in generatedHeads" :key="head" as="td" scope="row"
                    height="auto" py="var(--pnl-table-padding)" px="var(--pnl-table-padding)" text-align="right"
                    :border-bottom-width="datas[index + 1].type === 'sub-total' ? '0px' : '1px'"
                    border-bottom-color="gray.100" :width="head.includes('compare') ? '60px' : '132px'"
                    :min-width="head.includes('compare') ? '60px' : '132px'">
                    <MpText v-if="data.values[headIndex].type === 'value'" as="span">
                      {{ data.values[headIndex].formattedValue }}
                    </MpText>

                    <MpText
                      v-else-if="data.values[headIndex].type === 'percentage' && data.values[headIndex].value !== 0"
                      as="span" :color="data.values[headIndex].value > 0 ? 'green' : 'red'" font-size="xs">
                      {{ data.values[headIndex].formattedValue }}
                    </MpText>
                  </mp-table-cell-lite>
                </mp-table-row-lite>

                <!-- Sub-total row -->
                <mp-table-row-lite v-else-if="data.type === 'sub-total'" :key="`sub-total-${index}`"
                  data-row-type="sub-total">
                  <mp-table-cell-lite as="td" scope="row" height="auto" width="300px" py="var(--pnl-table-padding)"
                    px="var(--pnl-table-padding)" left="0" box-shadow="inset -2px 0px #D0D6DD" is-fixed
                    border-top-width="1px" border-top-color="dark" border-bottom-width="1px" border-bottom-color="dark">
                    <mp-flex pl="4">
                      <mp-text width="80px">
                        {{ data.title }}
                      </mp-text>
                    </mp-flex>
                  </mp-table-cell-lite>

                  <mp-table-cell-lite v-for="(head, headIndex) in generatedHeads" :key="head" as="td" scope="row"
                    height="auto" py="var(--pnl-table-padding)" px="var(--pnl-table-padding)" text-align="right"
                    border-top-width="1px" border-top-color="dark" border-bottom-width="1px" border-bottom-color="dark"
                    :width="head.includes('compare') ? '60px' : '132px'"
                    :min-width="head.includes('compare') ? '60px' : '132px'">
                    <MpText v-if="data.values[headIndex].type === 'value'" as="span">
                      {{ data.values[headIndex].formattedValue }}
                    </MpText>

                    <MpText
                      v-else-if="data.values[headIndex].type === 'percentage' && data.values[headIndex].value !== 0"
                      as="span" font-size="xs">
                      {{ data.values[headIndex].formattedValue }}
                    </MpText>
                  </mp-table-cell-lite>
                </mp-table-row-lite>

                <!-- Total row -->
                <mp-table-row-lite v-else-if="data.type === 'total'" :key="`total-${index}`" data-row-type="total">
                  <mp-table-cell-lite as="td" scope="row" height="auto" width="300px" py="var(--pnl-table-padding)"
                    px="var(--pnl-table-padding)" left="0" box-shadow="inset -2px 0px #D0D6DD" is-fixed
                    :pb="datas.length === index + 1 ? '1' : '28px'">
                    <mp-flex>
                      <mp-text font-weight="semibold">
                        {{ data.title }}
                      </mp-text>
                    </mp-flex>
                  </mp-table-cell-lite>

                  <mp-table-cell-lite v-for="(head, headIndex) in generatedHeads" :key="head" as="td" scope="row"
                    height="auto" py="var(--pnl-table-padding)" px="var(--pnl-table-padding)" text-align="right"
                    :pb="datas.length === index + 1 ? '1' : '28px'">
                    <MpText v-if="data.values[headIndex].type === 'value'" as="span" font-weight="semibold">
                      {{ data.values[headIndex].formattedValue }}
                    </MpText>

                    <MpText
                      v-else-if="data.values[headIndex].type === 'percentage' && data.values[headIndex].value !== 0"
                      as="span" font-weight="semibold" font-size="xs">
                      {{ data.values[headIndex].formattedValue }}
                    </MpText>
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </template>
            </mp-table-body-lite>
          </mp-table-lite>
        </MpTableContainer>
      </mp-box>

      <mp-text font-size="sm" color="gray.400" mt="2" pl="4">
        Notes: Inventory account is calculated based on Average Cost method
      </mp-text>
    </PixelPageContent>
  </PixelPageContainer>
</template>

<script>
import TableStickyContainer from '@/components/parts/TableStickyContainer.vue'
import PixelPageContainer from '@/components/wrapper/PixelPageContainer.vue'
import PixelPageContent from '@/components/wrapper/PixelPageContent.vue'

import {
  MpAutocomplete,
  MpBox,
  MpButton,
  MpButtonIcon,
  MpCollapse,
  MpDatePicker,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpHeading,
  MpIcon,
  MpPopover,
  MpPopoverContent,
  MpPopoverTrigger,
  MpRadio,
  MpRadioGroup,
  MpTableBodyLite,
  MpTableCellLite,
  MpTableContainer,
  MpTableHeadLite,
  MpTableLite,
  MpTableRowLite,
  MpText,
} from '@mekari/pixel'

import TABLE_DATA from '../constants/datas.json'

export default {
  components: {
    PixelPageContainer,
    PixelPageContent,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
    MpBox,
    MpButtonIcon,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpDatePicker,
    MpIcon,
    MpCollapse,
    MpTableContainer,
    MpFormControl,
    MpFormLabel,
    MpRadio,
    MpRadioGroup,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    TableStickyContainer,
    MpAutocomplete,
  },
  data() {
    return {
      isFullScreen: false,
      heads: TABLE_DATA.heads,
      datas: TABLE_DATA.datas,
      density: 'default',

      // Sticky
      mainTableWidth: 0,
      stickyHeaderWidth: [],
      stickySubHeaderWidth: [],

      // Setup Intersection Observers instance
      resizeObserver: null,
      lastWidth: null,
      resizeTimeout: null,
      headerObserver: null,
      tableObserver: null,
      isHeaderAboveThreshold: false,
      isTableVisible: false,

      // Store scroll event handlers for cleanup
      scrollHandlers: null,
    }
  },
  computed: {
    isStickyHeaderVisible() {
      if (this.isHeaderAboveThreshold && this.isTableVisible) return true
      return false
    },
    generatedHeads() {
      return this.generateCompareableHeads(this.heads)
    },
    generatedDatas() {
      return this.datas.map((data) => {
        return {
          ...data,
          values: this.generateCompareableDatas(data.values),
        }
      })
    },
  },
  mounted() {
    // Get main table width
    this.calculateTableContainerWidth()

    // Initial Calculation
    this.syncTableColumnWidths()

    // Setup Intersection Observers
    this.setupIntersectionObservers()

    // Setup Resize Observer
    this.setupResizeObserver()

    // Synchronize scroll positions between tables
    this.syncScrollPositions()
  },
  beforeUnmount() {
    // Make sure to cleanup the Intersection Observers and Resize Observer
    this.cleanupIntersectionObservers()
    this.cleanupResizeObserver()

    // Remove scroll event listener
    if (this.$refs.mainTable?.$el && this.scrollHandlers?.mainTable) {
      this.$refs.mainTable.$el.removeEventListener('scroll', this.scrollHandlers.mainTable)
    }
  },
  methods: {
    setFullscreen(value) {
      this.isFullScreen = value

      this.$nextTick(() => {
        // Recalculate the table width
        this.calculateTableContainerWidth()
        this.syncTableColumnWidths()
      })
    },
    onChangeDensity() {
      console.log('onChangeDensity: ', this.density)

      this.$nextTick(() => {
        setTimeout(() => {
          // Recalculate the table width
          this.calculateTableContainerWidth()
          this.syncTableColumnWidths()
        }, 300)
      })
    },
    /**
     * Sets up a Resize Observer to monitor changes in the size of the page content.
     * When the size changes, it triggers recalculation of the sticky header width.
     */
    setupResizeObserver() {
      this.resizeObserver = new ResizeObserver(this.onPageContentResize)

      // Start observing for page content
      if (this.$refs.pageContent?.$el) {
        this.resizeObserver.observe(this.$refs.pageContent.$el)
      }
    },
    cleanupResizeObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect()
        this.resizeObserver = null
      }
    },

    /**
     * Synchronizes scroll positions between all table containers
     * Only listens to mainTable scroll events since the other tables have overflow: hidden
     */
    syncScrollPositions() {
      // Get references to all table containers
      const stickyHeaderEl = this.$refs.stickyHeaderTable?.$el
      const mainTableEl = this.$refs.mainTable?.$el

      if (!stickyHeaderEl || !mainTableEl) return

      // Store event handler for cleanup
      this.scrollHandlers = {
        mainTable: (e) => {
          const scrollLeft = e.target.scrollLeft
          // Update sticky header  scroll positions
          stickyHeaderEl.scrollLeft = scrollLeft
        },
      }

      // Add scroll event listener only to the main table
      mainTableEl.addEventListener('scroll', this.scrollHandlers.mainTable)
    },

    /**
     * Handles the resize event by debouncing the recalculation of sticky header width.
     * This prevents multiple recalculations when the window is resized.
     */
    onPageContentResize(entries) {
      // Debounce the resize calculations to prevent multiple recalculations
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout)
      }

      this.resizeTimeout = setTimeout(() => {
        for (const entry of entries) {
          console.log('Resize: ', { entry })
          const newWidth = entry.contentRect.width
          // Only recalculate if width actually changed
          if (newWidth !== this.lastWidth) {
            this.lastWidth = newWidth
            this.calculateTableContainerWidth()
            this.syncTableColumnWidths()
          }
        }
      }, 25) // 25ms debounce delay
    },

    /**
     * Sets up Intersection Observers to monitor the visibility of the main table, header.
     */
    setupIntersectionObservers() {
      // Initialize observer for the table
      this.tableObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          console.log('Table observer: ', { entry })
          this.isTableVisible = entry.isIntersecting
        },
        { threshold: 0 },
      )

      // Initialize observer for the header
      const navbarHeight = 56
      this.headerObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          console.log('Header observer: ', { entry })
          this.isHeaderAboveThreshold = !entry.isIntersecting
        },
        {
          threshold: 0,
          // Offset for respect to navbar height.
          rootMargin: `-${navbarHeight}px 0px 0px 0px`,
        },
      )

      // Start observing for table, header elements.
      if (this.$refs.table?.$el) {
        this.tableObserver.observe(this.$refs.table.$el)
      }
      if (this.$refs.tableHeader?.$el) {
        this.headerObserver.observe(this.$refs.tableHeader.$el)
      }
    },
    cleanupIntersectionObservers() {
      if (this.headerObserver) {
        this.headerObserver.disconnect()
        this.headerObserver = null
      }
      if (this.tableObserver) {
        this.tableObserver.disconnect()
        this.tableObserver = null
      }
    },

    /**
     * Calculates the widths for the sticky header, sub-header, based on the main table's dimensions.
     * This function collects the width of each child element within the main table to ensure precise sizing.
     */
    syncTableColumnWidths() {
      const tableHeaderNode = this.$refs.tableHeader.$el

      // Calculate header width
      const headerWidths = this.getChildrenWidth(tableHeaderNode)
      this.stickyHeaderWidth = headerWidths
    },

    /**
     * Calculates the width of the main table container.
     * This method retrieves the width of the main table container from the main table element.
     */
    calculateTableContainerWidth() {
      this.mainTableWidth = this.$refs.mainTable.$el.getBoundingClientRect().width
      console.log('Main table width: ', this.mainTableWidth)
    },

    /**
     * Retrieves the width of each child element within a given node.
     * This method is used to calculate the widths for the sticky header, sub-header.
     * @param {HTMLElement} node - The node whose children's widths are to be calculated.
     * @returns {number[]} An array of widths, one for each child element.
     */
    getChildrenWidth(node) {
      // Check if node has children
      if (!node?.children?.length) return []

      // Get width of each child element
      return Array.from(node.children).map(
        child => child.getBoundingClientRect().width,
      )
    },

    generateCompareableHeads(heads) {
      const result = []

      for (let i = 0; i < heads.length; i++) {
        result.push(heads[i])

        // Add comparison entry between current and next month
        if (i < heads.length - 1) {
          result.push(`compare:${heads[i]}:${heads[i - 1]}`)
        }
      }

      return result
    },
    generateCompareableDatas(datas) {
      const result = []

      for (let i = 0; i < datas.length; i++) {
        // Format the value if it's a number
        const rawCurrentValue = typeof datas[i] === 'number' ? datas[i] : 0
        const currentValue = { type: 'value', formattedValue: this.formatCurrency(rawCurrentValue), value: rawCurrentValue }
        result.push(currentValue)

        if (i < datas.length - 1) {
          // Format next value if it's a number
          const rawPreviousValue = typeof datas[i - 1] === 'number' ? datas[i - 1] : 0
          let percentage = 0
          const rawPercentage = Number(((rawCurrentValue - rawPreviousValue) / rawPreviousValue) * 100)
          if (rawCurrentValue !== 0) {
            percentage = rawPercentage.toFixed(1)
          }

          const finalPercentage = i === 0 ? '' : percentage

          result.push({
            type: 'percentage',
            formattedValue: finalPercentage,
            value: rawPercentage || 0,
          })
        }
      }

      return result
    },
    formatCurrency(value, decimals = 2) {
      if (value === null || value === undefined) return ''

      // Use Intl.NumberFormat with Indonesian locale
      return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value)
    },
  },
}
</script>
