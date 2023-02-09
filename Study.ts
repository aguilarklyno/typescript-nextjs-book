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
const user: { name: string; age: number } = {
  name: "Takeru",
  age: 36
}

console.log(user.name)
console.log(user.age)

function peintName(obj: { firstName: string; lastName?: string }) {
  
}


