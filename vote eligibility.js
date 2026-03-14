function checkEligiblitly(age){
    if(age>=18){
     document.write(`<br >`+"Age: "+age+ "-Eligible for vote");
    }
    else{
      document.write(`<br>`+"Age: "+age+ "-Not Eligible for vote")
    }
}
checkEligiblitly(17);
checkEligiblitly(42);
checkEligiblitly(20);
