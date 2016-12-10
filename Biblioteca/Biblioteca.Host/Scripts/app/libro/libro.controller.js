app.controller('libroController', [
    '$scope',
    'libroService',

    function ($scope,libroService) {
        $scope.libros = [];
        $scope.editorialActual = {
            Id: '0',
            Nombre: '',
            Anio:''

        };
        $scope.accionActual = 'Agregar';
        $scope.obtenerLibros = function () {
            libroService.obtenerLibros()
            .then(function (response) {
                $scope.libros= response.data;
            });
        }
        $scope.salvarLibro = function () {

            if ($scope.accionActual === 'Agregar') {
                libroService.agregarLibro($scope.libroActual)
            .then(function (response) {
                $scope.obtenerLibros();
                $scope.limpiar();
                alert('Libro Agregado!')
            });
            }

            else if ($scope.accionActual === 'Editar') {
                libroService.editarLibro($scope.libroActual)
         .then(function (response) {
             $scope.obtenerLibros();
             $scope.limpiar();
             alert('Libro Editado!')
         });

            }
        }
        $scope.limpiar = function () {
            $scope.accionActual = 'Agregar';
            $scope.libroActual = {
                Id:'0',
                Nombre: '',
                Anio:''
            }
        }

        $scope.editar = function (libro) {

            $scope.accionActual = 'Editar';
            $scope.libroActual = JSON.parse(JSON.stringify(libro));;
        }

        $scope.eliminar2 = function (libro) {

            $scope.accionActual = 'Eliminar';
            $scope.libroActual = JSON.parse(JSON.stringify(libro));;
        }


        $scope.eliminar = function (libro) {
            libroService.eliminarLibro(libro)
            .then(function (response) {
                $scope.obtenerLibros();
                $scope.limpiar();
                alert('Libro Eliminado');
            })
        }



        $scope.obtenerLibros();

        }
]);