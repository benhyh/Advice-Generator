// Initialization
const header = document.querySelector('.header');
const circle = document.querySelector('.circle');
const advice = document.querySelector('.advice');
const svgContainer = document.querySelector('.svgContainer');
const svgContainerMobile = document.querySelector('.svgContainerMobile');


// Fetch API
circle.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => {
        return res.json();
    })
    .then(data => {
            advice.innerHTML = `"${data.slip.advice}"`;
            header.innerHTML = `Advice #${data.slip.id}`;
    })
    .catch(error => console.log('ERROR'));
});
