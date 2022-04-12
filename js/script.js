//-------------------------------------Task 1--------------------------------------------------

/*let arr = [];

//------------------------------------Метод довжини масива length--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
console.log(arr.length);

//------------------------------------Метод двох ключів масива--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;
console.log(arr);

//------------------------------------Заміна значень масива--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
arr[0] = 'Olia';
console.log(arr);

//------------------------------------Стек та черга. Метод push--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
arr.push('Olia');
console.log(arr);

//------------------------------------Стек та черга. Метод shift--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
arr.shift();
console.log(arr);

//------------------------------------Стек та черга. Метод pop--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
arr.pop();
console.log(arr);

//------------------------------------Стек та черга. Метод unshift--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
arr.unshift('Olia', 'Katia');
console.log(arr);

//------------------------------------Метод splice--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
arr.splice(1,1);                            //Видалення
console.log(arr);

let arr2 = ['Masha', 'Stas', 'Andrii'];
arr2.splice(0, 1, 'Dasha');                //Заміна
console.log(arr2);

let arr3 = ['Masha', 'Stas', 'Andrii'];
arr3.splice(4, 0, 'Olia', 'Katia');       //Додавання
console.log(arr3);

//------------------------------------Метод slice--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
let arr2 = arr.slice(2,3);
console.log(arr2);

arr3 = ['Masha', 'Stas', 'Andrii'];
let arr4 = arr.slice();
console.log(arr4);

//------------------------------------Метод concat--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
let arr2 = arr.concat('Taras');
console.log(arr2);

//------------------------------------Методи indexOf / includes--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];

console.log(arr.indexOf('Andrii'));
console.log(arr.includes('Anya'));

//------------------------------------Метод find--------------------------------------

arr = [
  {name: 'Olia', age: 18},
  {name: 'Stas', age: 21},
  {name: 'Andrii', age: 36},
]

let res = arr.find(function(item, index, array){
  return item.age === 21;
});

console.log(res);

//------------------------------------Метод filter--------------------------------------

arr = [
  {name: 'Olia', age: 18},
  {name: 'Stas', age: 21},
  {name: 'Andrii', age: 36},
]

let res = arr.filter(function(item, index, array){
  return item.age > 18;
});

console.log(res);

//------------------------------------Метод sort--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
console.log(arr.sort());

//------------------------------------Метод reverse--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
console.log(arr.reverse());

//------------------------------------Метод map--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
let arr2 = arr.map(function(item, index, array){
  return index;
});

console.log(arr);
console.log(arr2);

//------------------------------------Метод split--------------------------------------

let str = 'Olia,Katia,Dasha';

arr = str.split(',');

console.log(arr);

//------------------------------------Метод join--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];

let str = arr.join(', ');

console.log(str);

//------------------------------------Метод Array.isArray--------------------------------------

let obj = {};
let arr2 = [];

if(Array.isArray(arr2)){
  console.log("It's an array");
} else {
  console.log("It's not an array");
}

//------------------------------------Цикл for--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//------------------------------------Цикл for__of--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];

for (let res of arr) {
  console.log(res);
}

//------------------------------------Цикл forEach--------------------------------------

arr = ['Masha', 'Stas', 'Andrii'];

arr.forEach(function(item, index, array){
  console.log(`There is ${item} on the index place ${index}`)
});

//------------------------------------Метод reduce--------------------------------------

arr = [1, 2, 3, 4];

let res = arr.reduce(function(previousValue, item, index, array){
  return item + previousValue;
}, 0);

console.log(res);

//-------------------------------------Task 2--------------------------------------------------
//-------------------------------------Practice 1----------------------------------------------

  let arr1 = ['Текст'];
  let arr2 = ['День', 'ніч'];
  let arr3 = ['Зима', 'весна', 'літо', 'осінь'];

  function showContent(arr){
    if(arr.length == 1){
      alert(arr);
    }else if (arr.length == 2) {
      alert(arr.join(', '));
    }else {
      let temp = arr.slice(arr.length - 2, arr.length);
      let temp2 = temp.join(' і ');
      arr.length = arr.length - 2;
      let arr2 = arr.join(', ');
      let arr3 = arr2.concat(', ');
      let res = arr3.concat(temp2);
      alert(res);
    }
  }

  showContent(arr3);*/

//-------------------------------------Task 3--------------------------------------------------

