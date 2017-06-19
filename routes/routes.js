/**
 * Created by cx on 17-6-19.
 */
(function(){
    var publicRoute=require('../api/public/route');
    module.exports=function(app){
      console.log('routes enter');
      publicRoute(app);
    };
}).call(this);