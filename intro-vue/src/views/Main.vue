<template>
<div id='main'>
    <router-view></router-view>
    <div class='header'>
    <Header />
    </div>
    <div>
      <div class= 'addToList'>
    <div>
    <MapConfig />
    </div>
    <div>
    <AddCountry />
    </div>
    <div>
    <Locations />
    </div>
    </div>

    </div>
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

.addToList {
  display: flex;
  flex-direction: row;
}
</style>
