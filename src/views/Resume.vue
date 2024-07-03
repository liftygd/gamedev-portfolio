<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Artem Karagodin</strong>,  A Unity game developer, mainly programmer. Currently live in Krasnodar, Russia. I love programming games, discussing and designing them. I've been working in Unity for 5 years and programming for 6.
      <br />
      <br />At the moment studying in KubSAU, Krasnodar, Russia.
      <br />
      <br />Right now I'm a more of a hobbyist solo developer.
      <br />
      <router-link to="/contact">Contact me</router-link>.

      <!-- <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div> -->
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>
      ...

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="Mainly C#"/>
        <SkillRate name="C++"/>
        <SkillRate name="Know a bit of HTML / CSS / JS"/>
      </div>

      <div class="skill-set">
        <h3>Gamedev</h3>
        <SkillRate name="Unity"/>
        <SkillRate name="Blender"/>
        <SkillRate name="Unreal Engine"/>
        <SkillRate name="Audacity"/>
        <SkillRate name="And other"/>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>KubSAU 2022 - ...</h3>
      <h4>Bachelor's degree</h4>
      <div>Specialty in applied informatics.</div>


      <h2>Languages</h2>

      <h3>English</h3>
      <div>C1-C2</div>

      <h3>Russian</h3>
      <div>Native</div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>