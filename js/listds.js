const products = [
  {
    name: "Áo Sơ Mi Nam Tay Ngắn ICONDENIM Casual Smart Slimfit",
    price: "165,000₫",
    originalPrice: "330,000₫",
    sold: 259,
    imgSrc: "picture/home/card-slide/item1.webp",
    link: "",
    id: "product-1",
  },
  {
    name: "Quần Short Nam ICONDENIM Orgnls",
    price: "200,000₫",
    originalPrice: "250,000₫",
    sold: 109,
    imgSrc: "picture/home/card-slide/item2.webp",
    link: "",
    id: "product-2",
  },
  {
    name: "Áo Thun Thể Thao Nam RUNPOW Reflective Logo",
    price: "250,000₫",
    originalPrice: "300,000₫",
    sold: 259,
    imgSrc: "picture/home/card-slide/item3.webp",
    link: "",
    id: "product-3",
  },
  {
    name: "Áo Thun Nam ICONDENIM Harmonious Journey",
    price: "203,000₫",
    originalPrice: "280,000₫",
    sold: 385,
    imgSrc: "picture/home/card-slide/item4.webp",
    link: "",
    id: "product-4",
  },
  {
    name: "Quần Jean Nam ICONDENIM Black Skinny Fit",
    price: "385,000₫",
    originalPrice: "550,000₫",
    sold: 258,
    imgSrc: "picture/home/card-slide/item5.webp",
    link: "",
    id: "product-5",
  },
  {
    name: "Quần Short Nam ICONDENIM Light Corduroy",
    price: "224,000₫",
    originalPrice: "290,000₫",
    sold: 203,
    imgSrc: "picture/home/card-slide/item6.jpg",
    link: "",
    id: "product-6",
  },
  {
    name: "Set Đồ Nam ICONDENIM Logo Double ID Embroidery",
    price: "315,000₫",
    originalPrice: "450,000₫",
    sold: 228,
    imgSrc: "picture/home/card-slide/item7.webp",
    link: "",
    id: "product-7",
  },
  {
    name: "Set Đồ Nam ICONDENIM First Class",
    price: "343,000₫",
    originalPrice: "490,000₫",
    sold: 185,
    imgSrc: "picture/home/card-slide/item8.webp",
    link: "",
    id: "product-8",
  },
  {
    name: "Quần Tây Nam ICONDENIM Form Straight",
    price: "336,000₫",
    originalPrice: "420,000₫",
    sold: 251,
    imgSrc: "picture/home/card-slide/item9.webp",
    link: "",
    id: "product-9",
  },
];

