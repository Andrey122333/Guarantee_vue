<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
  <section class="chat">
    <div class="message message--user-1">
      <!-- <time class="message__time">21.02.2017 21:12:07</time> -->
      <figure class="message__author-pic">
        <img src="https://cheboksari.imperiya-pola.ru/img/nophoto.jpg">
      </figure>
      <div class="message__text">
        <p>Добрый день, ищу телевизор и ноутбук</p>
      </div>
    </div>
    <div class="message message--user-2">
      <!-- <time class="message__time">21.02.2017 21:12:07</time> -->
      <!-- <figure class="message__author-pic">
        <img src="https://placeimg.com/40/40/people">
      </figure> -->
      <div class="message__text">
        <p>Добрый день, ищу телевизор и ноутбук</p>
      </div>
    </div>
    <div class="message message--user-2">
      <!-- <time class="message__time">21.02.2017 21:12:07</time> -->
      <!-- <figure class="message__author-pic">
        <img src="https://placeimg.com/40/40/people">
      </figure> -->
      <div class="message__text">
        <p>Добрый день, ищу телевизор и ноутбук</p>
      </div>
    </div>
    <div class="message message--user-1">
      <!-- <time class="message__time">21.02.2017 21:12:07</time> -->
      <figure class="message__author-pic">
        <img src="https://cheboksari.imperiya-pola.ru/img/nophoto.jpg">
      </figure>
      <div class="message__text">
        <p>Добрый день, ищу телевизор и ноутбук</p>
      </div>
    </div>



    <div class="message message--user-2">
      <!-- <time class="message__time">21.02.2017 21:12:07</time> -->
      <!-- <figure class="message__author-pic">
        <img src="https://placeimg.com/40/40/people">
      </figure> -->
      <div class="message__text">

        <div class="voting-item-text">
                <label for="one" class="voting-poll">Первый опрос</label >
            </div>

        <div @click="vote(1)" class="voting-item-text">
          <span v-show="voting==false || number==1"  class="material-icons radio_button">
            {{ number==1 ? 'radio_button_checked' : 'radio_button_unchecked' }}
</span>
          <label v-show="number==1"  class="text-right">25%</label>
                <label for="one" class="voting-contribution">Вариант 1</label >
            </div>

            <div @click="vote(2)" class="voting-item-text">
          <span v-show="voting==false || number==2"  class="material-icons  radio_button">
            {{ number==2 ? 'radio_button_checked' : 'radio_button_unchecked' }}
</span>
          <label v-show="number==2" class="text-right">25%</label>
                <label for="one" class="voting-contribution">Вариант 2</label >
                </div>

                <div v-show="voting==true" @click="voteCancel"  class="voting-item-cancel">
        <p>Отменить голос</p>
      </div>

            <div class="voting-item-text">
                <label for="one" class="voting-caption">Голосов: 1</label >
            </div>

      </div>
    </div>




  
    <div class="chat-input">      
          <button @click="newVoting" type="submit" class="chat-submit  left-chat" id="chat-submit"><i class="material-icons">density_medium</i></button>
          <div id="chat-input" contenteditable> </div>
        <button type="submit" class="chat-submit right-chat" id="chat-submit"><i class="material-icons send">send</i></button> 
      </div>
  </section>
  <router-link
            :to="{
              name: 'application',
              params: {
                role: $route.params.role,
                categories: $route.params.categories,
                id: $route.params.id,
              },
            }"
          >
  <ActionButton>Вернуться</ActionButton>
  </router-link>

  <ChatVoting v-if="chatVoting" @close="close"/>

    </template>
    
    <script>
    import ActionButton from "@/components/ActionButton.vue";
    import ChatVoting from "@/components/Voting/ChatVoting.vue";
import { toHandlers } from "vue";

export default {
  name: "HomeView",
  components: {
    ActionButton,
    ChatVoting,
  },
  data() {
    return {
      chatVoting: false,
          voting: false, //Можно убрать и проверять на 0
          number: 0,
    };
  },
  methods: {
    newVoting() {
      this.chatVoting = true;
      console.log(122);
    },
    close() {
      this.chatVoting = false;
    },
    vote($id) {
      if (this.voting == false) {
      this.voting = true;
      this.number = $id;
      }
    },
    voteCancel() {
        this.number = 0;
        this.voting = false;
      }
  },
}
    </script>
    
    <style scoped lang="scss">
  img {
    height: 50px;
  }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .chat {
    padding: 3%;
  }
  
  .message {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .message--user-1 + .message--user-2,
  .message--user-2 + .message--user-1 {
    margin-top: .5em;
    position: relative;
  }
  .message--user-1 + .message--user-1,
  .message--user-2 + .message--user-2 {
    margin-top: .5em;
  }
  .message__time {
    font-size: 10px;
    color: #ccc;
    width: 100%;
    margin: 0 0 5px 50px;
  }
  .message__author-pic {
    margin: 0 10px 0 0;
  }
  
  .message__text {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #69b4f3;
    background-color: #bfe2ff;
    max-width: 80%;
    font-size: 14px;
    text-align: start;
  }
  
  .message--user-2 {
    justify-content: flex-end;
  }
  .message--user-2 .message__time {
    text-align: right;
    margin: 0 50px 5px 0;
  }
  .message--user-2 .message__author-pic {
    order: 1;
    margin: 0 0 0 10px;
  }
  .message--user-2 .message__text {
    background-color: #69b4f3;
  }
  
  
  .chat-input {
    position: fixed;
      float: left;
      width: 95%;
      bottom: 80px;
  }
  #chat-input {
    float: left;
    background: #f4f7f9;
    width: 80%; 
    min-height:47px;  
    padding-top:10px;
    padding-right:50px;
    padding-bottom:10px;
    padding-left:15px;
    border:none;
    resize:none;
    outline:none;
    border:1px solid #ccc;
    color:#888;
    border-radius: 5px;
    overflow:hidden;  
    margin-left: 35px;
    text-align: left;
  }
  .chat-input > form {
      margin-bottom: 0;
  }
  #chat-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #ccc;
  }
  #chat-input::-moz-placeholder { /* Firefox 19+ */
    color: #ccc;
  }
  #chat-input:-ms-input-placeholder { /* IE 10+ */
    color: #ccc;
  }
  #chat-input:-moz-placeholder { /* Firefox 18- */
    color: #ccc;
  }
  .chat-submit {  
    margin-top: 6px;
    float: left;
    background: transparent;
    box-shadow:none;
    border:none;
    border-radius:50%;
    color:#5A5EB9;
    width:35px;
    height:35px;  
  }
  .material-icons {
    float: left;
    font-family: 'Material Icons';
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
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
  }
  .send {
    margin-left: 3vw;
  }
  .left-chat {
    position: fixed;
    left: 12px;
    bottom: 86px
  }
  .right-chat {
    position: fixed;
    right: 10px;
    bottom: 86px
  }



.radio_button {
  margin-right: 2vw;
}
.voting-item-text {
    float:left;
    margin-bottom: 10px;
    width: 70vw;
}
.voting-contribution {
    font-weight: bold;
    line-height: 24px;
    float: right;
    width: 52vw;
}
.voting-poll {
  float: left;
    width: 54vw;
    font-weight: bold;
    line-height: 24px;
}
.text-right {
    float: left;
    margin-right: 2vw;
    font-weight: bold;
    line-height: 24px;
} 
.voting-caption {
  
}
.voting-item-cancel {
  text-align: center;
    background: #fff;
    float: left;
    padding: 3px;
    width: 100%;
    margin: 10px 0px;
}
    </style>