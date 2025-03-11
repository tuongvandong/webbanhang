// Animations
document.getElementById("register").addEventListener("click", () => {
  document.getElementById("container").classList.add("right-panel-active");
});
document.getElementById("login").addEventListener("click", () => {
  document.getElementById("container").classList.remove("right-panel-active");
});

// Form validation
const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Hiển thị lỗi
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.querySelector("small").innerText = message;
};

// Xóa lỗi
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.querySelector("small").innerText = "";
};

// Kiểm tra email hợp lệ
const checkEmail = (email) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

email.addEventListener("input", () => {
  email.nextElementSibling.textContent = checkEmail(email.value)
    ? ""
    : "*Email không hợp lệ";
});

// Kiểm tra độ dài username và password
const checkLength = (input, min, max, message) => {
  input.nextElementSibling.textContent =
    input.value.length < min || input.value.length > max ? message : "";
};

username.addEventListener("input", () =>
  checkLength(username, 4, 20, "*Tên đăng nhập từ 4-20 ký tự")
);
password.addEventListener("input", () =>
  checkLength(password, 8, 20, "*Mật khẩu từ 8-20 ký tự")
);

// Kiểm tra các trường nhập
const checkRequired = (inputs) => {
  let isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      showError(input, `*${input.placeholder} không được để trống`);
      isValid = false;
    } else showSuccess(input);
  });
  return isValid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkRequired([username, email, password])) {
    alert("Đăng ký thành công!");
  }
});

// Xử lý đăng nhập
const lgForm = document.querySelector(".form-lg");
const lgEmail = document.querySelector(".email-2");
const lgPassword = document.querySelector(".password-2");

lgEmail.addEventListener("input", () => {
  lgEmail.nextElementSibling.textContent = checkEmail(lgEmail.value)
    ? ""
    : "*Email không hợp lệ";
});
lgPassword.addEventListener("input", () =>
  checkLength(lgPassword, 8, 20, "*Mật khẩu từ 8-20 ký tự")
);

lgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkRequired([lgEmail, lgPassword]) && checkEmail(lgEmail.value)) {
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Sai email hoặc mật khẩu!");
  }
});

// hàm login kiểm tra đăng nhập
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginform");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const loginContainer = document.querySelector(".header-middle-right-item a"); // Nút đăng nhập
  const userInfo = document.querySelector(".user-info"); // Thông tin user sau khi đăng nhập
  const userAvatar = document.getElementById("user-avatar");
  const userName = document.getElementById("user-name");
  const logoutButton = document.getElementById("logout-btn");

  const users = [
    {
      email: "tuongdong080403@gmail.com",
      password: "12345678",
      name: "Tưởng Văn Đồng",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fr1owd6MRbY8x4olsdPPBsbrG4JD3iaY0Q&s",
    },
  ];

  //  Xử lý đăng nhập
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailValue = emailInput.value.trim();
      const password = passwordInput.value;

      const foundUser = users.find(
        (u) => u.email === emailValue && u.password === password
      );

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));

        alert("Đăng nhập thành công!");
        if (loginContainer) loginContainer.style.display = "none"; // Ẩn nút đăng nhập
        if (userInfo) {
          userInfo.style.display = "flex"; // Hiện thông tin user
          userAvatar.src = foundUser.avatar;
          userName.textContent = foundUser.name;
        }
        window.location.href = "index.html"; // Reload lại trang
      } else {
        alert("Sai email hoặc mật khẩu!");
      }
    });
  }

  //  Xử lý đăng xuất
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("user");

      alert("Bạn đã đăng xuất!");
      if (loginContainer) loginContainer.style.display = "block"; // Hiện lại nút đăng nhập
      if (userInfo) userInfo.style.display = "none"; // Ẩn thông tin user
      window.location.reload();
    });
  }

  checkLogin();
});
