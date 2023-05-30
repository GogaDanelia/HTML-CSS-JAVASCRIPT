function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 864000000);
  }
  document.write(days_passed(new Date(2020, 1, 15)));
  document.write(days_passed(new Date(2020, 11, 14)));
  