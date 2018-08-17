<template>
  <div>
    <div>
      <h2 class="map-h2">Search the map for locations you want to visit!</h2>
      <label>
      </label>
      <br/>
    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="2"
      style="width:800px;  height: 500px;"
      @click = "handleClick"
      class="gmap-maps"
    >
      <gmap-marker
        :key="index"
        v-for="(marker, index) in markers"
        :position="marker.position"
        @click="center=marker.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
    name: "GoogleMap",
    data() {
        return {
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            places: [],
            currentPlace: null,
            profilePostsUrl:
                "https://travel-bug-backend.herokuapp.com/posts/profile/1"
        };
    },
    mounted() {
        this.geolocate();

        {
            fetch(this.profilePostsUrl, {
                method: "get",
                mode: "cors",
                credentials: "same-origin",
                headers: new Headers({ "Content-Type": "application/json" })
            })
                .then(resp => resp.json())
                .then(resp => {
                    this.profileData = resp;
                    console.log(this.profileData.posts);
                });
        }
    },

    methods: {
        handleClick(event) {
            console.log("handleClick", event.latLng.lng(), event.latLng.lat());
        },
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    }
};
</script>
<style>
.map-h2{
    margin-left: -150px;
}
.gmap-maps{
    margin-bottom: 20px;
}
</style>