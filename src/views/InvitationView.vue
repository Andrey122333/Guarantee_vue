<template>
    <div> 
        <!-- В виде компонентов сделать в home -->
      <h2>Поиск</h2>
      <!-- <div class="flex-div">
        <div class="input">
          <p class="text-sort">Поиск:</p>
          <input class="full-width" type="text" placeholder="Поиск" />
        </div>
        <div class="select">
          <p class="text-sort">Сортировать по:</p>
          <select class="full-width" v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div> -->
      <div class="items-container">
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
        <div class="item">
          <p class="title-item text-item">Название заявки</p>
          <p class="text-item">
            Первые несколько строк описания. Первые несколько строк
            описания....Первые несколько строк описания....
          </p>
        </div>
      </div>
      <div class="footer-div">
        <div class="input">
          <input class="input-text" type="text" placeholder="Поиск" />
        </div>
        <button class="create">Создать заявку</button>
      </div>
    </div>
    <div>
    <div class="modal-layout">
    </div>
    <div class="modal-dialog">
        <div class="modal-info">
          <button class="button-close"><i class="icon-close"></i></button>
          

          <h2 class="modal-name">Приглашение</h2>
          <h3>Кандидат на исполнение</h3>

          <div class="modal-users-item">
          <div class="user-item">
            <img class="user-photo"
            src="https://www.amica.it/wp-content/uploads/2020/02/prima-gallery1.jpg?v=926743">
       <div class="user-text">
        <span class="user-name">Никнейм участника</span>
        <span class="user-role">Отправил приглашение</span>
       </div>
          </div>
        </div>
          
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

          <div class="user-item">
            <img class="user-photo"
            src="https://cheboksari.imperiya-pola.ru/img/nophoto.jpg">
       <div class="user-text">
        <span class="user-name">Никнейм участника</span>
        <span class="user-role">Кандидат на исполнение</span>
       </div>
          </div>

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
      </div>
  
      <!-- <div class="footer-div">
        <button class="create">Присоединиться</button>
      </div> -->
      <ActionButton></ActionButton>
  
    </div>
  </template>
    
    
    <script>
  import ActionButton from '@/components/ActionButton.vue'
  
  
  export default {
    name: "SearchView",
    components: {
      ActionButton
    },
    data () {
      return {
        value: '',
        applications: [
        { name: 'Заявка 1', 
        city: 'Москва', 
        date: "15.09.2022",
        contribution: 1100, 
        tags: ['das', 'dsa'], 
        description: "Описание",
        participants: [
          {name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение"}
        ]
      },
      { name: 'Заявка 1', 
        city: 'Москва', 
        date: "15.09.2022",
        contribution: 1100, 
        tags: ['das', 'dsa'], 
        description: "Описание",
        participants: [
          {name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение"}
        ]
      }
    ],
    invitations: [{
      name: "Заявка 1",
      role: "Кандидат на исполнение",
      status: "Стоп-сумма",
      user_invited: {name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение"},
      applications: { name: 'Заявка 1', 
        city: 'Москва', 
        date: "15.09.2022",
        contribution: 1100, 
        tags: ['das', 'dsa'], 
        description: "Описание",
        participants: [
          {name: "Юзер 1", photo: "ссылка", role: "Кандидат на исполнение"}
        ]
      }
    }]
      }
    }
  };
  </script>
  
  <style lang="scss">
  .flex-div {
    display: flex;
  }
  .select {
    width: 30vw;
  }
  $create-height: 70px;
  $input-height: 70px;
  .input {
    height: 70px;
  background: #F2F2F2;
  }
  .input-text {
      height: 30px;
      margin-top: 20px;
      width: 80%;
  }
  .full-width {
    width: 100%;
    height: 20px;
  }
  .items-container {
    margin-top: 20px;
    padding: 20px 0px;
    width: 100%;
    background: #f2f2f2;
    margin-bottom: $create-height+$input-height;
  }
  .item {
    background: #d9d9d9;
    width: 85vw;
    padding: 5px 10px;
    text-align: left;
    margin: 10px auto;
    border-radius: 10px;
  }
  .title-item {
    font-weight: bold;
  }
  .text-item {
    font-size: 13px;
    color: #4072cb;
  }
  .text-sort {
    font-size: 13px;
    text-align: left;
  }
  .footer-div {
    width: 100%;
    position: fixed;
    bottom: 0px;
  }
  
  $create-height: 70px;
  
  .modal-layout {
    width: 100%;
    height: calc(100% - $create-height);
    background: #000000;
    position: fixed;
    top: 0px;
    opacity: 70%;
  }
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
  .button-close {
    height: 20px;
      width: 20px;
      position: fixed;
      right: 8vw;
      top: 7vh;
      padding: 16px;
      border-radius: 15px;
      border: 0px;
      background: #D9D9D9;
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
  </style>