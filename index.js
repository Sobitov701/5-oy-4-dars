//1-misol
//Vazifa: Sahifada bir nechta bo‘sh kvadratlar (div) bo‘lsin. Har bir kvadrat ustiga "Rasm qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi rasm (img elementi) kvadratning ichiga qo‘shilsin. Kvadrat ichida avvaldan rasm bo‘lsa, o‘sha rasmni o‘chirib, yangisini qo‘shsin.

// const button = document.querySelector("#button");
// const div = document.querySelector("#div");

// button &&
//   button.addEventListener("click", function () {
//     const img = document.createElement("img");
//     if (img) {
//       img.removeChild;
//     }
//     img.setAttribute("src", "https://picsum.photos/id/237/200/300");
//     img.setAttribute("alt", "Placeholder Image");

//     div.appendChild(img);
//   });

//2-misol
//HTML sahifasida daraxt shaklidagi tuzilma (ul, li) berilgan bo‘lsin. Foydalanuvchi har bir element ustiga bosganda, o‘sha elementning:

// const text = document.querySelector("ul");
// const text2 = document.querySelectorAll("li");

// text &&
//   text.addEventListener("click", function () {
//     console.log(this.parentNode);
//     console.log(this.previousSibling);
//     console.log(this.nextSibling);
//     console.log(this.childNodes);
//   });

//3-misol
// //Vazifa: Sahifada ikkita kvadrat (div) bo‘lsin. Har bir kvadrat ichida matn yozilgan bo‘lsin. Foydalanuvchi tugma bosganda, ushbu kvadratlarning o‘z ichidagi matnlari almashib qolsin.

// const text = document.querySelector(".div1");
// const text2 = document.querySelector(".div2");
// const btn = document.getElementById("btn");

// btn &&
//   btn.addEventListener("click", function () {
//     let temp;
//     temp = text.innerHTML;
//     text.innerHTML = text2.innerHTML;
//     text2.innerHTML = temp;
//   });

//4-misol
//Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har safar foydalanuvchi sahifaga kirganda, tugmalardan biriga avtomatik ravishda "qizil" klassi qo‘shiladi. Foydalanuvchi boshqa tugmalarni bosganda, yangi tugmaga "qizil" klassi o‘tadi, avvalgisi esa "qizil" klassini yo‘qotadi.

// const buttons = document.querySelectorAll(".btn");

