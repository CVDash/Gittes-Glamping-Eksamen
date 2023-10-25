import { config } from "../misc/config.js";
const service = {}


service.get = async (type) => {


    return fetch(`${config.path}/${type}`)
    .then((response) => response.json())
    .catch( (err) => console.log(err));

}



export default service