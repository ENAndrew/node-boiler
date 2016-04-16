(function(){
    
    var app = angular.module('boilerApp');
    
    app.service('boilerService', function($http, $q){
        
        var baseUrl = 'http://localhost:3333/api';
        
        this.postUser = function(userObj){
            
            return $http({
                method: 'POST', 
                url: baseUrl + '/users',
                data: userObj
            });
            
        };
        
        
        
        this.getUsers = function(){
            
           return $http({
               method: 'GET',
               url: baseUrl + '/users'
           }) 
                   .then(function(result){
                       console.log(result.data);
                       return result.data
           });
            
        };
        
       
            
    });
        

    
    
}());

