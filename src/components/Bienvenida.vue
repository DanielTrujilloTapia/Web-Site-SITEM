<template>
  <div class="fondo-principal">
    <div class="contenedor">
      <div class="logotipo">
        <img class="gif" src="/src/assets/Logo-SITEM.gif" alt="">
      </div>
    </div>
    <div>
      <p class="empresa">Servicios Industriales Técnicos y Especializados de México S.A.</p>
      <p class="texto-principal">Bienvenido</p>
      <p class="texto-secundario">El mantenimiento es un factor de suma importancia en el área industrial, es crucial para garantizar un
        rendimiento óptimo al igual que una vida útil prolongada de sus equipos y procesos de producción.</p>
    </div>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .fondo-principal {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/cementera.jpg');
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  .contenedor {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .logotipo {
    width: 100%;
    max-width: 200px;
    height: auto;
  }

  .gif {
    width: 100%;
    height: auto;
  }

  .empresa {
    text-align: center;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
  }

  .texto-principal {
    text-align: center;
    font-family: "Nunito", sans-serif;
    font-size: 40px;
  }

  .texto-secundario {
    text-align: center;
    font-family: "Nunito", sans-serif;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    .texto-principal {
      font-size: 50px;
    }
   
    .texto-secundario {
      font-size: 20px;
    }

    .empresa {
      font-size: 20px;
    }
  }
</style>
