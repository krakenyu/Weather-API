import * as jsonfile from 'jsonfile';
const DB_PATH = './src/database/database.json' ;

const getAllData = (): any => jsonfile.readFileSync(DB_PATH)
const allData = getAllData()
const dataValues = getAllData().timelines.hourly

const getHourlyTemperatureAndHumidity = () => { 
    let arrayhour = []
    for(let i = 0; i < dataValues.length; i++){
        arrayhour.push( {
            time : dataValues[i].time,
            humidity : dataValues[i].values.humidity,
            temperature : dataValues[i].values.temperature,
        })
    }
    return arrayhour
}
const getPressureLevelByTemperature = (temperatures: number) => { 
    let arrayOfPressure = [];
    for(let i = 0 ; i < dataValues.length ; i++){
        if(Math.trunc(temperatures) <= dataValues[i].values.temperature){
            arrayOfPressure.push( {
                pressureSurfaceLevel: dataValues[i].values.pressureSurfaceLevel,
                temperature : dataValues[i].values.temperature
            })
        }else{
            return "temperature doesnt exist"
        }
    } 
    return arrayOfPressure
}

export { getHourlyTemperatureAndHumidity, getPressureLevelByTemperature };