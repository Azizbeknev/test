
                            // LESSON_1


// let aziz = [2,3,4,5,6,5,3,4,5,6,4,5,6,3,5,6,34,6,7,8,9]
// let arr = 0
// for (let i = 0; i < aziz.length; i++) {
// if(aziz[i] <= 5 ){
//     aziz.filter(arr * aziz[i])
// }
    
// }
// console.log(arr);
// console.log(document);



// let text = document.getElementsByTagName('h1')
// console.log(text);                                       mettod_1



// text.style.color = "red"



// text.mal(i => i.style.color = "red")



// text.forEach( i => i.style.color = "red");
//     for (let i = 0; i < array.length; i++) {
//         text[i].style.color  = "green"  }


// let text = document.querySelectorAll( 'h1' )
// console.log(text);                                     mettod_2
   

// let text = document.getElementsByClassName('text1')
// console.log(text);                                     mettod_3
 

// let text = document.querySelectorAll('text')         
//  console.log(text);                                     mettod_4


// let text = document.querySelector('#texr1')
// console.log(text);                                       mettod_5


// let text = document.querySelector('#text1')
// text.style.color = "red"
// text.style.backgroundcolor = "blue"
// text.style.border = "2px solid orange"

//  function f(){
//     if(text.innerHTML == 'dom') {
//     text.innerHTML = "aziz"
// }

//  }
// let text = document.querySelector('#az')

// function a(){
//     if(text.innerHTML == 'отправить') {
//         text.innerHTML = "отправлено"
//     }
// }
// let text = document.querySelector('#a')
// text.style.height = "200px"
// text.style.width = "200px"
// text.style.backgroundColor = "blue"
// text.style.color = "white"
// let a = prompt()
// let b = prompt()
// let v = prompt()
// let g = prompt()
// let text = document.querySelector('#a')
// text.style.height = a
// text.style.width = b
// text.style.backgroundColor = v
// text.style.color = g
// let text = document.querySelector('#a')
// console.log(text);

    
//         if(text.style.color == 'red') {
//             text.style.backgroundColor = "black"
//         }
// let text = document.querySelector('#text1')
// text.style.background = "yellow"
// text.style.textAlign = "center"
// text.style.width = "50%"
// text.style.margin = "auto"
// function a(){
//     if(text.innerHTML == '111') {
//         text.innerHTML = "222"
//     }else if(text.innerHTML == '222') {
//         text.innerHTML = "333"
//     }else if(text.innerHTML == '333') {
//         text.innerHTML = "444"
//     }else if(text.innerHTML == '444') {
//         text.innerHTML = "555"
//     }else if(text.innerHTML == '555') {
//         text.innerHTML = "666"
//     }else if(text.innerHTML == '666') {
//         text.innerHTML = "777"
//     }else if(text.innerHTML == '777') {
//         text.innerHTML = "888"
//     }else if(text.innerHTML == '888') {
//         text.innerHTML = "999"
//     }else if(text.innerHTML == '999') {
//         text.innerHTML = "111"
//     }
// }
// let blok1 = document.querySelector('#inpud1')
// function button(){
// if(blok1.innerHTML == 'токио'){
//     blok1.innerHTML =="правильно"
// }else if
// }
// let blok2 = document.querySelector('#inpud2')
// function button(){
// if(blok2.innerHTML == 'вашингтон'){
//     blok2.innerHTML =="правильно"
// }else if(blok2.innerHTML == 'Вашингтон'){
//     blok2.innerHTML =="правильно"
// }
// }
// let blok3 = document.querySelector('#inpud3')
// function button(){
// if(blok3.innerHTML == 'сеул'){
//     blok3.innerHTML =="правильно"
// }else if(blok3.innerHTML == 'Сеул'){
//     blok3.innerHTML =="правильно"
// }
// }
// let blok4 = document.querySelector('#inpud4')
// function button(){
// if(blok4.innerHTML == 'бразилия'){
//     blok4.innerHTML =="правильно"
// }else if(blok4.innerHTML == 'Бразилия'){
//     blok4.innerHTML =="правильно"
// }
// }


let button = document.querySelector('#button')
let input = document.querySelectorAll('input')  
// console.log(input[0].value);
button.onclick = func


function func(){
    let res = 0
    if(input[0].value == "tokyo" || input[0].value == "Tokyo" ){
        res = res+20
    }
     if(input[1].value == "washington" || input[0].value == "Washington" ){
        res = res+30
    }
    if(input[2].value == "seul" || input[0].value == "Seul" ){
        res = res+20
    }
    if(input[3].value == "brazil" || input[0].value == "Brazil" ){
        res = res+30
    }
document.body.innerHTML =   `<h2> ${"вы ответи на "+res+" балов"} </h2>`  
    
}
const swi = document.querySelector('.a')
var block = document.querySelector('.conteyner')

swi.onclick = ()=>{
    document.body.classList.toggle('newclass')
    block.classList.toggle('block2')
}
