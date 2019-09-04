/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/meu-random-dog/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});