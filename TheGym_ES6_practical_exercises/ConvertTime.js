    //convert an input of seconds into a combination of yrs days hours mins and secs
    //an abject that contains the five combination so that we start from the top to bottom 
    
let convertTime= (seconds)=>{
        if(seconds===0){
            return "now";
        }
        let objectTime = {
            year: 60*60*24*365,
            day: 60*60*24,
            hour: 60*60,
            minute: 60,
            second:1  
        };
        let result="";
        if(seconds >= objectTime.year){
            let objectTimeyear =Math.floor(seconds/objectTime.year);
            result=`${objectTimeyear} year${objectTimeyear>1?"s":""}`;
            seconds=seconds%objectTime.year;
        }
        if(seconds >= objectTime.day){
            let objectTimeday =Math.floor(seconds/objectTime.day);
            seconds=seconds%objectTime.day;  
            result+= `${seconds===0?"and ":result?", ":""}${objectTimeday} day${objectTimeday>1?"s":""}`;

        }
        if (seconds >=objectTime.hour){
            let objectTimehour =Math.floor(seconds/objectTime.hour);
            seconds=seconds%objectTime.hour;  
            result+= `${seconds===0?" and ":result?", ":""}${objectTimehour} hour${objectTimehour>1?"s":""}`;
;
        }
        if (seconds >=objectTime.minute){
            let minute =Math.floor(seconds/objectTime.minute);
            seconds=seconds%objectTime.minute;  
            result+=`${seconds===0?" and":result?", ":""} ${minute} minute${minute>1?"s":""}`
  }
        if(seconds>=1){
            result+=`${result?" and ":""} ${seconds} second${seconds>1?"s":""}`
        }
        return result;
    }
    // dotest(1, "1 second");
   console.log(convertTime(62)) ;// "1 minute and 2 seconds");
    // dotest(120, "2 minutes");
    // dotest(3600, "1 hour");
    // dotest(3662, "1 hour, 1 minute and 2 seconds");

    // dotest(15731080, "182 days, 1 hour, 44 minutes and 40 seconds");
 console.log( convertTime(132030240)) ;// "4 years, 68 days, 3 hours and 4 minutes";
    // dotest(205851834, "6 years, 192 days, 13 hours, 3 minutes and 54 seconds");
    // dotest(253374061, "8 years, 12 days, 13 hours, 41 minutes and 1 second");
    // dotest(242062374, "7 years, 246 days, 15 hours, 32 minutes and 54 seconds");
    // dotest(101956166, "3 years, 85 days, 1 hour, 9 minutes and 26 seconds");
    // dotest(33243586, "1 year, 19 days, 18 hours, 19 minutes and 46 seconds");   