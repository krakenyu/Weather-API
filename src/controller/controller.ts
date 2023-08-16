import * as model from "../model/model";


const getHumidityAndTemperature = () => model.getHourlyTemperatureAndHumidity();

const getPressureAndTemperature = (temperature : number) => model.getPressureLevelByTemperature(temperature);

export { getHumidityAndTemperature, getPressureAndTemperature}
