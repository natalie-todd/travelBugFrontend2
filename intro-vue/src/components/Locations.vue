<template>
  <div class="destination">
      <h2 class='op'>3. Go Explore!</h2>
    <ol class="destination-ol">
        <li v-for="post in locationData" :key="post.id" class="destination-li">
            <p class="destination-p">Country: {{ post.country_name }}</p>
            <p class="destination-goalDate">Date: {{ post.goal_date | moment('dddd, MMMM Do YYYY')}}</p>
            <p class="destination-activities">Activity: {{ post.activities }}</p>
            <hr>
        </li>
    </ol>
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
.destination-ol {
      background-color: #cc444a;
      border-radius: 6px;
}
.destination-li {
    /* border-style: solid; */
    color: white;
    padding: 4px;
    
}
</style>