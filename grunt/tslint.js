module.exports = {
    default: {
        options: {
            // can be a configuration object or a filepath to tslint.json
            configuration: "tslint.json",
            // If set to true, tslint errors will be reported, but not fail the task
            // If set to false, tslint errors will be reported, and the task will fail
            force: false,
            fix: false
        },
        files: {
            src: [
                "src/ts/**/*.ts",
                "test/ts/**/*.ts"
            ]
        }
    }
};