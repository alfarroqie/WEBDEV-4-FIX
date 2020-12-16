import { users } from "../../../app/models";
import http from "../http-common";

class UserDataService {
    create() {
        return http.get("/", users.create);
    }
    
}

export default new UserDataService();
