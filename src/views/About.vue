<template>
  <div style="margin-bottom: 80px;">
    <p><router-link to="/ru"> Russian version </router-link></p>

    <br>
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Artem Karagodin (or "Lifty")</strong>. A Unity game developer, mainly programmer. I love programming games, discussing and designing them. I've been working in Unity for 5 years now and programming for 6.
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">game projects</router-link> (some of them were commercial releases, tools, experiments and other), on <router-link to="/other-projects">game jams</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">Currently a solo/hobbyist game developer. You can reach me at <a href="mailto:karagodin.artem27@gmail.com">karagodin.artem27@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
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