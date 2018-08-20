<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
    </div>

    <div>
    <div>
    <AddCountry />
    </div>
    <div>
    <Locations />
    </div>
    <div>
    <MapConfig />
    </div>
    </div>
    <Footer />
    </div>
    
</template>

<script>
import Header from "@/components/Header";
import AddCountry from "@/components/AddCountry";
import Locations from "@/components/Locations";
import MapConfig from "@/components/MapConfig";
import Footer from "@/components/Footer";
export default {
  name: "Main",
  components: {
    Header,
    AddCountry,
    Locations,
    MapConfig,
    Footer
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
</style>
