//constで定義したオブジェクトはプロパティの変更が可能
const obj1 = {
  name: "海太郎",
  country: "JP"
};
//nameのプロパティ書き換え
obj1.name = "海苔太郎";
console.log(obj1);
//プロパティ追加
obj1.sex = "male";
//constで定義した配列はプロパティの変更が可能
const catArray = ["mikeNeko", "kuroNeko"];
catArray[0] = "siroNeko";
catArray.push("cyatoraNeko");
console.log(catArray);

//テンプレート文字列、文字列の中でJS変数の展開が綺麗に描ける
const myName = "パンクリーム";
const myAge = "365";
const message = `私の名前は${myName}です。年齢は${myAge}才です。`;
console.log(message);

//通常の関数
const normalFunc = (str) => {
  return str;
};
console.log(normalFunc("ふつーの関数だよ")); //ふつーの関数だよ
//アロー関数
const arrFunc = (str) => {
  //引数が一つの時は()を省略可
  //const arrFunc = str => {
  return str;
};
//{}の中の処理が1行の単純な処理は下記の様にも書ける
const arrFunc2 = (str) => str;
console.log(arrFunc2("アロー関数だよ")); //アロー関数だよ

const arrFunc3 = (num1, num2) => {
  return num1 + num2;
};

console.log(arrFunc3(100, 200));

//分割代入(冗長さの回避)
const coffeeShop = {
  name: "ドトール",
  recommend: "アイスココア"
};

//分割代入しない　->冗長である
const cafe1 = `店名は${coffeeShop.name},おすすめ商品は${coffeeShop.recommend}です`;
console.log(cafe1);
//オブジェクトで分割代入
const { name, recommend } = coffeeShop;
const cafe1ObjectBunkatu = `店名は${name}、おすすめ商品は${recommend}です`;
console.log(cafe1ObjectBunkatu);

//配列で分割代入しない
const coffeeShop2 = ["スタバ", "ソイラテ"];
const coffeeShop2Array = `店名は${coffeeShop2[0]}、おすすめ商品は${coffeeShop2[1]}}です`;
console.log(coffeeShop2Array);

//配列で分割代入
const [shopname, productName] = coffeeShop2;
const coffeeShop2ArrayBunkatu = `店名は${shopname}、おすすめ商品は${productName}ですね`;
console.log(coffeeShop2ArrayBunkatu);

//デフォルト値
const saySomething = (name) => console.log(`こんにちは${name}さん`);
saySomething(); //こんにちはundefinedさん
saySomething("天ぷら"); //こんにちは天ぷらさん

const saySomething2 = (name = "名無し") => console.log(`こんにちは${name}さん`);
saySomething2(); //こんにちは名無しさん
saySomething2("天ぷら"); //こんにちは天ぷらさん

//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
//スプレッド構文を使用
sumFunc(...arr1);

//まとめる
