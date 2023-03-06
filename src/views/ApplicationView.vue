<template>
      <div class="modal-dialog">
      <div class="modal-info">
        <details><summary>
        <h2 class="modal-name">Название заявки</h2> 
        <InfoText/>
        <Contribution/>
      </summary>
        <TagsList/>
        <Description/>
      </details>
      </div>

      <div class="modal-users">
      <div class="modal-users-item">
        <details><summary>
        <p class="users-name">Участники (12/100):</p>    </summary>
        <div class="user-item">
          <img class="user-photo"
          src="https://cheboksari.imperiya-pola.ru/img/nophoto.jpg">
     <div class="user-text">
      <span class="user-name">Никнейм участника</span>
      <span class="user-role">Кандидат на исполнение</span>
     </div>
        </div>
      </details>
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
import ActionButton from "@/components/ActionButton.vue";
import InfoText from "@/components/Application/InfoText.vue";
import Contribution from "@/components/Application/Contribution.vue";
import TagsList from "@/components/Application/TagsList.vue";
import Description from "@/components/Application/Description.vue";
import UsersList from "@/components/Application/UsersList.vue";

export default {
  name: "HomeView",
  components: {
    ActionButton,
    InfoText,
    Contribution,
    TagsList,
    Description,
    UsersList,
  },
}
</script>

<style  scoped  lang="scss">
$create-height: 70px;
.modal-name {
  display: inline;
}
.modal-dialog {
    background: #879ac5;
    // position: fixed;
    // height: calc(90vh - $create-height);
    // width: 90vw;
    // left: 5vw;
    // top: 5vh;
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
  .modal-users-item {
    float: left;
      margin: 5px 5vw;
      width: 80vw;
      text-align: left;
  }
  .users-name {
    color: #fff;
    display: inline;
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
