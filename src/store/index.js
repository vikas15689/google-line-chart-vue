import Vue from "vue";
import Vuex from "vuex";
import reportJson from "./report.json";

Vue.use(Vuex);
/**
 * MetrciChart module state
 */
const metricChart = {
  state: () => ({
    /**
     * Initial state from json file
     */
    records: reportJson.records,
  }),
  actions: {
    /**
     *
     * @param {*} context contrext of store
     * @param {*} payload { metric:<string> }
     * @returns
     */
    async getChartData({ state }, payload) {
      /**
       * Initializing with header
       */
      const metricData = [["Date", payload.metric]];
      /**
       * Iterating though records to get patical metric data
       */
      state.records.forEach((r) => {
        metricData.push([r.date, r[payload.metric]]);
      });
      return metricData;
    },
  },
  getters: {
    /**
     *
     * @param {*} state
     * @returns returning property names present in first record and removing unwanted property names
     */
    metricList: (state) => {
      return Object.getOwnPropertyNames(state.records[0]).filter(
        (p) => p !== "date" && p !== "__ob__"
      );
    },
  },
};

/**
 * store object to set in main.js
 */
export default new Vuex.Store({
  modules: { metricChart },
});
