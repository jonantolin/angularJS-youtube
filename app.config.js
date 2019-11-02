app.config(function($routeProvider){

    $routeProvider.when("/", {
        templateUrl: './app/views/inicio.html',
        controller: InicioController
    })
    .when("/videos/:id",{
        templateUrl: './app/views/editar.html',
        controller: FormuController
    })
    .when("/crear",{
        templateUrl: './app/views/editar.html',
        controller: FormuController
    })
    .otherwise({
        redirectTo: "/"
    });


});