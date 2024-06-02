<template>
<div class="doctor-details__contact mt-4 card border-0 p-4">
    <h1 class="doctor-details__contact-title mb-4">
        {{ $t('Office address and phone number') }}
        {{ $t('doctor') }}
        {{ doctor.name }}
    </h1>

    <div class="d-flex fs-3 text-gray mb-4">
        <p class="fw-medium">{{ $t('Phone') }}:</p>
        <p dir="ltr" class="ms-1 me-8">{{doctor.phone}}</p>
        <p class="">{{doctor.mobile}}</p>
    </div>
    <div class="d-flex fs-3 text-gray mb-4">
        <p class="fw-medium">{{$t('Address')}}:</p>
        <p class="ms-1">{{doctor.address}}</p>
    </div>
    <div style="height:200px;">
        <LMap ref="map" v-model:zoom="zoom" :center="latLng(35.715298, 51.404343)">
            <LMarker :lat-lng="latLng(35.715298, 51.404343)"></LMarker>
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
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import { latLng, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
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
        const zoom = ref(10)
        const map = ref()

        return {
            map,
            zoom,
            latLng
        }
    }
}
</script>
