let currentStep = 1;
const totalSteps = 6; // Total number of quiz steps

function showStep(step) {
    const steps = document.querySelectorAll('.quiz-step');
    steps.forEach((el) => {
        el.style.display = 'none'; // Hide all steps
    });

    if (step <= totalSteps) {
        document.getElementById(`step-${step}`).style.display = 'block'; // Show the current step
    } else {
        document.getElementById('result').style.display = 'block'; // Show the result section
    }
	
	
    // Update button visibility and text
    document.getElementById('prevBtn').disabled = step === 1;
    document.getElementById('nextBtn').style.display = step > totalSteps ? 'none' : 'inline-block';
    document.getElementById('prevBtn').style.display = step > totalSteps ? 'none' : 'inline-block';

    if (step <= totalSteps) {
        document.getElementById('nextBtn').textContent = step === totalSteps ? 'Submit' : 'Next';
    }

    // Update the progress bar
    const progress = (step / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function nextStep() {
    if (currentStep === totalSteps) {
        showResult();
    } else {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function showResult() {
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'a',
        q6: 'a'
    };

    let score = 0;

    for (let i = 1; i <= totalSteps; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }

    document.getElementById('result-text').textContent = `You scored ${score} out of ${totalSteps}`;
    showStep(totalSteps + 1); // Move to the result step
}

document.addEventListener('DOMContentLoaded', function() {
    showStep(currentStep); // Start at step 1
});
