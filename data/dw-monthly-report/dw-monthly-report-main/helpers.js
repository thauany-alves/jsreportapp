function dateNow() {
    return new Date().getDate();
}

function getMonthName(breach_month) {
  let monthName = breach_month === 1
    ? "January"
    : breach_month === 2
    ? "February"
    : breach_month === 3
    ? "March"
    : breach_month === 4
    ? "April"
    : breach_month === 5
    ? "May"
    : breach_month === 6
    ? "June"
    : breach_month === 7
    ? "July"
    : breach_month === 8
    ? "August"
    : breach_month === 9
    ? "September"
    : breach_month === 10
    ? "October"
    : breach_month === 11
    ? "November"
    : "December";

    return monthName;
}