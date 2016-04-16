(function(){
    
    var app = angular.module('boilerApp');
    
    app.controller('boilerController', function($scope, boilerService){
        
        
        $scope.users = [];
        
        boilerService.getUsers()
                .then(function(result){
                    $scope.users = result;
        });
        
        
        $scope.login = function(name, company, email, password, password2){
            

            var userObj = {
                name: name,
                company: company,
                email: email,
                password: password,
                password2: password2
            };
            
            if(password === password2) {
                boilerService.postUser(userObj)
                        .then(function(response){
                            console.log(response);
                });
                
                $scope.name = "";
                $scope.company = "";
                $scope.email = "";
                $scope.password = "";
                $scope.password2 = "";
                
                $scope.users.push(userObj);
                
            } else {
                alert('Your passwords must match.');
            }
            
        };
        
        
    });
    
    
}());


