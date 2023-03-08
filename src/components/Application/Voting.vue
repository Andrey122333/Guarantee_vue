<template>
  <div class="voting">
    <p class="voting-name">
      Идет голосование за {{ voting_text[voting.type] }}
    </p>
    <div class="voting-left">
      <span class="voting-text">Осталость {{date}}</span
      >
      <span class="voting-text"
        >Проголосовали {{ voting.voted }}/{{ participants_count }}</span
      >
      <span class="voting-bold">Вы проголосовали</span>
    </div>
    <GreyButton>Голосование</GreyButton>
  </div>
</template>

<script>
import GreyButton from "@/components/UI/GreyButton.vue";

export default {
  components: {
    GreyButton,
  },
  props: {
    voting: {
      type: Array,
      required: true,
    },
    participants_count: {
      type: Number,
      required: true,
    },
  },
  created() {
    setInterval(this.Interval, 1000);
  },
  methods: {
    Interval() {
        this.date = new Date(new Date(this.voting.date) - new Date()).toLocaleTimeString()
    },
  },
  data() {
    return {
      voting_text: {
        amount: "сумму взноса",
        status: "смену статуса",
        executor: "исполнителя",
      },
      date: new Date(new Date(this.voting.date) - new Date()).toLocaleTimeString()
    };
  },
};
</script>

<style scoped lang="scss">
.voting {
  float: left;
  padding: 0 2.5vw;
  width: 85vw;
  margin: 10px 5vw;
  background: #839bc6;
  height: 120px;
  border-radius: 20px;
  text-align: left;
  color: #fff;
}
.voting-name {
  font-weight: bold;
}
.voting-left {
  float: left;
  width: 50%;
  font-size: 14px;
}
.voting-text {
  float: left;
  width: 100%;
  margin-bottom: 3px;
}
.voting-bold {
  float: left;
  font-weight: bold;
  width: 100%;
}
</style>