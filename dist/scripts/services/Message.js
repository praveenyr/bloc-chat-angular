(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    //var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        console.log(roomId);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      }

    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
