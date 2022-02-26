import React from 'react'
import './article.css'

const Article = ({title, date, imgUrl}) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-img">
        <img src={imgUrl} alt="blog_image"></img>
      </div>
      <div className="gpt3__article-heading">
        <div>
        <p>{date}</p>
        <h3>{title}</h3>          
        </div>
        <p>Read Full Article</p>
      </div>
      
    </div>
  )
}

export default Article