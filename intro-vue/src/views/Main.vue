<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
    <SignOut />
    </div>
    <b-container class="bv-example-row">
      <b-row>
    <b-col>
    <MapConfig />
    </b-col>
    <b-col>
    <AddCountry />
    </b-col>
    <b-col>
    <Locations />
    </b-col>
    </b-row>
    </b-container>
    </div>
</template>

<script>
import Header from "@/components/Header";
import SignOut from "@/components/SignOut";
import MapConfig from "@/components/MapConfig";
import AddCountry from "@/components/AddCountry";
import Locations from "@/components/Locations";
export default {
  name: "Main",
  components: {
    Header,
    SignOut,
    MapConfig,
    AddCountry,
    Locations
  }
};
</script>

<style>
body {
  height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background: fluid;
  font-family: "Josefin Sans", sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
