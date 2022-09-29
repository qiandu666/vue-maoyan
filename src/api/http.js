const BASE_URL = "http://www.pudge.wang:3080/api";
const http = {
    get(url, params) {
        if (params) {
            const str = new URLSearchParams(params).toString()
            url += '?' + str
        }
        return fetch(BASE_URL + url).then((response) => response.json()).then((res) => {
            if (res.status === 0) {
                return res
            } else {
                alert(res.msg)
            }
        })
    },
    post(url, data) {
        return fetch(BASE_URL + url, {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((res) => {
                if (res.status === 0) {
                    return res;
                }
            });
    },
}
export default http