<template>
  <div class="container my-0 mx-auto px-5">
    <div class="text-container grid gap-10 text-center text-8xl text-white">
      <span> Playlist</span>
    </div>
    <div class="font-body text-center">
      <span class="text-3xl text-white">Aiutateci a scegliere la playlist per la nostra festa<br> se hai in mente una canzone che vorresti sentire consigliacela qui sotto</span>
      <div class="container__item my-16">
        <input
          id="playlistText"
          type="text"
          class="form__field w-60 sm:w-full sm:max-w-lg"
          placeholder="Scrivi una canzone"
        >
        <button
          class="btn btn--primary btn--inside uppercase"
          @click="insertPlaylist()"
        >
          Invia
        </button>
      </div>
      <span class="text-4xl text-white">L'intelligenza artificiale creata per l'occasione ti risponderà con un giudizio sui tuoi gusti musicali</span>
    </div>
  </div>
  <div class="hover_bkgr_fricc font-body text-2xl sm:text-3xl md:text-4xl px-5">
    <span class="helper" />
    <div class="p-5">
      <span id="AIoutput" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
methods:{
		async insertPlaylist(){
      if($("#playlistText").val() == "")
      {
        $('.hover_bkgr_fricc').click(function(){
           $('.hover_bkgr_fricc').hide();
        });
        $("#AIoutput").text("Se non ti viene in mente nessuna canzone puoi anche sentirti libero di non cliccare quel bottone!");
        $('.hover_bkgr_fricc').show();
      }
      else{
      await axios.post(
			'/.netlify/functions/playlistInsert',
				{
					title: $("#playlistText").val(),
				}
			)
			$("#playlistText").val("");
      $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
      });

      await axios.get(
			'/.netlify/functions/machineLearning',
				{
					title: $("#playlistText").val(),
				}
			).then(response =>{
        $("#AIoutput").text(response.data);
      }).catch(err =>{
      console.log(err);
      })
      $('.hover_bkgr_fricc').show();
      }
		
		}
	}}
</script>

<style scoped>
/* form playlist form */
:root {
    background: #f5f6fa;
    color: #9c9c9c;
    font: 1rem "PT Sans", sans-serif;
  }
  
  html,
  body,
  .container {
    height: 100%;
  }
  
  a {
    color: inherit;
  }
  a:hover {
    color: #FEEDBA;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .uppercase {
    text-transform: uppercase;
  }
  
  .btn {
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
  }
  .btn--primary {
    background: #FEEDBA;
    color: black;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 12px 36px;
  }
  .btn--primary:hover {
    background: #FEEDBA;
  }
  .btn--primary:active {
    background: #FEEDBA;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
  .btn--inside {
    margin-left: -96px;
  }
  
  .form__field {
    background: #fff;
    color: #a3a3a3;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
  }

/* fine playlist form */

/* Popup box BEGIN */
.hover_bkgr_fricc{
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
.hover_bkgr_fricc .helper{
    display:inline-block;
    height:100%;
    vertical-align:middle;
}
.hover_bkgr_fricc > div {
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
.trigger_popup_fricc {
    cursor: pointer;
    font-size: 20px;
    margin: 20px;
    display: inline-block;
    font-weight: bold;
}
/* Popup box BEGIN */
</style>