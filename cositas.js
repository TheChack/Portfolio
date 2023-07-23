function checkboxAdj() {
  const checkbox = document.getElementById('adjuntar-archivo');
  const boton = document.getElementById('subir-archivos');

  if (checkbox.checked == true){
      boton.style.display = "block";
    } else {
      boton.style.display = "none";
    }
}

function menuConfig() {
  var lista = document.getElementById('config-menu');

  lista.classList.toggle("config-mostrar");
  

  window.onclick = function(event) {
    if (!event.target.matches('.config-button')) {
      var dropdowns = document.getElementsByClassName("config-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('config-mostrar')) {
          openDropdown.classList.remove('config-mostrar');
        }
      }
    }
  } 

}


function modoOscuro() {
  var darkBody = document.body;
  var luna = document.getElementById('dark-mode-img1');
  var sol = document.getElementById('dark-mode-img2');

  darkBody.classList.toggle('modo-oscuro');

  if (darkBody.className == 'modo-oscuro') {
    luna.style.display = "none";
    sol.style.display = "block";
  } else {
    luna.style.display = "block";
    sol.style.display = "none";
  }
}