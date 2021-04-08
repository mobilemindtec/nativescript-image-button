var common = require("./image-button-common")
var imageModule = require("@nativescript/core/ui/image")
var application = require("@nativescript/core/application")


Object.assign(module.exports, require("./image-button-common"))

var MyAnimationDelegate = (function(_super){

  __extends(MyAnimationDelegate, _super);
  
  function MyAnimationDelegate() {
      _super.apply(this, arguments);
  }

  MyAnimationDelegate.prototype.animationDidStart = function(animation){
  }

  MyAnimationDelegate.prototype.animationDidStopFinished = function(animation, flag){
  }

  MyAnimationDelegate.ObjCProtocols = [CAAnimationDelegate];

  return MyAnimationDelegate

}(NSObject))

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
          
          var delegate = new MyAnimationDelegate()
          var animation = CATransition.animation()
          animation.delegate = delegate
          animation.duration = 2.0
          animation.timingFunction = CAMediaTimingFunction.functionWithName(kCAMediaTimingFunctionEaseInEaseOut)
          animation.type = "rippleEffect"
          self.nativeView.layer.addAnimationForKey(animation, null );        
        }

        if(self.waitAfterClick > 0){

          self.isUserInteractionEnabled = false
          setTimeout(function(){            
            self.isUserInteractionEnabled = true
          }, self.waitAfterClick)

        }

      },this);

    }   

    return ImageButton;

})(common.ImageButton);


exports.ImageButton = ImageButton
