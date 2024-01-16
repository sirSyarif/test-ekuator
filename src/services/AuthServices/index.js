import { request } from "@/utils/request";
import { BASE_MODEL } from "@/utils/constant";

const login = (data) => {
  return request(`${BASE_MODEL}/login`, {
    method: "POST",
    data,
  });
};

const register = (data) => {
  return request(`${BASE_MODEL}/register`, {
    method: "POST",
    data,
  });
};

const AuthServices = {
  login,
  register,
};

export default AuthServices;
