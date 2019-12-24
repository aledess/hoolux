$("#contactForm").on("submit", function(event) {
  // if (event.isDefaultPrevented()) {
  //     // handle the invalid form...
  //     formError();
  //     submitMSG(false, "Did you fill in the form properly?");
  // } else {
  //     // everything looks good!
  event.preventDefault();
  submitForm();
});

function submitForm() {
  // Initiate Variables With Form Content
  var email = $("#email").val();
  var object = $("#object").val();
  var message = $("#message").val();

  $.ajax({
    type: "POST",
    url: "php/process.php",
    data: "&email=" + email + "&object=" + object + "&message=" + message,
    success: function(text) {
      if (text == "success") {
        document.getElementById("contactForm").reset();
        document.querySelector(".message--success").style.opacity = "1";
        setInterval(() => {
            document.querySelector(".message--success").style.opacity = "0";

        }, 3000);
      } else {
        document.querySelector(".message--error").style.opacity = "1";
        setInterval(() => {
          document.querySelector(".message--error").style.opacity = "0";
        }, 3000);
      }
    }
  });
}

// function formSuccess() {}

// function formError() {}
