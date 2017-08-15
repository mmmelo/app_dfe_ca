/**
 *
 * Project:    website
 * Created by: mmmelo on 8/13/17.
 *
 */

angular.module("app").controller("veiculoCtrl", [ '$scope', 'veiculos', '$stateParams', '$mdToast', '$state' ,function($scope, veiculos, $stateParams, $mdToast, $state){

    $scope.vec = {};
    $scope.btnDeletarShow = false;
    $scope.isNewVeiculo = false;

    $scope.getCarList = function(){

        if(angular.isDefined($stateParams.id)){
            $scope.btnDeletarShow = true;
            var getVeiculo =  veiculos.getCarEdit($stateParams.id);

            getVeiculo.then(function (veiculo) {

                $scope.vec =  veiculo.data.data;
            }, function (error) {
                console.info("error", error);

            }, function(progress){
                console.info("progress", progress);
            });
        }else{
            $scope.isNewVeiculo = true;
        };
    };

    $scope.veiculoUpd = function (veiculo) {

        var updVeiculo;
        var textToast;

        if($scope.isNewVeiculo){
            updVeiculo = veiculos.getAddCar(veiculo);
            textToast = "Dados inserido com sucesso!"
        }else{
            updVeiculo = veiculos.getCarUpd(veiculo);
            textToast = 'Dados salvo com sucesso!';
        };

        updVeiculo.then(function (veiculo) {

            $mdToast.show(
                $mdToast.simple()
                    .textContent(textToast)
                    .position({top: true})
                    .hideDelay(3000)
            );
            $scope.isNewVeiculo = false;
            
        }, function (error) {
            console.info("error", error);

        }, function (progress) {
            console.info("progress", progress);
        });
    };

    $scope.veiculoDel = function (veiculo) {

        var updVeiculo =  veiculos.getCarDel(veiculo.id);

        updVeiculo.then(function (veiculo) {

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Dados deletado com sucesso')
                    .position({top:true} )
                    .hideDelay(3000)
            );

            $state.go("/");
            
        }, function (error) {
            console.info("error", error);

        }, function(progress){
            console.info("progress", progress);
        });

    };


}]);
