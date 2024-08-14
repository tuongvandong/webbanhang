window.addEventListener("scroll", function () {
  var header = document.querySelector(".top-header");
  var scrollY = window.scrollY;

  if (scrollY > 10) {
    header.style.backgroundColor = "#fff";
  }
});

// Lấy các phần tử cần thiết
const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
const tabActive = document.querySelector(".tab-item.active");
const line = document.querySelector(".tabs .line");

// Đặt vị trí và kích thước của line
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// Lặp qua từng tab và thêm sự kiện click
tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.addEventListener("click", function () {
    // Xóa lớp 'active' khỏi tab và pane hiện tại
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    // Đặt lại vị trí và kích thước của line
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    // Thêm lớp 'active' vào tab và pane được click
    this.classList.add("active");
    pane.classList.add("active");
  });
});

// Flash sale
function startCountdown() {
  const countdownElement = document.querySelector(".countdown-deal");
  const daysElement = countdownElement.querySelector(".days");
  const hoursElement = countdownElement.querySelector(".hours");
  const minutesElement = countdownElement.querySelector(".minutes");
  const secondsElement = countdownElement.querySelector(".seconds");
  // tính số giây trong một ngày
  const totalSeconds =
    parseInt(countdownElement.getAttribute("data-time")) * 24 * 60 * 60;
  // lưu lại số giây
  let remainingTime = totalSeconds;

  function updateCountdown() {
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;
    // Đảm bảo số có ít nhất hai chữ số, thêm số 0 ở đầu nếu cần.
    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    if (remainingTime > 0) {
      remainingTime--; //Giảm remainingTime đi một giây.
    } else {
      clearInterval(countdownInterval); //Dừng bộ đếm ngược khi remainingTime bằng 0.
    }
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000); //Thiết lập bộ hẹn giờ để gọi updateCountdown() mỗi 1000 mili giây (1 giây).
}

startCountdown(); //Gọi hàm chính để khởi tạo bộ đếm ngược.

// list-product
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 15,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

// active ds
const tabList = document.querySelectorAll(".tab-list");
const tabmenuList = document.querySelectorAll(".tab-menu-list");

// Lặp qua từng tab và thêm sự kiện click
tabList.forEach((tab, index) => {
  const tabmenu = tabmenuList[index];

  tab.addEventListener("click", function () {
    // Xóa lớp 'active' khỏi tab và pane hiện tại
    document.querySelector(".tab-list.active").classList.remove("active");
    document.querySelector(".tab-menu-list.active").classList.remove("active");

    // Thêm lớp 'active' vào tab và pane được click
    this.classList.add("active");
    tabmenu.classList.add("active");
  });
});

//iConcontact
document.getElementById("btn-main").addEventListener("click", function () {
  var contactList = document.getElementById("contact-list");
  if (contactList.classList.contains("hidden")) {
    contactList.classList.remove("hidden");
  } else {
    contactList.classList.add("hidden");
  }
});

//modal-cart
function openCart() {
  document.querySelector(".modal-cart").classList.add("open");
}
function closeCart() {
  document.querySelector(".modal-cart").classList.remove("open");
}
