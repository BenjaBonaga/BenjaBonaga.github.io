//Definimos las opciones para cada categoria
const opcionesSubCategoria = {
    mexico: ["Ciudad de México", "Guadalajara", "Monterrey", "Cancún"],
    estadosUnidos: ["Nueva York", "Los Ángeles", "Chicago", "Miami"],
    italia: ["Roma", "Milán", "Venecia", "Florencia"],
    colombia: ["Bogotá", "Medellín", "Cali", "Barranquilla"]
};

//Funcion para actualizar opciones de subcategoria
function actualizarSubcategoria() {
    const categoriaSeleccionada = document.getElementById("categoria").value;
    //Obtener el elemento del segundo combobox
    const subcategoriaSelect = document.getElementById("subcategoria");
    //Limpiar opciones anteriores
    subcategoriaSelect.innerHTML = '<option value="">--Seleccione un pais--</option>';
    //Si la categoria seleccionada es valida
    if(categoriaSeleccionada && opcionesSubCategoria[categoriaSeleccionada]) {
        //Añadir las nuevas opciones de la categoria eleccionada
        opcionesSubCategoria[categoriaSeleccionada].forEach(function(subcategoria) {
            const opcion = document.createElement("option");
            opcion.value = subcategoria.toLowerCase();
            opcion.text = subcategoria;
            subcategoriaSelect.appendChild(opcion);
        });
    }
    else {
        // Mostrar un mensaje si no hay categoría seleccionada
        subcategoriaSelect.innerHTML = '<option value="">--Seleccione primero un continente--</option>';
    }
}

let boton =document.getElementById("miBoton");

boton.addEventListener("click", function(){
    console.log("Has hecho click");
});