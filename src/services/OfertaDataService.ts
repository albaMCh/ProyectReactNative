import { IOferta } from "../interface/IOferta.interface";
import axios from "../../axios.config";

class OfertasDataService {
  getAll(queryParams?) {
    return axios
      .get("/ofertas", {
        params: queryParams,
      })
      .then((response) => {
        return <Array<IOferta>>response.data.data.data;
      });
  }

  get(id) {
    return axios.get(`/ofertas/${id}`).then((response) => {
      return <IOferta>response.data.data;
    });
  }
}

export default new OfertasDataService();
