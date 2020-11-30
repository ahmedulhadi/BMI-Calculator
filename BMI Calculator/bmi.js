const calBtn = document.getElementById('calculateBtn');
var displayer = document.querySelector('.display');

calBtn.addEventListener('click', calculateBmi)

function calculateBmi(e) {
    let height_In_Feet = 12 * ((document.getElementById('height1'))).value;
    let height_In_Inches = (document.getElementById('height2')).value;
    height = parseFloat(height_In_Feet) + parseFloat(height_In_Inches);

    console.log(height)
    // const height =  (document.getElementById('height1')).value;
    const weight = (document.getElementById('weight')).value;



    // console.log('Test inside function...');
    let bmi;// = displayer.textContent;


    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        let className = '';
            document.getElementById('normal_alert').className = 'alert alert-danger'
        displayer.textContent = "Please provide a valid height";
        e.preventDefault();

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        let className = '';
            document.getElementById('normal_alert').className = 'alert alert-danger'
displayer.textContent = "Please provide a valid weight";
        e.preventDefault();

    } else {
        //calculate BMI
        bmi = ((weight * 703) / (height * height)).toFixed(2);
        //display the results
        console.log(bmi)

        // calculate weights to gain to get to NORMAL
        let WeightReqToGain;
        WeightReqToGain = Math.ceil(((18.5 * height * height) / 703)) - weight
        console.log(WeightReqToGain)

        // calculate weights to lose to get to NORMAL
        let weightReqToLoose;
        weightReqToLoose = Math.floor(weight - ((25 * height * height) / 703));
        console.log(weightReqToLoose)


        if (bmi < 18.5) {
            let className = '';
            document.getElementById('normal_alert').className = 'alert alert-warning'
            displayer.textContent = 'You are UNDERWEIGHT. You may need to gain weight. Your BMI is ' + bmi + ', and you need to gain ' + WeightReqToGain + ' Pounds to get to NORMAL. Ask Your Doctor if this is a healthy weight for you.';

        } else if (bmi < 24.9) {
            let className = '';
            document.getElementById('normal_alert').className = 'alert alert-success'

            displayer.textContent = 'You are NORMAL. You have a healthy weight. Your BMI is ' + bmi + '. Try not to gain or lose weight. Eat healthy and be physically active.';

        } else if (bmi < 30) {
            let className = '';
            document.getElementById('normal_alert').className = 'alert alert-primary'

            displayer.textContent = 'You are OVERWEIGHT. Your BMI is ' + bmi + '. You may need to lose ' + weightReqToLoose + ' Pounds. Talk to your doctor or dietitiian about your health risks.'

        } else if (bmi < 34.9) {
            let className = '';
            document.getElementById('normal_alert').className = 'alert alert-danger'

            displayer.textContent = 'You are OBESE. Your BMI is ' + bmi + '. So You will need to lose ' + weightReqToLoose + ' Pounds. Talk to your doctor or dietitian about safe and effective ways to lose weight and keep it off.';
        } else {
            let className = '';
            document.getElementById('normal_alert').className = 'alert alert-danger'

            displayer.textContent = 'HEALTH ALERT!!! You are EXTREMELY OBESE. . Your BMI is ' + bmi + '. So You will need to lose ' + weightReqToLoose + ' Pounds. Talk to your doctor or dietitian about safe and effective ways to lose weight and keep it off.';

        }

        e.preventDefault();


    }
    var img = document.getElementById('index');
    img.style.display = 'block';
}

