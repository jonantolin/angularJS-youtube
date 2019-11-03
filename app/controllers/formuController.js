app.controller('FormuController', ["$scope", "$routeParams", "$sce", "videosService", function FormuController($scope, $routeParams, $sce, videosService){

    
        $scope.id = $routeParams.id;

        $scope.formuData = {};

        this.detalle = videosService.videoById($scope.id).then(
            response => {
                $scope.formuData = response;
                $scope.codigo = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + response.codigo);
                videosService.usuarioById(response.usuarioId).then( //Segunda peticion para obtener el usuario que tiene ese videoId
                    response => {
                        
                            $scope.formuData.autor = response;
                        
                    },
                    response => console.log("Error")
                );
            },
            response => console.warn(response)
        );

    }

]);