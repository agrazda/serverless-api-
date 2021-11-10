'use strict';

const dynamoose = require('dynamoose');

exports.handler = async (event) => {
const peopleSchema =new dynamoose.Schema({
    'id': Number,
    'name': String,
    'role': String
});

const peopleTable = dynamoose.model('people', peopleSchema)


try {
    data = await peopleSchema.scan().exec();
    status = 200;
} catch(e) {   
    data = new Error(e);
    status = 400;
}


const response = {
    statusCode: 200,
    body: JSON.stringify(data),
    };
return response;
};