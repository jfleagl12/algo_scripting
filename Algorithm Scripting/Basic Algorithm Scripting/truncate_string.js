function truncate(str, num) {
  if (str.length <= num)
    return str;

  if (num <= 3)
    return str.substr(0,num) + "...";

  return str.substr(0,num-3) + "...";
}
truncate("A-tisket a-tasket A green and yellow basket", 11);
