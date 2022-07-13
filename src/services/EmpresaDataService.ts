import { IEmpresa } from "../interface/IEmpresa.interface";
import axios from "../../axios.config";
class EmpresaDataService {
  getAll(queryParams) {
    return axios
      .get("/ Empresas", {
        params: queryParams,
      })
      .then((response) => {
        return <Array<IEmpresa>>response.data;
      });
  }

  get(id) {
    return axios.get("/empresas/${id}").then((response) => {
      return <IEmpresa>response.data;
    });
  }
}
export default new EmpresaDataService();
