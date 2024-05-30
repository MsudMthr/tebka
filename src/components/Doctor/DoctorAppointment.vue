<template>
    <div class="bg-white p-4 rounded">
        <div v-for="item of items" :key="item.id">
            <div>{{item.name}}</div>
            <div>
                <button class="btn btn-primary" type="button">
                    دریافت نوبت
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DoctorAppointment",

        setup() {
            const items = [
                {
                    name: 'نوبت مطب',
                    first_time: "30-5-2024",
                    id: 1
                },
                {
                    name: 'نوبت نوار مغز',
                    first_time: "4-6-2024",
                    id: 1
                }
            ];

            return {
                items
            };
        }

    };
</script>