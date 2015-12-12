(function ($) {
    $.fn.characterCounter = function (options) {

        //variable declarion
        var maxLen = options.maxLen;
        var warningLen = options.warningLen;
        var showMsg = options.showMsg;
        var customMsg = options.customMsg;
        var seprator = options.seprator;
        var warningColor = options.warningColor;

        //set max Length to input box
        $(this).attr('maxlength', maxLen);
        
        
        //if seprator is not defined then use below one             
        if(!seprator) 
                {
                    seprator = "|";
                }

        //checking properties of object
        if (!options.hasOwnProperty('maxLen')) {
            console.error("Defining maxLen is mandatory. Example: maxLen: 320");
            $('#counter').text("Oops, Something is missing. Get hint from console!");
        } else {
            $('#counter').html(maxLen + seprator + maxLen);
        }

        if (!options.hasOwnProperty('warningLen')) {
            console.error("Defining warningLen is mandatory.This will give color coded hint to your user. Example: minLen: 60");
            $('#counter').text("Err! Something gone wrong. Please check your console.");
        }

        if (!options.hasOwnProperty('warningColor')) {
            console.error("Boy, Color is missing! Example: hexcode/rgba/name anything, you just name it!");
            $('#counter').text("Color is missing. See console for details.");
        }
        
        if (!options.hasOwnProperty('showMsg')) {
            console.error("It's very simple, just set showMsg property TRUE or FALSE. Example: False");
            $('#counter').text("Showing alert can be good idea to give extra information to user. See console brah!");
        }
        
        //procceed only if object has all properties 
        var propertyArray = ["maxLen", "warningLen", "showMsg", "warningColor"];
        if (propertyArray.every(function (x) {
                return x in options;
            })) {
            $(this).keyup(function () {
                var text_length = $(this).val().length;
                var text_remaining = maxLen - text_length;

                
                $('#counter').html("<span id='ccInvalid'>" + text_remaining + "</span>" + seprator + maxLen);
                var msg = "Oops, you are not allowed to enter more...";
                if (text_remaining <= warningLen) {
                    $("#ccInvalid").css('color', warningColor);
                }
                if ((showMsg) && (text_remaining < 1)) {
                    if (options.hasOwnProperty('customMsg')) {
                        alert(customMsg);
                    } else {
                        alert(msg);
                    }
                }

            });
        }
        
    }

})(jQuery);