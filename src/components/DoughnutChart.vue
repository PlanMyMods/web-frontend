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
                        '#FBE0C4',
                        '#0061A8',
                        '#2978B5',
                        '#8AB6D6',
                        '#325288',
                    ],

                    borderWidth: 1
                }]
            },
        });
        myChart
    }
}

</script>