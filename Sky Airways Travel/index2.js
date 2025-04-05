document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabBtns = document.querySelectorAll(".tab-btn");

  function showTab(tabId) {
    tabs.forEach(function (tab) {
      if (tab.id === tabId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const tabId = btn.getAttribute("data-tab");
      showTab(tabId);

      tabBtns.forEach(function (otherBtn) {
        if (otherBtn === btn) {
          otherBtn.classList.add("active");
        } else {
          otherBtn.classList.remove("active");
        }
      });
    });
  });

  // Show the initial tab (Tab 1)
  showTab("tab1");
});


const oneWayInput = document.querySelector(".one-way");
const roundTripInput = document.querySelector(".round-trip");
const multiCityInput = document.querySelector(".multi-city");
const newForm = document.querySelector(".new-form");
const returnIN = document.querySelector(".return-in");
const returnDateInput = document.querySelector(".return-date");
const dateInputReturn = document.querySelector(".date-input-return");
const burger = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");

function toggler(e) {
  navigation.classList.toggle("hide");
}

burger.addEventListener("click", toggler);

// oneWayInput.addEventListener('click', () => {
//   console.log('checked')
//   returnDateInput.style = 'visibility: hidden;'
//   newForm.classList.remove('hide')
// })

// roundTripInput.addEventListener('click', () => {
//   console.log('checked')
//   returnDateInput.style = 'visibility: visible;'
//   newForm.classList.toggle('hide')
// })

// multiCityInput.addEventListener('click', () => {
//   console.log('whdiwu')
//   newForm.classList.toggle('hide')
// })

oneWayInput.addEventListener("click", () => {
  dateInputReturn.classList.add("hide");
  newForm.classList.add("hide");
  returnIN.classList.add("hide");
});

roundTripInput.addEventListener("click", () => {
  // returnDateInput.style = 'visibility: visible;'
  dateInputReturn.classList.remove("hide");
  newForm.classList.add("hide");
  returnIN.classList.remove("hide");
});

multiCityInput.addEventListener("click", () => {
  newForm.classList.remove("hide");
  dateInputReturn.classList.remove("hide");
});

// Selecting elements from the DOM
const counterInput = document.getElementById("counterInput");
const optionsDiv = document.getElementById("options");
const adultCountDisplay = document.getElementById("adultCount");
const childCountDisplay = document.getElementById("childCount");
const infantCountDisplay = document.getElementById("infantCount");
const seniorCountDisplay = document.getElementById("seniorCount");
const doneButton = document.getElementById("doneButton");

// Initial counts
let adultCount = 0;
let childCount = 0;
let infantCount = 0;
let seniorCount = 0;

// Function to update count display
function updateCount(type, value) {
  switch (type) {
    case "adult":
      adultCount += value;
      adultCountDisplay.textContent = adultCount;
      break;
    case "child":
      childCount += value;
      childCountDisplay.textContent = childCount;
      break;
    case "infant":
      infantCount += value;
      infantCountDisplay.textContent = infantCount;
      break;
    case "senior":
      seniorCount += value;
      seniorCountDisplay.textContent = seniorCount;
      break;
    default:
      break;
  }
  // Update the input field with the total count
  updateInputValue();
}

// Function to update input field value with total count
function updateInputValue() {
  const totalCount = adultCount + childCount + infantCount + seniorCount;
  counterInput.value = `${totalCount} selected`;
}

// Event listener for counter input click
counterInput.addEventListener("click", () => {
  optionsDiv.classList.toggle("hidden");
});

// Event listener for adjusting counts
const adjustButtons = document.querySelectorAll(".adjust");
adjustButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const type = button.getAttribute("data-type");
    const action = button.textContent.trim();

    switch (type) {
      case "adult":
      case "child":
      case "infant":
      case "senior":
        updateCount(type, action === "-" ? -1 : 1);
        break;
      default:
        break;
    }
  });
});


// tabe js

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabbed-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

