// script.js
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Energy Usage',
                data: [12, 19, 3, 5, 2, 3, 9, 10, 16, 20, 18, 24],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                hidden: true
            }, {
                label: 'Solar Panels',
                data: [7, 11, 5, 8, 3, 7, 2, 9, 5, 13, 9, 14],
                borderColor: 'orange',
                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                hidden: true
            }, {
                label: 'Natural Gas',
                data: [6, 7, 3, 5, 11, 6, 8, 5, 6, 3, 12, 7],
                borderColor: 'green',
                backgroundColor: 'rgba(0, 128, 0, 0.1)',
                hidden: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('energyButton').onclick = function () {
        toggleDataset(myChart, 0);
    };

    document.getElementById('solarButton').onclick = function () {
        toggleDataset(myChart, 1);
    };

    document.getElementById('gasButton').onclick = function () {
        toggleDataset(myChart, 2);
    };

    function toggleDataset(chart, datasetIndex) {
        chart.data.datasets.forEach((dataset, index) => {
            dataset.hidden = index !== datasetIndex;
        });
        chart.update();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const lottieAnimation = lottie.loadAnimation({
        container: document.getElementById('lottieThermometer'), // ID of the container
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../animations/animation.json'  
    });

    let isSummer = true;
    let temperature = isSummer ? 72 : 68;
    let startY = 0;
    let moving = false;

    function updateTemperatureDisplay() {
        document.getElementById('temperatureDisplay').textContent = `Temperature: ${temperature}°F`;
        const extraCO2 = Math.abs(temperature - (isSummer ? 72 : 68)) * 5;
        document.getElementById('co2Impact').textContent = `Extra CO2: ${extraCO2} kg`;
        const frame = mapTemperatureToFrame(temperature);
        lottieAnimation.goToAndStop(frame, true);
    }

    function mapTemperatureToFrame(temp) {
        if (isSummer) {
            return 16 + (72 - temp) * 3;  // Mapping frames for decreasing temperature in summer
        } else {
            return (temp - 68) * 4;  // Mapping frames for increasing temperature in winter
        }
    }

    const thermometer = document.getElementById('lottieThermometer');
    thermometer.addEventListener('mousedown', function(event) {
        startY = event.clientY;
        moving = true;
        event.preventDefault(); // Prevent text selection or other drag behaviors
    });

    document.addEventListener('mousemove', function(event) {
        if (moving) {
            const diff = startY - event.clientY;
            const tempChange = Math.sign(diff) * (Math.abs(diff) > 30 ? 1 : 0); // Change the sensitivity by increasing the pixel threshold to 30
            if (tempChange != 0) {
                temperature = Math.min(Math.max(temperature + tempChange, 68), 72);
                startY = event.clientY; // Reset startY to the current mouse position
                updateTemperatureDisplay();
            }
        }
    });

    document.addEventListener('mouseup', function() {
        moving = false;
    });

    document.getElementById('switchSeason').addEventListener('click', function() {
        isSummer = !isSummer;
        temperature = isSummer ? 72 : 68; // Reset temperature based on season
        this.textContent = isSummer ? 'Switch to Winter' : 'Switch to Summer';
        updateTemperatureDisplay();
    });

    updateTemperatureDisplay(); // Initialize display on load
});
