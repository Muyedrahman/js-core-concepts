// callback
// function pakhiBhai (callMeBack, patro, patri)
function pakhiBhai (callMeBack, patro,patri){
     console.log(patro);
     console.log(callMeBack);
    if(patri){
        // console.log(callMeBack)
        callMeBack(patro)
    }
    else{
        console.log('tor kopale biya nai')
    }
}
 function callSomeOne(person){
    console.log('calling', person)
 }

//  callSomeOne('jodu')
// pakhiBhai(callSomeOne, 'jodu' , 'modu')
// myBtn.addEventListener("click", () => {

// })