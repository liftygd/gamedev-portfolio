<template>
  <div>
    <p><router-link to="/contact-ru"> Russian version </router-link></p>
    
    <h1>Let's get in touch</h1>

    <div style="margin-bottom:40px;">Feel free to contact me about any opportunity!</div>

    <ul>
      <li>
        <i class="fa fa-user-circle-o fa-lg fa-fw"></i>
        <a href="https://karagodinartem.dev" target="_blank">https://karagodinartem.dev</a>
      </li>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:karagodin.artem27@gmail.com" target="_blank">karagodin.artem27@gmail.com</a>
      </li>
      <!--<li>
        <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
        <a href="https://www.linkedin.com/me" target="_blank">linkedin.com/me</a>
      </li> -->
      <li>
        <i class="fa fa-github fa-lg fa-fw"></i>
        <a href="https://github.com/liftygd" target="_blank">github.com/liftygd</a>
      </li>
      <li>
        <i class="fa fa-gamepad fa-lg fa-fw"></i>
        <a href="https://liftyforever.itch.io" target="_blank">liftyforever.itch.io</a>
      </li>
      <!-- <li>
        <i class="fa fa-tumblr fa-lg fa-fw"></i>
        <a href="https://myblog.tumblr.com" target="_blank">myblog.tumblr.com</a>
      </li> -->
      <li>
        <i class="fa fa-steam fa-lg fa-fw"></i>
        <a href="https://store.steampowered.com/developer/liftygames" target="_blank">steampowered.com/developer</a>
      </li>
    </ul>

  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
    line-height: 1.8em;
    font-size: 1.2em;
  }

@media only screen and (min-width: 620px){
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}
</style>
