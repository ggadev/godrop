function calculateLevel(exp) {
    let level = 1;
    let expEndPoint = 1000;
    let currentExp = exp;

    while (exp >= expEndPoint * 1.5) {
        level++;
        expEndPoint *= 1.5;
    }

    currentExp -= expEndPoint;
    if(level === 1)
        currentExp = exp;

    console.log({
        level: level,
        currentExp: currentExp,
        expEnd: expEndPoint
    });

    return {
        level: level,
        currentExp: currentExp,
        expEnd: expEndPoint
    };
}

export {
    calculateLevel
}