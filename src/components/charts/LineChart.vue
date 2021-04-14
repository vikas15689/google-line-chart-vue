<template>
  <div class="line-chart-container">
    <div ref="line-chart" :style="chartStyle"></div>
  </div>
</template>
<script>
export default {
  name: "LineChart",
  props: {
    /**
     * set width of chart ( default:'900px' )
     */
    width: {
      type: String,
      default: "900px",
    },
    /**
     * set height of chart ( default:'500px' )
     */
    height: {
      type: String,
      default: "500px",
    },
    /**
     * chartData is array of array and which needs to be compatible for this function 'google.visualization.arrayToDataTable'
     */
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    /**
     *  if chart data changes then update chart
     */
    chartData: {
      handler() {
        this.drawChart();
      },
      deep: true,
    },
  },
  computed: {
    /**
     * create style object based on props
     */
    chartStyle() {
      return {
        width: this.width,
        height: this.height,
      };
    },
    chartTitle() {
      return "Showing : " + this.chartData[0][1];
    },
  },
  methods: {
    /**
     * @method drawChart this will draw chart based prop values passed from parent component
     */
    drawChart() {
      // checking if function is present or not
      if (window.google.visualization) {
        /**
         * Converting to compatible data
         */
        const data = window.google.visualization.arrayToDataTable(
          this.chartData
        );
        /**
         * Config for chart
         */
        const options = {
          title: this.chartTitle,
          curveType: "function",
          legend: { position: "bottom" },
        };
        /**
         * Initializing html element
         */
        const chart = new window.google.visualization.LineChart(
          this.$refs["line-chart"]
        );
        /**
         * Rendering chart
         */
        chart.draw(data, options);
      }
    },
  },
  mounted() {
    /**
     * Initializing charts
     *  */
    window.google.charts.load("current", { packages: ["corechart"] });
    window.google.charts.setOnLoadCallback(this.drawChart);
  },
};
</script>
<style lang="scss">
div.line-chart-container {
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    border-radius: 4px;
    border: 1px solid rgb(229 229 229);
  }
}
</style>
