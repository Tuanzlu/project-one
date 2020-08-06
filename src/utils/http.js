/**
 * axios请求封装
 */
import axios from "axios";
import { message } from "ant-design-vue";
import globalStorage from "./globalStorage";
import { jsonToHump, jsonToUnderline } from "./httpFormTran";

let httpInstance = axios.create();

httpInstance.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
httpInstance.defaults.timeout = 50000; //  超时时间
//  请求表单
httpInstance.formdata = (url, data, config) => {
  return httpInstance.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + globalStorage.getStorage("token")
    },
    ...config
  });
};

//  请求拦截器
httpInstance.interceptors.request.use(
  config => {
    //  转换post请求数据
    if (config.data && Object.keys(config.data).length > 0) {
      config.data = jsonToUnderline(config.data);
    }

    //  转换query请求参数
    if (config.params && Object.keys(config.params).length > 0) {
      config.params = jsonToUnderline(config.params);
    }

    //  添加头部信息
    config.headers["Content-Type"] = "application/json;charset=UTF-8";

    //  添加token
    if (globalStorage.getStorage("token")) {
      config.headers.Authorization =
        "Bearer " + globalStorage.getStorage("token");
    }

    console.log("request", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//  响应拦截器
httpInstance.interceptors.response.use(
  response => {
    console.log("response", response);
    if (response.status === 200) {
      if (response.data.err_code) {
        //  处理正常json格式文件
        response.data = jsonToHump(response.data); // 转为小驼峰
        if (response.data.errCode === 4000) {
          return Promise.resolve(response.data.errData);
        } else {
          message.error(
            `错误(错误代码${response.data.errCode}):${response.data.errInfo}`,
            6
          );
          return Promise.reject(new Error("请求失败"));
        }
      } else {
        //  处理文件流
        return Promise.resolve(response.data);
      }
    } else {
      console.log(response);
    }
  },
  error => {
    if (error.response) {
      console.log("omg");
    } else {
      message.error("网络出错啦，请求失败！", 6);
      return Promise.reject(error);
    }
  }
);
export default httpInstance;
