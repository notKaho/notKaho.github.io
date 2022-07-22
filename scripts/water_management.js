
var tableData = {
    time: ['0000 hrs', '0100 hrs', '0200 hrs', '0300 hrs', '0400 hrs', '0500 hrs', '0600 hrs', '0700 hrs', '0800 hrs', '0900 hrs',
        '1000 hrs', '1100 hrs', '1200 hrs', '1300 hrs', '1400 hrs', '1500 hrs', '1600 hrs', '1700 hrs', '1800 hrs', '1900 hrs', '2000 hrs',
        '2100 hrs', '2200 hrs', '2300 hrs'],
    temperature: [26, 26, 26, 26, 25, 25, 24, 25, 25, 25, 25, 25, 25, 26, 26, 28, 29, 29, 28, 28, 27, 26, 26, 26],
    humidity: [88, 88, 89, 91, 93, 95, 96, 92, 92, 91, 87, 86, 84, 83, 82, 75, 74, 74, 76, 79, 80, 84, 84, 85],
    ldr: [110, 115, 125, 130, 130, 150, 200, 250, 300, 335, 339, 347, 350, 400, 450, 480, 410, 370, 340, 310, 300, 210, 180, 120],
    led: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
}


document.addEventListener("DOMContentLoaded", function () {
    for (var x = 0; x < tableData['time'].length; x++) {
        var tbody = document.querySelector('tbody');

        var tr = document.createElement('tr');
        tr.setAttribute('id', x + 1);

        var th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = x + 1;

        tbody.append(tr);
        tr.append(th);

        for (elements in tableData) {
            var td = document.createElement('td');

            td.innerHTML = tableData[elements][x];
            tr.append(td);
        }
    }

    const scatterChart = new Chart(
        document.getElementById('scatterPlot'),
        scatterConfig
    );

    const dualAxisChart = new Chart(
        document.getElementById('dualAxisPlot'),
        dualAxisConfig
    );
});


// Start of Scatter Plot Graph
var scatterObjects = [];
for (var count = 0; count < tableData['time'].length; count++) {
    var axis = {};
    axis['x'] = tableData['temperature'][count];
    axis['y'] = tableData['humidity'][count];
    scatterObjects.push(axis);
}


const scatterData = {
    datasets: [{
        label: 'Temperature (°C) & Humidity (%)',
        data: scatterObjects,
        backgroundColor: 'rgb(255, 99, 132)'
    }]
};


const scatterConfig = {
    type: 'scatter',
    data: scatterData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
};

console.log(scatterObjects)
// End of Scatter Plot Graph


// Start of Dual Axis Graph
const labels = tableData['time'];

const dualAxisData = {
    labels: labels,
    datasets: [{
        label: 'LDR Value',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: tableData['ldr'],
        yAxisID: 'y'
    },
    {
        label: 'LED State',
        backgroundColor: 'rgb(7, 110, 255)',
        borderColor: 'rgb(7, 110, 255)',
        data: tableData['led'],
        yAxisID: 'y1'
    }
    ]
};

const dualAxisConfig = {
    type: 'line',
    data: dualAxisData,
    options: {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left'
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',

                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }
};
// End of Dual Axis Graph