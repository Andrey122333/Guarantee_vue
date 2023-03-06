<template>
          <div class="modal-users-item">
          <div class="user-item">
          <img
            class="user-photo"
            src="https://cheboksari.imperiya-pola.ru/img/nophoto.jpg"
          />
          <div class="user-text">
            <span class="user-name">Никнейм участника</span>
            <span class="user-role">Кандидат на исполнение</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
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
  background: #6b80a5;
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
  color: #40cb4e;
  float: left;
  font-size: 14px;
  margin-top: 3px;
  margin-left: 10px;
}
.modal-users-item {
  float: left;
  margin: 5px 5vw;
  width: 80vw;
  text-align: left;
}
</style>