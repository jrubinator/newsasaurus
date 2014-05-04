  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

/* TODO
* document.NodeIterator
* https://github.com/Posnet/xkcd-substitutions
*/

var browser = {
    init: function(b) {
        console.log(appAPI.browser.name);
    }
};

var replacer = {
    init: function() {
        this._compile_regexes_and_replace();
    },

    _compile_regexes_and_replace: function() {
        appAPI.db.async.get( 'newsasaurus', function( db_regexes ) {

            // TODO: make the rx_quoter optional (developers++)
            var rx_quoter = /([.?*+^$[\]\\(){}|-])/g;

            for ( var group in db_regexes ) {
                // Ignore prototypes
                if ( !db_regexes.hasOwnProperty( group ) ) { continue }
                var group_regexes = db_regexes[group];

                for ( var rx in group_regexes ) {
                    if ( !group_regexes.hasOwnProperty( rx ) ) { continue }

                    _rx = rx.replace( rx_quoter, "\\$1" );
                    // TODO: would compiling one giant regex be faster?
                    replacer.regexes.push(
                        [ new RegExp( _rx, "gi" ), group_regexes[rx] ]
                    );
                }
            }

            replacer.replace(document.getElementsByTagName('*'));

        } );
    },
    regexes: [],

    replace : function(parents) {
        // TODO: prompt user
        var regexes   = this.regexes;
        var rx_length = regexes.length;

        if ( !rx_length ) { return }

        for ( var i = 0; i < parents.length; i++ ) {
            if ( /style|script|input/i.test( parents[i].tagName ) ) { continue }

            var children = parents[i].childNodes;
            for ( var j = 0; j < children.length; j++ ) {
                /* TODO:
                 * Handle inputs appropriately
                 * abstract this function
                 * title text
                 */

                if ( children[j].nodeType == 3 ) {
                    var child = children[j]; // TODO: IE compatibility
                    var text = child.textContent;
                    if ( ! /\S/.test(text) ) { continue }

                    // TODO: Preserve Case
                    for ( var k = 0; k < rx_length; k++ ) {
                        text = text.replace( regexes[k][0], regexes[k][1] );
                    }
                    // child.text(text); Fix your bug jquery!
                    // TODO: work in IE
                    child.textContent = text;
                }
            }
        }
    }
};
//TODO:  put on github
appAPI.ready(function($) {
    // Place your code here (you can also define new functions above this scope)
    // The $ object is the extension's jQuery object

    browser.init();
    replacer.init();


});
