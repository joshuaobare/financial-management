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
}

export { Helper };
