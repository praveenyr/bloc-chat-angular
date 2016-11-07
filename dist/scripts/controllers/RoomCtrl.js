(function() {
    function RoomCollectionCtrl(Room,Message)  {
        this.rooms = Room.all;
        //Get messages by Room Id;
        // this.messages = Message.getByRoomId(roomId);
        this.setActiveRoom = (room) => {
          this.activeRoom = room;
          this.messages = Message.getByRoomId(room.$id);

          console.log(this.messages);
        }
      }

    angular
        .module('blocChat')
        .controller('RoomCollectionCtrl',['Room','Message', RoomCollectionCtrl] );
})();
