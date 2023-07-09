function calculateLevel(exp) {
    let level = 1;
    let expEndPoint = 1000;

    while (exp >= expEndPoint * 1.5) {
        level++;
        expEndPoint *= 1.5;
    }

    return level;
}

export {
    calculateLevel
}