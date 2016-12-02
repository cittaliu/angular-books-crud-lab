console.log('contrller is linked!');
angular
    .module('pokemonApp')
    .controller('PokemonIndexController', PokemonIndexController);

PokemonIndexController.$inject = ['$http'];

function PokemonIndexController($http) {
    var vm = this;
    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/pokemon'
    }).then(function successCallback(response) {
        console.log(response);
        vm.pokemon = response.data.pokemon;
    }, function errorCallback(response) {
        console.log('There is an error getting the data', response);
    });
}
