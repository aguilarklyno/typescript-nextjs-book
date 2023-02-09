let employeeName : string = "John"

function calc(isSum: boolean) {
  let a = 100
  if (isSum) {
    let b = a + 1
    return b
  }
  // return b
}

const num: number = 100
// num = 100

let age: number = 36
let isDone: boolean = false
let color: string = "青"

let mynumber: string = "200"
mynumber: "にひゃく"
// mynumber = 200

const array: string[] = []
array.push("Takuya")
// array.push(1) // 配列の方と合わないためエラーになる

const mixArray = ["foo", 1]
const mixArrayU: (string | number)[] = ["foo", 1] //union型
const mixArrayT: [string, number] = ["foo", 1] //タプル

// string型のnameとnumber型のageのみを持つオブジェクトの型を定義
// const user: { name: string; age: number } = {
//   name: "Takeru",
//   age: 36
// }

console.log(user.name)
console.log(user.age)

function printName(obj: { firstName: string; lastName?: string }) {
  // ...
}

printName({ firstName: "Takuya" })
printName({ firstName: "Takuya", lastName: "Tejima" })

let user: any = { firstName: "Takuya" }
// 以下の行のコードはいずれもコンパイルエラーが起こりません。
user.hello()
user()
user.age = 100
user = "hello"

// 他の方への代入を行ってもエラーが起きません
const n: number = user