// buttons[0].classList.add("qizil");

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     buttons.forEach(function (btn) {
//       btn.classList.remove("qizil");
//     });

//     button.classList.add("qizil");
//   });
// });

//5-misol
//Vazifa: Sahifada bir nechta paragraflar va bitta "Yangi paragraf qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi paragraf qo‘shilsin va u maqolaning oxiriga yoki boshiga joylashtirilsin (foydalanuvchi oldindan tanlaydi).

// const card = document.getElementById("card");
// const btn = document.getElementById("btn");
// const check = document.getElementById("check");

// btn &&
//   btn.addEventListener("click", function () {
//     const p = document.createElement("p");
//     p.innerHTML = "qndaydir matn";

//     if (check.checked) {
//       card.prepend(p);
//     } else {
//       card.append(p);
//     }
//   });

//6-misol
//Vazifa: Sahifada bir nechta rangli kvadratlar bo‘lsin. Har bir kvadratning tagida "Chapga qo‘shish" va "O‘ngga qo‘shish" tugmalari joylashtiriladi. Tugma bosilganda kvadratning chap yoki o‘ng tomoniga yangi kvadrat qo‘shilsin.

// const card = document.getElementById("card");
// const buttons = document.querySelectorAll("button");

// buttons.length > 0 &&
//   buttons.forEach((button) => {
//     button &&
//       button.addEventListener("click", function () {
//         let block = document.createElement("div");
//         block.style.width = "200px";
//         block.style.height = "200px";
//         block.style.backgroundColor = "red";

//         if (this.innerHTML == "right") {
//           card.after(block);
//         } else {
//           card.before(block);
//         }
//       });
//   });

//7-misol
//Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har bir tugmaning yonida "Yashirish" tugmasi bo‘lsin. "Yashirish" tugmasi bosilganda asosiy tugma yashirinadi. Sahifaning pastida "Yashirilgan tugmalarni ko‘rsatish" tugmasi bo‘lib, u barcha yashirilgan tugmalarni qayta ko‘rsatadi.

// const div = document.getElementById("div");
// const btn = document.getElementById("btn");
// const button = document.getElementById("button");

// btn &&
//   btn.addEventListener("click", function () {
//     div.style.display = "none";
//   });

// button &&
//   button.addEventListener("click", function () {
//     div.style.display = "block";
//   });

//8-misol
//Vazifa: Sahifada bir nechta matnli elementlar (p) va "Kesish" tugmasi bo‘lsin. Foydalanuvchi biror matnni tanlab, uning yonidagi "Kesish" tugmasini bossa, o‘sha matn kesilib, boshqa bir bo‘sh joyga (kvadrat) o‘tkazilsin.

//9-misol
//Vazifa: Sahifada bir nechta rang tugmalari bo‘lsin (masalan, "qizil", "ko‘k", "yashil"). Foydalanuvchi rang tugmalaridan birini bossa, asosiy blokning (katta kvadratning) foni tanlangan rangga o‘zgaradi. Tanlangan tugmaga "faol" klassi qo‘shilsin.

// const qizil = document.getElementById("qizil");
// const sariq = document.getElementById("sariq");
// const kok = document.getElementById("kok");

// qizil &&
//   qizil.addEventListener("click", function () {
//     qizil.style.backgroundColor = "red";
//   });

// sariq &&
//   sariq.addEventListener("click", function () {
//     sariq.style.backgroundColor = "yellow";
//   });

// kok &&
//   kok.addEventListener("click", function () {
//     kok.style.backgroundColor = "blue";
//   });

//10-misol
//Vazifa: Sahifada ul ro‘yxati va "Yangi element qo‘shish" tugmasi bo‘lsin. Har bir ro‘yxat elementida "O‘chirish" tugmasi bo‘lsin. Foydalanuvchi yangi element qo‘shganda, u ro‘yxatning oxiriga qo‘shiladi. O‘chirish tugmasi bosilganda, tegishli element ro‘yxatdan o‘chiriladi.

// const ul = document.getElementById("ul");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.innerHTML = `Yangi element <button class="ochrish-btn">Ochirish</button>`;

//   ul.appendChild(li);
// });

// ul.addEventListener("click", function (event) {
//   if (event.target.classList.contains("ochrish-btn")) {
//     const listItem = event.target.parentElement;
//     listItem.remove();
//   }
// });

//11-misol
//Vazifa: Sahifada bir nechta blok (div) elementlari bo‘lsin. Ularning barchasi ko‘rinadigan holatda bo‘lsin. Har bir blok yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda blok yashiringan bo‘lsin (display: none; usuli orqali). Sahifaning pastida "Hammasini ko‘rsatish" tugmasi bo‘lsin, bu barcha yashirilgan bloklarni qayta ko‘rsatadi.

// const div = document.getElementById("block");
// const button = document.getElementById("btn");
// const korsat = document.getElementById("korsat");

// button &&
//   button.addEventListener("click", function () {
//     div.style.display = "none";
//   });

// korsat &&
//   korsat.addEventListener("click", function () {
//     div.style.display = "block";
//   });

//12-misol
//Vazifa: Sahifada bir nechta rangli kvadratlar (div) bo‘lsin. Har bir kvadratni boshqa kvadrat bilan almashtirish tugmasi bo‘lsin. Tugma bosilganda, o‘sha kvadrat boshqa tanlangan kvadrat bilan joylarini almashtirsin (ularni DOM ichida joylashtirish tartibi o‘zgaradi).

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const almash = document.getElementById("almash");

almash &&
  almash.addEventListener("click", function () {
    let temp;
    temp = btn.innerHTML;
    btn.innerHTML = btn2.innerHTML;
    btn2.innerHTML = temp;
  });
