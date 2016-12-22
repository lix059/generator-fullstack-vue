'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var path = require('path');
var moment=require('moment');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        server: 'server',
        dist: 'dist',
        project_dist: 'project_dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: LIVERELOAD_PORT
            },
            express: {
                files:  [ 'server/**/*.js' ],
                tasks:  [ "express:dev" ],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server/app.js',
                    port: SERVER_PORT,
                    debug: true
                }
            }
        },
        // open: {
        //     server: {
        //         path: 'http://localhost:'+SERVER_PORT+'/index.html'
        //     }
        // },
        clean: {
            dist: ['project_dist', 'archive'],
            server: '.tmp'
        },
        
    copy: {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= yeoman.dist %>',
                dest: '<%= yeoman.project_dist %>/<%= yeoman.dist %>',
                src: [
                    'static/js/*.js',
                    'static/img/*.*',
                    'static/fonts/{,*/}*.*',
                    'static/css/{,*/}*.css',
                    '*.*',
                ]
            },
            {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.server %>',
                dest: '<%= yeoman.project_dist %>/<%= yeoman.server%>',
                src: [
                    'api/{,*/}*.*',
                    'models/*.*',
                    'config/express.js',
                    'config/seed.js',
                    'config/environment/{production,index}.js',
                    'routes/{,*/}*.*',
                    '*.js'
                ]
            },{
                expand: true,
                dot: true,
                dest: '<%= yeoman.project_dist%>',
                src: [
                    'pm2.json'
                ]
            }]
        }
    },
    
   
    compress: {
        main: {
            options: {
                archive: function () {
                    var date=moment().format("YYYY-MM-DD");
                    return 'archive/' + date + '.zip'
                },
                mode: 'zip'
            },
            files: [
                {expand: true, src: ['project_dist/**']}
            ]
        }
    },
    upload_file: {
        "test": {
            src: ['archive/*.zip'],
            options: {
                url: 'http://uploadservice/upload',
                method: 'POST',
                qs: {
                    'gray':true,//true(default):for test server;false:for official servers;
                    'rollback':false,//true(default):backup for rollback;false:don't backup;
                    'autoPublish': true,//true(default):auto run scripts;false:manual run scripts;
                    'wholePackage': true,//false(default):only patch;true:full package(rm the old one);
                    'production': 'MyApp',//project name
                    'npmUpdated': false,//true:npm install --production;false(default):nothing;
                    "pm2Script":false//true:pm2 startOrRestart pm2.json;false(default):nothing;
                }
            }
        },
    },
    // Test settings
    mochaTest: {
        options: {
            reporter: 'spec',
            timeout: 5000 // set default mocha spec timeout
        },
        unit: {
            src: ['test/server/*.spec.js']
        }
    }
});

    
    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve' + (target ? ':' + target : '')]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:server']);
        }

        grunt.task.run([
            'clean:server',
            'express:dev',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'copy',
    ]);
    grunt.registerTask('test', [
        'mochaTest'
    ]);
    grunt.registerTask('upload', [
        'compress',
        'upload_file:test'
    ]);
};