function displayProducts(products) {
  const productContainer = document.getElementById("product-list");
  if (!productContainer) {
    console.error("Không tìm thấy phần tử với ID 'product-list'");
    return;
  }
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = `
      <div class="card-item swiper-slide" id="${product.id}">
        <img src="${product.imgSrc}" alt="${product.name}" class="user-image" title="${product.name}" />
        <h2 class="user-name" title="${product.name}">
            <a href="#" class="product-link">${product.name}</a>
        </h2>
        <p class="pro-price-sale">
          <span>${product.price}</span>
          <del class="compare-price">${product.originalPrice}</del>
        </p>
        <div class="flashsale-buy">
          <div class="flashsale__label">
            Đã bán <span class="flashsale__sold">${product.sold}</span> sản phẩm
          </div>
          <button class="message-button" title="Mua ngay">
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });

  document.querySelectorAll(".card-item").forEach((item) => {
    item.addEventListener("click", function () {
      const productId = this.id;
      const productDetails = products.find(
        (product) => product.id === productId
      );

      if (productDetails) {
        document.getElementById("modalProductImage").src =
          productDetails.imgSrc;
        document.getElementById("modalProductTitle").textContent =
          productDetails.name;
        document.getElementById("modalProductPrice").textContent =
          productDetails.price;
        document.getElementById("modalTotalPrice").textContent =
          productDetails.price;
        document.getElementById("modalProductDescription").textContent =
          productDetails.description;
        document.getElementById("productModal").classList.add("active");
      }
    });
  });
}

// Hiển thị danh sách sản phẩm
displayProducts(products);

// Đóng modal khi nhấn vào nút đóng
document.querySelector(".modal-close").addEventListener("click", function () {
  document.getElementById("productModal").classList.remove("active");
});
// ds menu-lits
document.addEventListener("DOMContentLoaded", function () {
  const productData = {
    tab1: [
      {
        id: "product1",
        imgSrc: "picture/home/menu-list/Ao-nam/img1.webp",
        alt: "Áo Thun Nam ICONDENIM Vintage Printed",
        title: "Áo Thun Nam ICONDENIM Vintage Printed",
        price: "289,000₫",
      },
      {
        id: "product2",
        imgSrc: "picture/home/menu-list/Ao-nam/img2.webp",
        alt: " Áo Thun Nam ICONDENIM Ombree Tie-Dye ",
        title: " Áo Thun Nam ICONDENIM Ombree Tie-Dye ",
        price: "319,000₫",
      },
      {
        id: "product3",
        imgSrc: "picture/home/menu-list/Ao-nam/img3.webp",
        alt: " Áo Tanktop Nam ICONDENIM Explore ",
        title: " Áo Tanktop Nam ICONDENIM Explore ",
        price: "219,000₫",
      },
      {
        id: "product4",
        imgSrc: "picture/home/menu-list/Ao-nam/img4.webp",
        alt: "Áo Thun Nam ICONDENIM Vintage Printed",
        title: "Áo Thun Nam ICONDENIM Vintage Printed",
        price: "289,000₫",
      },
      {
        id: "product5",
        imgSrc: "picture/home/menu-list/Ao-nam/img5.webp",
        alt: " Áo Thun Nam ICONDENIM Dreamy Passage ",
        title: "Áo Thun Nam ICONDENIM Dreamy Passage ",
        price: "289,000₫",
      },
      {
        id: "product6",
        imgSrc: "picture/home/menu-list/Ao-nam/img6.webp",
        alt: " Áo Thun Nam ICONDENIM Pointelle ",
        title: " Áo Thun Nam ICONDENIM Pointelle ",
        price: "290,000₫",
      },
      {
        id: "product7",
        imgSrc: "picture/home/menu-list/Ao-nam/img7.webp",
        alt: " Áo Polo Nam ICONDENIM Raglan ICDN ",
        title: " Áo Polo Nam ICONDENIM Raglan ICDN ",
        price: "350,000₫",
      },
      {
        id: "product8",
        imgSrc: "picture/home/menu-list/Ao-nam/img8.webp",
        alt: " Áo Polo Nam ICONDENIM Accelerate Avenue ",
        title: " Áo Polo Nam ICONDENIM Accelerate Avenue ",
        price: "390,000₫",
      },
      {
        id: "product9",
        imgSrc: "picture/home/menu-list/Ao-nam/img9.webp",
        alt: " Áo Thun Nam ICONDENIM Sailor NavyStripe ",
        title: " Áo Thun Nam ICONDENIM Sailor NavyStripe ",
        price: "250,000₫",
      },
      {
        id: "product10",
        imgSrc: "picture/home/menu-list/Ao-nam/img10.webp",
        alt: " Áo Thun Nam ICONDENIM Creating ",
        title: " Áo Thun Nam ICONDENIM Creating ",
        price: "259,000₫",
      },

      // Thêm sản phẩm khác ở đây
    ],
    tab2: [
      {
        id: "product11",
        imgSrc: "picture/home/menu-list/Quan-nam/img1.webp",
        alt: "Quần Short Jeans Nam ICONDENIM Metallic Fobpoc",
        title: "Quần Short Jeans Nam ICONDENIM Metallic Fobpoc",
        price: "390,000₫",
      },
      {
        id: "product12",
        imgSrc: "picture/home/menu-list/Quan-nam/img2.webp",
        alt: " Quần Short Nam ICONDENIM Terry Line ",
        title: " Quần Short Nam ICONDENIM Terry Line ",
        price: "320,000₫",
      },
      {
        id: "product13",
        imgSrc: "picture/home/menu-list/Quan-nam/img3.webp",
        alt: " Quần Tây Nam ICONDENIM Simple Trousers ",
        title: " Quần Tây Nam ICONDENIM Simple Trousers ",
        price: "390,000₫",
      },
      {
        id: "product14",
        imgSrc: "picture/home/menu-list/Quan-nam/img4.webp",
        alt: " Quần Khaki Cargo Nam ICONDENIM Carrier ",
        title: " Quần Khaki Cargo Nam ICONDENIM Carrier ",
        price: "450,000₫",
      },
      {
        id: "product15",
        imgSrc: "picture/home/menu-list/Quan-nam/img5.jpg",
        alt: " Quần Short Bơi Nam ICONDENIM All-Day Beach ",
        title: " Quần Short Bơi Nam ICONDENIM All-Day Beach ",
        price: "200,000₫",
      },
      {
        id: "product16",
        imgSrc: "picture/home/menu-list/Quan-nam/img6.webp",
        alt: " Quần Jean Nam ICONDENIM Straight-Fit Beige Wash ",
        title: " Quần Jean Nam ICONDENIM Straight-Fit Beige Wash ",
        price: "520,000₫",
      },
      {
        id: "product17",
        imgSrc: "picture/home/menu-list/Quan-nam/img7.webp",
        alt: " Quần Jean Cargo Nam ICONDENIM Straight Grey Wash ",
        title: " Quần Jean Cargo Nam ICONDENIM Straight Grey Wash ",
        price: "650,000₫",
      },
      {
        id: "product18",
        imgSrc: "picture/home/menu-list/Quan-nam/img8.webp",
        alt: " Quần Short Nam ICONDENIM Linen Surface Cotton ",
        title: "Quần Short Nam ICONDENIM Linen Surface Cotton ",
        price: "320,000₫",
      },
      {
        id: "product19",
        imgSrc: "picture/home/menu-list/Quan-nam/img9.webp",
        alt: " Quần Short Tây Nam ICONDENIM Comfort Waistband ",
        title: " Quần Short Tây Nam ICONDENIM Comfort Waistband ",
        price: "350,000₫",
      },
      {
        id: "product20",
        imgSrc: "picture/home/menu-list/Quan-nam/img10.webp",
        alt: " Quần Short Nam Kaki ICONDENIM Fundamental ",
        title: " Quần Short Nam Kaki ICONDENIM Fundamental ",
        price: "350,000₫",
      },
      // Thêm sản phẩm khác ở đây
    ],
    tab3: [
      {
        id: "product21",
        imgSrc: "picture/home/menu-list/Dongbo-nam/img1.webp",
        alt: " Set Đồ Nam ICONDENIM Monogram Line ",
        title: " Set Đồ Nam ICONDENIM Monogram Line ",
        price: "320,000₫",
      },
      {
        id: "product22",
        imgSrc: "picture/home/menu-list/Dongbo-nam/img2.webp",
        alt: "  Set Đồ Nam ICONDENIM Strong Shoulder ",
        title: "  Set Đồ Nam ICONDENIM Strong Shoulder  ",
        price: "320,000₫",
      },
      {
        id: "product23",
        imgSrc: "picture/home/menu-list/Dongbo-nam/img3.webp",
        alt: "  Set Đồ Nam ICONDENIM Enjoy Life  ",
        title: "  Set Đồ Nam ICONDENIM Enjoy Life  ",
        price: "290,000₫",
      },
      {
        id: "product24",
        imgSrc: "picture/home/menu-list/Dongbo-nam/img4.webp",
        alt: " Set Đồ Nam ICONDENIM Denim Printed Sack Type  ",
        title: " Set Đồ Nam ICONDENIM Denim Printed Sack Type ",
        price: "420,000₫",
      },
      {
        id: "product25",
        imgSrc: "picture/home/menu-list/Dongbo-nam/img5.webp",
        alt: "  Set Đồ Nam ICONDENIM NewYork ",
        title: " Set Đồ Nam ICONDENIM NewYork ",
        price: "290,000₫",
      },

      // Thêm sản phẩm khác ở đây
    ],
  };

  const menuList = (productList) => `
    <div class="product-block" data-id="${productList.id}">
      <div class="zn-product-block">
        <div class="product-img">
          <img src="${productList.imgSrc}" alt="${productList.alt}" />
          <button class="button-loop-pro">   
            <i class="fas fa-search"></i> 
          </button>
          <div class="new-label">Hàng Mới</div> 
        </div>
        <div class="product-content">
          <h3 class="pro-name">
            <a href="#" title="${productList.title}">${productList.title}</a>
          </h3>
          <div class="pro-money">
            <p class="pro-price"><span>${productList.price}</span></p>
          </div>
        </div>
      </div>
    </div>
  `;

  const renderProducts = (tabId) => {
    const tabContent = document.getElementById(tabId);
    tabContent.innerHTML = productData[tabId].map(menuList).join("");
  };

  const tabs = document.querySelectorAll(".tab-list");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetTab = this.dataset.tab;

      document.querySelector(".tab-list.active").classList.remove("active");
      document
        .querySelector(".tab-menu-list.active")
        .classList.remove("active");

      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");

      renderProducts(targetTab);
    });
  });

  renderProducts("tab1");

  // Lắng nghe sự kiện nhấp chuột vào mỗi product-block
  document.body.addEventListener("click", function (e) {
    const productBlock = e.target.closest(".product-block");
    if (productBlock) {
      const productId = productBlock.dataset.id;
      const product = Object.values(productData)
        .flat()
        .find((p) => p.id === productId);

      if (product) {
        document.getElementById("modalProductImage").src = product.imgSrc;
        document.getElementById("modalProductTitle").textContent =
          product.title;
        document.getElementById("modalProductPrice").textContent =
          product.price;
        document.getElementById("modalTotalPrice").textContent = product.price;
        document.getElementById("productModal").classList.add("active");
      }
    }
  });

  // Đóng modal khi nhấn vào nút đóng
  document.querySelector(".modal-close").addEventListener("click", function () {
    document.getElementById("productModal").classList.remove("active");
  });
});
// aside-list
const productsList = {
  list1: [
    {
      id: "product-1-1",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/1.jpg",
      title: " Áo Sơ Mi Nam ICONDENIM Cloth Woven ",
      price: "329,000₫",
      link: "#",
    },
    {
      id: "product-1-2",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/2.jpg",
      title: " Áo Sơ Mi Cuban Nam ICONDENIM Abstract Twists ",
      price: "350,000₫",
      link: "#",
    },
    {
      id: "product-1-3",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/3.webp",
      title: " Áo Sơ Mi Nam ICONDENIM Box Pocket Denim ",
      price: "450,000₫",
      link: "#",
    },
    {
      id: "product-1-4",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/4.webp",
      title: "  Áo Sơ mi Nam Tay Dài ICONDENIM Linen Collection ",
      price: "390,000₫",
      link: "#",
    },
    {
      id: "product-1-5",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/5.webp",
      title: "  Áo Sơ Mi Nam Nano Tay Dài ICONDENIM",
      price: "390,000₫",
      link: "#",
    },
    {
      id: "product-1-6",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/6.webp",
      title: "   Áo Sơ Mi Bamboo Nam ICONDENIM Basic Long-Sleeves ",
      price: "350,000₫",
      link: "#",
    },
    {
      id: "product-1-7",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/7.webp",
      title: "  Áo Sơ Mi Nam Baseball ICONDENIM New York ",
      price: "350,000₫",
      link: "#",
    },
    {
      id: "product-1-8",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/8.webp",
      title: " Áo Sơ Mi Nam Tay Dài ICONDENIM Regular ",
      price: "320,000₫",
      link: "#",
    },
    {
      id: "product-1-9",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/9.jpg",
      title: "  Áo Sơ Mi Nam Oxford Tay Dài ICONDENIM Hard Work ",
      price: "350,000₫",
      link: "#",
    },
    {
      id: "product-1-10",
      imgSrc: "picture/home/menu-list/aside-list/ao so mi/10.webp",
      title: "  Áo Sơ Mi Nam ICONDENIM Basic Multi-Color Nanotech ",
      price: "390,000₫",
      link: "#",
    },
  ],
  list2: [
    {
      id: "product-2-1",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/1.webp",
      title: " Áo Khoác Bomber ICONDENIM Zipper ",
      price: "550,000₫",
      link: "#",
    },
    {
      id: "product-2-2",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/1.webp",
      title: " Áo Khoác Denim ICONDENIM Black Beavy Wash  ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-2-3",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/3.webp",
      title: "  Áo Khoác Varsity ICONDENIM Nikola Tesla ",
      price: "390,000₫",
      link: "#",
    },
    {
      id: "product-2-4",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/4.jpg",
      title: " Áo Khoác Denim Trucker ICONDENIM CityExplorer",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-2-5",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/5.webp",
      title: " Áo Khoác Denim Trucker ICONDENIM Darkness  ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-2-6",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/6.webp",
      title: " Áo Khoác Chống Nắng ICONDENIM Basic Lightweight  ",
      price: "310,000₫",
      link: "#",
    },
    {
      id: "product-2-7",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/7.webp",
      title: " Áo Khoác Da ICONDENIM Raglan Exquisite  ",
      price: "550,000₫",
      link: "#",
    },
    {
      id: "product-2-8",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/8.webp",
      title: "  Áo Khoác Trunker ICONDENIM Beige Wash  ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-2-9",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/9.webp",
      title: "  Áo Khoác Varsity ICONDENIM Rhythm Of Life ",
      price: "550,000₫",
      link: "#",
    },
    {
      id: "product-2-10",
      imgSrc: "picture/home/menu-list/aside-list/ao khoac/10.webp",
      title: "  Áo Khoác ICONDENIM Dù Nhăn W Details  ",
      price: "450,000₫",
      link: "#",
    },
    // Thêm các sản phẩm khác cho danh sách 2
  ],
  list3: [
    {
      id: "product-3-1",
      imgSrc: "picture/home/menu-list/aside-list/quan short/1.webp",
      title: " Quần Short Jeans Nam ICONDENIM Metallic Fobpoc ",
      price: "390,000₫",
      link: "#",
    },
    {
      id: "product-3-2",
      imgSrc: "picture/home/menu-list/aside-list/quan short/2.jpg",
      title: "  Quần Short Nam ICONDENIM Color Denim  ",
      price: "390,000₫",
      link: "#",
    },
    {
      id: "product-3-3",
      imgSrc: "picture/home/menu-list/aside-list/quan short/3.webp",
      title: "  Quần Short Nam ICONDENIM Terry Line ",
      price: "320,000₫",
      link: "#",
    },
    {
      id: "product-3-4",
      imgSrc: "picture/home/menu-list/aside-list/quan short/4.webp",
      title: " Quần Short Nam ICONDENIM Linen Surface Cotton  ",
      price: "320,000₫",
      link: "#",
    },
    {
      id: "product-3-5",
      imgSrc: "picture/home/menu-list/aside-list/quan short/5.webp",
      title: "  Quần Short Tây Nam ICONDENIM Comfort Waistband ",
      price: "350,000₫",
      link: "#",
    },
    {
      id: "product-3-6",
      imgSrc: "picture/home/menu-list/aside-list/quan short/6.webp",
      title: "  Quần Short Nam Kaki ICONDENIM Fundamental ",
      price: "320,000₫",
      link: "#",
    },
    {
      id: "product-3-7",
      imgSrc: "picture/home/menu-list/aside-list/quan short/7.webp",
      title: "  Quần Short ICONDENIM Regular Fit Mid Length ",
      price: "320,000₫",
      link: "#",
    },
    {
      id: "product-3-8",
      imgSrc: "picture/home/menu-list/aside-list/quan short/8.webp",
      title: "  Quần Short Nam Pique ICONDENIM With ORGNLS Logo ",
      price: "320,000₫",
      link: "#",
    },
    {
      id: "product-3-9",
      imgSrc: "picture/home/menu-list/aside-list/quan short/9.webp",
      title: " Quần Short Jean Nam ICONDENIM Túi Hộp ",
      price: "420,000₫",
      link: "#",
    },
    {
      id: "product-3-10",
      imgSrc: "picture/home/menu-list/aside-list/quan short/10.jpg",
      title: " Quần Short Nam ICONDENIM Light Corduroy ",
      price: "390,000₫",
      link: "#",
    },
    // Thêm các sản phẩm khác cho danh sách 3
  ],
  list4: [
    {
      id: "product-4-1",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/1.webp",
      title: "  Quần Jean Nam ICONDENIM Straight-Fit Beige Wash  ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-4-2",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/2.webp",
      title: "   Quần Jean Cargo Nam ICONDENIM Straight Grey Wash ",
      price: "650,000₫",
      link: "#",
    },
    {
      id: "product-4-3",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/3.webp",
      title: "   Quần Jean ICONDENIM Blue Pocket Pattern ID 3D Slimfit   ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-4-4",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/4.webp",
      title: "  Quần Jean Nam ICONDENIM - Blue Wash Slim   ",
      price: "550,000₫",
      link: "#",
    },
    {
      id: "product-4-5",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/5.webp",
      title: "  Quần Jean Nam Carpenter ICONDENIM Monogram ID  ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-4-6",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/6.webp",
      title: "  Quần Jean Nam ICONDENIM Indigo - Form Smart Fit   ",
      price: "560,000₫",
      link: "#",
    },
    {
      id: "product-4-7",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/7.webp",
      title: "   Quần Jean Nam ICONDENIM Basic - Form Smart Fit ",
      price: "550,000₫",
      link: "#",
    },
    {
      id: "product-4-8",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/8.webp",
      title: "  Quần Jean Nam ICONDENIM White Skinny Fit  ",
      price: "590,000₫",
      link: "#",
    },
    {
      id: "product-4-9",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/9.webp",
      title: "  Quần Jean Nam ICONDENIM All White Smart-Fit ",
      price: "550,000₫",
      link: "#",
    },
    {
      id: "product-4-10",
      imgSrc: "picture/home/menu-list/aside-list/quan jean/10.webp",
      title: " Quần Jean ICONDENIM Black SlimFit With Contrast Rivets  ",
      price: "550,000₫",
      link: "#",
    },
    // Thêm các sản phẩm khác cho danh sách 3
  ],
};
function createProduct(containerId, productList) {
  const container = document.getElementById(containerId);

  let productHTML = "";
  productList.forEach((product) => {
    productHTML += `
      <div class="swiper-slide">
        <div class="product-block-banner" data-id="${product.id}">
          <div class="zn-product-block">
            <div class="product-img">
              <img src="${product.imgSrc}" alt="${product.title}" />
              <button class="button-loop-pro">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <div class="product-content">
              <h3 class="pro-name">
                <a href="#" title="${product.title}">
                  ${product.title}
                </a>
              </h3>
              <div class="pro-money">
                <p class="pro-price"><span>${product.price}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = productHTML;
}

