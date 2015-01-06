define(function(require) {
	
	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');

	var ThemePageHeaderView = Backbone.View.extend({

		initialize: function() {
			this.setStyles();
			this.listenTo(Adapt, 'device:resize', this.setStyles);
			this.listenTo(Adapt, 'remove', this.remove);
		},

		setStyles: function() {
			this.setBackground();
			this.setMinHeight();
		},

		setBackground: function() {
			var backgroundImage = '';
			var backgrounds = this.model.get('_pageHeaderConfig')._backgroundImage;
			if (backgrounds) {

				if (Adapt.device.screenSize == 'large') {
					backgroundImage = backgrounds._desktop;
				} else {
					backgroundImage = backgrounds._mobile;
				}
			}

			this.$el.css({
				backgroundImage: 'url(' + backgroundImage + ')'
			});
		},

		setMinHeight: function() {
			var minHeight = 0;
			var minHeights = this.model.get('_pageHeaderConfig')._minimumHeaderHeights;
			if (minHeights) {

				if (Adapt.device.screenSize == 'large') {
					minHeight = minHeights._desktop;
				} else {
					minHeight = minHeights._mobile;
				}
			}

			this.$el.css({
				minHeight: minHeight + "px"
			});
		}

	});

	return ThemePageHeaderView;
	
});