function miniTest(){
  let surname;
  let mark;
  let count;
  let questions = [
    "1. Як виглядає оператор побітового НЕ ?  \"~\" чи  \"<<\" ?",
    "2. Як виглядає побітовий оператор І ?  \"|\" чи  \"&\" ?",
    "3. Як виглядає побітове виключаюче АБО ?  \"^\" чи  \"<<\" ?",
    "4. Як виглядає побітовий зсув вправо ?  \"%\" чи  \">>\" ?",
    "5. Як виглядає побітове  АБО ?  \"|\" чи  \"-\" ?",
    "6. Як виглядає побітовий зсув вліво ?  \"<=\" чи  \"<<\" ?",
  ];
 let keys = ['~', '&', '^', '>>', '|', '<<'];

 const s__i = document.querySelector('.icon');
 const a__i = document.querySelector('.icon');

 function attent(){

   function myFunction(x) {
     if (x.matches) {
       a__i.innerHTML = `<p>Тест складається із 6 запитань,<br> на кожне з яких дається до 20 секунд.<br>
       Із закінченням часу пропущене<br> запитання вважатиметься невірним.</p>
       <button type="button" class= "a__button">Далі</button>`;
     }else {
       a__i.innerHTML = `<p>Тест складається із 6 запитань, на кожне з яких дається до 20 секунд.<br>
       Із закінченням часу пропущене запитання вважатиметься невірним.</p>
       <button type="button" class= "a__button">Далі</button>`;
     }
   }

   var x = window.matchMedia("(max-width: 470px)")
   myFunction(x)
   x.addListener(myFunction)

   const a = document.querySelector('.a__button');
   a.addEventListener("click", function(e){
     surnameIn();
   });
 }

  function surnameIn(){
    s__i.innerHTML = `<p>Введіть ваше прізвище!</p>
    <input class="inp" id="input" type="text" name="quantity" autocomplete="off">
    <button type="button" class= "j__button">Розпочати</button>`;

    const j = document.querySelector('.j__button');
    j.addEventListener("click", function(e){
      surname = document.getElementById('input').value;
      test();
    });

    const key = document.querySelector('.inp');
    key.addEventListener("keyup", function(event){
      if(event.code === 'Enter'){
      surname = document.getElementById('input').value;
      test();
    }
    });
  }

  function test(){
    let answer;
    count = 0;
    let i = 0;
    let secs = 20;
    let idleInterval;

    const t__i = document.querySelector('.icon');
    const r__i = document.querySelector('.icon');

    function timer(){
      clearInterval(idleInterval);
      i++;
      if(i < questions.length){
        loop();
      }else if (i == questions.length) {
        mark = count;
        showRes();
      }
    }

    function loop(){
        idleInterval = setInterval(timer, 20000);

        let count__s = setInterval(function(e){
          c__n.innerHTML = --secs;
          if(secs == 1){
             clearInterval(count__s);
             secs = 20;
           }
        }, 1000);

        t__i.innerHTML = `<p>${questions[i]}</p>
        <input class="inp" id="input" type="text" name="quantity" autocomplete="off">
        <button type="button" class= "t__button">Далі</button>
        <div class="time__out"><p>Залишилось часу: <span class="chg_nb"></span></p></div>`;
        const c__n = document.querySelector('.chg_nb');
        c__n.innerHTML = secs;

        const t = document.querySelector('.t__button');
        t.addEventListener("click", function(e){
          clearInterval(count__s);
          secs = 20;

          clearInterval(idleInterval);

          answer = document.getElementById('input').value;

          if(answer === keys[i]) count++;

          i++;

          if(i < questions.length){
            loop();
          }else if (i == questions.length) {
            mark = count;
            showRes();
          }
        });

        const key = document.querySelector('.inp');
        key.addEventListener("keyup", function(e){
          if(event.code === 'Enter'){
            clearInterval(count__s);
            secs = 20;

            clearInterval(idleInterval);

            answer = document.getElementById('input').value;

            if(answer === keys[i]) count++;

            i++;

            if(i < questions.length){
              loop();
            }else if (i == questions.length) {
              mark = count;
              showRes();
            }
         }
        });
    }

    function showRes(){
      r__i.innerHTML = `<p>Студент(ка) ${surname} отримав(ла) за тест ${mark}\/${questions.length}</p>
      <button type="button" class= "f__button">Завершити</button>`;

      const f = document.querySelector('.f__button');
      f.addEventListener("click", function(e){
        window.location.reload();
      });
    }

    loop();
  }
  attent();
}

const button = document.querySelector('.main__button');
button.addEventListener("click", miniTest);
