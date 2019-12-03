// JavaScript Document

var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];

window.randomize = function() {
    var rotation = Math.floor((180)*.345);
    var fix_rotation = rotation;
	for(i in transform_styles) {
		$('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + rotation + 'deg)');
    //$('.circle .mask.left').css(transform_styles[i], 'rotate(' + rotation + 'deg)');
        $('.circle .fill.fix').css(transform_styles[i],
                                   'rotate(' + fix_rotation + 'deg)');
	}
}
setTimeout(window.randomize, 200);
//$('#radial-progress-va');

window.randomize2 = function() {
    var rotation = Math.floor((180)*.123);
    var fix_rotation = rotation;
	for(i in transform_styles) {
		$('.circle-vha .fill-vha, .circle-vha .mask-vha.full-vha').css(transform_styles[i], 'rotate(' + rotation + 'deg)');
    //$('.circle .mask.left').css(transform_styles[i], 'rotate(' + rotation + 'deg)');
        $('.circle-vha .fill-vha.fix-vha').css(transform_styles[i],
                                   'rotate(' + fix_rotation + 'deg)');
	}
}
setTimeout(window.randomize2, 200);
//$('#radial-progress-vha');