$(function() {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(({products}) => {
      products.map(item => {
        $("#product-list-body").append(
          '<tr class="product-list-row">' +
          `<td class="id">${item.id}</td>` +
          `<td class="title">${item.title}</td>` +
          `<td class="description">${item.description}</td>` +
          '</tr>'
        )
      })
    })
});
