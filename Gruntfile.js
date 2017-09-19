module.exports = function (grunt) {
    require('load-grunt-config')(grunt);

    grunt.registerTask('default', ['tslint', 'webpack:default']);
    grunt.registerTask('test', ['clean:test', 'tslint', 'webpack:test', 'jasmine']);
};