<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
    </div>
    <div class='horizontal'>
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
.travel-bug {
  background-color: #86BBD8;
}
.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #C9F0FF;
}
.header {
  display: flex;
  justify-content: flex-end;
  background-color: #C9F0FF;
}
.destination {
  background-color: #C9F0FF;
}
.front {
  background-color: #C9F0FF;
}
#main {
  display: flex;
  flex-direction: column;
  background: cover;
  justify-content: space-between;
  background-color: #C9F0FF;
}
</style>
