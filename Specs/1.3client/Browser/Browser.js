/*
---
name: Browser Specs
description: n/a
requires: [Core/Browser]
provides: [1.3client.Browser.Specs]
...
*/

describe('Browser', {

	'should think it is executed in a browser': function(){
		var isPhantomJS = !!navigator.userAgent.match(/phantomjs/i);
		expect(isPhantomJS || Browser.ie || Browser.safari || Browser.chrome || Browser.firefox || Browser.opera).toEqual(true);
	},

	'should assume the IE version is emulated by the documentMode (X-UA-Compatible)': function(){
		if (Browser.ie && document.documentMode) expect(Browser.version).toEqual(document.documentMode);
	}

});
