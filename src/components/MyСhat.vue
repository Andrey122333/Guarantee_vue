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

  <div class="chat-input">      
      <form>
        <input type="text" id="chat-input" placeholder="Send a message..."/>
      <button type="submit" class="chat-submit" id="chat-submit"><i class="material-icons">send</i></button>
      </form>      
    </div>


</section>
  </template>
  
  <script>
  export default {
    //   props: {
    //   }
  };
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
  max-width: 70%;
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
  width: 90%; 
  height:47px;  
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
  </style>