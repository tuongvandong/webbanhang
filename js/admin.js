document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("productForm");
  const productConfirmation = document.getElementById("productConfirmation");

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const stock = parseInt(document.getElementById("productStock").value);

    if (name && !isNaN(price) && !isNaN(stock)) {
      productConfirmation.innerHTML = `
                <p><strong>Sản phẩm đã được thêm thành công!</strong></p>
                <p><strong>Tên sản phẩm:</strong> ${name}</p>
                <p><strong>Giá:</strong> ${price.toLocaleString(
                  "vi-VN"
                )} VND</p>
                <p><strong>Số lượng tồn kho:</strong> ${stock}</p>
            `;
      productConfirmation.style.display = "block";
    } else {
      alert("Vui lòng điền đầy đủ thông tin.");
    }
  });
});
