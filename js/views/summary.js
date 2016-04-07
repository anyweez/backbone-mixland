module.exports = Backbone.View.extend({
    // What to do at initial construction.
    initialize: function () {
        this.model.on('change', this.render, this);
    },
    events: {
        // Is there a better / more intuitive syntax?
        // event definition: callback function to run
        'click #vol-up': 'pumpItUp',
        'click #vol-down': 'dropItDown',
    },
    render: function () {
        console.log('something changed! update!');
        document.getElementById('vol').textContent = this.model.get('volume');
    },
    pumpItUp: function () {
        this.model.up();
    },
    dropItDown: function () {
        this.model.down();
    },
});