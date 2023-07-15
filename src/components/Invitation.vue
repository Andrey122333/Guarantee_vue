<template>
    <div class="modal-layout"></div>
    <div class="modal-dialog">
      <div class="modal-info">
        <button class="button-close">
          <i class="icon-close" @click="$emit('close')"></i>
        </button>
        <h2 class="modal-name">Пригласить</h2>
        <span class="title-item">Описание:</span>
        <p class="modal-description">Отошлите ссылку ниже Вашему контакту. После того, как он примет заявку на вступление в чат, он сразу появится в списке участников.</p>
        <span class="title-item">Ссылка:</span>
        <p class="modal-description">{{ url }}</p>
      </div>
      <div class="background-button">
        <button class="create-button">Копировать ссылку</button>
      </div>
    </div>
  </template>
    
    <script>
  
  export default {
    name: "",
    components: {
    },
    data() {
    return {
      url: window.location.protocol + "//" + window.location.host + '/invite/' + this.$route.params.id,
    }
    },
  };
  </script>
    
    <style scoped lang="scss">
  $create-height: 0px;
  
  .modal-layout {
    width: 100%;
    height: calc(100% - $create-height);
    background: #000000;
    position: fixed;
    top: 0px;
    opacity: 70%;
  }
  .modal-dialog {
    background: #F2F2F2;
    position: fixed;
    width: 90vw;
    left: 5vw;
    top: 5vh;
    border-radius: 20px;
    overflow: auto;
  }
  .modal-info {
    float: left;
    background: #fff;
    border-radius: 20px 20px 0px 0px;
    width: 100%;
  }
  .create-button {
    background: #6B80A5;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border: 0px;
    width: 80%;
    line-height: 50px;
    margin: 30px 0px;
  }
//   .background-button {
//     float: left;
//     background: #F2F2F2;
//     height: 30px;
//     width: 100%;
//   }
  .button-close {
    height: 20px;
    width: 20px;
    position: fixed;
    right: 8vw;
    top: 7vh;
    padding: 16px;
    border-radius: 15px;
    border: 0px;
    background: #d9d9d9;
  }
  .icon-close {
    height: 20px;
    width: 20px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB1ZRBCoAwDAQXX5D/X9wf+ST10IMHCRONogOF0kwWSkukvxGqE1lh2dcsjkdPZMIKQ7FLROLghqxWDj07uxx63N/CIwiFTXoZq/HKVuOjWI3fhjQQpyYS95Hh0Dq+vskGHow2UkviuZ0AAAAASUVORK5CYII=);
    position: fixed;
    right: 8vw;
    top: 7vh;
    margin: 6px;
  }
  .title-item {
    float: left;
    font-weight: bold;
    line-height: 40px;
    margin: 0 10%;
  }
  .modal-description {
    float: left;
    // font-size: 15px;
    margin: 5px 10%;
    text-align: justify;
}
  .amount {
    width: 80%;
    margin: 10px 10%;
    height: 30px;
  }
  .users-name {
    color: #fff;
    float: left;
    margin: 5px 5vw;
    width: 80vw;
    text-align: left;
  }
  </style>