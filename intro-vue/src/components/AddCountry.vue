<template>
<div id='country'>
     <form @submit='onSubmit' class="country-form">
         <label for='addToList'>Add to Your Bucket List</label>
         <div>
            <input  v-model='form.country_name' placeholder='Country Name' type='text' name='country_name' id='country_name' value=''>
          </div>
         <div>
            <input v-model='form.goal_date' placeholder='Goal Date' type='text' name='goal_date' id='goal_date' value=''>
          </div>
          <div>
            <textarea  v-model='form.activities' placeholder='Activities you want to do!' type='text' name='activities' id='activities' value=''>Add activities here!</textarea>
          </div>
          <div>
            <textarea  v-model='form.visited' placeholder='True or False' type='text' name='visited' id='visited' value=''></textarea>
          </div>
            <button type='submit' name='button'  class="country-form-button" onClick="setTimeout('history.go(0);',1000)">Add Now!</button>
            
        </form>
    </div>
</template>

<script>
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
        });
    }
  }
};
</script>
 
<style>
.country-form {
  margin-top: 120px;
}

.country-form-button {
  color: black;
  background-color: #86bbd8;
  border-radius: 5px;
  border: 2px solid black;
}

.country-form-button:hover {
  color: #5f758e;
  background-color: black;
}
</style>