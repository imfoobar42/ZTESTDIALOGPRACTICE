/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTESTDIALOGPRACTICE/ZTESTDIALOGPRACTICE/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});