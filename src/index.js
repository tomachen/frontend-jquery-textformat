'use strict';


let input = $(".message-field");
let output = $(".message-formatted");

input.on("input", function() {

let value = input.val();
function isFormattedText(value){
    return value.replace(/\s+/g, ' ').trim().toLowerCase();
}
output.text(isFormattedText(value));
});