// Tạo danh sách sản phẩm cho từng phần tử
createProduct("product-list-1", productsList.list1);
createProduct("product-list-2", productsList.list2);
createProduct("product-list-3", productsList.list3);
createProduct("product-list-4", productsList.list4);

// Lắng nghe sự kiện nhấp chuột vào mỗi product-block-banner
document.body.addEventListener("click", function (e) {
  const productBlock = e.target.closest(".product-block-banner");
  if (productBlock) {
    const productId = productBlock.dataset.id;
    const product = Object.values(productsList)
      .flat()
      .find((p) => p.id === productId);

    if (product) {
      document.getElementById("modalProductImage").src = product.imgSrc;
      document.getElementById("modalProductTitle").textContent = product.title;
      document.getElementById("modalProductPrice").textContent = product.price;
      document.getElementById("modalTotalPrice").textContent = product.price;
      document.getElementById("modalProductDescription").textContent =
        product.description;
      document.getElementById("productModal").classList.add("active");
    }
  }
});

// Đóng modal khi nhấn vào nút đóng
document.querySelector(".modal-close").addEventListener("click", function () {
  document.getElementById("productModal").classList.remove("active");
});

function updateCartDisplay() {
  const cartList = document.querySelector(".cart-list");
  cartList.innerHTML = "";

  cart.forEach((product) => {
    const itemHTML = `
      <li class="cart-item">
        <img src="${product.imgSrc}" alt="${product.title}" />
        <div>
          <h4>${product.title}</h4>
          <p>${product.price}</p>
        </div>
      </li>
    `;
    cartList.insertAdjacentHTML("beforeend", itemHTML);
  });

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace(/[^0-9]/g, "")),
    0
  );
  document.querySelector(
    ".text-price"
  ).textContent = `${totalPrice.toLocaleString()} ₫`;

  // Hiển thị modal giỏ hàng nếu chưa hiển thị
  const modalCart = document.querySelector(".modal-cart");
  if (!modalCart.classList.contains("open")) {
    modalCart.classList.add("open");
  }

  // Cập nhật trạng thái của các nút
  const thanhToanBtn = document.querySelector(".thanh-toan");
  thanhToanBtn.classList.remove("disabled");
}
function closeCart() {
  document.querySelector(".modal-cart").classList.remove("open");
}
// Hàm để tăng số lượng
function increasingNumber(button) {
  var quantityInput = document.getElementById("quantityInput");
  var currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
  updateTotalPrice();
}
// Hàm để giảm số lượng
function decreasingNumber(button) {
  var quantityInput = document.getElementById("quantityInput");
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
    updateTotalPrice();
  }
}
// Hàm để cập nhật giá tổng
function updateTotalPrice() {
  var quantityInput = document.getElementById("quantityInput");
  var currentQuantity = parseInt(quantityInput.value);
  var pricePerItem = parseFloat(
    document
      .getElementById("modalProductPrice")
      .textContent.replace(/[^0-9]/g, "")
  ); // Lấy giá sản phẩm, loại bỏ ký tự không phải số
  var totalPrice = pricePerItem * currentQuantity;
  document.getElementById("modalTotalPrice").textContent =
    formatPrice(totalPrice);
}

// Hàm để định dạng giá
function formatPrice(price) {
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

// Gọi hàm cập nhật giá ngay khi trang được tải
window.onload = updateTotalPrice;
