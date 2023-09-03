function updateSaintPetersburgTime() {
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
}
updateSaintPetersburgTime();
setInterval(updateSaintPetersburgTime, 1000);

function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);
