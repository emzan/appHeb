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

  .controller('bethListaNomiCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {
  
    $scope.narrowed_btutorials = Btutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_btutorials = Btutorials.list;
            return;
        }
        
        $scope.narrowed_btutorials = Btutorials.list.filter(function(btutorial){
          if (btutorial.termine.toLowerCase().indexOf(s) > -1 || btutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
              return true;
          } 
          return false;
        });
    }
  
  }])

  .controller('ghimelListaNomiCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {
  
    $scope.narrowed_ctutorials = Ctutorials.list;
    $scope.data = {
        search: ''
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if (s == ''){
            $scope.narrowed_ctutorials = Ctutorials.list;
            return;
        }
        
        $scope.narrowed_ctutorials = Ctutorials.list.filter(function(ctutorial){
          if (ctutorial.termine.toLowerCase().indexOf(s) > -1 || ctutorial.traslitterazione.toLowerCase().indexOf(s) > -1){
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
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}


])

.controller('btutorialCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {

    $scope.video = Btutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}


])
 
.controller('ctutorialCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {

    $scope.video = Ctutorials.keys[$stateParams.videokey];
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });


}


])