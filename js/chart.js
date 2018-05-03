// values of pie chart
var unrestrictedCash = 21.9;
var restrictedCash = 38.5;
var taxShelter = 16.7;
var mutualFunds = 4.5;
var gics = 18.1;
var other = 0.2;

// set ctx
var ctx = document.getElementById("chart").getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    responsive: true,
    data: {
      labels: ["Unrestricted Cash", "Restricted Cash", "Tax Sheltered Investments", "Mutual Funds", "GICs", "Other Assets"],
      datasets: [{
        // label: "investments",
        backgroundColor: ["#4DB53B", "#E75E28", "#D6E329", "#46C7E3", "#62E675", "#F99A59"],
        data: [unrestrictedCash, restrictedCash, taxShelter, mutualFunds, gics, other]
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
// set labels on investments.html
document.getElementById("unrestricted-cash").textContent = unrestrictedCash;
document.getElementById("restricted-cash").textContent = restrictedCash;
document.getElementById("tax-shelter").textContent = taxShelter;
document.getElementById("mutual-funds").textContent = mutualFunds;
document.getElementById("gics").textContent = gics;
document.getElementById("other").textContent = other;
