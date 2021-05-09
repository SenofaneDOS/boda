<template>
  <div>
    <div
      v-if="currentTime"
      class="font-body text-center max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-0 mx-auto px-5 text-5xl text-white"
    >
      <div
        v-if="days"
        class="flex flex-col"
      >
        <span>Giorni</span><span>{{ days }}</span>
      </div>
      <div class="flex flex-col">
        <span>Ore</span><span>{{ hours }}</span>
      </div>
      <div class="flex flex-col">
        <span>Minuti</span><span>{{ minutes }}</span>
      </div>
      <div class="flex flex-col">
        <span>Secondi</span><span>{{ seconds }}</span>
      </div>
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