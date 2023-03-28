export const getArticle = () => {
  const endpoint = "/api/v1/articles"
  const options = {
    headers: {
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY
    },
    method: 'GET'
  }

  return new Promise((resolve, reject) => {
    fetch(endpoint, options)
      .then((res) => {
        resClone = res.clone()
        console.log(res.json())
        return res.json()
      })
      .then((data) => resolve(data))
      .catch((err) => {
        console.log(err)
        console.log(resClone.text())
      })
  })
}