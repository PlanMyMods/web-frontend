<template>
    <canvas id="myChart" width="300" height="300"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
    props: {
        assessmentName: {
            type: Array,
        },
        weightage: {
            type: Array
        }
    },
    data() {
        return {
            amName: [],
            amWeightage: []
        }
    },
    mounted() {
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: this.assessmentName,
                datasets: [{
                    label: '# of Votes',
                    data: this.weightage,
                    backgroundColor: [
                        '#EEF1FF',
                        '#AAC4FF',
                        '#B1B2FF',
                        '#D2DAFF',

                    ],
                    // borderColor: [
                    //     '#FFF7E9',
                    //     '#FF731D',
                    //     '#5F9DF7',
                    //     '#1746A2',
                    // ],
                    borderWidth: 1.5
                }]
            },
        });
        myChart
    }
}

</script>