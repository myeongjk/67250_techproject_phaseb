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

function initHomeDrawer() {
  var body = document.body;
  if (!body.classList.contains("mono-site")) {
    return;
  }

  var toggle = document.getElementById("menu-toggle");
  var drawer = document.getElementById("nav-drawer");
  var overlay = document.getElementById("drawer-overlay");

  if (!toggle || !drawer || !overlay) {
    return;
  }

  function setOpen(open) {
    body.classList.toggle("menu-open", open);
    drawer.classList.toggle("is-open", open);
    overlay.classList.toggle("is-visible", open);
    overlay.setAttribute("aria-hidden", open ? "false" : "true");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  }

  function close() {
    setOpen(false);
  }

  toggle.addEventListener("click", function () {
    var open = !drawer.classList.contains("is-open");
    setOpen(open);
  });

  overlay.addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });
}

function normalizePathForNavMatch(pathname) {
  var p = decodeURIComponent(pathname.replace(/\\/g, "/"));
  p = p.replace(/\/$/, "") || "/";
  if (/index\.html$/i.test(p)) {
    p = p.slice(0, -"/index.html".length) || "/";
  }
  p = p.replace(/\/$/, "") || "/";
  return p;
}

function initNavActiveLink() {
  var nav = document.querySelector(".nav_bar");
  if (!nav) {
    return;
  }
  var links = nav.querySelectorAll("a[href]");
  var currentPath = normalizePathForNavMatch(window.location.pathname);

  links.forEach(function (a) {
    a.classList.remove("active");
    var resolved;
    try {
      resolved = new URL(a.getAttribute("href"), window.location.href);
    } catch (e) {
      return;
    }
    var linkPath = normalizePathForNavMatch(resolved.pathname);
    if (linkPath === currentPath) {
      a.classList.add("active");
    }
  });
}

function revealTicketPurchaseForm(selectedDate) {
  var form = document.getElementById("ticket-purchase-form");
  if (!form) {
    return;
  }
  form.classList.remove("ticket-purchase-form--hidden");
  form.setAttribute("aria-hidden", "false");
  var dateInput = document.getElementById("purchase-date");
  if (dateInput && typeof selectedDate === "string") {
    dateInput.value = selectedDate;
  }
  form.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function submitTicketPurchase() {
  alert("Redirecting to payment system.");
}

function initExhibitionReadMoreToggle() {
  var wrap = document.querySelector(".exhibition-read-toggle");
  var moreBtn = document.getElementById("exhibition-read-more");
  var lessBtn = document.getElementById("exhibition-read-less");
  if (!wrap || !moreBtn || !lessBtn) {
    return;
  }

  moreBtn.addEventListener("click", function () {
    wrap.classList.add("is-expanded");
  });

  lessBtn.addEventListener("click", function () {
    wrap.classList.remove("is-expanded");
  });
}

function initExploreMap() {
  var mapEl = document.getElementById("map");
  if (!mapEl || typeof L === "undefined") {
    return;
  }

  var lat = 40.4425;
  var lng = -79.943;
  var zoom = 16;

  var map = L.map("map").setView([lat, lng], zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("<strong>MonoMuse Museum</strong><br>Carnegie Mellon University, Pittsburgh");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initHomeDrawer();
    initNavActiveLink();
    initExhibitionReadMoreToggle();
    initExploreMap();
  });
} else {
  initHomeDrawer();
  initNavActiveLink();
  initExhibitionReadMoreToggle();
  initExploreMap();
}

function initReadMoreToggle() {
  if (typeof jQuery === "undefined") {
    return;
  }
  var $readMore = jQuery("#readMore");
  var $readLess = jQuery("#readLess");
  var $longIntro = jQuery("#longIntro");
  if (!$readMore.length || !$readLess.length || !$longIntro.length) {
    return;
  }

  $readMore.on("click", function () {
    $longIntro.show();
    $readMore.hide();
    $readLess.show();
  });

  $readLess.on("click", function () {
    $longIntro.hide();
    $readLess.hide();
    $readMore.show();
  });
}

if (typeof jQuery !== "undefined") {
  jQuery(initReadMoreToggle);
}

