import { createStyledAttrsMixin } from "@mekari/pixel-utils";
import { MpBox } from "@mekari/pixel-box";

export const MpCircularProgress = {
  name: "MpBox",
  mixins: [createStyledAttrsMixin("MpCircularProgress")],
  props: {
    value: {
      type: [Number, String],
      default: 10
    },
    size: {
      type: [Number, String],
      default: 22
    },
    width: {
      type: [Number, String],
      default: 3
    },
    color: {
      type: String,
      default: "blue"
    }
  },
  computed: {
    getPercent() {
      if (this.value < 0) return 0;
      if (this.value > 100) return 100;

      return this.value;
    },
    getStrokeDashArray() {
      return 2 * Math.PI * this.size;
    },
    getStrokeDashOffset() {
      if (this.getPercent === 0) return this.getStrokeDashArray;
      if (this.getPercent === 100) return 0;

      return ((100 - this.getPercent) / 100) * this.getStrokeDashArray;
    },
    getStrokeWidth() {
      return (this.width / this.size) * this.getViewBox * 2;
    },
    getViewBox() {
      return this.size / (1 - this.width / this.size);
    },
    getFinalViewBox() {
      const result = [
        this.getViewBox,
        this.getViewBox,
        2 * this.getViewBox,
        2 * this.getViewBox
      ];
      return result.join(" ");
    }
  },
  render(h) {
    return h(
      MpBox,
      {
        props: { as: "svg" },
        attrs: {
          viewBox: this.getFinalViewBox,
          transform: "rotate(-90deg)",
          height: `${this.size}px`,
          width: `${this.size}px`,
          "aria-valuemax": 0,
          "aria-valuemin": 100,
          "aria-valuenow": this.getPercent,
          role: "progressbar",
          "data-pixel-component": "MpCircularProgress"
        }
      },
      [
        h(MpBox, {
          props: { as: "circle" },
          attrs: {
            stroke: "gray.100",
            fill: "transparent",
            cx: 2 * this.getViewBox,
            cy: 2 * this.getViewBox,
            r: this.size,
            "stroke-width": this.getStrokeWidth,
            "stroke-dasharray": this.getStrokeDashArray,
            "stroke-dashoffset": "0",
            "data-pixel-component": "MpCircularProgressIndicator"
          }
        }),
        h(MpBox, {
          props: { as: "circle" },
          attrs: {
            stroke: `${this.color}.400`,
            fill: "transparent",
            cx: 2 * this.getViewBox,
            cy: 2 * this.getViewBox,
            r: this.size,
            "stroke-width": this.getStrokeWidth,
            "stroke-linecap": "round",
            "stroke-dasharray": this.getStrokeDashArray,
            "stroke-dashoffset": this.getStrokeDashOffset,
            transition: "all 0.3s ease-in-out",
            "data-pixel-component": "MpCircularProgressIndicator"
          }
        })
      ]
    );
  }
};
