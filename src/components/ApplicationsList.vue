<template>
    <div class="items-container">
      <div  class="item" :class="{'item-blue': index % 2}" v-for="application, index in applications" :key="application.id" 
      @click="$emit('open', application)"
      > 
      <img class="image-item" src="https://www.sp-computer.ru/upload/iblock/414/4148b4f708ed5b26a187e28af7f61436.jpg">
      <div>
        <p class="title-item text-item">{{application.name}}
          <span :class="{ red: application.status=='Стоп-сумма'}" class="text-status">{{application.status}}</span>
          <span :class="{ red: application.status=='Стоп-сумма'}" class="text-status">{{application.contribution}}Р</span>
        
        </p>

        <p class="text-item">
          {{application.description}}
        </p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
        applications: {
              type: Array,
              required: true
          }
      }
  };
  </script>
  
  <style scoped lang="scss">
  
  $create-height: 70px;
  $input-height: 70px;
  
  .items-container {
    margin-top: 20px;
    width: 100%;
    //margin-bottom: $create-height+$input-height;
  }
  .item {
    background: #F2F2F2;
    padding: 10px 10px;
    text-align: left;
    color: #4072cb;
    height: 60px;
  }
  .item-grey {
    background: #F2F2F2;
  }
  .item-blue {
    background: #839BC6;
    color: #fff;
  }
  .image-item {
    height: 50px;
    float: left;
    margin-right: 10px;
    margin-top: 5px;
  }
  .title-item {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .text-item {
    //height: 20px;
    font-size: 13px;
    margin: 0px;
  }
  .text-status{
    margin-left: 5px;
    color: #40CB4E;
  }
  .red {
    color: #CB4040;
  }
  .text-status::before {
    content: "●";
  }
  </style>