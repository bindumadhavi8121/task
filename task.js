
function changeBackground() {
  const color = document.getElementById("colorPicker").value;

  document.body.style.backgroundColor = color;
}


function checkNumber() {

  const number = document.getElementById("luckyNumber").value;
  const num = parseInt(number);
  if (isNaN(num)) {

    document.getElementById("result").innerText = "Please enter a valid number.";
    return;

   }
   if (num % 2 === 0) {

     document.getElementById("result").innerText = num + " is Even";

     } else {
        document.getElementById("result").innerText = num + " is Odd";
      }
    }

    
function count() {
  const bre = document.getElementById("Comment-box").value.length;
  document.getElementById("count").innerHTML = bre;
  
}

function task() {
  event.preventDefault();
  let fname  = document.getElementById("fname").value;
  let lname =  document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let luckyNumber = document.getElementById("luckyNumber").value;
  let hobbies = document.getElementById("hobbies").value;
  let Comment = document.getElementById("Comment-box").value;
  console.log(fname, lname, email, pass, luckyNumber, hobbies, Comment);

  
}



      

      

      

 

    