<template>
<div class='row-hero'>
 <div class='column'>
  <h1>Come Explore</h1>
  </div>
<b-jumbotron>
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
  </template>
  <template slot='register'>
    <div v-if='registerSeen' id='registerForm'>
      </div>
    </template>
            </b-jumbotron>
    </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      registerSeen: false,
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
 
<style>
.row-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.jumbotron {
  background: rgba(0, 0, 0, 0.568);
}
.lead {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
}
#signButton {
  border-style: solid;
  border-color: black;
}
#alertMessage {
  background: rgba(255, 255, 255, 0.4);
}
</style>