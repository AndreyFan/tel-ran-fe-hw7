// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
console.log("--------------Задание 1---------------")
function minNumber(a, b) {
    if (a < b) {
        return a
    } else return b
}
let a = prompt("введите 1-е число")
let b = prompt("введите 2-е число")
console.log('наименьшее число')
console.log(minNumber(a, b))

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
console.log("--------------Задание 2---------------")
function Arr(a, b) {
    let arr1 = []
    if (a > b) {
        for (let i = a; i >= b; i--) {
            arr1.push(i)
        }
    } else for (let i = b; i >= a; i--) {
        arr1.push(i)
    }
    return arr1
}
console.log(Arr(23, 15))
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

console.log("--------------Задание 3---------------")
function power(a, b = 2) {
    return a ** b
}
console.log(power(2, 5))

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

console.log("--------------Задание 4---------------")
function summ(n) {
    let s = 0
    for (let i = 1; i < n; i++) {
        s = s + i
    } return s
}
console.log(summ(6)) // ответ 15

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
console.log("--------------Задание 5---------------")
function summPosNeg(n, m) {
    let sum = 0
    let sumN = 0
    let resul = []
    if (n > m) {
        for (let i = m; i < n; i++) {
            if (i % 2 === 0) {
                sum = sum + i
            } else sumN = sumN + i
        }
    } else for (let i = n; i < m; i++) {
        if (i % 2 === 0) {
            sum = sum + i
        } else sumN = sumN + i
    } resul.push(sum)
    resul.push(sumN)
    return resul
}
console.log(summPosNeg(8, 19))  // ответ 78, 65

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Пример: [ 'one', 'two', 'three' ] => 'three'
console.log("--------------Задание 6---------------")
function langWort(worte) {
    let langW = null
    if (worte.length === 0) {
        return langW
    } else {
        langW = worte[0]
        for (let i = 1; i < worte.length; i++) {
            if (worte[i].length > langW.length) {
                langW = worte[i]
            }
        }
    }
    return langW
}
let wort = langWort(["one", "two", "three", "four", "five", "six", "seven"])
console.log(wort)
let wortN = langWort([])
console.log(wortN)