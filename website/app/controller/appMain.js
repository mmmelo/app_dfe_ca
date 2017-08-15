angular.module("app").controller("appMain", [ '$scope', 'veiculos','$state' ,function($scope, veiculos, $state){

    $scope.veiculos_total = 0;
    $scope.veiculos_offset = 0;

    $scope.getCarList = function(){

        var getVeiculos =  veiculos.getCarlist();

        getVeiculos.then(function (veiculos) {

            console.info(veiculos);
            $scope.veiculos =  veiculos.data.data;
            $scope.veiculos_total = veiculos.data.data.length;
           
        }, function (veiculos) {
            console.info("error", veiculos);

        }, function(veiculos){
            console.info("progress", veiculos);
        });

    };

    $scope.search = function(search){

        var getSearch = veiculos.getSearch(search);

        getSearch.then(function (veiculos) {
            $scope.veiculos =  veiculos.data.data;
            $scope.veiculos_total = veiculos.data.data.length;
            console.info('hkl',veiculos.data.data.length);
        }, function (veiculos) {
            console.info("error", veiculos);

        }, function(veiculos){
            console.info("progress", veiculos);
        });

    };

    $scope.goToVeiculo = function (idVeiculos) {
        $state.go('veiculo',{'id': idVeiculos});
    }

    $scope.currentPage = 0;

    $scope.paging = {
        total: $scope.veiculos_total,
        current: 1,
        onPageChanged: loadPages,
    };

    function loadPages() {
        $scope.currentPage = $scope.paging.current;
        $scope.veiculos_offset = $scope.paging.current * 10;
    };

}]);
