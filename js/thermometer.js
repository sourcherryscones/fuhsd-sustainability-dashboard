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
        this.classList.toggle('bg-amber-300')
        updateTemperatureDisplay();
    });

    updateTemperatureDisplay(); // Initialize display on load
});
