const xValues = [100, 200, 300, 400, 500, 600];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110],
        borderColor: "#6e6af0",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: true },
  },
});
