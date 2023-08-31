
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector(".check-button");
const continueBtn = document.querySelector(".continue-btn");
const errorMessage = document.querySelector(".error-message");
const returnValue = document.querySelectorAll(".notesToReturn");
const cashSection = document.querySelector(".section-cash")

const notes = [2000, 500, 100, 20, 10, 5, 1];

cashSection.style.display = "none";
checkButton.style.display = "none";

continueBtn.addEventListener("click", function () {
    if (billAmount.value > 0 ){
        cashSection.style.display = "block";
        checkButton.style.display = "block";
        continueBtn.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerText = "The bill amount should be greater than 0";  
    }
})



function calculateChange(amountToBeReturned) {
    for ( let i=0; i<notes.length; i++) {
        var noOfNotes = Math.trunc(amountToBeReturned/notes[i]) ;
        amountToBeReturned = amountToBeReturned % notes[i] ;
        returnValue[i].innerText = noOfNotes;
    }

}


checkButton.addEventListener("click", function validate(){
    
    errorMessage.style.display = "none";
       
        if (Number(cashGiven.value) > Number(billAmount.value)) {
            var amountToBeReturned = (cashGiven.value - billAmount.value);
            calculateChange(amountToBeReturned);

        } else { errorMessage.style.display = "block";
        errorMessage.innerText = "Cash Given should be greater than Bill Amount";
    }

     
})