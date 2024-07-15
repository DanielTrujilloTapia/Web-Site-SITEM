<template>
    <div>
        <div class="header-contact">
            <img src="/src/assets/Engranes.jpg" class="imgContactenos">
            <h2 class="contact-title">Contáctanos</h2>
        </div>
        <div class="contact-container">
            <div class="contact-company">
                <h5>¿Cómo podemos ayudarte?</h5>
                <br>
                <p><b>Nombre:</b></p>
                <input type="text" class="inputC" />
                <p><b>Correo:</b></p>
                <input type="text" class="inputC" />
                <p><b>Teléfono:</b></p>
                <input type="text" maxlength="10" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="inputC"/>
                <p><b>Mensaje:</b></p>
                <textarea class="inputC" rows="3"></textarea>
                <button type="button" class="send-button"><b>Enviar</b></button>
            </div>
            <div class="contact-info-container">
                <div class="contact-information">
                    <div class="info-left">
                        <div class="line-left"></div>
                        <h5 class="space">Ubicación</h5>
                        <p><img src="/src/assets/ubicacion.png" width="25px" class="iconos" />C.Abeto 6, Col Nueva Santa Maria, Hgo. CP:42836.</p>
                    </div>
                    <div class="info-right">
                        <div class="line-right"></div>
                        <h5 class="space">Datos de Contacto</h5>
                        <p><img src="/src/assets/llamar.png" width="25px" class="iconos" />Tel: 871 404 4437</p>
                        <p><img src="/src/assets/correo-electronico.png" width="25px" class="iconos" />mantenimiento.sitem@gmail.com</p>
                    </div>
                </div>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.197692286696!2d-99.35185572499768!3d20.000215881404056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22de8a1437e97%3A0xa111907e33a23a67!2sC.%20Abeto%206%2C%2042836%20Col%20Nueva%20Santa%20Mar%C3%ADa%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1719942055207!5m2!1ses!2smx" width="750" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.header-contact {
    position: relative;
    text-align: center;
    width: 100%;
}
.imgContactenos {
    width: 100%;
    height: 120px;
    object-fit: cover;
    opacity: 0.4;
}
.contact-title {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    color: white;
}
.contact-container {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    flex-wrap: wrap;
}
/* BORDE DEGRADADO */
.contact-company {
    width: 35%;
    border-radius: 20px;
    text-align: justify;
    padding: 30px;
    border: 20px solid transparent;
    border-image: linear-gradient(to bottom, #cbe0e1 0%, #57b57b80 100%) 1;
}
/* SIN BORDE */
/* .contact-company {
    width: 28%;
    margin:30px;
    border-radius: 10px;
    text-align: justify;
} */
.send-button {
    display: block;
    margin: 20px auto;
    padding: 10px 30px;
    background: #4CAF50;
    color: white !important;
}
.contact-info-container {
    width: 60%;
    height: 90%;
}
.contact-information {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 18px;
}
.info-left, .info-right {
    width: 48%;
}
.contact-company p, .contact-information p {
    margin: 10px 0;
}
.inputC {
    width: 100%;
    border: 2.5px solid #2FABAB;
    border-radius: 5px;
    padding: 3px;
    margin: 2px 0;
}
textarea.inputC{
    resize:none;
}
.line-left {
    height: 2.5px;
    width: 90px;
    background-color: #2FABAB;
    margin-bottom: 10px;
}
.line-right {
    height: 2.5px;
    width: 170px;
    background-color: #2FABAB;
    margin-bottom: 10px;
}
.iconos {
    margin-right: 10px;
}
.map-container {
    margin-top: 10px;
    text-align: center;
    align-items: flex-end;
}
.space {
    margin-bottom: 30px;
}

@media (max-width: 1568px) {
    iframe {
        width: 810px;
    }
}
@media (max-width: 1368px) {
    iframe {
        width: 690px;
    }
}
@media (max-width: 1199.98px) {
    .contact-container {
        flex-direction: row;
        padding: 30px;
    }
    .contact-company{
        width: 50%;
    }
    .contact-info-container {
        width: 50%;
    }
    iframe {
        margin: 20px;
        width: 450px;
    }
}
@media (max-width: 991.98px) {
    .contact-title {
        font-size: 1.5em;
        left: 40px;
        transform: translateY(50%);
    }
    .send-button {
        padding: 8px 20px;
    }
    .contact-company{
        width: 50%;
    }
    .contact-info-container {
        width: 50%;
    }
    iframe {
        width: 380px;
    }
}
@media (max-width: 767.98px) {
    .contact-container {
        flex-direction: column;
        padding: 20px;
    }
    .contact-company {
        width: 100%;
        margin-bottom: 20px;
    }
    .contact-info-container {
        width: 90%;
    }
    .contact-title {
        font-size: 1.2em;
        left: 20px;
    }
    .contact-information {
        flex-direction: column;
        align-items: flex-start;
    }
    .info-left, .info-right {
        width: 100%;
        margin-bottom: 10px;
    }
    .line-right {
        width: 170px;
    }
    .line-left{
        width:100px;
    }
    iframe {
        width: 5%;
        margin-top: 20px;
    }
}
@media (max-width: 575.98px) {
    .header-contact {
        height: 120px;
    }
    .imgContactenos {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }
    .contact-title {
    position: absolute;
    left: 20px;
    transform: translateY(80%);
    }
    .contact-container {
        flex-direction: column;
        padding: 5px;
    }
    .contact-company {
        width: 100%;
        margin-bottom: 20px;
    }
    .contact-information {
        flex-direction: column;
        width: 100%;
    }
    .info-left, .info-right {
        width: 100%;
    }
    .line-right {
        width: 170px;
    }
    .line-left{
        width:100px;
    }
    iframe {
        width: 100%;
        height: 300px;
    }
}
</style>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    },
    methods: {
        async ClearInputs(){
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
        },
        async sendEmail() {
            try {
                const response = await fetch('http://localhost:5000/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        message: this.message
                    })
                });
                const data = await response.text();
                alert(data);
                this.ClearInputs();
            } catch (error) {
                alert('Error al enviar el correo');
            }
        }
    }
}

</script>


