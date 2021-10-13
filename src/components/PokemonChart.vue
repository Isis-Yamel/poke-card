<script>
import { Bar } from "vue-chartjs";
export default {
  name: 'PokemonChart',
  extends: Bar,
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED"
      }
    }
  },
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
  },
  mounted() {
    const stats = this.chartData.map(s => s.stat.name).reverse();
    const statsData = this.chartData.map(s => s.base_stat).reverse();
    console.log(stats, statsData);
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors;
    this.renderChart(
      {
        labels: stats,
        datasets: [
          {
            label: this.label,
            data: statsData,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor
          }
        ]
      },
      this.options
    );
  }
};
</script>