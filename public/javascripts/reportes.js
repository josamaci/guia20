let cargarDatos = () => {
    document.querySelector('#selector').addEventListener('change', e => {
        document.querySelector('tbody').innerHTML = ''
        fetch('https://guia-20-dawm-default-rtdb.firebaseio.com/collection.json')
            .then(response => response.json())
            .then(data => {
                for (const d of data) {
                    let productoNombre = d.productoNombre
                    if (e.target.value == productoNombre) {
                        let agregarfila = `
                        <td>
                            ${d.id}
                        </td>
                        <td>
                            ${d.comprador.nombre} ${d.comprador.apellido}
                        </td>
                        <td>
                            ${d.fechaCompra}
                        </td>
                        <td>
                            ${d.valor}
                        </td>
                        <td>
                            <a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                        `
                        document.querySelector('tbody').innerHTML += agregarfila
                    }
                }
            })
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});