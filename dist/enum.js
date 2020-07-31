var StarBucksGrade;
(function (StarBucksGrade) {
    StarBucksGrade[StarBucksGrade["WELCOME"] = 1] = "WELCOME";
    StarBucksGrade[StarBucksGrade["GREEN"] = 2] = "GREEN";
    StarBucksGrade[StarBucksGrade["GOLD"] = 3] = "GOLD";
})(StarBucksGrade || (StarBucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarBucksGrade.WELCOME:
            return 0;
        case StarBucksGrade.GREEN:
            return 5;
        case StarBucksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarBucksGrade.GREEN));
console.log(StarBucksGrade[2]);
//# sourceMappingURL=enum.js.map