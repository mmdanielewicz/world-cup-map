import { useState, useEffect } from 'react'

export function useTeams() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://worldcup26.ir/get/teams')
      .then(res => res.json())
      .then(data => {
        setTeams(data.teams)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch teams:', err)
        setLoading(false)
      })
  }, [])

  return { teams, loading }
}