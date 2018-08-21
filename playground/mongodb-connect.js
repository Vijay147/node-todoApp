// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var mong = new MongoClient();
var obj = new ObjectID();

console.log(mong);
console.log(obj);


//Object Destructuring

// var user = {name: 'Vishnu', age:25, location: 'Toronto'};
// var {name, location} = user;

// console.log(name);
// console.log(location);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
        console.log('Connected to MongoDB Server');

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {
        //     if(err){
        //         return console.log('Unable to insert todo', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));

        // });
        db.collection('Users').insertOne({
            name: 'Vishnu Vijay',
            age: 25,
            location: 'Toronto'
        }, (err, result) => {
            if(err){
                return console.log('Unable to insert todo', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));

        });
        db.close();
});