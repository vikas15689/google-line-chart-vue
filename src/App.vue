<template>
  <div class="app-container">
    <!--Rendering MetricChart as landing module/view-->
    <MetricChart />
  </div>
</template>

<script>
import MetricChart from "./modules/metrics/MetricChart";
export default {
  name: "App",
  components: {
    MetricChart,
  },
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 100vh;
  width: 100vw;
  background-color: #f6f8fa;

  div.app-container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > * + * {
      margin-top: 16px;
    }
  }

  select {
    padding: 4px 8px 4px 8px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 14px;
    border: 1px solid lightgray;
    color: black;
    min-width: 150px;
    border-radius: 4px;
  }
}
</style>
