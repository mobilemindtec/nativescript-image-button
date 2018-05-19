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

      var self = this
      this.addEventListener("tap", function (eventData) {
                
        if(self.clickable){
          var attrs = [android.R.attr.selectableItemBackgroundBorderless]
          var typedArray = application.android.context.obtainStyledAttributes(attrs)
          var backgroundResource = typedArray.getResourceId(0, 0);
          self.nativeView.setBackgroundResource(backgroundResource);
          self.nativeView.setClickable(true)

        }

        if(self.waitAfterClick > 0){

          self.isUserInteractionEnabled = false
          setTimeout(function(){            
            self.isUserInteractionEnabled = true
          }, self.waitAfterClick)

        }

      }, this);

    }   

    return ImageButton;

})(common.ImageButton);


exports.ImageButton = ImageButton
