<template>
      <div class="modal-dialog">
      <div class="modal-info">
        <h2 class="modal-name">Название заявки</h2>
        <div class="modal-info-text">
          <span class="modal-info-left">создана: 15.09.2022</span>
          <span class="modal-info-right">г. Москва</span>
        </div>
        <div class="modal-contribution"><p class="modal-contribution-text">Взнос: 1100Р</p></div>
        <div class="tags">
          <div class="tag">Тег №1</div>
        </div>
        <p class="modal-description">Подробное описание заявки. Consectetur adipiscing elit. Suspendisse cursus, lorem et ultricies interdum, ante dolor tincidunt lectus, vel molestie nunc elit vitae nisi. Nam a neque viverra, efficitur elit sit amet, scelerisque purus. Nulla venenatis purus id lacus facilisis, ut dictum risus commodo. Donec et erat interdum, vehicula odio quis, ultricies nulla. Fusce bibendum, nulla viverra posuere iaculis, tortor justo vulputate justo. </p>
      </div>
      <div class="modal-users">
      <div class="modal-users-item">
        <p class="users-name">Участники (12/100):</p>
        <div class="user-item">
          <img class="user-photo"
          src="https://cheboksari.imperiya-pola.ru/img/nophoto.jpg">
     <div class="user-text">
      <span class="user-name">Никнейм участника</span>
      <span class="user-role">Кандидат на исполнение</span>
     </div>
        </div>
      </div>
    </div>
    <div>
      <div class="">
        <p class="events-name" >События:</p>
      </div>
    </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
$create-height: 70px;


.modal-dialog {
    background: #879ac5;
    position: fixed;
    height: calc(90vh - $create-height);
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
  }
  .icon-close {
    height: 20px;
      width: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB1ZRBCoAwDAQXX5D/X9wf+ST10IMHCRONogOF0kwWSkukvxGqE1lh2dcsjkdPZMIKQ7FLROLghqxWDj07uxx63N/CIwiFTXoZq/HKVuOjWI3fhjQQpyYS95Hh0Dq+vskGHow2UkviuZ0AAAAASUVORK5CYII=);
      position: fixed;
      right: 8vw;
      top: 7vh;
      margin: 6px
  }
  .modal-info-text {
    width: 100%;
    float: left;
  }
  .modal-info-left {
    float: left;
      margin-left: 10vw;
      font-size: 14px;
  }
  .modal-info-right {
    float: right;
      margin-right: 10vw;
      font-size: 14px;
  }
  .modal-contribution {
    float: left;
      width: 80vw;
      margin: 10px 5vw;
      background: #839BC6;
      height: 40px;
      border-radius: 20px;
  }
  .modal-contribution-text {
    margin: 12px;
      font-weight: bold;
      color: #fff;
  }
  .tags {
    float: left;
      width: 80vw;
      max-height: 66px;
      margin: 0px 5vw;
  }
  .tag {
    float: left;
      margin: 4px;
      padding: 5px 10px;
      background: #D9D9D9;
      border-radius: 10px;
      font-size: 13px;
  }
  .modal-description {
    float: left;
      font-size: 13px;
      margin: 5px 5vw;
      text-align: justify;
      width: 80vw;
      height: 135px
  }
  .modal-users-item {
    float: left;
      margin: 5px 5vw;
      width: 80vw;
      text-align: left;
  }
  .users-name {
    color: #fff;
  }
  
  .user-item {
    float: left;
    margin-bottom: 10px;
  }
  .user-photo {
    height: 50px;
    float: left;
  }
  .user-text {
    border-radius: 0px 10px 10px 0px;
      float: left;
      width: calc(100% - 50px);
      height: 50px;
      background: #6B80A5;
  }
  .user-name {
    color: #fff;
    font-weight: bold;
    float: left;
    font-size: 15px;
    margin-top: 3px;
    margin-left: 10px;
  }
  .user-role {
    color: #40CB4E;
    float: left;
    font-size: 14px;
    margin-top: 3px;
    margin-left: 10px;
  }
  .events-name {
    float: left;
    font-size: 20px;
  }
  </style>
