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
  var banner = document.getElementById('header-banner');

  darkBody.classList.toggle('modo-oscuro');

  if (darkBody.className == 'modo-oscuro') {
    luna.style.display = "none";
    sol.style.display = "block";
    banner.style.backgroundImage = "url(./Assets/Media/Banner-bg2.jpg)";
  } else {
    luna.style.display = "block";
    sol.style.display = "none";
    banner.style.backgroundImage = "url(./Assets/Media/Banner-bg1.jpg)";
  }
}

function fechaHora() {
  var span = document.getElementById('hora');

  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var dia = d.getDay();
  var diaMes = d.getDate();
  var mes = d.getMonth();

  var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  span.textContent = h + ":" + m + ":" + s + " | " + semana[dia] + " " + diaMes + " de " + meses[mes];

}
setInterval(fechaHora, 1000);