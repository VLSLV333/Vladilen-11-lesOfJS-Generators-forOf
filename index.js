// function* strGenerator (){              // генератор по факту порційно видає певний результат
//     yield "H"
//     yield "e"
//     yield "l"
//     yield "l"
//     yield "o"
// }

// const str = strGenerator()              // str.next() - викликає наступний yield; після показу всіх yield буде досягнуто {value: undefined, done: true}
//                                        //str.next().value = викликає конкретно саме значення (у нас це буква "H")

// function* numberGen(n = 10) {
//     for (let i = 0; i < n; i++){
//         yield i
//     }
// }

// const num = numberGen(7)

// const iterator = {          // повторили логіку генератора
//     gen(n = 10){
//         let i = 0
//         return {
//             next (){
//                 if (i < n){
//                     return {value: ++i, done: "false"}
//                 } 
//                     return {value: "undefined", done: "true"}
//             }
//         }
//     }
// }

// const v = iterator.gen(3)


// for (let k of "Hello"){          // k = кожна ітерація слова "Hello" - тобто кожна буква
//     console.log(k)
// }


// for (let k of [1, 1, 3, 5, 8]){          // k = кожна ітерація array фібоначі - тобто кожна цифра
//     console.log(k)
// }



// const iterator = {          // повторили логіку генератора
//     [Symbol.iterator](n = 10){
//         let i = 0
//         return {
//             next (){
//                 if (i < n){
//                     return {value: ++i, done: "false"}
//                 } 
//                     return {value: undefined, done: "true"}
//             }
//         }
//     }
// }

function* iter( n = 10){
    for (let i = 0; i < n; i++){
        yield i;
    }
}


for (let k of iter(78)){          // 
    console.log(k)
}
