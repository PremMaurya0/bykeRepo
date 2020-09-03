const express = require('express');
const router = express.Router();
const bykeManagementCtrl = require('../controller/bykeManagement');
const payload=require('./payload');
const jwt=require('jsonwebtoken');
var cron = require('node-cron');

var _ = require('underscore');



module.exports=function(deviceKey,io){

  router.post('/v1/requests', function(req, res) {
      console.log("API in Here");
    payload.google_payloaddataByPrem(deviceKey,req,(requestDevice)=>{
        if(requestDevice=="400"){
            res.send("Something is wrong");
        }
        else if(requestDevice=="509"){
            res.send("Something is missing value");
        }else{
            bykeManagementCtrl.updatebykedata(requestDevice,result => { 
                res.send(result);
                console.log("API in Here 2")
            });
        }
    });
});
return router;
}