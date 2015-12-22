// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe),
// in a string to their corresponding HTML entities.

function convert(str) {
    //map of key:value pairs
    var html = {
       "&":"&amp;",
       "<":"&lt;",
       ">":"&gt;",
       "\"":"&quot;",
       "\'":"&apos;"
    };
        str = str.replace(/&|<|>|"|'/gi, function(matched){
        return html[matched];
        });

  return str;
}
convert("Dolce & Gabbana");
