function updateTime() {
  let saintPetersburgElement = document.querySelector("#saint-petersburg");
  let saintPetersburgDateElement =
    saintPetersburgElement.querySelector(".date");
  let saintPetersburgTimeElement =
    saintPetersburgElement.querySelector(".time");
  let saintPetersburgTime = moment().tz("Europe/Moscow");
  saintPetersburgDateElement.innerHTML =
    saintPetersburgTime.format("MMMM Do YYYY");
  saintPetersburgTimeElement.innerHTML = saintPetersburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");
  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#showing-selected-city");
  citiesElement.innerHTML = `<div class="city">
    <div>
    <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
   </div> <a href="/">👈🏻Back to homepage</a>`;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
