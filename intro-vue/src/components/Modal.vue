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
      <div class='horizontal'>
      <div id="alertMessage"><p></p></div>
      <div class='new'><p>New to TravelBug?</p></div>
      <div>
        <b-button v-on:click.prevent='registerSeen = true,  logseen = false' type='submit' class="signButton" name='button'>Sign up now!</b-button>
        </div>
      </div>
 </b-form>
 </div>
  </template>
  <template slot='register'>
    <div v-if='registerSeen' id='registerForm'>
        <b-form v-on:submit.prevent='checkFields()'>
        <h3>We are excited for your new ventures!</h3>
        <p class="error-message"></p>
        <p class="success-message"></p>
        <div>
            <b-form-input placeholder='First Name' type='text' v-model= "firstName" name='firstName' id='firstName' value=''></b-form-input>
            </div>
            <div>
              <b-form-input placeholder='Last Name' type='text' v-model= "lastName" name='lastName' id='lastName' value=''></b-form-input>
                                </div>
                                <div>
                                    <b-form-input placeholder='Email' type='text' v-model= "email" name='email' id='email' value=''></b-form-input>
                                </div>
                                <div>
                                    <b-form-input placeholder='Username' type='text' v-model= "registerUsername" name='registerUsername' id='username' value=''></b-form-input>
                                </div>
                                <div>
                                    <b-form-input placeholder='Password' type='text' v-model= "registerPassword" name='registerPassword' id='passWord' value=''></b-form-input>
                                </div>
                                <div>
                                    <button type='submit' class="signButton" name='button'>Create Profile</button>
                                </div>
                            </b-form>
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
      show: true,
      firstName: "",
      lastName: "",
      email: "",
      registerUsername: "",
      registerPassword: "",
      registerUrl: "https://travel-bug-backend.herokuapp.com/profiles"
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
    },
    checkFields() {
      let newPost = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        username: this.registerUsername,
        password: this.registerPassword
      };
      if (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.email !== "" &&
        this.registerUsername !== "" &&
        this.registerPassword !== ""
      ) {
        fetch(this.registerUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPost)
        })
          .then(res => res.json())
          .then(
            (document.querySelector(".success-message").textContent =
              "Profile Created!")
          )
          .then(
            setTimeout(function() {
              location.reload();
            }, 1000)
          );
      } else {
        document.querySelector(".error-message").textContent =
          "Please fill out all feilds!";
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
  /* display: flex;
  flex-direction: row; */
}
.lead {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
}
.horizontal {
  display: flex;
  flex-direction: column;
}
#signButton {
  border-style: solid;
  border-color: black;
}
#alertMessage {
  /* background: rgba(255, 255, 255, 0.4); */
}
</style>