// Example for weather API (OpenWeatherMap)
document.addEventListener("DOMContentLoaded", () => {
    const weatherDiv = document.getElementById("weather");
  
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric")
      .then((response) => response.json())
      .then((data) => {
        weatherDiv.innerHTML = `
          <p>Location: ${data.name}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Condition: ${data.weather[0].description}</p>
        `;
      })
      .catch((error) => {
        weatherDiv.innerHTML = "<p>Unable to fetch weather data.</p>";
        console.error(error);
      });
  });
  
  // Market Trends Example Data
  const marketData = [
    { crop: "Wheat", price: "₹2,000", market: "Delhi" },
    { crop: "Rice", price: "₹3,200", market: "Punjab" },
  ];
  
  const marketTable = document.getElementById("market-data");
  
  marketData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.crop}</td>
      <td>${item.price}</td>
      <td>${item.market}</td>
    `;
    marketTable.appendChild(row);
  });
  