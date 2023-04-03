<template>
    <div class="home">
        <h2>Выберите класс отдыха</h2>
      <div class="item">
        <span class="title-item">Колличество звёзд:</span>
        <StarRating class="star-rating" :star-size="30" v-model="rating" />
      </div>
  
  
      <div
        class="footer-div"
      >
        <router-link :to="'/active_recreation'">
          <button class="button">Активный отдых</button>
        </router-link>
        <router-link :to="'/cafe'">
          <button class="button-center button">Кафе</button>
        </router-link>
        <router-link :to="'/resorts'">
          <button class="button">Курорты</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VueMultiselect from "vue-multiselect";
  import ActionButton from "@/components/ActionButton.vue";
  import StarRating from "vue-star-rating";
  
  export default {
    name: "HomeView",
    components: {
      VueMultiselect,
      ActionButton,
      StarRating,
    },
    methods: {
    },
    data() {
      return {
        rating: 5,
        selected: null,
        window: false,
      };
    },
  };
  </script>
  
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  
  <style scoped lang="scss">
  .star-rating {
    float: left;
    margin-left: 3%;
  }
  .title-item {
    float: left;
    font-weight: bold;
    line-height: 40px;
  }
  .multiselect {
    float: right;
    width: 50vw;
  }
  .item {
    float: left;
    width: 94%;
    margin: 30px 3%;
  }
  
  .footer-div {
    width: 100%;
    position: fixed;
    bottom: 0px;
  }
  .footer-div-top {
    width: 100%;
    position: fixed;
    bottom: 70px;
  }
  
  .button {
    float: left;
    height: 70px;
    width: (100vw/3);
    background: #29426d;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border: 0px;
    padding: 0px;
    border: 2px solid #000;
  }
  .button-center {
    border-left: 0px;
    border-right: 0px;
    //border-bottom: 2px solid #000;
  }
  </style>