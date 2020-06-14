const config = {
	"difficulty": 0,
	"white-list": false,
	"spawn-protection": 16,
	"server-port": 19132,
	"view-distance": 8,
	"server-ip":"0.0.0.0"
}

const getConfigInt = async(string) => {
	return config[string];
}

module.exports = getConfigInt