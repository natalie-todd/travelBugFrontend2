<template>
  <div class="destination">
      <h2 class='op'>3. Go Explore!</h2>
    <ul class="destination-ul">
        <li v-for="post in locationData" :key="post.id" class="destination-li">
            <h3 class="destination-h3">Country: {{ post.country_name }}</h3>
            <h4 class="destination-goalDate">Date: {{ post.goal_date | moment('dddd, MMMM Do YYYY')}}</h4>
            <h4 class="destination-activities">Activity: {{ post.activities }}</h4>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Locations",
            msg: "Welcome to Your Vue.js App",
            locationUrl:
                "https://travel-bug-backend.herokuapp.com/posts/profile/" +
                this.$route.query.user,
            locationData: null
        };
    },
    mounted() {
        fetch(this.locationUrl, {
            method: "get",
            mode: "cors",
            headers: new Headers({ "Content-Type": "application/json" })
        })
            .then(resp => resp.json())
            .then(resp => {
                this.locationData = resp.posts;
                console.log(resp);
            });
    }
};
</script>
 
<style>

</style>