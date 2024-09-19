document.addEventListener('DOMContentLoaded', function () {
    // Demo data for the blood pressure chart
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Systolic Blood Pressure',
            data: [120, 125, 130, 128, 132, 135, 140],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.1
        },
        {
            label: 'Diastolic Blood Pressure',
            data: [80, 82, 85, 83, 86, 84, 88],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.1
        }]
    };

    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + ' mmHg';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Blood Pressure (mmHg)'
                    },
                    beginAtZero: true
                }
            }
        }
    };

    // Create the chart
    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    new Chart(ctx, config);
});
