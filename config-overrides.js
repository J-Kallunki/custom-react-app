module.exports = function override(config, env) {
	// Example of adding antd to Babel-loader plugins
	var test = /\.(js|jsx)$/;
  var plugins = [
			['import', [{ libraryName: "antd", style: 'css' }]],
		];
  
  config.module.loaders.forEach(l => {
    if (String(l.test) == String(test))
    	l.query.plugins = plugins
  });

  return config;
}