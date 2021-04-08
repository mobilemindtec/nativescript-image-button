import * from "./image-button-common"
import {* as imageModule}  from "@nativescript/core/ui/image"
import {* as application} from "@nativescript/core/application"

export * from "./image-button-common"


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

        if(android.R.attr.selectableItemBackgroundBorderless){
          var attrs = [android.R.attr.selectableItemBackgroundBorderless]
          var typedArray = application.android.context.obtainStyledAttributes(attrs)
          var backgroundResource = typedArray.getResourceId(0, 0);
          this.nativeView.setBackgroundResource(backgroundResource);
          this.nativeView.setClickable(true)
        }
      }
    };


    return ImageButton;

})(common.ImageButton);


exports.ImageButton = ImageButton
