const baseUrlPedidos = "http://localhost:3000/orders";
const baseUrlProductos = "http://localhost:3000/products";

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  return response.json();
}

async function obtenerPedidosyProductos() {
  try {
    const pedidos = await getData(baseUrlPedidos);
    pedidos.sort((a, b) => new Date(b.date) - new Date(a.date));

    const lista = document.createElement("ul");
    lista.textContent = "Lista de pedidos";
    document.body.append(lista);

    for (let i = 0; i < pedidos.length; i++) {
      const idPedido = pedidos[i].id;
      const fechaPedido = pedidos[i].date;
      const productos = pedidos[i].products;
      const pedidoListado = document.createElement("li");
      lista.append(pedidoListado);
      pedidoListado.textContent = `Fecha: ${fechaPedido} | ID del pedido: ${idPedido}`;

      const ulProductos = document.createElement("ul");
      pedidoListado.appendChild(ulProductos);

      for (let producto of productos) {
        const idProducto = producto.productId;
        const cantidadProducto = producto.quantity;
        const urlConIdProducto = `${baseUrlProductos}/${idProducto}`;
        const productoData = await getData(urlConIdProducto);

        const liProducto = document.createElement("li");
        liProducto.textContent = `Nombre del producto: ${productoData.name}, Cantidad: ${cantidadProducto}`;
        ulProductos.appendChild(liProducto);
        console.log(
          `Nombre del producto: ${productoData.name}, Cantidad: ${cantidadProducto}`
        );
      }
    }
  } catch (error) {
    console.error("Error en la petición", error);
  }
}

obtenerPedidosyProductos();
