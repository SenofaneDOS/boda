<template>
  <div class="wrapper font-body  max-w-lg my-20 mx-auto text-white border-8 border-solid">
    <div class="inner w-full p-5">
      <h3>RSVP</h3>
      <p>Conferma la tua presenza entro il <strong>1° di Agosto</strong></p>
      <label class="form-group">
        <input
          id="nome"
          type="text"
          class="form-control"
          required
        >
        <span>Nome</span>
        <span class="border" />
      </label>
      <label class="form-group">
        <input
          id="email"
          type="text"
          class="form-control"
          required
        >
        <span for="">Email</span>
        <span class="border" />
      </label>
      <span>Presenza</span>
      <label class="form-group mt-2">
        <div>
          <input
            id="presenzaOK"
            type="radio"
            name="drone"
            value="SI"
            checked
          >
          <label
            for="huey"
            class="ml-2"
          >ci sarò</label>
        </div>

        <div>
          <input
            id="presenzaKO"
            type="radio"
            name="drone"
            value="NO"
          >
          <label
            for="dewey" 
            class="ml-2"
          >non potrò esserci</label>
          
        </div>
        <span class="border" />
      </label>
      <label class="form-group">
        <textarea
          id="messaggio"
          name=""
          class="form-control"
          required
        />
        <span for="">Messaggio</span>
        <span class="border" />
      </label>
      <button @click="insertRSVP()">
        Invia 
        <i class="zmdi zmdi-arrow-right" />
      </button>
    </div>
  </div>

  <div class="hover_bkgr_friccc font-body text-2xl sm:text-3xl md:text-4xl px-5">
    <span class="helper" />
    <div class="p-5">
      <span id="AIoutput" />
      <!-- Ho trovato "<span id="songTitle" />" di "<span id="songArtist" />"
      <br>
      <br>
      <img
        id="songImage"
        style="margin-left: auto;margin-right: auto;display: block;"
        src="#"
        width="200"
        height="200"
      >
      <br>
      <span id="songEsito" /> -->
    </div>
  </div>

  <!-- <div
    id="rsvpModal"
    class="flex flex-row flex-wrap justify-center font-body"
  >
    <div class="text-center mt-8 mr-5">
      <span
        id="AIoutput"
        class="text-4xl"
      ><br></span>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios'
export default {
methods:{
		async insertRSVP(){
      if($("#nome").val() == "")
      {
        $('.hover_bkgr_friccc').click(function(){
           $('.hover_bkgr_friccc').hide();
        });
        $("#AIoutput").text("Inserisci il nome per favore");
        $('.hover_bkgr_friccc').show();
      }
      else{
      await axios.post(
			'/.netlify/functions/RSVPInsert',
				{
          nome: $("#nome").val(),
					email: $("#email").val(),
					presenza: $('input[name=drone]:checked').val(),
          messaggio : $("#messaggio").val()
				}
			)
      $('.hover_bkgr_friccc').click(function(){
        $('.hover_bkgr_friccc').hide();
      });
      $("#AIoutput").text("Grazie per la risposta");
      $('.hover_bkgr_friccc').show();

      }
		
		}
	}}
</script>


<style scoped>
/* Popup box BEGIN */
.hover_bkgr_friccc{
    background:rgba(0,0,0,.4);
    cursor:pointer;
    display:none;
    height:100%;
    position:fixed;
    text-align:center;
    top:0;
    width:100%;
    z-index:10000;
}
.hover_bkgr_friccc .helper{
    display:inline-block;
    height:100%;
    vertical-align:middle;
}
.hover_bkgr_friccc > div {
    background-color: #fff;
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    height: auto;
    max-width: 551px;
    min-height: 100px;
    vertical-align: middle;
    position: relative;
    border-radius: 8px;
}
.popupCloseButton {
    background-color: #fff;
    border: 3px solid #999;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    font-family: arial;
    font-weight: bold;
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 25px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    text-align: center;
}
.popupCloseButton:hover {
    background-color: #ccc;
}
.trigger_popup_friccc {
    cursor: pointer;
    font-size: 20px;
    margin: 20px;
    display: inline-block;
    font-weight: bold;
}
/* Popup box BEGIN */

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

body {
  color: #fff;
  font-size: 15px;
  margin: 0; }

input, textarea, select, button {
  color: #fff;
  font-size: 15px; }

img {
  max-width: 100%; }

ul {
  padding-left: 0;
  margin-bottom: 0; }

a:hover {
  text-decoration: none; }

:focus {
  outline: none; }

.wrapper {
  min-height: 100vh;
  border-color:#FEEDBA;
  display: flex;
  align-items: center;
  /* background: url("../images/bg-registration-form-7.jpg") no-repeat; */
  background-size: cover; }



textarea {
  resize: none; }

h3 {
  /* text-transform: uppercase; */
  font-size: 45px;
  /* font-family: "Montserrat-Bold"; */
  text-align: center;
  margin-bottom: 12px; }

p {
  text-align: center;
  padding: 0 10px;
  margin-bottom: 55px;
  line-height: 1.8; }

.form-group {
  position: relative;
  display: block;
  margin-bottom: 48px; }
  .form-group span {
    font-size: 15px;
    color: white;
    position: absolute;
    top: 11px;
    transition: all .2s ease;
    transform-origin: 0 0;
    cursor: text; }
  .form-group span.border {
    height: 2px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    top: 41px;
    transform: scaleX(0);
    transition: all .15s ease;
    background: #fff; }

.form-control {
  border: none;
  border-bottom: 2px solid white;
  display: block;
  width: 100%;
  height: 43px;
  font-size: 15px;
  background: none;
  /* font-family: "Montserrat-SemiBold"; */
   }
  .form-control:focus, .form-control:valid {
    border-bottom: 2px solid #fff; }
    .form-control:focus + span, .form-control:valid + span {
      transform: translateY(-22px) scale(0.8); }
      .form-control:focus + span + .border, .form-control:valid + span + .border {
        transform: scaleX(1); }

textarea.form-control {
  padding-top: 10px;
  padding-bottom: 10px; }

button {
  border: none;
  width: 162px;
  height: 51px;
  border: 2px solid #fff;
  margin: auto;
  margin-top: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  color: #fff;
  text-transform: uppercase;
  /* font-family: "Montserrat-SemiBold"; */
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; }
  button i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FEEDBA;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  button:hover {
    color: black;
    border-color: transparent; }
    button:hover:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1); }
    button:hover i {
      -webkit-transform: translateX(4px);
      transform: translateX(4px); }

@media (max-width: 767px) {
  h3 {
    font-size: 38px; }

  p {
    font-size: 14px;
    padding: 0; }

  .inner {
    padding: 27px 20px 37px;
    border: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none; }

}

/*# sourceMappingURL=style.css.map */

</style>
