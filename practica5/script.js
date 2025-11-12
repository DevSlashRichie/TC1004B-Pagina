document.addEventListener('DOMContentLoaded', () => {
    // Views
    const sensorListView = document.getElementById('sensor-list');
    const sensorDetailView = document.getElementById('sensor-detail');
    const criticalAlertView = document.getElementById('critical-alert');
    const sensorHistoryView = document.getElementById('sensor-history');

    // Buttons
    const backToListBtn = document.getElementById('back-to-list');
    const triggerCriticalBtn = document.getElementById('trigger-critical');
    const attendedBtn = document.getElementById('btn-attended');
    const moreInfoBtn = document.getElementById('btn-more-info');
    const backToDetailBtn = document.getElementById('back-to-detail');
    const detailMoreInfoBtn = document.getElementById('btn-detail-more-info');

    // Sensor List Items
    const sensorItems = document.querySelectorAll('.sensor-item');

    // Detail View Elements
    const sensorNameEl = document.getElementById('sensor-name');
    const gasLevelFillEl = document.getElementById('gas-level-fill');
    const gasLevelValueEl = document.getElementById('gas-level-value');
    const lastReadingTimeEl = document.getElementById('last-reading-time');

    // History View Elements
    const historySensorNameEl = document.getElementById('history-sensor-name');
    const historyListContainer = document.getElementById('history-list-container');

    // Dummy Data
    const sensorData = {
        1: { name: 'Sensor de Cocina', level: 20, time: '10:30 AM', history: [
            { time: '10:30 AM', level: 20 },
            { time: '10:25 AM', level: 18 },
            { time: '10:20 AM', level: 15 },
            { time: '10:15 AM', level: 16 },
        ]},
        2: { name: 'Sensor de Sala', level: 65, time: '10:25 AM', history: [
            { time: '10:25 AM', level: 65 },
            { time: '10:20 AM', level: 60 },
            { time: '10:15 AM', level: 55 },
            { time: '10:10 AM', level: 58 },
        ]},
        3: { name: 'Sensor de Garaje', level: 10, time: '10:40 AM', history: [
            { time: '10:40 AM', level: 10 },
            { time: '10:35 AM', level: 9 },
            { time: '10:30 AM', level: 12 },
            { time: '10:25 AM', level: 11 },
        ]},
    };
    
    let currentSensorId = null;

    function showView(view) {
        sensorListView.classList.add('hidden');
        sensorDetailView.classList.add('hidden');
        criticalAlertView.classList.add('hidden');
        sensorHistoryView.classList.add('hidden');
        view.classList.remove('hidden');
    }

    function updateDetailView(sensorId) {
        const data = sensorData[sensorId];
        if (data) {
            currentSensorId = sensorId;
            sensorNameEl.textContent = data.name;
            gasLevelFillEl.style.width = `${data.level}%`;
            gasLevelValueEl.textContent = `${data.level}%`;
            lastReadingTimeEl.textContent = data.time;
        }
    }

    function updateHistoryView(sensorId) {
        const data = sensorData[sensorId];
        if (data) {
            historySensorNameEl.textContent = `Historial de ${data.name}`;
            historyListContainer.innerHTML = ''; // Clear previous history
            data.history.forEach(reading => {
                const item = document.createElement('div');
                item.className = 'history-item';
                item.innerHTML = `
                    <span class="time">${reading.time}</span>
                    <span class="level">${reading.level}%</span>
                `;
                historyListContainer.appendChild(item);
            });
        }
    }

    // Event Listeners
    sensorItems.forEach(item => {
        item.addEventListener('click', () => {
            const sensorId = item.dataset.sensorId;
            updateDetailView(sensorId);
            showView(sensorDetailView);
        });
    });

    backToListBtn.addEventListener('click', () => {
        showView(sensorListView);
    });

    triggerCriticalBtn.addEventListener('click', () => {
        showView(criticalAlertView);
    });

    attendedBtn.addEventListener('click', () => {
        showView(sensorListView);
    });

    moreInfoBtn.addEventListener('click', () => {
        if (currentSensorId) {
            updateHistoryView(currentSensorId);
            showView(sensorHistoryView);
        } else {
            showView(sensorListView);
        }
    });

    detailMoreInfoBtn.addEventListener('click', () => {
        if (currentSensorId) {
            updateHistoryView(currentSensorId);
            showView(sensorHistoryView);
        }
    });

    backToDetailBtn.addEventListener('click', () => {
        if (currentSensorId) {
            showView(sensorDetailView);
        } else {
            showView(sensorListView);
        }
    });

    // Initial View
    showView(sensorListView);
});
