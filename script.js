

document.addEventListener('DOMContentLoaded', () => {

    const hiegtInput = document.querySelector('.height');
    const weightInput = document.querySelector('.weight');
    const calculateBtn = document.querySelector('.calculatebtn');
    const resultValue = document.querySelector('.result-value');
    const resultCatagory = document.querySelector('.result-catagory');


    function calculateBMI() {
        const heigt = parseFloat(hiegtInput.value) / 100;
        const weigt = parseFloat(weightInput.value);

        if (isNaN(heigt) || isNaN((weigt))) {
            resultValue.textContent = "--";
            resultCatagory.textContent = " Please Enter valid value ";
            resultCatagory.style.color = 'red';
           return ;
        }

        const bmi = (weigt / (heigt * heigt)).toFixed(1);
        resultValue.textContent = bmi;
        let catagories, color;
        console.log(bmi);

        if (bmi < 18) {
            catagories = "Underweight";
            color = 'blue';
        }
        else if (bmi > 18 && bmi < 24.9) {
            catagories = "Normal";
            color = 'green';
        }
        else if (bmi > 25 && bmi < 29.9) {
            catagories = "Overweight";
            color = "orange";
        }
        else {
            catagories = "Obase";
            color = 'red';
        }

        resultCatagory.textContent = catagories;
        resultCatagory.style.color = color;
        resultValue.style.value = color;
        resultValue.style.fontSize = "20";
        hiegtInput.value = "";
        weightInput.value = "";
    

    }
  
    calculateBtn.addEventListener('click', calculateBMI);
    // calculateBMI();

})
