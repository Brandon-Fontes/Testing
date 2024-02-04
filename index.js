fetch('https:////api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSon.stringify({
        name: 'User 1'
    })
}).then(res =>{
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))