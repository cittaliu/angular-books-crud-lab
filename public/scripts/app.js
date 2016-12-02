console.log("app.js is linked!");
angular
  .module('pokemonApp', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '../views/templates/pokemons.html',
        controllerAs: 'pokemonIndexCtrl',
        controller: 'PokemonIndexController'
      })
      .when('/pokemon/:id', {
        templateUrl: '../views/templates/pokemon-show.html',
        controllerAs: 'pokemonShowCtrl',
        controller: 'PokemonShowController'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
