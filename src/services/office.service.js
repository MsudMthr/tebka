import CrudService from './crud.service';
import apiService from "@/services/api.service";

class CommentsService extends CrudService {
    /**
     * Service url
     *
     * @returns {String}
     */
    static get URL() {
        return 'office';
    }

    /**
     *
     * @param params
     * @returns {Promise<axios.AxiosResponse>}
     */
    static show(params) {
        return apiService.get(`${this.URL}/show`, {params})
    }
}

export default CommentsService;
