// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// var A = "Hello ";
// var B = "world!";
// var C = A + B;
// console.log(C);

// if (C.length > z) {
//   console.log(C);
// } else if (C.length < z) {
//   console.log(z);
// } else {
//   console.log("good job!");
// }

// function sumnPrint(x1, x2) {
//   var combined;
//   if (typeof x1 === "number" && typeof x2 === "number") {
//     combined = x1 + x2;
//   } else {
//     combined = String(x1) + String(x2);
//   }
//   console.log(combined);
// }

// sumnPrint(x, y);
// sumnPrint(A, B);

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//   arr.forEach(function (item) {
//     if (item === "Banana") {
//       alert("Banana");
//     }
//   });
// }

// findTheBanana(L1);
// findTheBanana(L2);

var now = new Date();
var hour = now.getHours();

function greeting(x) {
  var el = document.getElementById("greeting");
  if (!el) {
    return;
  }
  if (x < 5 || x >= 20) {
    el.innerHTML = "Good night — Welcome to the MonoMuse Museum";
  } else if (x < 12) {
    el.innerHTML = "Good morning — Welcome to the MonoMuse Museum";
  } else if (x < 18) {
    el.innerHTML = "Good afternoon — Welcome to the MonoMuse Museum";
  } else {
    el.innerHTML = "Good evening — Welcome to the MonoMuse Museum";
  }
}

var path = window.location.pathname;
var onHomePage = /(^|\/)index\.html$/i.test(path) || path === "/";

if (onHomePage && document.getElementById("greeting")) {
  greeting(hour);
}

function addYear() {
  var el = document.getElementById("copyYear");
  if (!el) {
    return;
  }
  var year = new Date().getFullYear();
  el.innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
}
