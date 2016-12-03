app.controller('editorialController', [
    '$scope',
    'editorialService',

    function ($scope,editorialService) {
        $scope.editoriales = [];
        $scope.editorialActual = {
            Id: '0',
            Nombre:' '

        };
        $scope.acccionActual = 'Agregar';
        $scope.obtenerEditoriales = function () {
            editorialService.obtenerEditoriales()
            .then(function (response) {
                $scope.editoriales = response.data;
            });
        }
        $scope.salvarEditorial = function () {

            if ($scope.acccionActual === 'Agregar') {
                editorialService.agregarEditorial($scope.editorialActual)
            .then(function (response) {
                $scope.obtenerEditoriales();
                $scope.limpiar();
                alert('Editorial Agregada!')
            });
            }

            else if ($scope.acccionActual === 'Editar') {
                editorialService.editarEditorial($scope.editorialActual)
         .then(function (response) {
             $scope.obtenerEditoriales();
             $scope.limpiar();
             alert('Editorial Editada!')
         });

            }




            
        }
        $scope.limpiar = function () {
            $scope.acccionActual = 'Agregar';
            $scope.editorialActual = {
                Id:'0',
                Nombre:''
            }
        }

        $scope.editar = function (editorial) {

            $scope.acccionActual = 'Editar';
            $scope.editorialActual = editorial;
        }

        $scope.obtenerEditoriales();

        }
]);