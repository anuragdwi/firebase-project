// Set the date we're counting down to
var countDownDate = new Date("May 30, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = "0" + hours;
  document.getElementById("mins").innerHTML = minutes;
  //   document.getElementById("sec").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
function subscribe() {
  let email = document.getElementById("mail").value;
  if (email !== "") {
    data = {
      email: email,
    };

    fetch(
      "https://subscribe-form-e87e2-default-rtdb.firebaseio.com/data.json",
      {
        method: "post",
        body: JSON.stringify(data),
      }
    ).then(() => {
      let submit = document.getElementById("show");
      submit.style.opacity = "1";

      setTimeout(() => {
        submit.style.opacity = "0";
      }, 2000);
      document.getElementById("mail").value = "";
    });
  } else if (email == "") {
    let error = document.getElementById("error");
    error.style.opacity = "1";

    setTimeout(() => {
      error.style.opacity = "0";
    }, 2000);
  }
}
// function check() {
//   let email = document.getElementById("mail").value;
//   let allUsers = [];

//   fetch("https://subscribe-form-e87e2-default-rtdb.firebaseio.com/data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data); //Nested Object

//       for (let x in data) {
//         tempEmail = {
//           ...data[x],
//         };

//         allUsers.push(tempEmail);
//       }
//       //   console.log(allUsers); //Array of object
//       let testUser = allUsers.filter((x) => {
//         return x.email == email;
//       });
//       console.log(testUser);

//       if (testUser.length == 1) {
//         alert("Login successfull");
//       } else {
//         alert("No such user exist!!!");
//       }
//     });
// }
