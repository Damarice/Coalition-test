// app.js

// Function to initialize Chart.js for Blood Pressure Chart
function initializeBloodPressureChart() {
    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Systolic Pressure',
                data: [120, 130, 125, 140, 135, 150],
                borderColor: '#3D66C9',
                backgroundColor: 'rgba(61, 102, 201, 0.2)',
                fill: true,
                tension: 0.1
            }, {
                label: 'Diastolic Pressure',
                data: [80, 85, 80, 90, 88, 85],
                borderColor: '#EBA340',
                backgroundColor: 'rgba(235, 163, 64, 0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' mmHg';
                        }
                    }
                }
            }
        }
    });
}

// Function to handle toggle of patient details
function togglePatientDetails() {
    const showAllButton = document.querySelector('.show-all-btn');
    const patientDetails = document.querySelector('.patient-details');

    showAllButton.addEventListener('click', () => {
        if (patientDetails.classList.contains('expanded')) {
            patientDetails.classList.remove('expanded');
            showAllButton.textContent = 'Show All Information';
        } else {
            patientDetails.classList.add('expanded');
            showAllButton.textContent = 'Hide Information';
        }
    });
}

// Initialize functionalities
document.addEventListener('DOMContentLoaded', () => {
    initializeBloodPressureChart();
    togglePatientDetails();
});
