enum StarBucksGrade {
    WELCOME = 1,
    GREEN = 2,
    GOLD = 3
}

function getDiscount(v: StarBucksGrade): number {
    switch (v) {
        case StarBucksGrade.WELCOME:
            return 0;
        case StarBucksGrade.GREEN:
            return 5;
        case StarBucksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarBucksGrade.GREEN))
console.log(StarBucksGrade[2])
