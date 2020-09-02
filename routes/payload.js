var payload = {
    google_payloaddataByPrem :function(deviceKey,req,callback){
       if(req.query!=undefined){
           if(req.query.bykelat==undefined &&req.query.bykelong==undefined && req.query.bykemobile==undefined && req.query.byketime==undefined&& req.query.bykedate==undefined){
               callback("400",null);
           }
           else if(req.query.bykelat==undefined ){
               callback("400",null);
           }
           else if(req.query.bykelong==undefined ){
            callback("400",null);
            }
           else if(req.query.bykemobile==undefined ){
               callback("400",null);
           }
           else if(req.query.byketime==undefined ){
            callback("400",null);
        }
        else if(req.query.bykedate==undefined ){
            callback("400",null);
        }
           else{      
               if(deviceKey.get('deviceKey')=="Prem_Maurya"){    
               if(req.query.bykemobile=="" || req.query.bykemobile==null ){
                   callback("509",null);
               }
               else if(req.query.bykelat=="" || req.query.bykelat==null){
                   callback("509",null);
               }
               else if(req.query.bykelong=="" || req.query.bykelong==null){
                callback("509",null);
            }
            else if(req.query.byketime=="" || req.query.byketime==null){
                callback("509",null);
            }
            else if(req.query.bykedate=="" || req.query.bykedate==null){
                callback("509",null);
            }
               else if(req.query.bykemobile==null || req.query.bykelat== null|| req.query.bykelong==null || req.query.byketime==null || req.query.bykedate==null){
                callback("509",null);
            }
               else if(req.query.bykemobile=="" && req.query.bykelat=="" && req.query.bykelong=="" && req.query.byketime=="" && req.query.bykedate==""){
                   callback("509",null);
               }   
               else{
                   var obj={
                       datamobile:req.query.bykemobile,
                       datalatitute:req.query.bykelat,
                       datalogitute:req.query.bykelong,
                       datatime:req.query.byketime,
                       datadate:req.query.bykedate,
                       deviceKey:deviceKey.get('deviceKey')
                   }
                   console.log(obj);
                   callback(obj,null);
               }
           }else{
               callback("You can't change settings",null); 
           }
       }
   }
     
   }
   }
   module.exports = payload;