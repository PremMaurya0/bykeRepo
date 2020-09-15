const express = require('express');
const router = express.Router();
const bykeManagementCtrl = require('../controller/bykeManagement');
const payload=require('./payload');
const jwt=require('jsonwebtoken');
var cron = require('node-cron');

var _ = require('underscore');



module.exports=function(deviceKey,io){

  cron.schedule('* * * * *', () => {
   // console.log('running every minute to 1 from 5');
   bykeManagementCtrl.selectAllData(result=>{
      
      io.sockets.emit('bikeList', result);
    });
  });


  router.post('/v1/requests', function(req, res) {
      
    payload.google_payloaddataByPrem(deviceKey,req,(requestDevice)=>{
        
        if(requestDevice=="400"){
           
            res.send("Something is wrong");
        }
        else if(requestDevice=="509"){
          
            res.send("Something is missing value");
        }else{
            bykeManagementCtrl.updatebykedata(requestDevice,result => { 
                res.send(result);
               
            });
        }
    });
    });

    router.get('/v1/readData', function(req, res) {

          if(req.query.gsm_mobile==undefined){
            res.json({error:true,message:"gsm_mobile is undefined!!"});
          }else{
            bykeManagementCtrl.getStatus(req.query.gsm_mobile, result=>{
                
                if(result=="0"){
                    res.json({message:"number is not found!"});
                }else{
                    res.json({g:result[0].contact_no,m:result[0].status_command});
                }
               

            });
          ;
          }
     
    });
    router.post('/v1/updateStatus', function(req, res) {

        if(req.body.gsmmobile==undefined || req.body.gsmmobile==""){
          res.json({error:true,message:"gsm_mobile is undefined!!"});
        }
        else if(req.body.bikestatus==undefined || req.body.bikestatus==""){
            res.json({error:true,message:"gsm_mobile is undefined!!"});
          }
        else{
          bykeManagementCtrl.updateStatus(req.body.gsmmobile,req.body.bikestatus, result=>{
            if(result=="0"){
                res.json({message:"number is not found!"});
            }else{
                res.send(result);
            }
          });
        
        }
   
  });

  router.get('/v1/getDetail', function(req, res) {

    if(req.query.gsm_mobile==undefined){
      res.json({error:true,message:"gsm_mobile is undefined!!"});
    }else{
     // console.log(req.query.gsm_mobile);
      bykeManagementCtrl.getDetails(req.query.gsm_mobile, result=>{
          console.log(result);
          if(result=="0"){
              res.json({message:"number is not found!"});
          }else{
              res.send(result[0]);
          }
         

      });
    ;
    }

});


return router;
}