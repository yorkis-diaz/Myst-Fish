function checkScores (leaderScores, score) {
    debugger
    const scores = Object.values(leaderScores)
    scores.every(entry => entry.score > score)
}

export default checkScores;