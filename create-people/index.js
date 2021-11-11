'use strict';

const dynamoose = require('dynamoose');

const jsonBody = JSON.parse(event.body);

exports.handler = async (event) => {
const peopleSchema =new dynamoose.Schema({
    'id': Number,
    'name': String,
    'role': String
});

const peopleTable = dynamoose.model('people', peopleSchema)

let data = null;
let staus = 500;

try {
    let id = Math.floor(Math.random() * 100)

    let people = new peopleTable({id, ...jsonBody});

    data = await friend.save()
} catch(e) {   
    status = 400;
    datat = new Error(e)
}


const response = {
    statusCode: 200,
    body: JSON.stringify(data),
    };
return response;
};