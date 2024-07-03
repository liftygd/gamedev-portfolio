<template>
  <div style="margin-bottom: 80px;">
    <p><router-link to="/"> Английская версия </router-link></p>

    <br>
    <h1>Привет!</h1>

    <div class="paragraph">
      <div>
        Я <strong>Артем Карагодин (или "Lifty")</strong>. Разработчик игр Unity, в основном программист. 
        Я люблю программировать игры, обсуждать и разрабатывать их. Я работаю в Unity уже 5 лет и программирую уже 6.
      </div>

      <div style="margin-top: 20px;">Я работал над <router-link to="/game-projects">игровыми проектами</router-link> 
        (некоторые из них были коммерческими релизами, инструментами, экспериментами и т. д.), участвовал в <router-link to="/other-projects">гейм джемах</router-link>.
      </div>

      <div style="margin-top: 40px;">В настоящее время занимаюсь разработкой в одиночку.
        Вы можете связаться со мной по адресу <a href="mailto:karagodin.artem27@gmail.com">karagodin.artem27@gmail.com</a> 
        или <router-link to="/contact">здесь</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>