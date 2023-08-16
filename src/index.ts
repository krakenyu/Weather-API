import * as controller from "./controller/controller"

(function main() {
    const arrayHourTemperatureHumidity = controller.getHumidityAndTemperature();
    const arrayPressureTemperature = (temperature:number) => controller.getPressureAndTemperature(temperature);

    console.table(arrayHourTemperatureHumidity); 
    console.table(arrayPressureTemperature(12));
})()


