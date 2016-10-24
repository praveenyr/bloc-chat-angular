(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");

    var rooms = $firebaseArray(ref);

    window.foo = rooms;

    rooms.addRoom = function(name){;
      console.log("Inside addRoom :" + name);
        this.$add({name: name});
    };

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
