var ctx = document.getElementById("chart").getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    responsive: true,
    data: {
      labels: ["Unrestricted Cash", "Restricted Cash", "Tax Sheltered Investments", "Mutual Funds", "GICs", "Other Assets"],
      datasets: [{
        // label: "investments",
        backgroundColor: ["#4DB53B", "#E75E28","#D6E329","#46C7E3","#62E675", "#F99A59"],
        data: [15.8, 53.3, 17.3, 4.7, 8.2, 0.7]
      }]
    },
    options: {
      	title: {
        	display: true,
        // text: 'Investments'
      	},
    	legend: {
       		position: "bottom"
    	}
    }
});
