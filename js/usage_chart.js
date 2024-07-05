document.addEventListener('DOMContentLoaded', function () {

    // Calculating % of total emissions that come from EV charging and using national ratios for HVAC/lighting
    var total_emissions = 3692273.4600000004 //hardcoded from data.ipynb

    //53% of usage is space heating
    //lighting is
    var ev_total_equivalent = 16511.23387487

    var ctx = document.getElementById('usageChart').getContext('2d');
    var usage_chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["HVAC", "Lighting", "EV Charging", "Other"],
      datasets: [{
        label: "Amount of CO2e",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});;


    const bar_data = [
        { category: 'Monta Vista', kwh: 70 },
        { category: 'Homestead', kwh: 40 },
        { category: 'Lynbrook', kwh: 50},
        { category: 'Tino', kwh: 30 },
        { category: 'Fremont', kwh: 36}
    ];

    new Chart(
        document.getElementById('energyBarChart'),
        {
        type: 'bar',
        data: {
            labels: bar_data.map(row => row.category),
            datasets: [
            {
                label: 'kWh used, by school',
                data: bar_data.map(row => row.kwh)
            }
            ]
        }
        ,
        options:
        {
            indexAxis: 'y'
        }
    }
    );


    // Toggle buttons for datasets
    document.getElementById('toggleMontaVista').addEventListener('click', function () {
        this.classList.toggle('bg-violet-200')
        toggleDataset(myChart, 'MVHS');
    });

    document.getElementById('toggleHomestead').addEventListener('click', function () {
        this.classList.toggle('bg-emerald-300')
        toggleDataset(myChart, 'HHS');
    });

    function toggleDataset(chart, label) {
        const dataset = chart.data.datasets.find(d => d.label === label);
        dataset.hidden = !dataset.hidden;
        chart.update();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const lottieAnimation = lottie.loadAnimation({
        container: document.getElementById('lottieThermometer'), // ID of the container
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://lottie.host/c16fd91e-2419-4eb1-9540-bb352913bd6c/x92LxRS0s8.json'  
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
