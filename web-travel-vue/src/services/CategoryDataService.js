import http from "../http-common";
const CATEGORY_BASE_URL = "/categorys"
class CategoryDataService{
    
    create(data) {
        return http.post(CATEGORY_BASE_URL+"/", data);
    }
}

export default new CategoryDataService();