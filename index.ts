import "billboard.js/dist/theme/insight.css";

import bb, { step } from "billboard.js";

var chart = bb.generate({
  axis: { x: { type: "category" } },
  data: {
    columns: [
      ["column1", 1000, null, 1000, 1200, null, null, -1700],
      ["column2", 4000, null, 2000, 2200, null, 2400, -2400]
    ],
    types: {
      column1: 'step',
      column2: 'step'
    },
  },
  line: { connectNull: true },
  bindto: "#lineChart"
});
