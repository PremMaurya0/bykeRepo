const db = require('../DbConnection');
var momentzone = require('moment-timezone');
  var date = require('date-and-time');
  var now = new Date();
//   date.setLocales('en', {
//       A: ['AM', 'PM']
//   });
  momentzone.tz.setDefault("Asia/Dubai");

  var bykeManagement = {

    updatebykedata:function(obj,callback){
        if(obj.deviceKey=="" || obj.deviceKey==undefined){
            callback('Device Key is must!',null);
        }else{
            if(obj.deviceKey=="Prem_Maurya"){
                console.log(obj,"=============");
                callback(obj,null);
              //  var per=obj.data;
               // var number=obj.mobile;
                // var sqlquery = "select gsm_moblie_number from dustbins WHERE gsm_moblie_number = ?";
                // db.query(sqlquery,[number], function (error,results) {
                //     if (error) {
                //     callback(error,null);
                //     }
                //     else{                 
                //         if(results.length){
                //             var sqlquery = "UPDATE dustbins set data_percentage=? WHERE gsm_moblie_number = ?";
                //                  db.query(sqlquery,[per,number], function (error,result) {
                //                     if (error) {
                //                      callback(error,null);
                //                      }
                //                      else{ 
                //                       callback('update record!',null);
                //                     }
                //              });
                //         }
                //         else{
                //             callback('Mobile Number is not registered!',null);
                //         }
                //     }
                // });

            }else{
                callback('Device Key not Matched!',null);
            } 
        }
     
     }
  }

  module.exports = bykeManagement;