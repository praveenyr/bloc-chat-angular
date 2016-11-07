(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
          });


      $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCollectionCtrl as roomcollection',
                templateUrl: '/templates/home.html'
              })
      }

      function BlocChatCookies($cookies) {
        console.log("in run cookie func");
        var currentUser = $cookies.get('blocChatCurrentUser');
        while (!currentUser || currentUser === '') {
          currentUser = prompt("User not logged in.Please enter your username: ");                     
        }
        $cookies.put('blocChatCurrentUser',currentUser);
      }

    angular
        .module('blocChat', ['firebase','ui.router','ngCookies'])
        .config(config)
        .run(['$cookies', BlocChatCookies]);
})();
