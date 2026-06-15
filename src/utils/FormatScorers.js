export function formatScorers(scorerString) {
    if (!scorerString || scorerString === "null") return ""
    return scorerString
      .replace(/^\{|\}$/g, '')
      .split('","')
      .map(s => s.replace(/"/g, '').trim())
      .join(', ')
  }