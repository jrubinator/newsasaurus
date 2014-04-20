/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/scopes_background
*************************************************************************************/
$ = undefined;

var button_handler,
    message_handler;

button_handler = {
	init: function() {
		
	}
};

message_handler = {
	init: function() {
		
	}
};

appAPI.ready(function($jQuery) {
  $ = $jQuery;
  button_handler.init();
  // Place your code here (ideal for handling browser button, global timers, etc.)

});
