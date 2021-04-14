<template>
  <div class="metric-chart-container">
    <!--metric selection dropdown-->
    <select v-model="selectedMetric" @change="updateChartData()">
      <option v-for="metric in metricList" :key="metric" :value="metric">
        {{ metric }}
      </option>
    </select>
    <!--Line chart component used to display metric data-->
    <LineChart :chartData="metricData" />
  </div>
</template>
<script>
import LineChart from "./../../components/charts/LineChart";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MetricChart",
  data() {
    return {
      /**
       * Initital values (Internal state of this component)
       */
      selectedMetric: null,
      metricData: [],
    };
  },
  components: {
    LineChart,
  },
  computed: {
    /**
     * Mapping Getters from store
     */
    ...mapGetters(["metricList"]),
  },
  methods: {
    /**
     * Mapping Actions from store
     */
    ...mapActions(["getChartData"]),
    /**
     * Updating Chart whenever metric changes
     */
    updateChartData() {
      /**
       * calling mapped store action to retrieve selected metric data,
       *
       */
      this.getChartData({ metric: this.selectedMetric }).then((mData) => {
        this.metricData = mData;
      });
    },
  },
  mounted() {
    /**
     * Whenever component is mounted these values are pre populated
     */
    this.selectedMetric = this.metricList[0];
    this.updateChartData();
  },
};
</script>
<style lang="scss">
div.metric-chart-container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > * + * {
    margin-top: 16px;
  }
}
</style>
