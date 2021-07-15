var labels = ['January','February', 'March' ,'April', 'May', 'June']

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var config = {
    type: 'line',
    data,
    Options: {},
}

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);