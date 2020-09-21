const express = require('express');

const app = express();

app.get('/',(request, response)=>{
    return response.json({ message: "Hello Bootcamp" });
});

app.listen(3333, () =>{
    console.log('🔥️Back-end started!🔥️');
});

