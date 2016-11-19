app.config(['$routeProvider',
function ($routerProvider) {
    $routerProvider.when('/', {
        templateUrl: "/Scripts/app/home/home.template.html",
        controller: "homeController"
    })
    .otherwise({
        redirectTo:'/'
    })
}


]);
