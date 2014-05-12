module.exports = function (grunt) {
    var matchdep;


    matchdep = require("matchdep");

    matchdep.filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 8081,
                    base: "app"
                }
            }
        },

        notify: {
            sass: {
                options: {
                    title: "SASS",
                    message: "CSS has been compiled!"
                }
            },
            server: {
                options: {
                    title: "Connect",
                    message: "Server is running!"
                }
            }
        },

        sass: {
            dist: {
                files: {
                    "./app/_assets/css/style.css": "./app/_assets/css/style.scss"
                }
            }
        },

        watch: {
            dist: {
                files: ["./app/_assets/css/**/*.scss"],
                tasks: ["build_dev"]
            }
        }
    });

    grunt.registerTask("build_dev", ["sass", "notify:sass"]);

    grunt.registerTask("start", ["connect", "watch"]);
};