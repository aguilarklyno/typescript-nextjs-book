// let employeeName : string = "John"

// function calc(isSum: boolean) {
//   let a = 100
//   if (isSum) {
//     let b = a + 1
//     return b
//   }
//   // return b
// }

// const num: number = 100
// // num = 100

// let age: number = 36
// let isDone: boolean = false
// let color: string = "青"

// let mynumber: string = "200"
// mynumber: "にひゃく"
// // mynumber = 200

// const array: string[] = []
// array.push("Takuya")
// // array.push(1) // 配列の方と合わないためエラーになる

// const mixArray = ["foo", 1]
// const mixArrayU: (string | number)[] = ["foo", 1] //union型
// const mixArrayT: [string, number] = ["foo", 1] //タプル

// // string型のnameとnumber型のageのみを持つオブジェクトの型を定義
// // const user: { name: string; age: number } = {
// //   name: "Takeru",
// //   age: 36
// // }

// // console.log(user.name)
// // console.log(user.age)

// function printName(obj: { firstName: string; lastName?: string }) {
//   // ...
// }

// printName({ firstName: "Takuya" })
// printName({ firstName: "Takuya", lastName: "Tejima" })

// let user: any = { firstName: "Takuya" }
// // 以下の行のコードはいずれもコンパイルエラーが起こりません。
// user.hello()
// user()
// user.age = 100
// user = "hello"

// // 他の方への代入を行ってもエラーが起きません
// const n: number = user

// // function sayHello( name: string): string{
// //   return `Hello ${name}`
// // }
// // sayHello( "Takuya" )

// // function sayHello( name: string, greeting?: string): string {
// //   return `${greeting} ${name}`
// // }

// // sayHello("Takuya") //Takuya
// // sayHello("Takuya", "Hello") //Hello Takuya

// function sayHello(name: string, greeting: string = "Hello"): string {
//   return `${greeting} ${name}`
// }

// sayHello("Takuya") //Hello Takuya
// sayHello("Takuya", "Hey") //Hey Takuya

// function printName(firstName: string. formatter: (name: string) => string) {
//   console.log(formatter(firstName))
// }

// function formatName(name: string): string {
//   return `${name} san`
// }

// // printName( "Takuya", formatName) //Takuya san

// function genBirdsInfo(name: string) : string[]{
//   return name.split(',')
// }

// // 関数の型を利用
// // (x: string) => string[]
// function singBirds(birdInfo: (x: string) => string[]): string{
//   return birdInfo("hato, kiji")[0] + "piyo piyo"
// }

// console.log(singBirds(genBirdsInfo)) //"hato piyo piyo"
// console.log(singBirds("dobato")) // 型が合わないためエラー

// const age = 10
// console.log(age.length)

// const user = {
//   name:"Takuya",
//   age: 36
// }

// console.log(user.age.length)

// function getUser() {
//   return {
//     name: "Takuya",
//     age: 36
//   }
// }

// const user = getUser()
// console.log(user.age.length)

// const names = ["Takuya", "Yoshiki", "taketo"]

// names.forEach((name) => {
//   console.log(name.toUpperCase())
// })

// // const myCanvas = document.getElementById("main_canvas")
// // console.log(myCanvas.width) //

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement

// const result = (response as any) as User 

// type Name = string

// type Point = {
//   x: number;
//   y: number;
// }

// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です`)
//   console.log(`y座標は${point.y}です`)
// }

// printPoint({ x: 100, y: 100})
// //型があってもプロパティ名が異なるとエラー
// //printPoint({ z: 100, t:100 })

// type Formatter = ( a: string ) => string

// function printName(firstName: string, formatter: Formatter) {
//   console.log(formatter(firstName))
// }

// type Label = {
//   [key: string] : string
// }

// const labels: Label = {
//   topTitle: "トップページのタイトルです。",
//   topSubTitle: "トップページのサブタイトルです。",
//   topFeature1: "トップページの機能1です",
//   topFeature2: "トップページの機能2です",
// }

// //値部分の型が合わないためエラー
// const hoge: Label = {
//   message: 100
// }

// interface Point {
//   x: number,
//   y: number,
// }

// function printPoint(point: Point) {
//   console.log(`x座標は${point.x}です`)
//   console.log(`y座標は${point.y}です`)
//   console.log(`z座標は${point.z}です`)
// }

// interface Point {
//   z: number,
// }

// //引数のオブジェクトにzが存在しないためコンパイル時にエラーになります。
// printPoint({ x: 100, y: 100 })

// //問題なく動作します
// printPoint({x: 100, y: 100, z: 200})

// interface Point {
//   x: number;
//   y: number;
//   z: number;
// }

// //クラスがインターフェースimplementsした際に、zが存在しないためコンパイル時エラー
// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

interface Point {
  x: number;
  y: number;
  z?: number;
}

// エラーは発生しません
class MyPoint impolements Point {
  x: number;
  y: number;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

//複数のインターフェースを継承して新たなインターフェースを定義できます
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "赤",
  radius: 10
}

class Point {
  x: number;
  y: number;

//引数がない場合の初期値を指定します
  constructor(x: number = 0, y: number = 0) {
    this.x = x 
    this.y = y 
  }

  moveX(n: number): void{
    this.x += n
  }

  moveY(n: number): void{
    this.y += n
  }
}

const point = new Point()
point.moveX(10)
console.log(`${point.x}, ${point.y}`) //10,0

class Point3D extends Point {
  z: number;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    //継承元のコンストラクタを呼び出す
    super(x, y)
    this. z = z
  }

  moveZ(n: number): void {
    this.z += n
  }
}

const point3D = new Point3D()
//継承元のメソッドを呼び出すことができる
point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`) // 10, 0, 20

interface IUser {
  name: string;
  age: number;
  sayHello: () => string; // 引数なしで文字列を返す
}

class User implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = ""
    this.age = 0
  }

  //インターフェースに定義されているメソッドを実装しない場合、コンパイル時エラーになります
  sayHello(): string{
    return`こんにちは、私は${this.name}、${this.age}歳です。`
  }
}

const user = new User()
user.name = "Takuya"
user.age = 36
console.log(user.sayHello()) //こんにちは、私はTakuya、36歳です

class BasePoint3D {
  public x: number;
  private y: number;
  protected z: number;
}

//インスタンスかを行った場合のアクセス制御の例です
const basePoint = new BasePoint3D()
basePoint.x //OK
basePoint.y //コンパイル時エラーが起きます
basePoint.z //コンパイル時エラーが起きます。protectedもアクセスできません

//クラスを継承した際のアクセス制御
class ChildPoint extends BasePoint3D{
  constructor() {
    super()
    this.x //Ok
    this.y //コンパイル時エラーが起きます。Privateであるためアクセスできません
    this.z //コンパイル時エラーが起きます。Protectedであるためアクセスできません
  }
}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

//enum Diretion を参照
let direction: Direction = Direction.Left
//2 という数字が出力される
console.log(direction)

//enum を代入した変数に別の方の値を代入しようとするとエラーになります
direction = "Left"

//T はクラス内で利用する仮の方の名前です
class Queue<T> {
  //内部にTの型の配列を初期化
  private array: T[]

  //Tの方の値を配列に追加します
  push(item: T) {
    this.array.push(item)
  }

  //Tの型の配列最初の値を取り出します。
  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>() //数値型を扱うキュー作成します。
queue.push(111)
queue.push(112)
queue.push("hoge") //number型ではないのでコンパイル時エラーになります

let str = "fuga"
str = queue.pop() // strはnumber型ではないのでコンパイル時エラーになります






