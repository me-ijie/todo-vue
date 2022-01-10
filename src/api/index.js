export function request (method, api, data) {
  return new Promise (resolve => {
    let httpRequest = new XMLHttpRequest()
    let url = "http://localhost:7001/api" + api
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        let res = JSON.parse(httpRequest.responseText)
        if (res.code !== 0) window.alert(res && res.message || '请求错误')
        resolve(res.data)
      }
      if (httpRequest.readyState == 4 && httpRequest.status !== 200) {
        let res = httpRequest.responseText
        window.alert(res && res.message || '请求错误')
      }
    }
    httpRequest.open(method, url, true)
    httpRequest.setRequestHeader("Content-Type", "application/json")
    let query = JSON.stringify(data)
    httpRequest.withCredentials = true
    httpRequest.send(query)
  })
}
