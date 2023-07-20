function checkboxAdj() {
    const checkbox = document.getElementById('adjuntar-archivo');
    const boton = document.getElementById('subir-archivos');

    if (checkbox.checked == true){
        boton.style.display = "block";
      } else {
        boton.style.display = "none";
      }
}