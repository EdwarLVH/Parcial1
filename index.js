fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('titulo_pagina').innerText = data.titulo_pagina;

        //  productos
        let productosDiv = document.getElementById('productos');
        data.productos.forEach(producto => {
            let productoHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text"><strong>Precio:</strong> $${producto.precio}</p>
                            <h6>Reseñas:</h6>
                            <ul class="list-group list-group-flush">
            `;
            producto.reseñas.forEach(reseña => {
                productoHTML += `
                    <li class="list-group-item">
                        <strong>${reseña.usuario}:</strong> ${reseña.comentario} <br>
                        <strong>Calificación:</strong> ${reseña.calificacion} <br>
                        <small>${reseña.fecha}</small>
                    </li>
                `;
            });

            productoHTML += `
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            productosDiv.innerHTML += productoHTML;
        });

        // footer
        let datosTienda = `
            <strong>${data.datos_tienda.nombre}</strong><br>
            Dirección: ${data.datos_tienda.direccion}<br>
            Teléfono: ${data.datos_tienda.telefono}<br>
            Correo: ${data.datos_tienda.correo}<br>
            Horario: Lunes a Viernes ${data.datos_tienda.horario_atencion.lunes_a_viernes}, 
            Sábados ${data.datos_tienda.horario_atencion.sabados}, 
            Domingos ${data.datos_tienda.horario_atencion.domingos}
        `;
        document.getElementById('datos_tienda').innerHTML = datosTienda;
    });