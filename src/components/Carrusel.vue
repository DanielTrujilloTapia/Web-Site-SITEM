<template>
  <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active altura-contenedor car1" data-bs-interval="2000">
          <div class="carousel-caption letra subida">
            <h1 class="letra">Programas de Mantenimiento</h1>
            <a href="#" @click.prevent="showPopup(1)">Ver más...</a>
          </div>
        </div>
        <div class="carousel-item altura-contenedor car2">
          <div class="carousel-caption letra subida">
            <h5 class="letra">Fabricación y Montaje de Refacciones</h5>
            <a href="#" @click.prevent="showPopup(2)">Ver más...</a>
          </div>
        </div>
        <div class="carousel-item altura-contenedor car3">
          <div class="carousel-caption letra subida">
            <h5 class="letra">Capacitación del Personal</h5>
            <a href="#" @click.prevent="showPopup(3)">Ver más...</a>
          </div>
        </div>
        <div class="carousel-item altura-contenedor car4">
          <div class="carousel-caption letra subida">
            <h5 class="letra">Registros Electrónicos de Mantenimiento Industrial</h5>
            <a href="#" @click.prevent="showPopup(4)">Ver más...</a>
          </div>
        </div>
        <div class="carousel-item altura-contenedor car5">
          <div class="carousel-caption letra subida">
            <h5 class="letra">Servicio de Mantenimiento Tecnológico</h5>
            <a href="#" @click.prevent="showPopup(5)">Ver más...</a>
          </div>
        </div>
        <div class="carousel-item altura-contenedor car6">
          <div class="carousel-caption letra subida">
            <h5 class="letra">Venta de Productos Biodegradables</h5>
            <a href="#" @click.prevent="showPopup(6)">Ver más...</a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Ventanas -->
    <div class="ventana" v-if="activePopup === 1">
      <div class="ventana-content">
        <span class="close" @click="hidePopup">&times;</span>
        <h5>Programas de Mantenimiento</h5>
        <p>Ofrecemos programas integrales de mantenimiento preventivo y correctivo,
           diseñados para garantizar la operatividad continua de sus equipos. 
           Nuestro enfoque proactivo mejora la eficiencia y prolonga la vida útil de sus activos.</p>
      </div>
    </div>

    <div class="ventana" v-if="activePopup === 2">
      <div class="ventana-content">
        <span class="close" @click="hidePopup">&times;</span>
        <h5>Fabricación y Montaje de Refacciones</h5>
        <p>Contamos con un equipo especializado en la fabricación y montaje de refacciones 
          para sistemas operativos. Adaptamos soluciones precisas a sus necesidades, 
           asegurando un funcionamiento óptimo de sus equipos.</p>
      </div>
    </div>

    <div class="ventana" v-if="activePopup === 3">
      <div class="ventana-content">
        <span class="close" @click="hidePopup">&times;</span>
        <h5>Capacitación del Personal</h5>
        <p>Impartimos programas de capacitación personalizados para su equipo, abarcando desde el
          uso eficiente de equipos hasta las mejores prácticas en mantenimiento industrial. 
          Fortalezca las habilidades de su personal y maximice la eficiencia operativa.</p>
      </div>
    </div>

    <div class="ventana" v-if="activePopup === 4">
      <div class="ventana-content">
        <span class="close" @click="hidePopup">&times;</span>
        <h5>Registros Electrónicos de Mantenimiento Industrial</h5>
        <p>Implementamos sistemas avanzados de registros electrónicos, facilitando la gestión y
          documentación eficiente de todas las actividades de mantenimiento industrial. Acceda a
          información crítica de manera rápida y segura.</p>
      </div>
    </div>

    <div class="ventana" v-if="activePopup === 5">
      <div class="ventana-content">
        <span class="close" @click="hidePopup">&times;</span>
        <h5>Servicio de Mantenimiento Tecnológico</h5>
        <p>Brindamos servicios de mantenimiento especializado en equipos de cómputo, redes,
          servidores y sistemas operativos Windows y Linux. Mantenga su infraestructura tecnológica
          en óptimas condiciones para un rendimiento constante.</p>
      </div>
    </div>

    <div class="ventana" v-if="activePopup === 6">
      <div class="ventana-content">
        <span class="close" @click="hidePopup">&times;</span>
        <h5>Venta de Productos Biodegradables</h5>
        <p>Ofrecemos una gama de productos biodegradables para limpieza industrial: <br>
          - Desengrasante Industrial: Elimine eficazmente la grasa y residuos industriales. <br>
          - Quita Sarro Industrial: Proteja sus equipos contra la acumulación de sarro.<br>
          - Desengrasante, Detergente y Desinfectante: Productos versátiles para mantener
          ambientes higiénicos y seguros.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePopup: null,
    };
  },
  methods: {
    showPopup(id) {
      this.activePopup = id;
    },
    hidePopup() {
      this.activePopup = null;
    },
  },
};
</script>

<style>
.altura-contenedor {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: larger;
}

a:hover {
  color: rgb(31, 164, 187);
}

.car1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/mantenimiento.jpeg');
  background-size: contain;
}

.car2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/montaje.jpeg');
  background-size: contain;
}

.car3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/personal.jpeg');
}

.car4 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/registroselec.jpeg');
  background-size: contain;
}

.car5 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/mantenimientotec.jpeg');
  background-size: contain;
}

.car6 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/gara.jpg');
}

.letra {
  color: #ffffff;
  font-size: 25px;
}

.ventana {
  display: block;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.ventana-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  max-width: 400px;
  height: 300px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.ventana-content h5 {
  font-size: 20px;
  margin-bottom: 18px;
}

.ventana-content p {
  font-size: 15px;
  line-height: 1.5;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.subida{
  margin-bottom: 100px;
}
@media (max-width: 768px) {
  .letra {
    font-size: 20px; /* Ajusta el tamaño del texto para pantallas pequeñas */
  }
  .ventana{
    margin-top: 50px;
  }
  .ventana-content{
    width: 80%;
    max-width: 600px;
    height: 600px;
  }
  .ventana-content h5{
    font-size: 25px;
  }
  .ventana-content p{
    font-size: 20px;
  }
  
}
@media (max-width: 810px) {
  .ventana-content{
    width: 80%;
    max-width: 600px;
    height: 600px;
  }
  .car1 ,.car2,.car4,.car5{
    background-size: cover;
  }
}
</style>