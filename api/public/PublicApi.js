/**
 * Created by cx on 17-6-19.
 */
//var request = require("request");
//var EventProxy = require("eventproxy");
//var hcUti = require("../libs/hcUti");
//var settings = require('../../settings');
//var File = require('../libs/File');
//var path = require('path');

exports.GetApi=function(_req,_res,_callbackFunction){
return {
    sqlConn:require('./libs/db.js'),
    req:_req,
    res:_res,
    callbackFunction:_callbackFunction,
    GetParams:function(paramName){
        if(typeof(_req.query[paramName])=='undefined'&&typeof(_req.body[paramName])=='undefined'){
            throw {message:'缺乏参数'+paramName};
        }else if(!_req.query[paramName]){
            return _req.body[paramName];
        }else{
            return _req.query[paramName];
        }
    },
    LoginCheck:function(){
        var Me,username,password;
        Me=this;
        username=Me.GetParams('username');
        password=Me.GetParams('password');
        console.log('username'+username);
        console.log('password'+password);
        var sqlCmd="select user_name,real_name from users "+"where user_name=? and user_pwd=? and " +
            "user_state=?;";
        var params=[username,password,1];
        Me.sqlConn.query(sqlCmd,params,function(_err,_results){
            if(!_err){
                if(_results.length>0){
                 Me.callbackFunction(_err,_results);
                }else{
                    Me.callbackFunction(_err,'无此用户');
                }

            }else{
                Me.callbackFunction(_err,_results);
            }

        });



      //  Me.callbackFunction(null,null);

    }
};
};