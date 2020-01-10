function checkScores (leaderScores, score) {
    const scores = Object.values(leaderScores)
    return scores.every(entry => entry.score > score)
}

export default checkScores;