import { IEmpresa } from "../interface/IEmpresa.interface";
import axios from "../config/axios.config.ts";
class EmpresaDataService {
  getAll(queryParams) {
    return axios
      .get(baseURL / api / Empresas, {
        params: queryParams,
      })
      .then((response) => {
        return response.data.map((item) => {
          return new IEmpresa(item);
        });
      });
  }

  get(id) {
    return axios.get(baseURL / api / Empresas / id).then((response) => {
      return new IEmpresa(response.data);
    });
  }
}
export default EmpresaDataService;
