import CrudService from './crud.service';
import apiService from "@/services/api.service";

class CommentsService extends CrudService {
    /**
     * Service url
     *
     * @returns {String}
     */
    static get URL() {
        return 'rules';
    }

    /**
     *
     * @param params
     * @returns {Promise<axios.AxiosResponse>}
     */
    static list(params) {
        return apiService.get(`${this.URL}/list`, {params})
    }
}

export default CommentsService;
