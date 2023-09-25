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
  var img = document.getElementById('config-img');

  lista.classList.toggle("config-mostrar");
  img.classList.toggle("config-active");
  
  window.onclick = function(event) {
    if (!event.target.matches('.config-button') && !event.target.matches('#config-img')) {
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

window.onscroll = function() {navbarCambio()}; 

function navbarCambio() {
  const barra = document.getElementById('nav-bar');
  if (document.body.scrollTop > 0 || 
    document.documentElement.scrollTop > 0) {
    barra.classList.add('nav-bar-activo');
  } else {
    barra.classList.remove('nav-bar-activo');
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
    banner.style.backgroundImage = "url(./Assets/Media/Banner-bg2.svg)";
  } else {
    luna.style.display = "block";
    sol.style.display = "none";
    banner.style.backgroundImage = "url(./Assets/Media/Banner-bg1.svg)";
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

  function conCero(n) {
    if (n < 10) {
      n = "0" + n;
    }
    return n;
  }

  h = conCero(h);
  m = conCero(m);
  s = conCero(s);

  var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  span.textContent = h + ":" + m + ":" + s + " | " + semana[dia] + " " + diaMes + " de " + meses[mes];

}
setInterval(fechaHora, 1000);