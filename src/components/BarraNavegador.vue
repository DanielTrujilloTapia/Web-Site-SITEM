<template>
    <div> <!-- Barra de navegación -->
   <nav class="toolbar displaynavoriginal">
     <div class="toolbar-container">
       <div class="logo">
        <div>
          <img class="icono" src="/src/assets/Logo-SITEM.gif" alt="Logotipo SITEM">
        </div>
        <a style="color: black" href="/">SITEM</a>
      </div>
       <ul class="toolbar-nav">
         <li><a href="/acercadenosotros">Acerca de Nosotros</a></li>
         <li><a href="/servicios">Servicios</a></li>
         <li><a href="/contacto">Contacto</a></li>
       </ul>
     </div>
   </nav>

   <nav class="navbar navbar-light bg-white fixed-top display fondonav shadow-nav">
  <div class="container-fluid">
    <div class="logo">
        <div>
          <img class="icono-reducido" src="/src/assets/Logo-SITEM.gif" alt="">
        </div>
        <a class="navbar-brand" href="/">SITEM</a>
      </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-light custom-offcanvas-bg" tabindex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasLightNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLightNavbarLabel">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav-reducida">
          <li class="lista"><a href="/acercadenosotros">Acerca de Nosotros</a></li>
          <li class="lista"><a href="/servicios">Servicios</a></li>
          <li class="lista"><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>


   </div>    
</template>
<style>
.lista{
  margin:10px;
}
.toolbar {
 background-color: #ffffff;
 padding: 5px;
 box-shadow: 0 4px 8px rgba(87, 181, 123, 0.5);
 max-height: 75px;
}

.toolbar-container {
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.logo {
  display: flex;
  flex-direction: row;
 font-size: 1.0em;
}

.toolbar-nav {
 list-style: none;
 display: flex;
 margin: 0;
 padding: 0;
}

.toolbar-nav li {
 margin-left: 20px;
}

.toolbar-nav a {
 color: rgb(0, 0, 0);
 text-decoration: none;
 font-size: 0.9em;
 padding: 10px;
}

a{
color: rgb(0, 0, 0);
 text-decoration: none;
 padding: 10px;
}

.toolbar-nav a:hover {
 background-color: #57B57B;
 color: white;
 border-radius: 5px;
}

/* Estilos para la sección About */
.about {
 padding: 20px;
}

.display{
 display: none;
}
.displaynavoriginal{
    display: block;
}

.fondonav{
    background-color: white;
}

.custom-offcanvas-bg {
  background-color: white;
  color: black;
}

.nav-reducida a {
  color: black;
  text-decoration: none;
}

.nav-reducida a:hover {
    background-color: #57B57B;
 color: white;
 border-radius: 5px;
}

.fondonav {
  background-color: white !important;
}

.shadow-nav {
  box-shadow: 0 4px 8px rgba(87, 181, 123, 0.5);
}
.icono{
  margin-top: 5px;
       width: 40px;
       height: 40px;
       
    }
    .icono-reducido{
      margin-top: 7px;
       width: 50px;
       height: 40px;
    }


@media (max-width: 1000px) {
    .display{
      display: block;
    }
    .displaynavoriginal{
        display: none;
    }
    .icono-reducido{
      width: 40px;
    }
}
</style>
