class Helper {
  // this function takes the month and year in the calender header and returns
  // the month's start and end date
  getMonthStartAndEndDates = (calendarHeaderDate: HTMLElement | null) => {
    const unparsedDate: string[] =
      calendarHeaderDate?.dataset.date?.split(" ")!;
    const month = parseInt(unparsedDate[0]);
    const year = parseInt(unparsedDate[1]);

    // Create a new Date object for the start date and set it to the first day of the specified month and year
    const start_date_obj = new Date();
    start_date_obj.setFullYear(year, month, 1);

    // Create a new Date object for the end date and set it to the last day of the specified month and year
    const end_date_obj = new Date();
    end_date_obj.setFullYear(year, month + 1, 0);

    // Retrieve the days in YYYY-MM-DD format
    const start_date = start_date_obj.toISOString().split("T")[0];
    const end_date = end_date_obj.toISOString().split("T")[0];

    return { start_date, end_date };
  };

  getMonthStartAndEndByDate = (year: number, month: number) => {
    const start_date = new Date();
    start_date.setFullYear(year, month, 1);
    const end_date = new Date();
    end_date.setFullYear(year, month + 1, 0);

    return { start_date, end_date };
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
}

export { Helper };
