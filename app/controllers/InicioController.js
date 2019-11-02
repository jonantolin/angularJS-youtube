function InicioController ($scope, videosService){

    $scope.saludo = "Hello World!";

    $scope.videos = {};

    $scope.listar = videosService.listar().then(function(response){
        $scope.videos = response;
    });

    console.debug("InicioController prueba");

}