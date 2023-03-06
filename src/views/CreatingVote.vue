<template>
    <div>
      <div class="create-layout">
        <h2>Создание голосования</h2>
        <div class="item">
          <span class="title-item">За:</span>
          <VueMultiselect v-model="selected" :options="options"> </VueMultiselect>
        </div>
          <span class="title-item">Описание:</span>
          <textarea class="create-description"></textarea>
      </div>
      <div class="background-blue">
      <div class="create-layout">
        <h3>Кандидаты:</h3>
        <div class="item">
            <button class="add_btn">Добавить кандидата</button>
        </div>
        </div>
    </div>
      <ActionButton></ActionButton>



      <div v-show="true">
    <ModalLayout />
    <ModalDialog :applications="applications"/>
    <!-- <div class="footer-div">
      <button class="create">Присоединиться</button>
    </div> -->
    <ActionButton />
  </div>

    </div>
    
  </template>
    
    <script>
  import VueMultiselect from "vue-multiselect";
  import ActionButton from "@/components/ActionButton.vue";
  import ModalDialog from "@/components/ModalDialog.vue";
import ModalLayout from "@/components/ModalLayout.vue";
  
  export default {
    name: "SearchView",
    components: { 
      VueMultiselect, ActionButton, ModalDialog, ModalLayout
    },
    data() {
      return {
        selected: null,
        options: ["list", "of", "options"],
      };
    },
  };
  </script>
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  
  <style scoped lang="scss">
  .create-layout {
    margin: 5px 5vw;
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
  .background-blue {
    background: #839BC6;
    color: #fff;
    float: left;
    width: 100%;
    text-align: left;
  }
  .add_btn {
    background: #6B80A5;
    border: 0px;
    color: #fff;
    width: 100%;
    height: 30px;
    border-radius: 30px;
  }
  </style>