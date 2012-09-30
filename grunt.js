/*global module:false*/

module.exports = function ( grunt ) {

    grunt.initConfig({
        lint: {
            tools: [ 'grunt.js', 'component.json' ]       
        },
        jsHint: {
            options: {},
            globals: {}
        }
    });
    
    grunt.registerTask( 'default', 'lint' );
};