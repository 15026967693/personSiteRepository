require('./bootstrapInclude.js')
require('../lib/bootstrap/bootstrap-theme/css/bootstrap.min.css')
angular=require('angular')
var app=angular.module("app",[])
app.controller('mainController',function($scope){
$scope.name="aaaa"
})
require('./datepickerInclude.js')