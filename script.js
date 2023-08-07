// import "boxicons";

// const header = document.querySelector("header");
// // scroll event
// window.addEventListener("scroll", () => {
//   header.classList.toggle("sticky", window.scrollY > 100);
// });

// const navbar = document.querySelector(".navbar");
// const menuIcon = document.querySelector("#icon-menu");
// console.log(menuIcon);
// menuIcon.addEventListener("click", () => {
//   navbar.classList.toggle("active");
//   // replace icon by atribut name ion-icon toggle
//   if (menuIcon.getAttribute("name") === "close-outline") {
//     menuIcon.setAttribute("name", "menu-outline");
//     return;
//   }
//   menuIcon.setAttribute("name", "close-outline");
// });

const navLink = document.querySelectorAll("nav ul li a");
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    if (navLink[i].classList.contains("active")) {
      for (let j = 0; j < navLink.length; j++) {
        navLink[j].classList.remove("active");
      }
    } else {
      for (let j = 0; j < navLink.length; j++) {
        navLink[j].classList.remove("active");
      }
      navLink[i].classList.add("active");
    }
  });
}

let nav = document.querySelector("nav");
console.log(nav);
// scroll event
window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 100);
});

let btnMenu = document.querySelector(".i");
console.log(btnMenu);

let navUl = document.querySelector("nav ul");
btnMenu.addEventListener("click", () => {
  navUl.classList.toggle("active");
  nav.style.backgroundColor = "var(--bg-color)";
  if (btnMenu.getAttribute("class") === "bx-menu") {
    btnMenu.setAttribute("class", "bx-x");
    return;
  }
  btnMenu.setAttribute("name", "bx-x");
});

// scroll event
window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 100);
});
const togelMode = document.querySelector(".mode-toggle");
togelMode.addEventListener("click", () => {
  document.body.classList.toggle("switch-mode");
});

// tablink

function onTabClick(tabId) {
  // Get all tab contents and tab links
  const tabContents = document.querySelectorAll(".tab-content");
  const tabLinks = document.querySelectorAll(".tab-link");

  // Hide all tab contents
  tabContents.forEach((content) => {
    content.classList.remove("active-tab");
  });

  // Deactivate all tab links
  tabLinks.forEach((link) => {
    link.classList.remove("active-link");
  });

  // Show the selected tab content and activate the corresponding tab link
  const selectedTab = document.getElementById(tabId);
  const selectedLink = document.querySelector(`.tab-link[onclick="onTabClick('${tabId}')"]`);

  if (selectedTab && selectedLink) {
    selectedTab.classList.add("active-tab");
    selectedLink.classList.add("active-link");
  }
}

// type animasi
const text = document.querySelector(".right");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Mahasiswa";
  }, 0);
  setTimeout(() => {
    text.textContent = "Teknik";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Informatika";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

// galeri
const btnGaleri = document.querySelectorAll(".navigasi span");
const galeri = document.querySelectorAll(".galeri div");
// console.log(galeri);
// console.log(btnGaleri);

const filterImage = (image) => {
  document.querySelector(".active-image").classList.remove("active-image");
  image.target.classList.add("active-image");

  galeri.forEach((galeri) => {
    galeri.style.display = "none";
    if (galeri.getAttribute("data-name") === image.target.getAttribute("data-name") || image.target.getAttribute("data-name") === "all") {
      galeri.style.display = "block";
    }
  });
};
btnGaleri.forEach((span) => span.addEventListener("click", filterImage));

// galeri onclick

const show = document.querySelector(".show");
const close = show.querySelector(".close");
window.onload = function () {
  for (let i = 0; i < galeri.length; i++) {
    let index = i;
    let clikImage;
    galeri[index].onclick = function () {
      clikImage = index;
      console.log(galeri[i]);
      function showImage() {
        let img = show.querySelector("img");
        img.src = galeri[index].querySelector("img").src;
        console.log(img.src);
      }
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (index == 0) {
        prevBtn.style.display = "none";
      }
      if (index >= galeri.length - 1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = function () {
        index--;
        if (index == 0) {
          showImage();
          prevBtn.style.display = "none";
        } else {
          nextBtn.style.display = "block";
          showImage();
        }
      };
      nextBtn.onclick = function () {
        index++;
        if (index >= galeri.length - 1) {
          showImage();
          nextBtn.style.display = "none";
        } else {
          prevBtn.style.display = "block";
          showImage();
        }
      };
      showImage();
      show.classList.add("active");
      close.onclick = function () {
        index = clikImage;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        show.classList.remove("active");
      };
      window.onclick = function (e) {
        if (e.target == show) {
          index = clikImage;
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          show.classList.remove("active");
        }
      };
    };
  }
};
