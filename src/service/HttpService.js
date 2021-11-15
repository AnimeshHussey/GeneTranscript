import Axios from "axios";

export const HttpNodeService = Axios.create({
  baseURL: `http://rest.ensembl.org`,
});
