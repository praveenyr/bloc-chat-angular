(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    //var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        console.log(roomId);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },

      //Sending a new chat message to the room
      send: function(newMessage) {
        // Send method logic
        console.log(newMessage);
        $firebaseArray(ref).$add(newMessage);
      }

    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
