import axios from "axios";

const api = axios.create({
    // projede sonrasında farklı veri alınmak istediğinde kullanılmak üzere api'ı sadeleştirdim.
    baseURL: `https://swapi.dev/api/`, 
})

export default api;