import http from "@/api/http.js";
// 最受欢迎列表接口
export const ratedApi = (params) => http.get("/rated/list", params);
// 电影列表
export const moviesApi = (params) => http.get("/movies/list", params);
// 上拉加载更多
export const moviesMoreApi = (data) => http.post("/movies/more", data);
// 地区
export const areaApi = (data) => http.get("/area/list", data);
// 详情数据
export const detailApi = (data) => http.post("/movies/detail", data);
