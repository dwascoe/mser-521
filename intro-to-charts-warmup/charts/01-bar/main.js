const options = {
  chart: {
    type: 'bar',
  },

  plotOptions: {
    bar: {
      horizontal: true,
    },
  },

  colors: ['#F44336', '#E91E63', '#9C27B0'],

  title: {
    text: "Snow Days",
  },
  series: [{ name: 'Snow Days 2024', data: [4, 7, 3, 1] },
    { name: 'Snow Days 2024', data: [2, 8, 5, 3 ]}],
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
};

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Documentation: https://apexcharts.com/javascript-chart-demos/bar-charts/basic/
