(function() {
    function RoomCollectionCtrl($cookies,Room,Message)  {
       console.log("In controller");

        this.userName = $cookies.get('blocChatCurrentUser');
        this.rooms = Room.all;
        this.roomId = null;

        /*Sets Active room and loads message for the room*/
        this.setActiveRoom = (room) => {
          this.roomId = room.$id;
          this.activeRoom = room;
          this.messages = Message.getByRoomId(this.roomId);
        };

          //Two way data binding when the user types in a message
          this.chatmessage = ' ';

          //Send a new chat message by invoking the Message Service.
          this.sendMessage = () => {
            this.newMessage = {
              content:this.chatmessage,
              roomId: this.roomId,
              sentAt: "12:48 PM",
              username: this.userName
            };
            console.log("In sendMessage");
            Message.send(this.newMessage);
        };

      }

    angular
        .module('blocChat')
        .controller('RoomCollectionCtrl',['$cookies','Room','Message', RoomCollectionCtrl] );
})();
