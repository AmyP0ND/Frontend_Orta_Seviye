
import getData from "./app.js";

getData(1)
    .then(getData => console.log(getData))
    .catch(e => console.log(e))