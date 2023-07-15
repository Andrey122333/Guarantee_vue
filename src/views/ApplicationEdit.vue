<template>
    <div>
      <div class="create-layout">
        <h2>Редактирование заявки</h2>
        
        <ApplicationUpdate />

      </div>
      <ActionButton @click="create()">Сохранить</ActionButton>
    </div>
  </template>
    
    <script>
  import ApplicationUpdate from "@/components/ApplicationUpdate.vue";
  import ActionButton from "@/components/ActionButton.vue";
  
  export default {
    name: "SearchView",
    components: { 
      ApplicationUpdate, ActionButton 
    },
    data() {
      return {
        selected: null,
        options: ["list", "of", "options"],
      };
    },
    methods: {
      create() {
        this.$router.push({ name: 'application', params: { role: this.$route.params.role , categories: this.$route.params.categories, id: this.$route.params.id } })
        console.log(121331)
        //window.location.pathname = this.$route.params.categories;
      },
    }
  };
  </script>
  
  <style scoped lang="scss">
  .create-layout {
    margin: 5px 5vw;
    margin-bottom: 100px;
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