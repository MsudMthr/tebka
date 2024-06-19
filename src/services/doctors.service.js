import CrudService from './crud.service';
import apiService from "@/services/api.service";

class DoctorsService extends CrudService {
    /**
     * Service url
     *
     * @returns {String}
     */
    static get URL() {
        return 'doctors';
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

export default DoctorsService;
