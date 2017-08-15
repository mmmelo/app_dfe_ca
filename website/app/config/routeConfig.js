angular.module("app").config( function($routeProvider,$locationProvider, $stateProvider){

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    $stateProvider.state("/",{
        url: '/',
        templateUrl:"app/view/home.html",
        controller:"appMain",
    });

    $stateProvider.state("veiculo",{
        url: '/veiculo/:id',
        templateUrl:"app/view/veiculo.html",
        controller:"veiculoCtrl",
        params:{
            id:null
        },
    });

});
