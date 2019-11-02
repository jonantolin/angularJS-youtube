

function VideosService($http, $q){

   
    let ENDPOINT_VIDEOS = "http://localhost:3000/videos/";
    let ENDPOINT_USUARIOS = "http://localhost:3000/usuarios/";


    this.listar =  function(){

        let q = $q.defer();

        let url = ENDPOINT_VIDEOS;
        $http.get(url).then(function(response){

            q.resolve(response.data);

        }, function(response){

            q.reject("Mierda");
            console.warn("Fallo en la petion GET listar");
        });

        return q.promise;
    }

    this.videoById = function(videoId){
        let q = $q.defer();
        let url = ENDPOINT_VIDEOS + videoId;
        $http.get(url).then(
            response => q.resolve(response.data),
            response => q.reject("Error en la peticion de detalle")
        );

        return q.promise;
    }

    /**
     * Obtiene el usuario que posee el videoId pasado por parametro
     */
    this.usuarioById = function(usuarioId){

        let q = $q.defer();
        let url = ENDPOINT_USUARIOS + usuarioId;
        $http.get(url).then(
            response => q.resolve(response.data),
            response => q.reject("Error ", response)
        );

        return q.promise;    
    }

}