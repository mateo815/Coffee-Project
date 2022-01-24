const baseURL = 'https://api.sampleapis.com/coffee/iced';
fetch(baseURL)
    .then(resp => resp.json())
    .then(data => console.log(data));