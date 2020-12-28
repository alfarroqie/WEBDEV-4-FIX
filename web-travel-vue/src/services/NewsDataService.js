import http from "../http-common";

class NewsDataService {
    getAll() {
        return http.get("/news");
    }

    get(id) {
        return http.get(`/news/id/${id}`);
    }

    create(data) {
        return http.post("/news", data);
    }

    update(id, data) {
        return http.put(`/news/id/${id}`, data);
    }

    delete(id) {
        return http.delete(`/news/${id}`);
    }

    deleteAll() {
        return http.delete(`/news`);
    }

    findByTitle(title) {
        return http.get(`/news//${title}`);
    }
    addNewsCategory(data){
        return http.post(`news/category`, data);
    }
    findByCategory(category) {
        return http.get(`/news/newsCategory/${category}`);
    }

    findNewest() {
        return http.get(`/news/newest`);
    }
    findPopular() {
        return http.get(`/news/popular`);
    }
}

export default new NewsDataService();
