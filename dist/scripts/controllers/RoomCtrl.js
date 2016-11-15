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
          this.newMessage.roomId = this.activeRoom.$id;
          this.messages = Message.getByRoomId(this.roomId);
        };

          //Two way data binding when the user types in a message
        //  this.chatmessage = ' ';
        this.newMessage = {
          content:'',
          roomId: this.roomId,
          sentAt: "12:48 PM",
          username: this.userName
        };

          //Send a new chat message by invoking the Message Service.
          this.sendMessage = () => {
            console.log(this.newMessage);
            console.log("In sendMessage");
            Message.send(this.newMessage);
            this.newMessage.content = "";
        };

      }

    angular
        .module('blocChat')
        .controller('RoomCollectionCtrl',['$cookies','Room','Message', RoomCollectionCtrl] );
})();
