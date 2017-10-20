var common = require("./image-button-common")
var imageModule = require("ui/image")
var application = require("application")

require("utils/module-merge").merge(common, exports)


var ImageButton = (function (_super) {
    __extends(ImageButton, _super);
    
    function ImageButton() {
      _super.apply(this, arguments);
    }

    ImageButton.prototype.initNativeView = function(){

      _super.prototype.initNativeView.call(this)

      this.setAnimation(this.clickable)



      var self = this
      this.addEventListener("tap", function (eventData) {
                
        if(self.waitAfterClick > 0){

          self.isUserInteractionEnabled = false
          setTimeout(function(){            
            self.isUserInteractionEnabled = true
          }, self.waitAfterClick)

        }

      }, this);

    }   

    ImageButton.prototype._onClickablePropertyChanged = function(newValue, oldValue){        
      this.setAnimation(newValue)
    }

    ImageButton.prototype.setAnimation = function(clickable) {
       if(clickable){
        var attrs = [android.R.attr.selectableItemBackgroundBorderless]
        var typedArray = application.android.context.obtainStyledAttributes(attrs)
        var backgroundResource = typedArray.getResourceId(0, 0);
        this.nativeView.setBackgroundResource(backgroundResource);
        this.nativeView.setClickable(true)
      }
    };


    return ImageButton;

})(common.ImageButton);


exports.ImageButton = ImageButton
