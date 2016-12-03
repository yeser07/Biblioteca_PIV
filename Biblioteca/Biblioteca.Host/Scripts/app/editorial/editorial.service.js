app.service('editorialService',
    [
        '$http',
        'miConfiguracion',
        function ($http,miConfiguracion) {

            function obtenerEditoriales() {
                return $http.get(miConfiguracion.urlBackend + 'api/Editorial');
            }

            function agregarEditorial(nuevoEditorial) {
                return $http.post(miConfiguracion.urlBackend + 'api/Editorial', nuevoEditorial);
            }


            function editarEditorial(editorial) {
                return $http.put(miConfiguracion.urlBackend + 'api/Editorial/' + editorial.Id, editorial);
            }

            function eliminarEditorial(id) {
                return $http.delete(miConfiguracion.urlBackend + 'api/Editorial/' + editorial.Id);
            }



            return {
                obtenerEditoriales: obtenerEditoriales,
                agregarEditorial: agregarEditorial,
                editarEditorial: editarEditorial,
                eliminarEditorial:eliminarEditorial
            }
        }
    ]);