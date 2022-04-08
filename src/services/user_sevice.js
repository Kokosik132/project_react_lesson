import {axiosService} from "./axios_service";
import {urls} from "../constans";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService(`${urls.users}/${id}`)
}

export {userService}