const batteryInfo = document.querySelector('.battery');
const chargingInfo = document.querySelector('.charging');

navigator.getBattery().then(battery =>{

  
    function getAllBatteryInfo() {
        getBatteryInfo()
        getChargingInfo()
    }
    getAllBatteryInfo()

    battery.addEventListener('levelchange' , function () {
       
        getBatteryInfo();
    })

    function getBatteryInfo() {
        batteryInfo.textContent = Math.round(battery.level * 100) + '%'; 
     
    }

  
    battery.addEventListener('chargingchange' , function () {
        getChargingInfo()
    })

    function getChargingInfo() {
        chargingInfo.textContent = battery.charging ? 'Yes' : 'No';
       
    }
})