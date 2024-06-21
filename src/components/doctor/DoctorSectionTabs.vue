<template>
<div id="tabs-list" class="d-flex flex-row pt-2 pb-0 card border-0 justify-content-around gap-2 text-center border-bottom">
    <a class="py-2 px-4  rounded text-decoration-none text-nowrap fs-2 fw-medium text-gray active-doctor-details" href="#appointment">{{$t('Turn ratings')}}</a>
    <a class="py-2 px-4  rounded text-decoration-none text-nowrap fs-2 fw-medium text-gray" href="#description">{{$t('Introduction')}}</a>
    <a class="py-2 px-4  rounded text-decoration-none text-nowrap fs-2 fw-medium text-gray" href="#contact">{{$t('Contacts')}}</a>
    <a class="py-2 px-4  rounded text-decoration-none text-nowrap fs-2 fw-medium text-gray" href="#comments">{{ $t('Comments') }}</a>
<!--    <a class="col-3 p-1 rounded text-decoration-none text-nowrap" href="#rules">{{$t('Turn ratings')}}</a>-->
</div>
</template>

<script>
import {onMounted} from "vue";

export default {
    name: "DoctorSectionTabs",

    setup() {
        // todo => should fix scrollpy
        onMounted(() => {
            (function() {
                'use strict';

                let section = document.querySelectorAll(".doctor-details-section");
                let sections = {};
                let i = 0;
                Array.prototype.forEach.call(section, function(e) {
                    sections[e.id] = e.offsetTop;
                });

                window.onscroll = function() {
                    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

                    for (i in sections) {
                        if (sections[i] < scrollPosition) {
                            document.querySelector('.active-doctor-details').classList.remove('active-doctor-details');
                            document.querySelector('a[href*=' + i + ']').classList.add('active-doctor-details');
                        }
                    }

                };
            })();
        })

    }

}
</script>
