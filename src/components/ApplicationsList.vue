<template>
    <div class="items-container">
      <div class="item" :class="{'item-blue': index % 2}" v-for="application, index in applications" :key="application.id">
        <p class="title-item text-item">{{application.name}}<span :class="{ red: application.status=='Стоп-сумма'}" class="text-status">{{application.status}}</span></p>

        <p class="text-item">
          {{application.description}}
        </p>
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
    width: 100%;
    padding: 10px 10px;
    text-align: left;
    color: #4072cb;
   // height: 85px;
  }
  .item-grey {
    background: #F2F2F2;
  }
  .item-blue {
    background: #839BC6;
    color: #fff;
  }
  .title-item {
    font-weight: bold;
  }
  .text-item {
    height: 30px;
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