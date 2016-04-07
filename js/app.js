window.addEventListener('load', function () {
    var AudioPlayer = require('./models/player');
    var SummaryView = require('./views/summary');

    var ap = new AudioPlayer();
    ap.set('volume', 95);

    var summary = new SummaryView({
        model: ap,
        el: document.getElementById('data-here'),
    });

});