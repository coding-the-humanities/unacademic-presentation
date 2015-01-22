//note: the following code requires 
//  1. handlebars.js -- http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v2.0.0.js
//  2. jquery.js - http://code.jquery.com/jquery-1.11.2.min.js

//finally, compile template (and instantiates global "card_template" object)
var source   = $("#card-template-src").html();    // defined in index.html as script
var card_template = Handlebars.compile(source);   