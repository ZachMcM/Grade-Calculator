//selectors
const currentGrade = document.querySelector('.current-grade');
const examWeight = document.querySelector('.exam-weight');
const desiredSemesterGrade = document.querySelector('.desired-semester-grade');
const submitBtn = document.querySelector('.submit-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('#modal-close');
const youNeed = document.querySelector('.you-need');
const message = document.querySelector('.message');

//Listeners 

submitBtn.addEventListener('click', calculateGrades);
modalClose.addEventListener('click', closeModal);

//Functions

function calculateGrades() {
    modal.style.display = 'flex'
    if (isNaN(currentGrade.value) || isNaN(examWeight.value) || isNaN(desiredSemesterGrade.value) || currentGrade.value.length == 0 || examWeight.value.length == 0 || desiredSemesterGrade.value.length == 0) {
        message.innerText = "Please enter a number to calculate your final grade.";
        youNeed.innerText = "";
    }
    else {
        examGrade = (desiredSemesterGrade.value - (currentGrade.value * ((100 - examWeight.value) / 100))) / (examWeight.value / 100);
        examGrade = examGrade.toFixed(0);
        youNeed.innerText = "You need a " + examGrade + "% to get a " + desiredSemesterGrade.value + "% in the class.";
        if (examGrade > 100) {
            message.innerText = "Looks like you need a miracle! Maybe you should've tried harder before the exam.";
        } else if (examGrade == 100) {
            message.innerText = "You have to be perfect (in other words- not happening).";
        } else if (examGrade > 95) {
            message.innerText = "It's gonna be hard, but I believe in you (not really).";
        } else if (examGrade > 90) {
            message.innerText = "There is a chance!";
        } else if (examGrade > 80) {
            message.innerText = "Ok, your in good shape!";
        } else if (examGrade > 70) {
            message.innerText = "You can definitely do this!";
        } else if (examGrade > 60) {
            message.innerText = "Don't even bother studying.";
        } else if (examGrade > 50) {
            message.innerText = "You got it in the bag. Just draw something innapropriate on test paper (don't actaully).";
        } else if (examGrade == 50) {
            message.innerText = "If a person wearing a blindfold picked the answers on a true or false quiz at random they would get a 50% (I don't know if this is true or not I just heard it in a movie)."
        }
    }
}

function closeModal() {
    modal.style.display = "none";
    currentGrade.value = "";
    examWeight.value = "";
    desiredSemesterGrade.value = "";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        currentGrade.value = "";
        examWeight.value = "";
        desiredSemesterGrade.value = "";
    }
}





