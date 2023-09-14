function test() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = weight / height ** 2;
  if (bmi < 18) {
    document.getElementById("result").innerHTML = "Underweight";
  } else if (bmi < 25.0) {
    document.getElementById("result").innerHTML = "Normal";
  } else if (bmi < 30.0) {
    document.getElementById("result").innerHTML = "Overweight";
  } else {
    document.getElementById("result").innerHTML = "Obese";
  }
}
