const BASE_URL = "http://www.pudge.wang:3080/api";
import NProgress from "nprogress";
const http = {
  get(url, params) {
    if (params) {
      const str = new URLSearchParams(params).toString();
      url += "?" + str;
    }
    return fetch(BASE_URL + url)
      .then((response) => response.json())
      .then((res) => {
        if (res.status === 0) {
          return res;
        } else {
          alert(res.msg);
        }
      });
  },
  post(url, data) {
    NProgress.start();
    return fetch(BASE_URL + url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        NProgress.done();
        if (res.status === 0) {
          return res;
        }
      });
  },
};
export default http;
