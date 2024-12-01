
const doughnutChart = document.getElementById('dou').getContext('2d');

labelDoughnut ='';
dataDoughnut = [200, 260, 160, 230, 180, 150, 140, 190];
backgroundColorDoughnut=['#1E3A8A', '#2563EB', '#60A5FA', '#93C5FD', '#CBD5E1','#E5E7EB', '#F9FAFB', '#6B7280'];

let chart = createChart(doughnutChart,'doughnut',labelDoughnut,dataDoughnut,backgroundColorDoughnut);

//////////////////////////////

const lineChart = document.getElementById('l').getContext('2d');

labelLine =['January', 'February', 'March', 'April', 'May'];
dataLine = [500, 700, 800, 1000, 1200];
backgroundColorLine= ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c', '#f1c40f'];

let chartL = createChart(lineChart,'line',labelLine,dataLine,backgroundColorLine);


///////////
const barChart = document.getElementById('b').getContext('2d');
let chartB = createChart(barChart,'bar',labelLine,dataLine,backgroundColorLine);



function createChart(mctx, type, labels, data, backgroundColor){
    return new Chart(mctx, {
        type: type, 
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: backgroundColor,
            }]
        },
        options: {
            responsive: true,
          
            plugins: {
                legend: {
                    display: false, 
                   
                }
                         
            }
        }
    });
}