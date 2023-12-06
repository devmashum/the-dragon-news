function getCurrentDate() {
    // Create a new Date object
    const currentDate = new Date();
  
    // Get the day, month, date, and year
    const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Return the information as a string
    return `${day},\n ${month}\n ${date},\n ${year}`;
  }
  
  // Call the function and store the result
  const currentDateInfo = getCurrentDate();
  
export default getCurrentDate;
  