<template>
    <div class="items-container">
      <div  class="item" :class="{'item-blue': index % 2}" v-for="offer, index in offers" :key="offer.id" 
      @click="$emit('open', offer)"
      > 
      <img class="image-item" src="https://www.sp-computer.ru/upload/iblock/414/4148b4f708ed5b26a187e28af7f61436.jpg">
      <div>
        <p class="title-item text-item">{{offer.name}}
          <span  class="text-status">{{offer.contribution}}Р</span>
        
        </p>

        <p class="text-item">
          {{offer.description}}
        </p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
        offers: {
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
    max-width: 100%;
    display: inline-flex;

    overflow-y: hidden;
    overflow-x: auto;

    //margin-bottom: $create-height+$input-height;
  }
  .item {
    display: inline-flex;
    min-width: calc(100vw - 20px);

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
  }
  .red {
    color: #CB4040;
  }
  .text-status::before {
    content: "●";
  }
  </style>