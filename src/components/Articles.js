import React, { useEffect, useState } from 'react'
import { getArticle } from '../api/getArticle'

export const Articles = () => {
  const [loading , setLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchData() {
      let res = await getArticle()
      setArticles(res.contents)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>{articles.forEach(article => console.log(article))}</div>
      )}
    </div>
  )
}
