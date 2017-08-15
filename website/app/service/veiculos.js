/**
 *
 * Project:    website
 * Created by: mmmelo on 8/12/17.
 *
 */

angular.module("app").service('veiculos', function($q, $timeout,$http){


    function _getCarlist(offset){

        var params = {
            limit   :10,
            offset  :offset,
        };
        var deferred = $q.defer();
        deferred.notify("Loading");
        $timeout(function() {
            $http.defaults.headers.post["Content-Type"] = "text/plain";
            $http.post("http://webservice.localhost.dev/main/get_veiculos", params)
                .then(function (success) {
                    deferred.resolve(success.data);
                }, function (error) {
                    deferred.reject(error);
                });
        },100);

        return deferred.promise;
    };

    function _getCarEdit(vec_id){

        var deferred = $q.defer();
        var params = {
            id:vec_id,
        };
        deferred.notify("Loading");
        $http.defaults.headers.post["Content-Type"] = "text/plain";
        $timeout(function() {
            $http.post("http://webservice.localhost.dev/main/get_veiculos", params)
                .then(function (success) {
                    deferred.resolve(success.data);
                }, function (error) {
                    deferred.reject(error);
                });
        },100);

        return deferred.promise;
    };

    function _getCarUpd(veiculo){

        var deferred = $q.defer();
        var params = {
            id         :veiculo.id,
            modelo     :veiculo.modelo,
            marca      :veiculo.marca,
            foto       :veiculo.foto,
            combustivel:veiculo.combustivel,
            valor      :veiculo.valor,
        };
        deferred.notify("Loading");
        $http.defaults.headers.post["Content-Type"] = "text/plain";
        $timeout(function() {
            $http.post("http://webservice.localhost.dev/main/get_edit_veiculos", params)
                .then(function (success) {
                    deferred.resolve(success.data);
                }, function (error) {
                    deferred.reject(error);
                });
        },100);

        return deferred.promise;
    };

    function _getAddCar(veiculo){

        var deferred = $q.defer();
        var params = {
            id         :veiculo.id,
            modelo     :veiculo.modelo,
            marca      :veiculo.marca,
            foto       :veiculo.foto,
            combustivel:veiculo.combustivel,
            valor      :veiculo.valor,
        };
        deferred.notify("Loading");
        $http.defaults.headers.post["Content-Type"] = "text/plain";
        $timeout(function() {
            $http.post("http://webservice.localhost.dev/main/get_add_veiculo", params)
                .then(function (success) {
                    deferred.resolve(success.data);
                }, function (error) {
                    deferred.reject(error);
                });
        },100);

        return deferred.promise;
    };

    function _getSearch(search){

        var deferred = $q.defer();
        var params = {
            search: search,
        };
        var deferred = $q.defer();
        deferred.notify("Loading");
        $timeout(function() {
            $http.defaults.headers.post["Content-Type"] = "text/plain";
            $http.get("http://webservice.localhost.dev/main/search_veiculos")
                .then(function (success) {
                    deferred.resolve(success.data);
                }, function (error) {
                    deferred.reject(error);
                });
        },100);

        return deferred.promise;
    };

    return {
        getCarlist  : _getCarlist,
        getCarEdit  : _getCarEdit,
        getCarUpd   : _getCarUpd,
        getAddCar   : _getAddCar,
        getSearch   : _getSearch,
    }
});
