angular.module('app.controllers', [])
  
.controller('dizionarioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sintassiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lectioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('alephListaNomiCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {
  
    $scope.narrowed_tutorials = Tutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_tutorials = Tutorials.list;
            return;
        }
        
        $scope.narrowed_tutorials = Tutorials.list.filter(function(tutorial){
          if (tutorial.termine.toLowerCase().indexOf(s) > -1 || tutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])
   
.controller('tutorialCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {

    $scope.video = Tutorials.keys[$stateParams.videokey];


}])
 