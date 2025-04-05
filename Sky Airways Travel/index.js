// Function to switch tabs and display corresponding content
function openTab(event, tabId) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set the first tab and its content to be active on page load
document.getElementById("tab1").style.display = "block";
document.querySelector(".tab-link:first-child").classList.add("active");

// Radio --------------------------------------->
// Function to switch radio buttons and display corresponding content
function switchRadio(event, formId) {
    var i, formContent, radioInputs;

    formContent = document.getElementsByClassName("form-content");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }

    radioInputs = document.getElementsByClassName("radio-input");
    for (i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            document.getElementById("form" + (i + 1)).style.display = "block";
            break;
        }
    }
}

// Set the first radio button and its form to be active on page load
document.getElementById("form1").style.display = "block";
document.querySelector(".radio-input:checked").parentNode.classList.add("active");

// Event listener for radio button changes
var radioInputs = document.getElementsByClassName("radio-input");
for (var i = 0; i < radioInputs.length; i++) {
    radioInputs[i].addEventListener("change", function(event) {
        switchRadio(event);
    });
}
