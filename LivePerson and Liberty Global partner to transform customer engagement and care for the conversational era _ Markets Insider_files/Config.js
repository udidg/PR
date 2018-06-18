/**
 * ConfigurationManager module.
 * @module MDSnG/ConfigurationManager
 */
var MDSnG;
(function (MDSnG) {
	var ClientConfiguration;
	(function (ClientConfiguration) {
		var Configuration = (function () {
			function Configuration() {
				/**
                 * @desc Reprsent the configuration object
                 */
				this.configurationObjet = {
					PageSettings: {
						domain: location.hostname,
						debuggerAlerts: false,
						byPass:"WorldDomination",
						simulate: false,
						remoteAlerts: false,
						fadeTime: 600,
						flashTime: 500,
						librairiesPath: "/Content/Scripts/MDSnG/libs/",
						locale: "en-US",
						flashColor: "#F7F6C2",
						animationType: "background",
						Constants: {
							Jquery: "$",
							ProtoBuffer: "dcodeIO",
							SocketIo: "io"
						},
						//roomSettings: this.generateDefaultRoomSettings(),
						onServerError: function () { }
					},
					AnimationSettings: {
						positiveChangeColor: "#65bc00",
						negativeChangeColor: "#FF0000",
						animationType: "background",
						posChangeIndicator: "up",
						negChangeIndicator: "down",
						indicatorDivClass: "icon-set",
						pushValueSpanClass: "push-data",
						defaultColor: "#000",
						defaultBackground: "white",
						maxRows: 8,
						flashColor: "#F7F6C2",
						useFIFOByAddPointOnChart: false
					},
					ConnectionOptions: {
						serverUri: "mdsngpush.finanzen.net", //mdsng-api01.cloud1.finanzennet.de
						stream: "protocolbuffers"
					},
					//see Fomatter.ts for more information
					FormatterSettings: {
						NumberFormatter: {
							localeMatcher: "en-US",
							options: {
								precision: 2,
								style: "decimal",
								minimumFractionDigits: 2, // set this to 4 to get 4 fraction digits
								maximumFractionDigits: 4, // set this to 2 to force the ouput to 2 fraction digits
								useGrouping: true
							}
						},
						PercentFormatter: {
							localeMatcher: "en-US",
							options: {
								precision: 2,
								style: "percent",
								minimumFractionDigits: 2, // set this to 4 to get 4 fraction digits
								maximumFractionDigits: 4, // set this to 2 to force the ouput to 2 fraction digits
								useGrouping: false
							}
						},
						DateTimeFormatter: {
							localeMatcher: "en-US",
							options: {
								dateFormat: "dd.MM.yyyy",
								utcToApplicationOffset: -4,
								useTwelveHourFormat: true,
								displayDate: false
							}
						}
					},
					HighStockDetailsChartSettings: {
						colors: ['#B4BE3A', '#000099'],
						chart: {
							marginRight: 10,
							marginLeft: 50,
							marginBottom: 50,
							width: null
						},
						credits: {
							enabled: false
						},
						navigator: {
							enabled: false
						},
						scrollbar: {
							enabled: false
						},
						rangeSelector: {
							enabled: false
						},
						tooltip: {
							pointFormat: '{point.y}<br/>',
							valueDecimals: 4,
							borderWidth: 1,
							borderColor: 'grey',
							backgroundColor: 'white',
							shadow: false,
							crosshairs: [true, true]
						},
						legend: {
							enabled: true,
							align: 'left',
							layout: 'horizontal',
							verticalAlign: 'bottom',
							y: 10,
						},
						xAxis: {
							gridLineWidth: 1,
							dateTimeLabelFormats: {
								day: '%d.%m'
							}
						},
						yAxis: {
							gridLineWidth: 1,
							startOnTick: true,
							endOnTick: true,
							opposite: false,
							offset: -5,
						},
						plotOptions: {
							line: {
								marker: {
									symbol: 'circle'
								}
							}
						}
					}
				};
			}
			/**
             *@method  return the configuration object
             * @returns {}
             */
			Configuration.prototype.getConfiguration = function () {
				return this.configurationObjet;
			};
			return Configuration;
		}());
		ClientConfiguration.Configuration = Configuration;
	})(ClientConfiguration = MDSnG.ClientConfiguration || (MDSnG.ClientConfiguration = {}));
})(MDSnG || (MDSnG = {}));
//# sourceMappingURL=Config.js.map