const calBtn = document.getElementById('calculateBtn');
var displayer = document.querySelector('.display');
calBtn.addEventListener('click', calculateBmi)

function calculateBmi(e) {
    const height =  (document.getElementById('height')).value;
    const weight = (document.getElementById('weight')).value;



    // console.log('Test inside function...');
    let bmi;// = displayer.textContent;


    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        displayer.textContent = "Please provide a valid height";
        e.preventDefault();

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        displayer.textContent = "Please provide a valid weight";
        e.preventDefault();
    } else {
        //calculate BMI
        bmi =  Math.floor((weight * 703) / (height * height)).toFixed(2);
        //display the results
        console.log(bmi)
        if (bmi < 18.5) {
            displayer.textContent = 'Sir, your BMI is '+ bmi +'. Good news Sir/Madam, You are UNDERWEIGHT'
        } else if (bmi < 24.9) {
            displayer.textContent = 'Good Job Sir/Madam. Your BMI is ' +bmi +'. CONGRATS, Your weight is NORMAL';
        } else if (bmi < 30) {
            displayer.textContent = 'Sir/Madam.\n Your BMI is '+bmi + '.\n Unfortunately, You are OVERWEIGHT.'
                } else {
            displayer.textContent = 'Health Alert. Sadly Your BMI is '+ bmi+ '. Sir/Madam Unfortunately are OBESE';
        }
        e.preventDefault();


    }
}