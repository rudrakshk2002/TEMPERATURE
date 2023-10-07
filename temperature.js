document.addEventListener('DOMContentLoaded', function() {
  // Get references to the input fields and buttons
  const celsiusInput = document.getElementById('cel');
  const fahrenheitInput = document.getElementById('fah');
  const kelvinInput = document.getElementById('kel');
  const convertButton = document.getElementById('CONVERT');
  const resetButton = document.getElementById('RESET');

  // Function to convert from Celsius to Fahrenheit and Kelvin
  function convertTemperature() {
    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(celsius)) {
       fahrenheit = (celsius * 9/5) + 32;
       kelvin = celsius + 273.15;

      fahrenheitInput.value = fahrenheit.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
    }
    else if(!isNaN(fahrenheit)) {
       celsius = (fahrenheit-32) *5/9;
       kelvin = (fahrenheit - 32) * (5/9) + 273.15


      celsiusInput.value = celsius.toFixed(2);
      kelvinInput.value = kelvin.toFixed(2);
    } 
    else if(!isNaN(kelvin)) {
       celsius = kelvin - 273.15
       fahrenheit = (kelvin - 273.15) * (9/5) + 32



      celsiusInput.value = celsius.toFixed(2);
      fahrenheitInput.value = fahrenheit.toFixed(2);
    } 
     else {
      // Handle invalid input
      alert('Please enter a valid temperature in Celsius.');
    }
  }

  // Function to reset the input fields
  function resetFields() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
  }

  // Add event listeners to the buttons
  convertButton.addEventListener('click', convertTemperature);
  resetButton.addEventListener('click', resetFields);
});
