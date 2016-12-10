app.service('libroService',
    [
        '$http',
        'miConfiguracion',
        function ($http,miConfiguracion) {

            function obtenerLibros() {
                return $http.get(miConfiguracion.urlBackend + 'api/Libro');
            }

            function agregarLibro(nuevoLibro) {
                return $http.post(miConfiguracion.urlBackend + 'api/Libro', nuevoLibro);
            }


            function editarLibro(libro) {
                return $http.put(miConfiguracion.urlBackend + 'api/Libro/' + libro.Id, libro);
            }

            function eliminarLibro(libro) {
                return $http.delete(miConfiguracion.urlBackend + 'api/Libro/' + libro.Id);
            }



            return {
                obtenerLibros: obtenerLibros,
                agregarLibro: agregarLibro,
                editarLibro: editarLibro,
                eliminarLibro:eliminarLibro
            }
        }
    ]);