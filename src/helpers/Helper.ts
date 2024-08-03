class Helper {
  // this function takes the month and year and returns the month's start and end date
  getMonthStartAndEndByDate = (year: number, month: number) => {
    // Create a new Date object for the start date and set it to the first day of the specified month and year
    const start_date = new Date();
    start_date.setFullYear(year, month, 1);

    // Create a new Date object for the end date and set it to the last day of the specified month and year
    const end_date = new Date();
    end_date.setFullYear(year, month + 1, 0);

    return {
      start_date: start_date.toISOString().split("T")[0],
      end_date: end_date.toISOString().split("T")[0],
    };
  };

  getPreviousMonthDates(
    startDate: Date,
    endDate: Date
  ): { prevStartDate: string; prevEndDate: string } {
    // Determine the previous month and year
    let prevMonth = startDate.getMonth() - 1;
    let prevYear = startDate.getFullYear();

    // Handle the case where the current month is January (month index 0)
    if (prevMonth < 0) {
      prevMonth = 11; // December (month index 11)
      prevYear -= 1; // Previous year
    }

    // Start date of the previous month
    const prevStartDate = new Date();
    prevStartDate.setFullYear(prevYear, prevMonth, 1);
    // End date of the previous month
    const prevEndDate = new Date(); // 0th day of the next month gives last day of current month
    prevEndDate.setFullYear(prevYear, prevMonth + 1, 0);

    return {
      prevStartDate: prevStartDate.toISOString().split("T")[0],
      prevEndDate: prevEndDate.toISOString().split("T")[0],
    };
  }

  getDaysBetweenDates = (startDate: Date, endDate: Date) => {
    // Calculate the difference in time (milliseconds)
    const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());

    // Convert time difference from milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
  };
}

export { Helper };
