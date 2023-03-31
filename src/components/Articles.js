import React, { useEffect, useState } from 'react'
import { getArticle } from '../api/getArticle'
import './Articles.css'
import { Article } from './Article'

export const Articles = () => {
  const [loading , setLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchData() {
      let res = await getArticle()
      console.log(res.contents)
      setArticles(res.contents)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="articles">
      <p className="title">All articles</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="allArticles">
          {articles.map((article, index) => (
            <Article article={article} key={index} />
        ))}</div>
      )}
    </div>
  )
}
