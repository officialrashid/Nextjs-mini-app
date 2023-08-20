import axios from "axios";
// import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
export const ProductApiAxios = () => {
  // const navigate = useNavigate();
  const api = axios.create({
    baseURL: "http://13.233.55.149",
   
  });

  api.interceptors.response.use((res) => {
    if (res.status === null) {
      // navigate("/login");
    } else {
      return res;
    }
  },(error)=>{
    // navigate("/login");
  }
  );
  return api;
}; 



ProductApiAxios