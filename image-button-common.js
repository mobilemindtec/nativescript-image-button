	var imageModule = require("@nativescript/core/ui/image");
	var view = require("@nativescript/core/ui/core/view");

	var ImageButton = (function (_super) {
	    __extends(ImageButton, _super);
	    
	    function ImageButton() {    	
	      _super.apply(this, arguments);
	    }

	    ImageButton.prototype._onClickablePropertyChanged = function(newValue, oldValue){
	        
	    }

	    ImageButton.prototype._onWaitAfterClickPropertyChanged = function(newValue, oldValue){
	        
	    }

	    return ImageButton;
	})(imageModule.Image);

	exports.clickableProperty = new view.Property({ 
		name: "clickable", 
		defaultValue: true,
		valueConverter: function(value) { 
			if(typeof value == 'string')
				value = value == 'true'
			return value
		},	
		valueChanged: function(target, newValue, oldValue){
			target._onClickablePropertyChanged(newValue, oldValue)
		}
	});

	exports.clickableProperty.register(ImageButton);

	exports.waitAfterClickProperty = new view.Property({ 
		name: "waitAfterClick", 
		defaultValue: 1000,
		valueConverter: function(value) { 
			if(typeof value == 'string')
				value = parseInt(value)
			return value
		},
		valueChanged: function(target, newValue, oldValue){
			target._onWaitAfterClickPropertyChanged(newValue, oldValue)
		}	
	});

	exports.waitAfterClickProperty.register(ImageButton);

	exports.ImageButton = ImageButton;
