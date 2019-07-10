/* chatbot.js v1.0 | 2019.07.02 | UX/UI, HyunHyun Lee */

// check pc/mobile
$(document).ready(function() {
    var filter = "win16|win32|win64|mac|macintel";

    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        $('#wrap').addClass('mobile');
    } else {
        $('#wrap').addClass('pc');
    }
});