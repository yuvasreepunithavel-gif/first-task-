function leapYear(year){
    if(year%400==0 || (year%100!=0 && year%4==0)){
        document.write("Leap Year");
    }
    else{
        document.write("Not a leap year");
    }
}

leapYear(2007);
