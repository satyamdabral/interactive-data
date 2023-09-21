
const months = ['January', 'February', 'March', 'April', 'May'];
const salesData = [3000, 4500, 6000, 3500, 8000];

const ctxBar = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Monthly Sales',
            data: salesData,
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});

anime({
    targets: '.chart-container',
    translateY: [50, 0], 
    opacity: [0, 1], 
    duration: 1000,
    easing: 'easeOutQuart',
    delay: 500 
});
