<template>
<div id='faq'>
    <router-view></router-view>
    <Header />
      <h1>Frequently Asked Questions</h1>
      <div >
        <p class='faq-question'>How do I change users?</p>
        <p class='faq-answer'>Click on the sign out button at the top of the page to take you to the login page.</p>
      </div>
      <div>
        <p class='faq-question'>How do I input a new location with activities on my map?</p>
        <p class='faq-answer'>Click on the input area named location and type in the country destination. After that, click on the text area named activities and input the desired activities to be accomplished.</p>
      </div>
      <div>
        <p class='faq-question'></p>
        <p class='faq-answer'></p>
      </div>
    <Footer />
</div>
</template>

<script scoped>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "FAQ",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
    body{
      background: cover;
    }

  .faq-question{
    color: red;
  }

  .faq-answer{
    color: black;
  }

</style>
