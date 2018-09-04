<template>
  <div>
    <b-form @submit="onSubmit" class='country-form'>
         <h2 for='addToList' class='op'>2. Add to Your Bucket List</h2>
            <b-form-input  
            v-model='form.country_name' 
            placeholder='Country Name' 
            type='text' 
            name='country_name' 
            required
            id='country_name' 
            value=''>
              </b-form-input>
            <b-form-input 
            v-model='form.goal_date' 
            placeholder='Goal Date' 
            type='text' 
            required
            name='goal_date' 
            id='goal_date' 
            value=''>
            </b-form-input>
            <b-form-input   
            v-model='form.activities' 
            placeholder='Activities you want to do!' 
            type='text' 
            name='activities' 
            id='activities' 
            value=''>Add activities here!
              </b-form-input>
              <b-form-input  
              v-model='form.visited' 
              placeholder=' Visited? True or False' 
              type='text' 
              name='visited' 
              id='visited' value=''>
              </b-form-input>
            <button 
            type='submit' 
            name='button'  
            class="country-form-button" 
        
            >Add Now!
            </button>
        </b-form>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: "AddCountry",
  data() {
    return {
      postsURL: "https://travel-bug-backend.herokuapp.com/posts",
      form: {
        profile_id: "",
        country_name: "",
        goal_date: "",
        activities: "",
        visited: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      this.form.profile_id = this.$route.query.user;
      evt.preventDefault();
      return fetch(this.postsURL, {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.form)
      })
        .then(console.log(this.form))
        .then(resp => {
          console.log(resp);
          if (!resp.ok) {
            if (resp.status >= 400 || resp.status < 500) {
              return resp.json().then(data => {
                const err = { errorMessage: data.message };
                throw err;
              });
            }
            const err = { errorMessage: "Blah" };
            throw err;
          }
          return resp.json();
        })
        .then(
          setTimeout(function(userid) {
            router.push({ path: "main", query: { user: userid } });
            // router.push({ path: "/main" });
          }, 1000)
        );
    }
  }
};
</script>
 
<style>
.country-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.op {
  background: rgba(255, 255, 255, 0.7);
  padding: 5px;
  border-radius: 4px;
}
</style>