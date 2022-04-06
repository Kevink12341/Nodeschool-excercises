const http = require('http');

let url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding("utf-8");
    res.on('data', function (data) {console.log(data)})
    res.on('error', (e) => { 
        console.error('error: ${e.message}');
    })
});

