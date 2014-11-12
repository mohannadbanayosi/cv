$(document).ready(function () {
    var opts = {
        lines: 12,
        angle: 0.15,
        lineWidth: 0.44,
        pointer: {
            length: 0.9,
            strokeWidth: 0.035,
            color: '#FFFFFF'
        },
        limitMax: 'false',
        percentColors: [
            [0.0, "#a9d70b"],
            [0.50, "#f9c802"],
            [1.0, "#ff0000"]
        ], // !!!!
        strokeColor: '#E0E0E0',
        generateGradient: true
    };
    var target = document.getElementById('canvas');
    var javaGauge = new Gauge(target).setOptions(opts);
    javaGauge.maxValue = 100;
    javaGauge.animationSpeed = 32;
    javaGauge.set(0);
    var target = document.getElementById('canvas9');
    var androidGauge = new Gauge(target).setOptions(opts);
    androidGauge.maxValue = 100;
    androidGauge.animationSpeed = 32;
    androidGauge.set(0);
    var target = document.getElementById('canvas4');
    var cGauge = new Gauge(target).setOptions(opts);
    cGauge.maxValue = 100;
    cGauge.animationSpeed = 32;
    cGauge.set(0);
    var target = document.getElementById('canvas5');
    var aspGauge = new Gauge(target).setOptions(opts);
    aspGauge.maxValue = 100;
    aspGauge.animationSpeed = 32;
    aspGauge.set(0);
    var target = document.getElementById('canvas3');
    var sqlGauge = new Gauge(target).setOptions(opts);
    sqlGauge.maxValue = 100;
    sqlGauge.animationSpeed = 32;
    sqlGauge.set(0);
    var target = document.getElementById('canvas7');
    var prologGauge = new Gauge(target).setOptions(opts);
    prologGauge.maxValue = 100;
    prologGauge.animationSpeed = 32;
    prologGauge.set(0);
    var target = document.getElementById('canvas8');
    var verilogGauge = new Gauge(target).setOptions(opts);
    verilogGauge.maxValue = 100;
    verilogGauge.animationSpeed = 32;
    verilogGauge.set(0);
    var target = document.getElementById('canvas11');
    var haskelGauge = new Gauge(target).setOptions(opts);
    haskelGauge.maxValue = 100;
    haskelGauge.animationSpeed = 32;
    haskelGauge.set(0);
    var target = document.getElementById('canvas10');
    var rorGauge = new Gauge(target).setOptions(opts);
    rorGauge.maxValue = 100;
    rorGauge.animationSpeed = 32;
    rorGauge.set(0);
    var target = document.getElementById('canvas19');
    var noSqlGauge = new Gauge(target).setOptions(opts);
    noSqlGauge.maxValue = 100;
    noSqlGauge.animationSpeed = 32;
    noSqlGauge.set(0);
    var target = document.getElementById('canvas6');
    var jsGauge = new Gauge(target).setOptions(opts);
    jsGauge.maxValue = 100;
    jsGauge.animationSpeed = 32;
    jsGauge.set(0);
    var target = document.getElementById('canvas12');
    var htmlGauge = new Gauge(target).setOptions(opts);
    htmlGauge.maxValue = 100;
    htmlGauge.animationSpeed = 32;
    htmlGauge.set(0);
    var target = document.getElementById('canvas17');
    var cssGauge = new Gauge(target).setOptions(opts);
    cssGauge.maxValue = 100;
    cssGauge.animationSpeed = 32;
    cssGauge.set(0);
    var target = document.getElementById('canvas13');
    var gitGauge = new Gauge(target).setOptions(opts);
    gitGauge.maxValue = 100;
    gitGauge.animationSpeed = 32;
    gitGauge.set(0);
    var target = document.getElementById('canvas14');
    var scrumGauge = new Gauge(target).setOptions(opts);
    scrumGauge.maxValue = 100;
    scrumGauge.animationSpeed = 32;
    scrumGauge.set(0);
    var target = document.getElementById('canvas15');
    var arabicGauge = new Gauge(target).setOptions(opts);
    arabicGauge.maxValue = 100;
    arabicGauge.animationSpeed = 32;
    arabicGauge.set(0);
    var target = document.getElementById('canvas16');
    var englishGauge = new Gauge(target).setOptions(opts);
    englishGauge.maxValue = 100;
    englishGauge.animationSpeed = 32;
    englishGauge.set(0);
    var target = document.getElementById('canvas18');
    var germanGauge = new Gauge(target).setOptions(opts);
    germanGauge.maxValue = 100;
    germanGauge.animationSpeed = 32;
    germanGauge.set(0);
    var target = document.getElementById('canvas20');
    var playGauge = new Gauge(target).setOptions(opts);
    playGauge.maxValue = 100;
    playGauge.animationSpeed = 32;
    playGauge.set(100);
    $('#G').slider().on('slide', function (ev) {
        playGauge.set(ev.value);
    });
    var target = $(".mypara").offset().top;
    var interval = setInterval(function () {
        if ($(window).scrollTop() >= target) {
            germanGauge.set(20);
            englishGauge.set(90);
            arabicGauge.set(100);
            scrumGauge.set(55);
            gitGauge.set(70);
            cssGauge.set(55);
            htmlGauge.set(55);
            jsGauge.set(55);
            noSqlGauge.set(65);
            rorGauge.set(60);
            haskelGauge.set(35);
            verilogGauge.set(70);
            prologGauge.set(40);
            sqlGauge.set(60);
            aspGauge.set(40);
            cGauge.set(25);
            javaGauge.set(75);
            androidGauge.set(35);
            clearInterval(interval);
        }
    }, 250);
    var lis = $('.nav > li');
			menu_focus( lis[0], 1 );
			
			$(".fancybox").fancybox({
				padding: 10,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
             $.timeliner({
                timelineContainer: '#timelineContainer_2',
                startState: 'open'
            });
     jQuery.extend({
    skype : function(failureFunction) {
        var $ = jQuery;

        if ($.browser.safari || $.browser.opera) {
            return true;
        } else if ($.browser.msie) {
            try {
                if (new ActiveXObject("Skype.Detection")) return true;
            } catch(e) { }
        } else {
            if (typeof(navigator.mimeTypes["application/x-skype"]) == "object") {
                return true;
            }
        }
        $('a[href^="skype:"]').click(function() {
            failureFunction();
            return false;
        });
        return false;
    }
    });
});