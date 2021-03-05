module.exports = {
    future: {
        webpack5: true,
    },
    webpack(config, options) {
        console.log(options.webpack.version);
        config.experiments = {...config.experiments, asyncWebAssembly: true};

        return config;
    }
}
