// Check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
  // we are checking to see if string "Bastian" ends with the target "n".
  if (str.substr(-target.length) === target)
    return true;
  else
    return false;
}

end("Bastian", "n");
