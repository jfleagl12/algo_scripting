// Implement a way of converting two dates into a more friendly date range that could be presented to a user.
//
// It must not show any redundant information in the date range.
//
// For example, if the year and month are the same then only the day range should be displayed.
//
// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.
//
// Input date is formatted as YYYY-MM-DD

function friendly(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Converst a YYYY-MM-DD string into a date object.
  function convertDate(str) {
    // Split the dates to work independently.
    var dateStr = str.split('-');

    // Force the dates into Universal time to avoid issues due to timezones.
    return (new Date(Date.UTC(dateStr[0], dateStr[1] - 1, dateStr[2])));

  }

  // Handles the case of the day's endings.
  function dateEnding(val) {
    switch (val) {
      case 1:
      case 21:
      case 31:
        return val + 'st';
      case 2:
      case 22:
        return val + 'nd';
      case 3:
      case 23:
        return val + 'rd';
      default:
        return val + 'th';
    }
  }

  // Checks for the real difference in months to avoid errors
  function monthDiff(date1, date2) {
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    return month2 - month1;
  }

  // Get's the right month string.
  function getMonth(date) {
    return months[date.getUTCMonth()];
  }

  function displayDate() {

    // Handles same day
    if (date2.getTime() - date1.getTime() === 0) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }

    // Handles same month
    if (date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
    }

    // Handles more than a month of difference, but less than 12 months
    if (monthDiff(date1, date2) < 12) {
      return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate())];
    }

    // Handles cases with more than 12 months apaprt.
    return [getMonth(date1) + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), getMonth(date2) + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }

  var date1 = convertDate(str[0]);
  var date2 = convertDate(str[1]);

  return displayDate();

}
friendly(['2015-07-01', '2015-07-04']);
