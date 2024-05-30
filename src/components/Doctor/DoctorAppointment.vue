<template>
    <div class="bg-white p-5 rounded d-flex flex-column gap-7">
        <div v-for="item of items" :key="item.id">
            <p class="fs-lg-3 fs-2 fw-medium mb-1">{{ item.name }}</p>
            <div class="d-flex align-items-center justify-content-between">
                <p class="fs-lg-3 fs-2">
                    {{ $t('first time') }} {{ getFistTimeText(item.first_time) }}
                </p>
                <button class="btn btn-primary px-lg-4 py-lg-2  fs-lg-3 fs-2 fw-bold" type="button">
                    {{ $t('get turn') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import DateTime from '@/utils/date-time';

    export default {
        name: "DoctorAppointment",

        setup() {
            const items = [
                {
                    name: 'نوبت مطب',
                    first_time: "30-05-2024",
                    id: 1
                },
                {
                    name: 'نوبت نوار مغز',
                    first_time: "4-06-2024",
                    id: 1
                }
            ];

            function getFistTimeText(firsTime) {
                return DateTime.make().gregorian().parse('dd-MM-yyyy', firsTime).jalali().format('dddd dd MMMM');
            }

            return {
                items,
                getFistTimeText
            };
        }

    };
</script>