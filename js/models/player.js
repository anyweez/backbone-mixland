// Constructor to create a player object
module.exports = Backbone.Model.extend({
    // If there's anything you want to do when an object
    // is created, do it here.
    initialize: function () {

    },
    // What should all of the values start out at?
    defaults: {
        volume: 50,
    },
    validate: function (attributes) {
        console.log(attributes);
        if (attributes.volume > 100) {
            return 'way too loud';
        }
        if (attributes.volume < 0) {
            return 'are you still listening?';
        }
    },
    up: function () {
        // change volume by 1
        //        this.volume = this.volume + 1;

        var newLevel = this.get('volume') + 1;
        this.set('volume', newLevel, {
            validate: true,
        });
        //this.set('volume', this.get('volume') + 1);
    },
    down: function () {
        // change volume by -1
        var newLevel = this.get('volume') - 1;
        this.set('volume', newLevel, {
            validate: true,
        });
    }
});