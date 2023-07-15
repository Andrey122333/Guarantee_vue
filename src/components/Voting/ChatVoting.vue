<template>
  <div class="modal-layout"></div>
  <div class="modal-dialog">
    <div class="modal-info">
      <button class="button-close">
        <i class="icon-close" @click="$emit('close')"></i>
      </button>
      <h2 class="modal-name">Голосование</h2>
      <span class="title-item">Вопрос:</span>
      <div class="textareaElement" contenteditable></div>
      <span class="title-item">Варинты ответа:</span>
      <div class="answers-block">
        <div v-for="(answer, index) in answers" :key="index">
          <div class="textareaElement answer" contenteditable></div>
          <button @click="remove(index)" type="submit" class="chat-submit delete" id="chat-submit">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>

      <button @click="add" class="new_answer">Новый вариант</button>
    </div>

    <div class="background-button">
      <button class="create-button">Создать</button>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      answers: [""],
    };
  },
  methods: {
    add() {
      this.answers.push("");
    },
    remove(idx) {
        console.log(idx);
        this.answers.splice(idx, 1);
    }
  },
};
</script>
    
<style scoped lang="scss">
$create-height: 0px;

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.chat-submit {
  margin-top: 6px;
  float: left;
  background: transparent;
  box-shadow: none;
  border: none;
  border-radius: 50%;
  color: #5a5eb9;
  width: 35px;
  height: 35px;
}
.answers-block {
    max-height: 30vh;
    overflow-y: auto;
    width: 100%;
}
.textareaElement {
  width: 76%;
  margin: 10px 10%;
  min-height: 17px;
  max-height: 150px;
  padding: 2%;
  border: 1px solid #ccc;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
}

.answer {
  float: left;
  width: 65%;
  margin-right: 1%;
}
.delete {
  float: left;
  margin-top: 10px;
}
.new_answer {
  background: #6b80a5;
  color: #fff;
  font-weight: bold;
  border: 0px;
  width: 80%;
  line-height: 30px;
  margin: 10px 0px;
}
.modal-layout {
  width: 100%;
  height: calc(100% - $create-height);
  background: #000000;
  position: fixed;
  top: 0px;
  opacity: 70%;
}

.modal-dialog {
  background: #f2f2f2;
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
  background: #6b80a5;
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

.create-description {
  text-align: justify;
  width: 80%;
  margin: 10px 10%;
  min-height: 130px;
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