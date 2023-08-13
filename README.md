<h1 align="center"> Iniciando un proyecto ¡Paso a paso! </h1>

<img src="https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-536173333_194131.jpg">

<h3> Vamos a repasar paso a paso, todo lo que hay que hacer para iniciar un proyecto desde cero: </h3>

1. Creamos una carpeta general para almacenar todo el proyecto.

2. Creamos las subcarpetas que dividen a nuestra app en partes:
   - `src` contiene todos los módulos de TS que conforman el corazón de nuestra app.
     - `database` tiene el/los archivos JSON que usamos como base de datos.
     - `model` almacena todos los módulos TS que constituyen el modelo.
     - `controller` almacena todos los módulos TS que constituyen el controlador.
     - `index.ts` es el módulo principal que llama al controlador y que contiene la función `main()`.
   - `node_modules` es el directorio que se crea automáticamente al instalar alguna dependencia de terceros usando NPM. No hay que crear esta carpeta manualmente, simplemente aclaro que formará parte del proyecto si llegamos a intalar algún módulo creado por terceros que necesitemos, como `jsonfile`.
   - `dist` es el directorio que se crea automáticamente al compilar código TS a JS ejecutando el comando `tsc`.
   - `README.md` es el archivo de texto MARKDOWN en el que describimos el funcionamiento de la app e incluímos info que consideramos importante y útil.
3. Desde la terminal de VSCode ejecutamos `git init` para inicializar un nuevo repo de GIT local, que una vez terminado el proyecto subiremos a la nube de GitHub.

4. Una vez iniciado el repo de GIT, es necesario indicarle los archivos y/o directorios que **NO** queremos que se suban a la nube. Para esto creamos un archivo `.gitignore`, y mediante saltos de línea indicamos los nombres de los archivos en cuestión. Por ejemplo:
   node_modules
   dist
5. Ahora podemos inicializar el proyecto con NPM: `npm init -y`. Este comando crea de forma automática el archivo de configuración `package.json` al cuál tenemos que configurarle los scripts para facilitar la ejecución de los comandos. Antes, vamos a instalar lo necesario para trabajar en la app.

6. Instalar **TypeScript** y su intérprete **ts-node** con `npm i -D typescript ts-node`.

7. Configurar los scripts del **package.json** de la siguiente forma:
   "scripts": {
   "dev": "ts-node ./src/index.ts",
   "build": "tsc"
   }
8. Necesitamos también configurar lo mínimo necesario para usar _TypeScript_. Para esto, ejecutamos `npx tsc --init`. Esto creará de forma automática el archivo `tsconfig.json`, el cuál tenemos que configurar los parámetros:

- `target: ESNext` | El compilador traducirá el código **TS** a la última versión de **ECMAScript**.
- `module: commonjs` | El sistema de módulos será el desarrollado por Node.
- `rootDir: ./src/` | Con esto configuramos que la carpeta con los archivos fuente sea "/src".
- `outDir: ./dist/` | Acá indicamos la carpeta de destino de los archivos creados por el compilador de **TS**.
- `alwaysStrict: true` | Con este comando nos aseguramos que todos los archivos JS emitidos estén en modo estricto ¿Qué es eso?! Chequeá los links de ayuda!

9. ¡LISTO!

<h1 align="center"> Consigna </h1>

Para este desafío les propongo que desarrollen una app, siguiendo el patrón MVC, que consuma los datos de un JSON generado por una API del clima (ver link). El objetivo es que la app imprima esto en la consola:

<p align="center"><img src="https://i.postimg.cc/d3NRcMHr/Screenshot-from-2023-07-22-00-11-59.png"></p>

El modelo tiene que exportar sólamente dos funciones (puede tener todas las funciones que quieran, pero sólamente debe exportar estas dos):

- `getHourlyTemperatureAndHumidity()` => Retorna una collection cuyos objetos son `{time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}`.
- `getPressureLevelByTemperature(temperature)` => Retorna una collection en la que la propiedad `temperature` de los objetos sea igual o mayor al valor `temperature` recibido por parámetro. Los objetos que conformen esta collection tienen que tener la forma `{pressureSurfaceLeve: 1009.62, temperature: 21.25}`.

<h1 align="center"> LINKS </h1>

- [¿Qué es el modo estricto?](https://www.youtube.com/watch?v=7e6ssF78Af4&ab_channel=LaCocinadelC%C3%B3digo)

- [Datos JSON](https://api.tomorrow.io/v4/weather/history/recent?location=buenos-aires&apikey=9RJgHTHxo3rMmnywTh7rfC4pTeOZ61n2)

- [Weather API](https://docs.tomorrow.io/reference/welcome)

- [Importá JSON ¡Sin jsonfile!](https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript)

- [¿Cómo imprimir data en formato tabla?](https://developer.mozilla.org/es/docs/Web/API/console/table)
