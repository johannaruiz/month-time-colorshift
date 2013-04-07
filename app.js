(function(){
  function seasonTime(){
    
    var dd = document.getElementById("date-displayer");

    /*
      Set up the time variables for months, hours and minutes to
      set up seasons (winter, spring summer, fall) 
      and times of day (morning, afternoon, evening and night)
    */ 

    var d = new Date();

    var months = new Array();
        months [0] = "January";
        months [1] = "February";
        months [2] = "March";
        months [3] = "April";
        months [4] = "May";
        months [5] = "June";
        months [6] = "July";
        months [7] = "August";
        months [8] = "September";
        months [9] = "October";
        months [10] = "November";
        months [11] = "December";

    var m = months[d.getMonth()];
    var monthNum = d.getMonth();

    //Set up numbered date
    var dn = d.getDate();

    // Set up hours and minutes
    var hours = d.getHours();
    var h;
    function currentHour(){
      if(hours == 0){
        h = 12;
      }
      else if(hours >= 1 && hours <= 12){
        h = hours;
      }
      else if(hours >= 1 && hours <= 23){
        h = hours - 12;
      }
    }
    currentHour(h);
      
    // Set up minutes
    var minutes = d.getMinutes();

      if (minutes <= 9){
        minutes = "0"+minutes;
      }

    var min = minutes;

    // Set up AM/PM
    var anteMeridian = "A.M.";
    var postMeridian = "P.M.";
    var amPm = [anteMeridian, postMeridian];
    var meridian;
    function setMeridian(){
      if (hours >= 0 && hours <=12){
        meridian = anteMeridian;
      }
      else if (hours >=12 && hours <= 23){
        meridian = postMeridian;
      }
    }
    setMeridian(meridian);
    // Create formatted time
    var formatedTime = m + " " + dn + " " + h + ":"+ min + " " + meridian;

    // Create time of day e.g. Morning, Afternoon, Evening, Night.
    var timesOfDay = ["Morning", "Day", "Evening", "Night"];
    
    var theTime;
    
    function currentTimeOfDay(){
      if(hours >= 0 && hours <= 6){
        theTime = timesOfDay[0];
      }
      else if(hours >= 6 && hours <= 12){
        theTime = timesOfDay[1];
      }
      else if(hours >=12 && hours <= 18){
        theTime = timesOfDay[2];
      }
      else{
        theTime = timesOfDay[3];
      }
    }
    currentTimeOfDay(theTime);    
      
      // Set up Seasons
    var seasons = ["Winter", "Spring", "Summer", "Fall"];
      
    var theSeason;
      
    function currentSeason(){
      if(monthNum == 11 || monthNum >=0 && monthNum <=1){
        theSeason = seasons[0];
      }
      else if(monthNum >= 2 && monthNum <= 4){
        theSeason = seasons[1]
      }
      else if(monthNum >=5 && monthNum <= 7){
        theSeason = season[2];
      }
      else if(monthNum >=8 && monthNum <= 10){
        theSeason = seasons[3]; 
      }
    }
    currentSeason(theSeason);
        //format variables to lowercase for dynamic classes
    var lm = m.toLowerCase();
    var lt = theTime.toLowerCase();
    var lcs = theSeason.toLowerCase();

        // Add class to the html for style control
    document.body.className += lcs + " " + lm + " " + lt;
        
    function writeTime(){
      var timeDisplay = document.body.innerHTML = "<p>" + "It's " + formatedTime  + "</p>";
    }
    writeTime();
  }
  seasonTime();
})();