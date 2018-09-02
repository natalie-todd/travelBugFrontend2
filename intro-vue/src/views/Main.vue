<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
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
import MapConfig from "@/components/MapConfig";
import AddCountry from "@/components/AddCountry";
import Locations from "@/components/Locations";
export default {
  name: "Main",
  components: {
    Header,
    MapConfig,
    AddCountry,
    Locations
  }
};
</script>

<style>
.circle-text {
  display: table-cell;
  height: 125px;
  width: 125px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background: #cc444a;
  color: #fff;
  font: 18px "josefin sans", arial;
}
body {
  height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background: fluid;
  font-family: "Josefin Sans", sans-serif;
}
</style>
