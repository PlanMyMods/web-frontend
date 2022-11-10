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
                        '#FFEBAD',
                        '#B1B2FF',
                        '#AAC4FF',
                        '#D2DAFF',
                        '#EEF1FF',
                    ],

                    borderWidth: 1
                }]
            },
        });
        myChart
    }
}

</script>