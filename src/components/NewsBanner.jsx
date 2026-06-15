function NewsBanner({ articles }) {
    if (articles.length === 0) return null
  
    return (
      <div className="news-banner">
        <span className="news-banner-label">News</span>
        <div className="news-banner-scroll">
          {articles.slice(0, 6).map(article => (
            <a
              key={article.article_id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-banner-item"
            >
              {article.image_url && (
                <img src={article.image_url} alt="" className="news-thumb" />
              )}
              <div className="news-text">
                <p className="news-title">{article.title}</p>
                <p className="news-source">{article.source_name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }
  
  export default NewsBanner