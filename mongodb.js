const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('user').insertOne({
    //     name: 'Mohit',
    //     age: 20
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Bath',
    //         completed: false
    //     },
    //     {
    //         description: 'Lunch',
    //         completed: false
    //     },
    //     {
    //         description: 'BreakFast',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return 'Cannot insert documents'
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('user').updateOne({
    //     _id: new ObjectID("5ef2f0d731ed5153ebf79f1b")
    // }, {
    //     $set: {
    //         name: 'Aman'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Bath'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})