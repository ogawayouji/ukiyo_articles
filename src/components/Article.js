import React from 'react'
import './Article.css'

export const Article = (props) => {
  const article = props.article

  return (
    <div className="article">
      <img src={article.eyecatch.url} className="articleImage" />
        <p className="articleTitle">
          {article.title}
        </p>
    </div>
  )
}
