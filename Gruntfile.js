'use strict';

module.exports = function ( grunt ) {

    grunt.initConfig({
        src: 'src',
        demo: 'demo',
        less: {
            production: {
                options: {
                    yuicompress: true
                },
                files: {
                    '<%= demo %>/css/demo.css': '<%= demo %>/less/demo.less'
                }
            }
        },
        watch: {
            less: {
                files: [
                    '<%= src %>/**/*.less',
                    '<%= demo %>/**/*.less'
                ],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
};
