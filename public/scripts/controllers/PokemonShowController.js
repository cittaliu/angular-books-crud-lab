console.log('show controller is linked!');
angular
    .module('pokemonApp')
    .controller('PokemonShowController', PokemonShowController);

PokemonShowController.$inject = ['$http', '$routeParams'];

function PokemonShowController($http, $routeParams) {
    var vm = this;

    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
    }).then(function successCallback(response) {
        vm.pokemon = response.data;
    }, function errorCallback(response) {
        console.log('There is an error getting the data', response);
    });

    vm.deletePokemon = function(pokemon) {
        $http({
            method: 'DELETE',
            url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
        }).then(function successCallback(response) {
            window.location.href = "/";
        }, function errorCallback(response) {
            console.log('There is an error getting the data', response);
        });
    };

    vm.updatePokemon = function(pokemon) {
        $http({
            method: 'PUT',
            url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id,
            data: pokemon
        }).then(function successCallback(response) {
            window.location.href = "/";
            console.log(response);
        }, function errorCallback(response) {
            console.log('There is an error getting the data', response);
        });
    };

    vm.cancelPokemon = function() {
        window.location.href = "http://localhost:9966/pokemon/"+$routeParams.id;
    };

}
