<template>
<div class='container-fluid'>
  <div class='circle'>
<h1 class='circle-text'>Welcome to Travel Bug</h1>
</div>
<b-jumbotron>
  <template slot="header">
    Come Explore
  </template>
  <template slot="lead">
          <div v-if='logseen' id='signin'>
              <b-form v-if="show">
        <b-form-input id="username"
                      type="text"
                      required
                      name='username'
                      placeholder="Enter Username">
        </b-form-input>
        <b-form-input id="password"
                      type="password"
                      required
                      name='password'
                      placeholder="Enter password">
        </b-form-input>
      <b-button @click.prevent='bool' variant='danger' type="submit" id='signButton'>Sign In</b-button>
      <div id="alertMessage"><p></p></div>
 </b-form>
 </div>
            <!-- <input placeholder='Username' type='text' name='username' id='username' value=''>
            <input placeholder='Password' type='password' name='password' id='password' value=''> -->
            <!-- <input @click.prevent='bool' type='submit' value='Sign In' id='signButton'> -->
            <!-- <div>
            <label for='login'>New to Travel Bug?</label>
            </div>
            <div>
            <button v-on:click='seen ==! seen, logseen ==! logseen' type='submit' name='button'>Sign up now!</button>
            </div>
            <div id="alertMessage"><p></p></div> -->
        <!-- </form>
        </div>
        </slot>
        <slot name='register'> -->
        <!-- <div v-if='seen' id='registrationForm'>
        <form @submit.prevent='sendCredentials()'>
          <h3>We are excited for your new ventures!</h3>
          <div>
            <input placeholder='First Name' type='text' name='firstName' id='firstName' value=''>
            </div>
            <div>
            <input placeholder='Last Name' type='text' name='lastName' id='lastName' value=''>
            </div>
            <div>
            <input placeholder='Email' type='text' name='email' id='email' value=''>
            </div>
            <div>
            <input placeholder='Username' type='text' name='username' id='username' value=''>
            </div>
            <div>
            <input placeholder='Password' type='text' name='passWord' id='passWord' value=''>
            </div>
            <div>
            <input placeholder='Confirm Password' type='text' name='confirmPassword' id='confirmPassword' value=''>
            </div>
            <div>
            <router-link to='/main' tag='button'>Create Profile</router-link>
            </div>
        </form>
        </div>
             </slot>       
                  </div>
                </div> -->
            <!-- </div> -->
  </template>
  <hr class="my-4">
  <p>New to Travel Bug? Sign up here</p>
            </b-jumbotron>
    </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      // seen: false,
      logseen: true,
      name: "modal",
      signinUrl: "https://travel-bug-backend.herokuapp.com/profiles",
      form: {
        username: "",
        password: ""
      },
      profileData: null,
      show: true
    };
  },
  mounted() {
    fetch(this.signinUrl, {
      method: "get",
      mode: "cors",
      credentials: "same-origin",
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.profileData = resp;
      });
  },

  methods: {
    verified(userid) {
      this.$router.push({ path: "main", query: { user: userid } });
    },
    notVerified() {
      document.querySelector("#alertMessage").textContent =
        "Incorrect username or password. Please try again!";
    },
    bool() {
      for (let i = 0; i < this.profileData.profile.length; i++) {
        if (
          document.querySelector("#username").value ===
            this.profileData.profile[i].username &&
          document.querySelector("#password").value ===
            this.profileData.profile[i].password
        ) {
          this.verified(this.profileData.profile[i].id);
        } else {
          this.notVerified();
        }
      }
    }
  }
};
</script>
 
<style scoped>
.jumbotron {
 background: rgba(0, 0, 0, 0.568); 
}

.circle-text {
    display: table-cell;
    height: 125px;
    width: 125px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background: #CC444A;
    color: #fff;
    font: 18px "josefin sans", arial;
}
</style>