import { useState, useEffect } from 'react'

export function useNews() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const key = import.meta.env.VITE_NEWSDATA_KEY
    fetch(`https://newsdata.io/api/1/latest?apikey=${key}&q=World Cup&category=sports&language=en`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.results || [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch news:', err)
        setLoading(false)
      })
  }, [])

  return { articles, loading }
}