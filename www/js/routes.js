angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.dizionario', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/dizionario.html',
        controller: 'dizionarioCtrl'
      }
    }
  })

  .state('tabsController.sintassi', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sintassi.html',
        controller: 'sintassiCtrl'
      }
    }
  })

  .state('tabsController.lectio', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/lectio.html',
        controller: 'lectioCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.alephListaNomi', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/alephListaNomi.html',
        controller: 'alephListaNomiCtrl'
      }
    }
  })

  .state('tabsController.bethListaNomi', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/bethListaNomi.html',
        controller: 'bethListaNomiCtrl'
      }
    }
  })

  .state('tutorial', {
    url: '/page6',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/tutorial.html',
        controller: 'tutorialCtrl'
      }
    
  )

  .state('btutorial', {
    url: '/page8',
    params: {
      videokey: ""		
  },
        templateUrl: 'templates/btutorial.html',
        controller: 'btutorialCtrl'
      }
    
  )

$urlRouterProvider.otherwise('/page1/page2')


});