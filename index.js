const coldURL = 'https://api.sampleapis.com/coffee/iced';
const hotURL = 'https://api.sampleapis.com/coffee/hot';

fetch(coldURL)
    .then(resp => resp.json())
    .then(data => console.log(data));


fetch(hotURL)
    .then(resp => resp.json())
    .then(data => console.log(data));

