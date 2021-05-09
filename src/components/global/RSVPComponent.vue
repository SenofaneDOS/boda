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
</template>

<script>
import axios from 'axios'
export default {
methods:{
		async insertRSVP(){
      if($("#nome").val() == "")
      {
        $('.hover_bkgr_fricc').click(function(){
           $('.hover_bkgr_fricc').hide();
        });
        $("#AIoutput").text("Inserisci il nome per favore");
        $('.hover_bkgr_fricc').show();
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
      $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
      });
      $("#AIoutput").text("Grazie per la risposta");
      $('.hover_bkgr_fricc').show();

      }
		
		}
	}}
</script>


<style scoped>
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
