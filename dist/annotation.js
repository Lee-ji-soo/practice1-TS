function add(x, y) {
    return x + y;
}
add(1, 2);
function buildUserInfo(name, email) {
    if (name === void 0) { name = ''; }
    if (email === void 0) { email = ''; }
    return { name: name, email: email };
}
var user = buildUserInfo();
var add2 = function (a, b) { return a + b; };
function store(name) {
    if (name === "통조림") {
        return { 일반: "통조림" };
    }
    else if (name === "아이스크림") {
        return { 냉장고: "아이스크림" };
    }
}
var a = store("통조림");
console.log(a.일반);
//# sourceMappingURL=annotation.js.map