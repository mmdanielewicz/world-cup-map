import { useState, useEffect } from 'react'

export function useGames() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch games from free github API
    fetch('https://worldcup26.ir/get/games')
      .then(res => res.json())
      .then(data => {
        setGames(data.games)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch games:', err)
        setLoading(false)
      })
  }, [])

  return { games, loading }
}