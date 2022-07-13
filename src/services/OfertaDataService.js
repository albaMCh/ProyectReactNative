import { IOferta } from "../interface/IOferta.interface";
import axios from "../config/axios.config.ts";

class OfertasDataService {
  getAll(queryParams) {
    return axios
      .get(baseURL / api / ofertas, {
        params: queryParams,
      })
      .then((response) => {
        return response.data.map((item) => {
          return new IOferta (item);
        });
      });
  }

  get(id) {
    return axios.get(baseURL / api / ofertas / id).then((response) => {
      return new IOferta(response.data);
    });
  }
}
export default OfertasDataService;
