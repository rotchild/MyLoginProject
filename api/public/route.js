/**
 * Created by cx on 17-6-19.
 */
module.exports=function(app){
    console.log('route enter');
 app.all('/api/public/:ifName',function(req,res){

     var ifName=req.params.ifName;
     console.log('all enter, ifName is'+ifName);
     if(!ifName){
         console.log('404');
         res.send(404);
     }
     function callbackFunction(_err,_result){
       res.send({err:_err,success:!_err,data:_result});
     }
     var apiPublic=require('./PublicApi.js').GetApi(req,res,callbackFunction);
     try{
         if(apiPublic[ifName]){
             apiPublic[ifName]();
         }else{
             res.send({err:'接口不存在',success:false,data:null});
         }
     }catch(err){
         console.log(err.message);
     }


 });
};