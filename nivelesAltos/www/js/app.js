// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
    })
    .state('app.login', {
      url:"/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html"
        }
      }
    })
    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
        }
      }
    })
    .state('app.nse', {
      url: "/nse",
      views: {
        'menuContent' :{
          templateUrl: "templates/nse.html",
        }
      }
    })
    .state('app.caracteristicas', {
      url: "/caracteristicas",
      views: {
        'menuContent' :{
          templateUrl: "templates/caracteristicas.html"
        }
      }
    })
    .state('app.C_bancarios', {
      url: "/C_bancarios",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_bancarios.html",
        }
      }
    })
    .state('app.C_demograficas', {
      url: "/C_demograficas",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_demograficas.html",

        }
      }
    })
    .state('app.C_estado_civil', {
      url: "/C_estado_civil",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_estado_civil.html",

        }
      }
    })
    .state('app.C_hogar', {
      url: "/C_hogar",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_hogar.html",

        }
      }
    })
    .state('app.C_internet', {
      url: "/C_internet",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_internet.html",

        }
      }
    })
    .state('app.C_medios', {
      url: "/C_mediost",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_medios.html",

        }
      }
    })
    .state('app.C_ocupaciones', {
      url: "/C_ocupaciones",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_ocupaciones.html",

        }
      }
    })
    .state('app.C_tecnologia', {
      url: "/C_tecnologia",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_tecnologia.html",

        }
      }
    })
    .state('app.C_telefonia', {
      url: "/C_telefonia",
      views: {
        'menuContent' :{
          templateUrl: "templates/C_telefonia.html",

        }
      }
    })
    .state('app.historias_vida', {
      url: "/historias_vida",
      views: {
        'menuContent' :{
          templateUrl: "templates/historias_vida.html",

        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});

