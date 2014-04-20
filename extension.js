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

var utils = {
    replace : function(parents) {
        // TODO: prompt user
        for ( var i = 0; i < parents.length; i++ ) {
            if ( /style|script|input/i.test( parents[i].tagName ) ) { continue }

            var children = parents[i].childNodes;
            for ( var j = 0; j < children.length; j++ ) {
                /* TODO:
                 * Handle inputs appropriately
                 * compile regexes
                 * abstract this function
                 * title text
                 */

                if ( children[j].nodeType == 3 ) {
                    var child = children[j]; // TODO: IE compatibility
                    var text = child.textContent;
                    if ( ! /\S/.test(text) ) { continue }

                    // TODO: Preserve Case
                    text = text.replace(/witnesses/gi,     'these guys I know')
                               .replace(/allegedly/gi,     'kinda probably')
                               .replace(/Tellurium/gi,     'smelly')
                               .replace(/new study/gi,     'tumblr post')
                               .replace(/rebuild/gi,        'avenge')
                               .replace(/space/gi,            'spaaace')
                               .replace(/google glass/gi,  'virtual boy')
                               .replace(/smartphone/gi,    'pokédex')
                               .replace(/electric/gi,        'atomic')
                               .replace(/senator/gi,        'elf-lord')
                               .replace(/car/gi,            'cat')
                               .replace(/election/gi,        'eating contest')
                               .replace(/congressional leader/gi, 'river spirit')
                               .replace(/homeland security/gi, 'homestar runner')
                               .replace(/could not be reached for comment/gi, 'is guilty and everyone knows it');
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

    utils.replace(document.getElementsByTagName('*'));

    browser.init();


});
