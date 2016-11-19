app.controller(
    'homeController',
    [
        '$scope',
        function ($scope) {
            $scope.saludo = "Hola Mundo con Angular y Controlador.";
        }
    ]
    );