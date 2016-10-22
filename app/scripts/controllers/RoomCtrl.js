(function() {
    function RoomCollectionCtrl(Room)  {
        this.rooms = Room.all;
      }

    angular
        .module('blocChat')
        .controller('RoomCollectionCtrl',['Room', RoomCollectionCtrl] );
})();
