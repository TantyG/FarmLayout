async function getProduct() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  return data;
}
getProduct().then((rs) => {
  console.log(rs);
  const productsDiv = document.getElementById("products");
  for (let item of rs) {
    productsDiv.innerHTML += `<div class="product" data-name="p-1">
      <img onclick="gotoDetail(${item.id})" src="${item.image}" alt="" />
      <h3>${item.title}</h3>
      <div class="price">${item.price}</div>
    </div>`;
  }
});

async function gotoDetail(id) {
  window.location.assign(`detailsProduct.html?id=${id}`);
  let response = await fetch(`https://fakestoreapi.com/products/${id}`);
  let data = await response.json();
  return data;
}

gotoDetail(id).then((rs) => {
  console.log(rs);
});