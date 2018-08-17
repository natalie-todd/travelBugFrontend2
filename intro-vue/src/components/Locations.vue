<template>
  <div class="destination">
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
.destination {
  padding: 8px;
}

.destination-ul{
  background-color: #86BBD8;
  display: flex;
  flex-flow: column wrap;
  list-style-type: none;
  margin-top: 109px;
  border: 2px solid black;
  border-radius: 5px;
  padding-bottom: 10px;
  padding-top: 10px;
  
}

.destination-li{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
  border: 1px; 
  padding-right: 5px;
}

.destination-h3{
  align-items: center; 
  border: 2px solid black;
  border-radius: 5px;
  width: 150px;
    background-color: #C9F0FF;
  color: black;
  text-shadow: 2px 2px silver;
  
}

.destination-goalDate{
  color: black;
  
  text-shadow: 2px 2px silver;
}
.destination-activities{
  color: black;
   
  text-shadow: 2px 2px silver;
}
</style>