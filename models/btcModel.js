module.exports = function (sequelize,DataTypes) {
	return sequelize.define('btcModel',
	{
		high:DataTypes.DOUBLE,
		low:DataTypes.DOUBLE,
		last:DataTypes.DOUBLE,
		timestamp:DataTypes.DATE,
		volume:DataTypes.DOUBLE
	},{
		timestamps:false
	});
}
