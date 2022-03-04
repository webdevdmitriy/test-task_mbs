// Задача 4

let elementsid = document.querySelectorAll('[data-id]')

console.group('Задача 4')
elementsid.forEach(item => console.log(item))
console.groupEnd('Задача4')

// Задача 5

let itemsTask5 = document.querySelectorAll('#task-5 .class')
const parent = document.querySelector('#task-5 .parent')

let mas = []

itemsTask5.forEach(item =>
  mas.push({ item: item.cloneNode(true), height: item.clientHeight })
)
mas.sort((a, b) => b.height - a.height).map(item => parent.append(item.item))
