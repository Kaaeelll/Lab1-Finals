const showButton = document.getElementById("showInfo");
const output = document.getElementById("output");
const formSections = document.getElementsByClassName("form");

showButton.addEventListener("click", function () {
  const fullName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phonenumber").value;
  const nationality = document.getElementById("nationality").value;
  const school = document.getElementById("school").value;
  const course = document.getElementById("course").value;
  const favoriteColor = document.getElementById("favoriteColor").value;
  const hobby = document.getElementById("hobby").value;
  const address = document.getElementById("address").value;

  const selectedGender = document.querySelector('input[name="gender"]:checked');

  const gender = selectedGender ? selectedGender.value : "Not selected";

  output.innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Year and Course:</strong> ${course}</p>
        <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
        <p><strong>Favorite Hobby:</strong> ${hobby}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
});
