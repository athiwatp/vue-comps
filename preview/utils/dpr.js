export default (function(window){
	var isAndroid = window.navigator.appVersion.match(/android/gi);
    var isIPhone = window.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = window.devicePixelRatio;
    
	if (devicePixelRatio) {
		document.getElementsByTagName('html')[0].className = 'pixel-ratio-' + devicePixelRatio;
	}
})(window);