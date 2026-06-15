// checks live status based on time difference
export function isLikelyLive(game) {
  if (game.finished === "TRUE") return false
  const kickoff = new Date(game.local_date)
  const now = new Date()
  const minutesSinceKickoff = (now - kickoff) / 1000 / 60
  return minutesSinceKickoff >= 0 && minutesSinceKickoff < 130
}

// checks the games happening today
export function isToday(game) {
  const kickoff = new Date(game.local_date)
  const now = new Date()
  return kickoff.toDateString() === now.toDateString()
}