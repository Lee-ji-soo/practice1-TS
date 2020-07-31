function add(x: number, y: number): number {
    return x + y
}
add(1, 2);

function buildUserInfo(name = '', email = '') {
    return { name: name, email: email }
}
const user = buildUserInfo()

const add2 = (a: number, b: number): number => a + b;

//overload
interface Storage {
    일반: string
}
interface ColdStorage {
    냉장고: string
}
function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage

function store(type: "통조림" | "아이스크림") {
    if (type === "통조림") {
        return { 일반: "통조림" }
    } else if (type === "아이스크림") {
        return { 냉장고: "아이스크림" }
    }
}
const a = store("통조림")
console.log(a.일반)
