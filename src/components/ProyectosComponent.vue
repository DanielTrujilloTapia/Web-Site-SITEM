<template>
    <div>
        <h1 class="texto">Clientes</h1>
        <h3 class="texto">Contamos con la confianza de empresas de alto renombre a nivel nacional e internacional como lo son:</h3>
        <div class="cards">
            <div class="card alturacards" style="width: 20rem;">
        <div class="card-body c1">
            <h5 class="card-title">CONCRETOS CRUZ AZUL</h5>
            <div class="contenido-cards">
                <p class="card-text">Es una empresa responsable dedicada a la comercialización de concreto premezclado, venta de cemento y materiales para construcción.</p>
            </div>
        </div>
        </div>

        <div class="card" style="width: 20rem;">
        <div class="card-body c2">
            <h5 class="card-title">CONCRETOS FORTALEZA DEL BAJIO</h5>
            <p class="card-text">Concretos Fortaleza se creo para atender las necesidades en la industria de la construcción. Cuenta con la experiencia y profesionalismo para la producción y suministro del concreto</p>
          
        </div>
        </div>

        <div class="card" style="width: 20rem;">
        <div class="card-body c3">
            <h5 class="card-title">COCRETOS APAXCO DEL BAJIO</h5>
            <p class="card-text">Es una empresa 100% mexicana, está dedicados a la producción y suministro de concreto premezclado utiliza la mejor tecnología para lograr máxima calidad y ofrecer el mejor servicio</p>
         
        </div>
        </div>

        <div class="card" style="width: 20rem;">
        <div class="card-body c4">
            <h5 class="card-title">CEMEX</h5>
            <p class="card-text">Es una empresa que crea valor sostenido al proveer productos y soluciones para satisfacer las necesidades de construcción de sus clientes en México y el mundo</p>
            
        </div>
        </div>

        <div class="card" style="width: 20rem;">
        <div class="card-body c5">
            <h5 class="card-title">OXXO</h5>
            <p class="card-text">Es una cadena de tiendas de formato pequeño que a lo largo de 30 años de experiencia, ha logrado satisfacer las necesidades cotidianas de clientes, con establecimientos en la República Mexicana y Colombia.</p>
           
        </div>
        </div>

        </div>
    </div>
</template>

<script>

</script>

<style>
.texto{
    text-align: center;
}
.contenido-cards{
    display: none;
}
.alturacards{
height: 70px;
}

.cards{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
}
.card-body{
    box-shadow: 4px 4px 8px rgba(87, 181, 123, 0.5);
}
.card:hover{
    background-color: rgb(215, 255, 255);
}
.card:hover .card1-bot{
  display: block; 
}
.card:hover .card1-top{
  display: block; 
}
.c1:hover .contenido-cards{
    display: block;
}

.c1:hover{
    background: linear-gradient(to bottom left,rgb(112, 225, 253) 20% ,rgb(255, 126, 121)  90%); 
    font-size: 20px;
}
.c1:hover .card-title{
    font-size: 25px;
}
.c2:hover{
    background: linear-gradient(to bottom left,rgb(90, 129, 151)  20%,white 50%); 
}
.c3:hover{
    background: linear-gradient(to bottom left,rgb(255, 189, 134)  20%,rgb(125, 132, 224) 50%); 
}
.c4:hover{
    background: linear-gradient(to bottom left, rgb(255, 92, 92) 20%, rgb(122, 122, 255) 50%);
}
.c5:hover{
    background: linear-gradient(to bottom left, rgb(255, 255, 121)  20%, rgb(255, 114, 114) 50%); 
}
</style>