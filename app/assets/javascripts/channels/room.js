App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function() {
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(data) {
      //  window.alert(data)
      //return this.perform('speak');
      return $('#messages').append('<p>'+data+'</p>');
  }
});

$(document).on('keypress', '[data-behavior~=room_speaker]',function (event) {
    if (event.keyCode===13) {
        console.log(event.target.value);
        App.room.speak(event.target.value);
        event.target.value='';
        return event.preventDefault();
    }
})
