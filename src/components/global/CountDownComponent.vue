<template>
  <div>
    <div
      v-if="currentTime"
      class="font-body text-center grid grid-flow-col gap-10 text-white text-7xl my-40 mx-28"
    >
      <span v-if="days">Giorni <br>{{ days }}</span> .
      <span v-if="hours">Ore <br>{{ hours }}</span> .
      <span v-if="minutes">Minuti <br>{{ minutes }}</span> .
      <span> Secondi <br>{{ seconds }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    deadline: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: Date.parse(this.deadline) - Date.parse(new Date())
    };
  },
  computed: {
    seconds() {
      return Math.floor((this.currentTime / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.currentTime / (1000 * 60 * 60 * 24));
    }
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  methods: {
    countdown() {
      this.currentTime = Date.parse(this.deadline) - Date.parse(new Date());
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    }
  }
}
</script>