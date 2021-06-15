<template>
  <div class="container mb-44 mt-16 mx-auto px-5">
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
    <transition
      appear
      name="loader"
    >
      <div
        v-if="submitting"
        class="fixed flex items-center justify-center inset-0 bg-opacity-30 bg-white"
      >
        <image-component
          loader
          size="w-28 my-0 mx-auto"
          color="text-white"
        />
      </div>
    </transition>
  </div>

  <div class="hover_bkgr_fricc font-body text-2xl sm:text-3xl md:text-4xl px-5">
    <span class="helper" />
    <div class="p-5">
      Ho trovato "<span id="songTitle" />" di "<span id="songArtist" />"
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
      <span id="songEsito" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ImageComponent from './ImageComponent.vue';
export default {
  components: { ImageComponent },
  props: {
    type: [ Boolean ]
  },
  data(){
    return{
    submitting: false
    }
  },
methods:{
		async insertPlaylist(){
      // -------------------- insert fauna --------------------
      if($("#playlistText").val() == "")
      {
        $('.hover_bkgr_fricc').click(function(){
           $('.hover_bkgr_fricc').hide();
        });
        $("#songTitle").text("Se non ti viene in mente nessuna canzone sentiti libero di non cliccare quel bottone!");
        $('.hover_bkgr_fricc').show();
      }
      else{
      $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
			  $("#songTitle").text("");
			  $("#songArtist").text("");
			  $("#songImage").hide();
        $("#songEsito").text("");

      });
      //-------------------- end nsert fauna --------------------
      var title;
      var artist;
      var esito;
      var image;
      this.submitting = true
      await axios.post(
			'/.netlify/functions/machineLearning',
				{
					title: $("#playlistText").val(),
				}
			).then(response =>{
        if(response.data.data.response.hits.length > 0)
        {
          // console.log(response);
          title=response.data.data.response.hits[0].result.title;
          artist=response.data.data.response.hits[0].result.primary_artist.name;
          esito=response.data.data.esito;
          image = response.data.data.response.hits[0].result.song_art_image_url;
          $("#songTitle").text(title);
          $("#songArtist").text(artist);
          $("#songImage").attr("src", image);
          $("#songImage").show();
          $("#songEsito").text(esito);
          
        }
        else{
          $("#songTitle").text("mm non ho trovato questa canzone");
  			  $("#songImage").hide();
        }
      }).catch(err =>{
      this.submitting = false
      console.log(err);
      })

      await axios.post(
			'/.netlify/functions/playlistInsert',
				{
					title: $("#playlistText").val(),
          titleGenius : title,
          artistGenius : artist,
          esitoGenius : esito
				}
			)
       this.submitting = false
      $('.hover_bkgr_fricc').show();
      }
			$("#playlistText").val("");



		}
	}}
</script>

<style scoped>
.loader{  /* spinner */
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#eceaea;
    background-image: url('../../assets/images/spinner.gif');
    background-size: 50px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
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
    min-width: 300px;
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
.loader-enter-active,
.loader-leave-active{
  transition: all 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>