var weightInput = document.getElementById("Weight");
var heightInput = document.getElementById("Height");
var computeButton = document.querySelector(".left-btn");
var resultDisplay = document.querySelector(".Result");
var footinput = document.getElementById("foot");
var inchinput = document.getElementById("inch");
var submitbtn = document.getElementById("right-submit");
var rightresult = document.getElementById("right-result");
var chartbtn = document.getElementById("chart-btn");
var convertbtn = document.getElementById("convert-btn");


computeButton.addEventListener("click", function () {
    // Get the values from the input fields
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        var bmi = weight / (height * height);
        var classification = "";

        if (bmi < 16) {
            classification = "A BMI less than 16 indicates severe thinness, which is a critical health concern associated with malnutrition and weakness.";
        } else if (bmi >= 16 && bmi < 17) {
            classification = "A BMI between 16 and 17 falls into the category of moderate thinness, suggesting a need for improved nutrition and well-being.";
        } else if (bmi >= 17 && bmi < 18.5) {
            classification = "A BMI range of 17 to 18.5 is classified as mild thinness, indicating a lower-than-ideal body weight that may require attention.";
        } else if (bmi >= 18.5 && bmi < 25) {
            classification = "A BMI between 18.5 and 25 falls within the normal range, signifying a healthy weight for most individuals.";
        } else if (bmi >= 25 && bmi < 30) {
            classification = "Individuals with a BMI between 25 and 30 are considered overweight, which may be associated with increased health risks.";
        } else if (bmi >= 30 && bmi < 35) {
            classification = "A BMI between 30 and 35 is classified as obese class I, indicating a higher level of obesity that can lead to various health problems.";
        } else if (bmi >= 35 && bmi < 40) {
            classification = "An obese class II designation applies to individuals with a BMI between 35 and 40, signifying severe obesity and greater health risks.";
        } else {
            classification = "A BMI exceeding 40 is categorized as obese class III, representing extreme obesity and significant health concerns.";
        }

        // Display the result and classification
        resultDisplay.textContent = "Your BMI is: " + bmi.toFixed(2) + " " + classification;
    } else {
        resultDisplay.textContent = "Please enter valid weight and height.";
    }
});


submitbtn.addEventListener("click", function () {
    var foot = parseFloat(footinput.value);
    var inch = parseFloat(inchinput.value);
    var footvalue = (foot*0.3048);
    var inchvalue = (inch*0.0254);
    var finalresult = footvalue+inchvalue;

    rightresult.textContent = " Height in metere: " + finalresult;
})

chartbtn.addEventListener("click", function () {
    var tablecard = document.getElementById("table");
    if (table.style.display === "block"){
        table.style.display = "none";
    }
    else{
        table.style.display = "block";
    }
});

convertbtn.addEventListener("click", function () {
    var convertcard = document.getElementById("rightcard");
    if(rightcard.style.display === "block"){
        rightcard.style.display = "none";
    }
    else{
        rightcard.style.display = "block";
    }
});