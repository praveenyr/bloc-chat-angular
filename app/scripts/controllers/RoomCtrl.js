(function() {
    function RoomCollectionCtrl($cookies,Room,Message)  {
       console.log("In controller");

        this.userName = $cookies.get('blocChatCurrentUser');
        this.rooms = Room.all;

        /*Sets Active room and loads message for the room*/
        this.setActiveRoom = (room) => {
          this.activeRoom = room;
          this.messages = Message.getByRoomId(room.$id);
          console.log(this.messages);
        }
      }

    angular
        .module('blocChat')
        .controller('RoomCollectionCtrl',['$cookies','Room','Message', RoomCollectionCtrl] );
})();
