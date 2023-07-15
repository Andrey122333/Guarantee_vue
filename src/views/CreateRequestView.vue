<template>
    <div>
      <div class="create-layout">
        <div class="item">
          <span class="title-item">Вид:</span>
          <input class="create-input" type="text" />
        </div>
        <div class="item">
          <span class="title-item">Примерна сумма:</span>
          <input class="create-input" type="number" />
        </div>
        <div class="item">
          <span class="title-item">Срок получения:</span>
          <input class="create-input" type="date" />
        </div>
          <div class="item">
          <router-link :to="{ name: 'home', params: { role: $route.params.role, categories: $route.params.categories }}">Список заявок</router-link>
        </div>
      </div>
      <ActionButton @click="create()">Создать</ActionButton>
    </div>
  </template>
    
    <script>
  import VueMultiselect from "vue-multiselect";
  import ActionButton from "@/components/ActionButton.vue";
  
  export default {
    name: "SearchView",
    components: { 
      VueMultiselect, ActionButton 
    },
    data() {
      return {
        selected: null,
        options: ["list", "of", "options"],
      };
    },
    methods: {
      create() {
        console.log(121331);
        this.$router.push({ name: 'home', params: { role: this.$route.params.role, categories: this.$route.params.categories }});
      },
    }
  };
  </script>
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  
  <style scoped lang="scss">
  .create-layout {
    margin: 70px 5vw;
  }
  .create-input {
    width: calc(50vw - 2px);
    padding: 0px;
    height: 38px;
    float: right;
    border: 1px solid #e8e8e8;
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
    margin-bottom: 15px;
    width: 100%;
  }
  .create-description {
      text-align: justify;
      width: 100%;
      min-height: 130px;
  }
  </style>