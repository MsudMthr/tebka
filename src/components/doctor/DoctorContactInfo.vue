<template>
<div class="doctor-details__contact mt-4 card border-0 p-4">
    <h1 class="doctor-details__contact-title mb-4">
        {{ $t('Office address and phone number') }}
        {{ doctor.firstname }} {{ doctor.lastname }}
    </h1>

    <div class="d-flex fs-3 text-gray mb-4">
        <p class="fw-medium">{{ $t('Phone') }}:</p>
        <p dir="ltr" class="ms-1 me-8">0{{doctor.cellphone}}</p>
        <p class="">0{{doctor.phone1}}</p>
    </div>
    <div class="d-flex fs-3 text-gray mb-4">
        <p class="fw-medium">{{$t('Address')}}:</p>
        <p class="ms-1">{{doctor.address}}</p>
    </div>
    <div id="map" style="height:112px;">
        <LMap ref="map" v-model:zoom="zoom" :center="latLng(doctor.location_y, doctor.location_x)">
            <LMarker :lat-lng="latLng(doctor.location_y, doctor.location_x)"></LMarker>
            <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></LTileLayer>
        </LMap>
    </div>
</div>
</template>

<script>
import {ref} from "vue";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import { latLng, Icon } from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl
});

export default {
    name: "DoctorContactInfo",

    components: {LMarker, LTileLayer, LMap},

    props: {
        doctor: {
            required: true
        }
    },

    setup() {
        const zoom = ref(17)
        const map = ref()

        return {
            map,
            zoom,
            latLng
        }
    }
}
</script>
