import http from "@/api/http.js"
// 最受欢迎列表接口
export const ratedApi = (params) => http.get("/rated/list", params);
// 电影列表
export const moviesApi = (params) => http.get("/movies/list", params);