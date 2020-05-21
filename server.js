const express = require("express");
  
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
    'Шрек':{name:'Шрек', photo:'Шрек.jpg'},
    'Кіт':{name:'Кіт', photo:'Кіт.jpg'},
    'Осел':{name:'Осел', photo:'Осел.jpg'},
}

app.get('/users', (req, res) => {
    console.log('running app.get /users')
    const allUsernames = Object.keys(fakeDatabase)
    console.log('allUsernames is: ', allUsernames)
    res.send(allUsernames)
})

app.get('/users/:userid', (req, res) => {
    const nameToLookup = req.params.userid;
    const val = fakeDatabase[nameToLookup];
    console.log(nameToLookup, val) 
    
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000/")
})


