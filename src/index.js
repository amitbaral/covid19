import "./styles.css";
import moment from "moment/src/moment";
import { numberwithcommas, getTotalCases, getAllCountries } from "./covidApi";
const dropdownSelector = document.getElementById("grid-state");

const iconsFontawesome = {
  cases: "fas fa-head-side-virus",
  deaths: "fas fa-skull-crossbones",
  recovered: "fas fa-head-side-mask",
  active: "fas fa-head-side-cough",
  affectedCountries: "fas fa-globe-europe",
  updated: "fas fa-clock",
  country: "fas fa-flag",
  todayCases: "fas fa-head-side-virus",
  todayDeaths: "fas fa-skull-crossbones",
  critical: "fas fa-hospital",
  casesPerOneMillion: "fas fa-ambulance",
  deathsPerOneMillion: "fas fa-skull-crossbones",
};

const iconColor = {
  cases: "red",
  deaths: "red",
  recovered: "green",
  active: "red",
  affectedCountries: "yellow",
  updated: "yellow",
  todayCases: "yellow",
};

//Initial fetch
const targetValue = `countries/world`;
getTotalCases(targetValue).then((data) => {
  displayCovidUI(data);
});

//Dropdown select
dropdownSelector.onchange = (e) => {
  const targetValue =
    e.target.value === "all"
      ? `countries/world`
      : `countries/${e.target.value}`;
  getTotalCases(targetValue).then((data) => {
    displayCovidUI(data);
  });
};

//Get Countries
getAllCountries().then((data) => {
  displayCountryList(data);
});

//Display widget
const displayCovidUI = (data) => {
  const element = document.getElementById("covid");
  const dataMap = Object.entries(data).map(([key, value]) => {
    if (key === "countryInfo") {
      return "";
    }

    return `<div class="w-full md:w-1/2 xl:w-1/3 p-3">
              <!--Metric Card-->
              <div class="light_grey border-b-4 border-gray-700 p-5">
                  <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                          <div class="red-icon rounded-md p-5 ">
                          <i class="${iconsFontawesome[key]} fa-2x fa-inverse ${
      iconColor[key]
    }"></i>
                          </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                          <h5 class="font-bold uppercase yellow text-white">${
                            key === "country" ? "" : key
                          }</h5>
                          <h3 class="font-bold text-3xl text-white">${
                            key === "updated"
                              ? (value = moment(value).format("ll"))
                              : numberwithcommas(value)
                          }</h3>
                      </div>
                  </div>
              </div>
              <!--/Metric Card-->
          </div>`;
  });
  element.innerHTML = dataMap.join("");
};

//Display country list
const displayCountryList = (data) => {
  // sort
  data.reverse();
  data.sort(function (a, b) {
    return b.critical - a.critical;
  });

  for (const val of data) {
    let option = document.createElement("option");
    option.value = val.country;
    option.text = val.country.charAt(0).toUpperCase() + val.country.slice(1);
    option.classList.add("bar");
    dropdownSelector.appendChild(option);
  }
};
