/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/scopes_background
*************************************************************************************/
$ = undefined;

var button_handler,
    message_handler,
    version_handler;

button_handler = {
    init: function() {

    }
};

message_handler = {
    init: function() {

    }
};

/* version_handler
 *
 * function init()
 * - updates extension as necessary to handle upgrades
 *
 * defaults
 * - the default XKCD mapping (grâce à http://www.xkcd.com/1288/)
 *
 * version
 * - the developer-maintained app version number
 */
version_handler = {
    init: function() {
        var old_version = appAPI.db.get('version');
        if ( old_version === null ) { old_version = 0 }

        if ( old_version < this.version ) {
            this._update_version( old_version );
        }
    },

    defaults : {
        'witnesses':            'these guys I know',
        'allegedly':            'kinda probably',
        'new study':            'tumblr post',
        'rebuild':              'avenge',
        'space':                'spaaace',
        'google glass':         'virtual boy',
        'smartphone':           'pokédex',
        'electric':             'atomic',
        'senator':              'elf-lord',
        'car':                  'cat',
        'election':             'eating contest',
        'congressional leader': 'river spirit',
        'homeland security':    'homestar runner',
        'could not be reached for comment': 'is guilty and everyone knows it'
    },

    _update_version: function( old_version ) {
        // new installation, yay new users!
        if ( old_version == 0 ) {
            appAPI.db.async.set( 'newsasaurus', {
                'defaults': this.defaults
            } );
        }
    },

    version: 1,
};

appAPI.ready(function($jQuery) {
    $ = $jQuery;
    button_handler.init();
    version_handler.init();
  // Place your code here (ideal for handling browser button, global timers, etc.,

});
