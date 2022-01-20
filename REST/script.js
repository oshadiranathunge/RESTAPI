const express = require('express');//import express
const res = require('express/lib/response');
const Joi = require ('joi');//import Joi
const app = express ();//create express application on the app variable
app.use(express.json());//used the json file

//Give data to the server
const customer = [
    {title:'George',id:'1'},
    {title:'George',id:'2'},
    {title:'George',id:'3'},
    {title:'George',id:'4'}
]

//Read Request Handlers
//Display the message when URL Consist of '/'
app.get('/',(req,res)=>{
    res.send('Hi! This is the API');
});

//Diplay the List of customers when URL consists of API customers
app.get('/api/customers',(req,res)=>{
    res.send(customers);
});
//Display the information of specific customer when you mention the id
app.get('/api/customer/:id',(req,res) => {
    const customer = customers.find(c => customer.id === parseInt(req.params.id));
    //if there is no valid customer ID, then diplay an error with the following message
    if (!customer) res.status(404).send('<h2 style="font-family:calibri;')
});
    
