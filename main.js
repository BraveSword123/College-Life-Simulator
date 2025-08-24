// Opening 
let firstMain; 
let lastMain; 
let genderMain; 
let majorMain;  
let finance = 3000;  
let semester = "Fall"; 
let dormMates = []; 
let clubs = []; 
let friends = []; 
let jobs = []; 
let enemies = []; 
let partner = "None"; 
let hasInternship = false;  
let dormCounter = 0;  
let jobCounter = 0; 
let clubCounter = 0; 
let friendCounter = 0; 
let enemyCounter = 0; 
let classMates = ["Ava Morgan", "Liam Carter", "Chloe Bennett", "Ethan Brooks", "Isla Hayes", "Nathan Reyes", "Maya Dawson", "Adrian Foster"]; 
let shipHolder; 
let combinedRel = []; 
let i = 0; 
let currentGrade = "C"; 
// I can totally make for loops for everything with this now (That will really help shorten my code and make it easier to read)
let optionIds = ["first_options", "second_options", "third_options", "fourth_options", "fifth_options", "sixth_options", "seventh_options", "eighth_options"];
// let first = 1; // Test
let school_WH = false; 
let school_SO = false; 
let jobComp = ["Library Assistant", "Barista", "Campus Tour Guide", "Resident Assistant", "Tutor", "Café Worker", "Research Assistant", "Fitness Instructor"]; 
let clubComp = ["Programming Club", "Social Justice Club", "Debate Club", "Art Club", "Finance Club", "Psychology Club", "Drama Club", "Music Club"]; 
// classMates.includes(document.getElementById("first_options").textContent

class main{
    constructor(first, last, gender, major){
        this.first = first; 
        this.last = last; 
        this.gender = gender; 
        this.major = major;
    }
}
// Options Functions
function club_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';

    document.getElementById("title_options").textContent = "Clubs";
    document.getElementById("first_options").textContent = "Join Clubs";
    document.getElementById("second_options").textContent = "Current Clubs";
    document.getElementById("third_options").textContent = " ";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
}

function dorm_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';

    document.getElementById("title_options").textContent = "Dorms";
    document.getElementById("first_options").textContent = "Find Dormmates";
    document.getElementById("second_options").textContent = "Current Dormmates";
    document.getElementById("third_options").textContent = " ";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
}

function finance_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';

    document.getElementById("title_options").textContent = "Finances";   
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " "; 

    if(hasInternship===true){
        document.getElementById("second_options").textContent = "Internship(s):  $200 per month";
       }
    if(hasInternship === false){
        document.getElementById("second_options").textContent = "Internship(s):  $0 per month";
    }
    if(jobs.length === 0){
        document.getElementById("third_options").textContent = "Part Time Job(s):  $0 per month";
    }
    if(jobs.length === 1){
        document.getElementById("third_options").textContent = "Part Time Job(s):  $600 per month";
    }
    if(jobs.length === 2){
        document.getElementById("third_options").textContent = "Part Time Job(s):  $1200 per month";
    }
    if(jobs.length === 3){
        document.getElementById("third_options").textContent = "Part Time Job(s):  $1800 per month";
    }
    if(dormMates.length === 0){
       document.getElementById("first_options").textContent = "Housing:  -$3000 per semester";
    }
    if(dormMates.length === 1){
       document.getElementById("first_options").textContent = "Housing:  -$2500 per semester";
    }
    if(dormMates.length === 2){
      document.getElementById("first_options").textContent = "Housing:  -$2000 per semester";
    }
    if(dormMates.length === 3){
        document.getElementById("first_options").textContent = "Housing:  -$1500 per semester";
    }
    if(dormMates.length === 4){
        document.getElementById("first_options").textContent = "Housing:  -$1000 per semester";
    }
    if(dormMates.length === 5){
        document.getElementById("first_options").textContent = "Housing:  -$500 per semester";
    }

}


function intern_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';

    if(hasInternship === false){
    document.getElementById("title_options").textContent = "Internships";   
    document.getElementById("first_options").textContent = "Find Internship"; 
    document.getElementById("second_options").textContent = " ";
    document.getElementById("third_options").textContent = " ";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
    }
    if(hasInternship === true){
        document.getElementById("title_options").textContent = "Internships";   
        document.getElementById("first_options").textContent = "Quit Internship"; 
        document.getElementById("second_options").textContent = " ";
        document.getElementById("third_options").textContent = " ";
        document.getElementById("fourth_options").textContent = " ";
        document.getElementById("fifth_options").textContent = " ";
        document.getElementById("sixth_options").textContent = " ";
        document.getElementById("seventh_options").textContent = " ";
        document.getElementById("eighth_options").textContent = " ";
}
}

function job_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';

    document.getElementById("title_options").textContent = "Part-Time Jobs";
    document.getElementById("first_options").textContent = "Find Jobs";
    document.getElementById("second_options").textContent = "Current Jobs"; // Seems like there is an error here 
    document.getElementById("third_options").textContent = " ";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
}

 function school_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';

    document.getElementById("title_options").textContent = "Schoolwork";
    document.getElementById("first_options").textContent = "Current Grades - " + currentGrade; // Current Grades - 
    document.getElementById("second_options").textContent = "Work Harder";
    document.getElementById("third_options").textContent = "Slack Off"; // Seems like there is an error here 
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
} 

function relationships_Button(){
    document.getElementById("main_nav").style.display = 'none';
    document.getElementById("options_div").style.display = 'block';
    document.getElementById("title_options").textContent = "Relationships";

combinedRel.length = 0;

combinedRel = friends.map(function(element){
return "Friend    -   " + element; 
});  

for (let i = 0; i < enemies.length; i++) {
    combinedRel.push("Enemy    -   " + enemies[i]);
}

if(partner !== "None"){
    combinedRel.push("Partner    -   "+ partner); 
}

console.log(combinedRel); 

    if(friends.length === 0 && enemies.length === 0 && partner === "None"){
        document.getElementById("first_options").textContent = "No Relationships"; 
        document.getElementById("second_options").textContent = " ";
        document.getElementById("third_options").textContent = " ";
        document.getElementById("fourth_options").textContent = " ";
        document.getElementById("fifth_options").textContent = " ";
        document.getElementById("sixth_options").textContent = " ";
        document.getElementById("seventh_options").textContent = " ";
        document.getElementById("eighth_options").textContent = " ";
    }
    else{
        for(let i = 0; i < 8; i++){
            if(i < combinedRel.length){
                document.getElementById(optionIds[i]).textContent = combinedRel[i]; 
            }
            else{
                document.getElementById(optionIds[i]).textContent = " "; 
            }
        }
    }

    // Remove this code 
     /* for(let i = 0; i <= friend.size; i++){
        if(i == 0){
        document.getElementById("first_options").textContent = friends[i] + " Friend";
        }
        else if(i == 1){
            document.getElementById("second_options").textContent = friends[i] + " Friend";
            }
        else if(i == 2){
            document.getElementById("third_options").textContent = friends[i] + " Friend";
        }
        else if(i == 3){
            document.getElementById("fourth_options").textContent = friends[i] + " Friend";
        }
        else{
            document.getElementById("fourth_options").textContent = " ";
        }
      } // Add Enemies and Partner */ 
    
    // We need to know how many friends and enemies we have (array.size) 
    // Then we need to use that for output, Like if we have 2 
    // I'm actually dumb, I should have used an array for all of this stuff 

}

function firstOption(){
    if(document.getElementById("first_options").textContent === "Join Clubs"){
        document.getElementById("title_options").textContent = "Join Clubs";
        document.getElementById("first_options").textContent = "Programming Club";
        document.getElementById("second_options").textContent = "Social Justice Club";
        document.getElementById("third_options").textContent = "Debate Club";
        document.getElementById("fourth_options").textContent = "Art Club";
        document.getElementById("fifth_options").textContent = "Finance Club";
        document.getElementById("sixth_options").textContent = "Psychology Club";
        document.getElementById("seventh_options").textContent = "Drama Club";
        document.getElementById("eighth_options").textContent = "Music Club";
    }

    else if(document.getElementById("first_options").textContent === "Programming Club" && clubs.includes("Programming Club") === false && clubCounter <= 4){
        clubs.push("Programming Club");
        console.log(clubs); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
        ++clubCounter;
        console.log(clubCounter); 
}

else if(document.getElementById("first_options").textContent === "Find Dormmates"){
    document.getElementById("title_options").textContent = "Find Dormmates";
    document.getElementById("first_options").textContent = "Ava Morgan";
    document.getElementById("second_options").textContent = "Liam Carter";
    document.getElementById("third_options").textContent = "Chloe Bennett";
    document.getElementById("fourth_options").textContent = "Ethan Brooks";
    document.getElementById("fifth_options").textContent = "Isla Hayes";
    document.getElementById("sixth_options").textContent = "Nathan Reyes";
    document.getElementById("seventh_options").textContent = "Maya Dawson";
    document.getElementById("eighth_options").textContent = "Adrian Foster";
}

else if(document.getElementById("first_options").textContent === "Ava Morgan" && dormMates.includes("Ava Morgan") === false && dormCounter <= 4){ // Want to add something like if PC isn't in club 
    dormMates.push("Ava Morgan");
    console.log(dormMates); 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none';
    ++dormCounter;
    console.log(dormCounter);  
}

else if(document.getElementById("first_options").textContent === "Find Internship"){
hasInternship = true; 
document.getElementById("main_nav").style.display = 'block';
document.getElementById("options_div").style.display = 'none';
// Add Financial Stuff Here 
}

else if(document.getElementById("first_options").textContent === "Find Jobs"){
    // Change this to an array
    document.getElementById("title_options").textContent = "Find Jobs";
    document.getElementById("first_options").textContent = "Library Assistant"; 
    document.getElementById("second_options").textContent = "Barista"; 
    document.getElementById("third_options").textContent = "Campus Tour Guide";
    document.getElementById("fourth_options").textContent = "Resident Assistant";
    document.getElementById("fifth_options").textContent = "Tutor";
    document.getElementById("sixth_options").textContent = "Café Worker";
    document.getElementById("seventh_options").textContent = "Research Assistant";
    document.getElementById("eighth_options").textContent = "Fitness Instructor";
    }

else if(document.getElementById("first_options").textContent === "Library Assistant" && jobs.includes("Library Assistant") === false && jobCounter <= 2){
    jobs.push("Library Assistant");
    console.log(jobs)
    ++jobCounter; 
    console.log(jobCounter); 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none';
}
else if(document.getElementById("first_options").textContent === "Library Assistant" && jobCounter >= 3 &&  document.getElementById("title_options").textContent === "Find Jobs"){
    document.getElementById("limitDiv").innerHTML = "You Can Only<br>Have 3 Jobs!"; 
    document.getElementById("limitDiv").style.display = 'block'; 
    document.getElementById("limitButton").style.display = 'block'; 
}


    // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
     // Need to specify which character it is!!! 
     // If textContent = an element in classMates[] and (textConent of title is Current Dormmates) (We will add or to this once I program relationships for club/internships/jobs)
    // else if(document.getElementById("first_options").textContent === "Ava Morgan" || document.getElementById("first_options").textContent === "Liam Carter" || document.getElementById("first_options").textContent === "Chloe Bennett" || document.getElementById("first_options").textContent === "Ethan Brooks" || document.getElementById("first_options").textContent === "Isla Hayes" || document.getElementById("first_options").textContent === "Nathan Reyes" || document.getElementById("first_options").textContent === "Maya Dawson" || document.getElementById("first_options").textContent === "Adrian Foster"){
else if(classMates.includes(document.getElementById("first_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later  
    shipHolder = document.getElementById("first_options").textContent; 
    document.getElementById("title_options").textContent = "Relationships";
    document.getElementById("first_options").textContent = "Befriend";
    document.getElementById("second_options").textContent = "Make Enemy"; 
    document.getElementById("third_options").textContent = "Start Dating";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " "; 
} 
else if(document.getElementById("first_options").textContent === "Befriend" && friends.includes(shipHolder) === false && friendCounter <= 3){
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none';

    friends.push(shipHolder); 
    console.log(friends);
    ++friendCounter;  
}

else if(document.getElementById("first_options").textContent === "Quit Internship"){
    hasInternship = false;
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none'; 
}
 else if(jobComp.includes(document.getElementById("first_options").textContent) && document.getElementById("title_options").textContent === "Current Jobs (Click to Quit Job)"){
   jobs.splice(0,1); 
   --jobCounter; 
   document.getElementById("main_nav").style.display = 'block';
   document.getElementById("options_div").style.display = 'none';  
} 
else if(clubComp.includes(document.getElementById("first_options").textContent) && document.getElementById("title_options").textContent === "Current Club (Click to Quit Club)"){
    clubs.splice(0,1); 
    --clubCounter; 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none'; 
 } 
 // dormMates.splice()
 // dormCounter 
 // classMates.includes 
 else if(classMates.includes(document.getElementById("first_options").textContent) && document.getElementById("title_options").textContent === "Current Dormmates (Click to Remove Dormmates)"){
    dormMates.splice(0,1); 
    --dormCounter; 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none'; 
 } 
}

function secondOption(){
    if(document.getElementById("second_options").textContent === "Social Justice Club" && clubs.includes("Social Justice Club") === false && clubCounter <= 4){
        clubs.push("Social Justice Club");
        console.log(clubs); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
        ++clubCounter;
        console.log(clubCounter); 
    }
    else if(document.getElementById("second_options").textContent === "Liam Carter" && dormMates.includes("Liam Carter") === false && dormCounter <= 4){ // Want to add something like if PC isn't in club 
        dormMates.push("Liam Carter");
        console.log(dormMates); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
        ++dormCounter; 
        console.log(dormCounter); 
    }
    else if(document.getElementById("second_options").textContent === "Barista" && jobs.includes("Barista") === false && jobCounter <= 2){
        jobs.push("Barista");
        console.log(jobs)
        ++jobCounter; 
        console.log(jobCounter); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
    }
/*     if(textContent == "Work Harder && currentGrade == "C){
        currentGrade = B; 
        } */ 
   else if(document.getElementById("second_options").textContent === "Current Clubs"){
    document.getElementById("title_options").textContent = "Current Club (Click to Quit Club)";

    if(clubs.length === 0){
        document.getElementById("first_options").textContent = "No Current Clubs"; 
        document.getElementById("second_options").textContent = " ";
        document.getElementById("third_options").textContent = " ";
        document.getElementById("fourth_options").textContent = " ";
        document.getElementById("fifth_options").textContent = " ";
        document.getElementById("sixth_options").textContent = " ";
        document.getElementById("seventh_options").textContent = " ";
        document.getElementById("eighth_options").textContent = " ";
    }
else{
    for(let i = 0; i < 8; i++){
        if(i < clubs.length){
            document.getElementById(optionIds[i]).textContent = clubs[i];
        }
        else{
            document.getElementById(optionIds[i]).textContent = " ";
        }
    }
}
    } 
      // Change to Array Later 
    else if(document.getElementById("second_options").textContent === "Current Dormmates"){  
      document.getElementById("title_options").textContent = "Current Dormmates (Click to Remove Dormmates)";
  
     if(dormMates.length === 0){
            document.getElementById("first_options").textContent = "No Current Dormmates"; 
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
       }
else{
    for(let i = 0; i < 8; i++){
        if(i < dormMates.length){
            document.getElementById(optionIds[i]).textContent = dormMates[i];
        }
        else{
            document.getElementById(optionIds[i]).textContent = " ";
        }
    }
}
    } 
    else if(document.getElementById("second_options").textContent === "Current Jobs"){
    document.getElementById("title_options").textContent = "Current Jobs (Click to Quit Job)";
        if(jobs.length === 0){
            document.getElementById("first_options").textContent = "No Current Jobs"; 
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
       }
else{
    for(let i = 0; i < 8; i++){
        if(i < jobs.length){
            document.getElementById(optionIds[i]).textContent = jobs[i];
        }
        else{
            document.getElementById(optionIds[i]).textContent = " ";
        }
    }
}

    }
    else if(classMates.includes(document.getElementById("second_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
        shipHolder = document.getElementById("second_options").textContent; 
        document.getElementById("title_options").textContent = "Relationships";
        document.getElementById("first_options").textContent = "Befriend";
        document.getElementById("second_options").textContent = "Make Enemy"; 
        document.getElementById("third_options").textContent = "Start Dating";
        document.getElementById("fourth_options").textContent = " ";
        document.getElementById("fifth_options").textContent = " ";
        document.getElementById("sixth_options").textContent = " ";
        document.getElementById("seventh_options").textContent = " ";
        document.getElementById("eighth_options").textContent = " ";
}
else if(document.getElementById("second_options").textContent === "Make Enemy" && friends.includes(shipHolder) === false && enemyCounter <= 2){
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none';

    enemies.push(shipHolder); 
    console.log(enemies); 
    ++enemyCounter; 
} 
else if(document.getElementById("second_options").textContent === "Work Harder" && document.getElementById("title_options").textContent === "Schoolwork"){
    school_WH = true;
    school_SO = false; 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none';
}
else if(jobComp.includes(document.getElementById("second_options").textContent) && document.getElementById("title_options").textContent === "Current Jobs (Click to Quit Job)"){
    jobs.splice(1,1); 
    --jobCounter; 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none'; 
 } 
 else if(clubComp.includes(document.getElementById("second_options").textContent) && document.getElementById("title_options").textContent === "Current Club (Click to Quit Club)"){
    clubs.splice(1,1); 
    --clubCounter; 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none'; 
 }
 else if(classMates.includes(document.getElementById("second_options").textContent) && document.getElementById("title_options").textContent === "Current Dormmates (Click to Remove Dormmates)"){
    dormMates.splice(1,1); 
    --dormCounter; 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none'; 
 } 
}

    function thirdOption(){
        if(document.getElementById("third_options").textContent === "Debate Club" && clubs.includes("Debate Club") === false && clubCounter <= 4){
            clubs.push("Debate Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++clubCounter;
            console.log(clubCounter); 
        }
        else if(document.getElementById("third_options").textContent === "Chloe Bennett" && dormMates.includes("Chloe Bennett") === false && dormCounter <= 4){ // Want to add something like if PC isn't in club 
            dormMates.push("Chloe Bennett");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
        else if(document.getElementById("third_options").textContent === "Campus Tour Guide" && jobs.includes("Campus Tour Guide") === false && jobCounter <= 2){
            jobs.push("Campus Tour Guide");
            console.log(jobs)
            ++jobCounter; 
            console.log(jobCounter); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
            // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
            else if(classMates.includes(document.getElementById("third_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
                // Change this into a function
                shipHolder = document.getElementById("third_options").textContent; 
                document.getElementById("title_options").textContent = "Relationships";
                document.getElementById("first_options").textContent = "Befriend";
                document.getElementById("second_options").textContent = "Make Enemy"; 
                document.getElementById("third_options").textContent = "Start Dating";
                document.getElementById("fourth_options").textContent = " ";
                document.getElementById("fifth_options").textContent = " ";
                document.getElementById("sixth_options").textContent = " ";
                document.getElementById("seventh_options").textContent = " ";
                document.getElementById("eighth_options").textContent = " ";
        } 
        else if(document.getElementById("third_options").textContent === "Start Dating" && partner !== shipHolder){
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        
            partner = shipHolder; 
            console.log(partner); 
        } 
        else if(document.getElementById("third_options").textContent === "Slack Off" && document.getElementById("title_options").textContent === "Schoolwork"){
            school_SO = true;
            school_WH = false; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(jobComp.includes(document.getElementById("third_options").textContent) && document.getElementById("title_options").textContent === "Current Jobs (Click to Quit Job)"){
            jobs.splice(2,1); 
            --jobCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         }
         else if(clubComp.includes(document.getElementById("third_options").textContent) && document.getElementById("title_options").textContent === "Current Club (Click to Quit Club)"){
            clubs.splice(2,1); 
            --clubCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         } 
         else if(classMates.includes(document.getElementById("third_options").textContent) && document.getElementById("title_options").textContent === "Current Dormmates (Click to Remove Dormmates)"){
            dormMates.splice(2,1); 
            --dormCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         } 
    }

    function fourthOption(){
        if(document.getElementById("fourth_options").textContent === "Art Club" && clubs.includes("Art Club") === false && clubCounter <= 4){
            clubs.push("Art Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++clubCounter;
            console.log(clubCounter); 
        }
        else if(document.getElementById("fourth_options").textContent === "Ethan Brooks" && dormMates.includes("Ethan Brooks") === false  && dormCounter <= 4){ // Want to add something like if PC isn't in club 
            dormMates.push("Ethan Brooks");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter);
        }
        else if(document.getElementById("fourth_options").textContent === "Resident Assistant" && jobs.includes("Resident Assistant") === false && jobCounter <= 2){
            jobs.push("Resident Assistant");
            console.log(jobs)
            ++jobCounter; 
            console.log(jobCounter); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
            // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
            else if(classMates.includes(document.getElementById("fourth_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
               // change this into a function
                shipHolder = document.getElementById("fourth_options").textContent; 
                document.getElementById("title_options").textContent = "Relationships";
                document.getElementById("first_options").textContent = "Befriend";
                document.getElementById("second_options").textContent = "Make Enemy"; 
                document.getElementById("third_options").textContent = "Start Dating";
                document.getElementById("fourth_options").textContent = " ";
                document.getElementById("fifth_options").textContent = " ";
                document.getElementById("sixth_options").textContent = " ";
                document.getElementById("seventh_options").textContent = " ";
                document.getElementById("eighth_options").textContent = " ";
        }
        else if(clubComp.includes(document.getElementById("fourth_options").textContent) && document.getElementById("title_options").textContent === "Current Club (Click to Quit Club)"){
            clubs.splice(3,1); 
            --clubCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         }
         else if(classMates.includes(document.getElementById("fourth_options").textContent) && document.getElementById("title_options").textContent === "Current Dormmates (Click to Remove Dormmates)"){
            dormMates.splice(3,1); 
            --dormCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         } 
    }

    function fifthOption(){
        if(document.getElementById("fifth_options").textContent === "Finance Club" && clubs.includes("Finance Club") === false && clubCounter <= 4){
            clubs.push("Finance Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++clubCounter;
            console.log(clubCounter); 
        }
        else if(document.getElementById("fifth_options").textContent === "Isla Hayes" && dormMates.includes("Isla Hayes") === false  && dormCounter <= 4){ 
            dormMates.push("Isla Hayes");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
        else if(document.getElementById("fifth_options").textContent === "Tutor" && jobs.includes("Tutor") === false && jobCounter <= 2){
            jobs.push("Tutor");
            console.log(jobs)
            ++jobCounter; 
            console.log(jobCounter); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
            // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
            else if(classMates.includes(document.getElementById("fifth_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
                // Change this into a function 
                shipHolder = document.getElementById("fifth_options").textContent; 
                document.getElementById("title_options").textContent = "Relationships";
                document.getElementById("first_options").textContent = "Befriend";
                document.getElementById("second_options").textContent = "Make Enemy"; 
                document.getElementById("third_options").textContent = "Start Dating";
                document.getElementById("fourth_options").textContent = " ";
                document.getElementById("fifth_options").textContent = " ";
                document.getElementById("sixth_options").textContent = " ";
                document.getElementById("seventh_options").textContent = " ";
                document.getElementById("eighth_options").textContent = " ";
        } 
        else if(clubComp.includes(document.getElementById("fifth_options").textContent) && document.getElementById("title_options").textContent === "Current Club (Click to Quit Club)"){
            clubs.splice(4,1); 
            --clubCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         }
         else if(classMates.includes(document.getElementById("fifth_options").textContent) && document.getElementById("title_options").textContent === "Current Dormmates (Click to Remove Dormmates)"){
            dormMates.splice(4,1); 
            --dormCounter; 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none'; 
         } 
    }

    function sixthOption(){
        if(document.getElementById("sixth_options").textContent === "Psychology Club" && clubs.includes("Psychology Club") === false && clubCounter <= 4){
            clubs.push("Psychology Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++clubCounter;
            console.log(clubCounter); 
        }
        else if(document.getElementById("sixth_options").textContent === "Nathan Reyes" && dormMates.includes("Nathan Reyes") === false  && dormCounter <= 4){ 
            dormMates.push("Nathan Reyes");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); // Need to add finance system 
        }
        else if(document.getElementById("sixth_options").textContent === "Café Worker" && jobs.includes("Café Worker") === false && jobCounter <= 2){
            jobs.push("Café Worker");
            console.log(jobs)
            ++jobCounter; 
            console.log(jobCounter); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
            // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
            else if(classMates.includes(document.getElementById("sixth_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
                // Change this into a function 
                shipHolder = document.getElementById("sixth_options").textContent; 
                document.getElementById("title_options").textContent = "Relationships";
                document.getElementById("first_options").textContent = "Befriend";
                document.getElementById("second_options").textContent = "Make Enemy"; 
                document.getElementById("third_options").textContent = "Start Dating";
                document.getElementById("fourth_options").textContent = " ";
                document.getElementById("fifth_options").textContent = " ";
                document.getElementById("sixth_options").textContent = " ";
                document.getElementById("seventh_options").textContent = " ";
                document.getElementById("eighth_options").textContent = " ";
        } 
    }

    function seventhOption(){
        if(document.getElementById("seventh_options").textContent === "Drama Club" && clubs.includes("Drama Club") === false && clubCounter <= 4){
            clubs.push("Drama Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++clubCounter;
            console.log(clubCounter); 
        }
        else if(document.getElementById("seventh_options").textContent === "Maya Dawson" && dormMates.includes("Maya Dawson") === false  && dormCounter <= 4){ 
            dormMates.push("Maya Dawson");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
        else if(document.getElementById("seventh_options").textContent === "Research Assistant" && jobs.includes("Research Assistant") === false && jobCounter <= 2){
            jobs.push("Research Assistant");
            console.log(jobs)
            ++jobCounter; 
            console.log(jobCounter); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
            // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
            else if(classMates.includes(document.getElementById("seventh_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
                // Need to Make a Function for this
                shipHolder = document.getElementById("seventh_options").textContent; 
                document.getElementById("title_options").textContent = "Relationships";
                document.getElementById("first_options").textContent = "Befriend";
                document.getElementById("second_options").textContent = "Make Enemy"; 
                document.getElementById("third_options").textContent = "Start Dating";
                document.getElementById("fourth_options").textContent = " ";
                document.getElementById("fifth_options").textContent = " ";
                document.getElementById("sixth_options").textContent = " ";
                document.getElementById("seventh_options").textContent = " ";
                document.getElementById("eighth_options").textContent = " ";
        } 
    }

    function eighthOption(){
        if(document.getElementById("eighth_options").textContent === "Music Club" && clubs.includes("Music Club") === false && clubCounter <= 4){
            clubs.push("Music Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++clubCounter;
            console.log(clubCounter); 
        }
        else if(document.getElementById("eighth_options").textContent === "Adrian Foster" && dormMates.includes("Adrian Foster") === false  && dormCounter <= 4){ 
            dormMates.push("Adrian Foster");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
        else if(document.getElementById("eighth_options").textContent === "Fitness Instructor" && jobs.includes("Fitness Instructor") === false && jobCounter <= 2){
            jobs.push("Fitness Instructor");
            console.log(jobs)
            ++jobCounter; 
            console.log(jobCounter); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
            // If the name is _________ or ___________ or ..... then write befriend, make enemy, start dating
            else if(classMates.includes(document.getElementById("eighth_options").textContent) && (document.getElementById("title_options").textContent === "Current Dormmates")){ // Add Or Later 
                // Change this into a function 
                shipHolder = document.getElementById("eighth_options").textContent; 
                document.getElementById("title_options").textContent = "Relationships";
                document.getElementById("first_options").textContent = "Befriend";
                document.getElementById("second_options").textContent = "Make Enemy"; 
                document.getElementById("third_options").textContent = "Start Dating";
                document.getElementById("fourth_options").textContent = " ";
                document.getElementById("fifth_options").textContent = " ";
                document.getElementById("sixth_options").textContent = " ";
                document.getElementById("seventh_options").textContent = " ";
                document.getElementById("eighth_options").textContent = " ";
        } 
    }

    function goBack(){
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
    }
    // End of Options Functions

// Options Functions        


function statButton(){
   firstMain = document.getElementById("fname").value;
   lastMain = document.getElementById("lname").value;
   genderMain = document.getElementById("gender").value;
   majorMain = document.getElementById("major").value;

    const stat = new main(firstMain, lastMain, genderMain, majorMain); 
   
    document.getElementById("opening").style.display = 'none';
    document.getElementById("main_nav").style.display = 'block';

    document.getElementById("first_div").textContent = firstMain;
    document.getElementById("last_div").textContent = lastMain;
    document.getElementById("major_div").textContent = majorMain;
    document.getElementById("semester_div").textContent = "Fall";
    document.getElementById("money_div").textContent = "$" + finance;
}

//console.log(set); 

function changeSemester(){
//    ++i; 
 // for(let i = 0; i < 16; i++){
 if (i < 16) {
if(semester === "Fall"){
    semester = "Winter";
    document.getElementById("semester_div").textContent = semester;
}
else if(semester === "Winter"){
    semester = "Spring";
    document.getElementById("semester_div").textContent = semester;
}

else if(semester === "Spring"){
    semester = "Summer";
    document.getElementById("semester_div").textContent = semester;
}
else if(semester === "Summer"){
    semester = "Fall";
    document.getElementById("semester_div").textContent = semester;
    // Maybe we should move this outside of the else if statement 
}

if(hasInternship===true){
    finance = finance + (50 * 4 * 5);
   }
if(jobs.length === 1){
    finance = finance + (150 * 4 * 5);
}
if(jobs.length === 2){
    finance = finance + (300* 4 * 5);
}
if(jobs.length === 3){
    finance = finance + (450 * 4 * 5);
}
if(dormMates.length === 0){
    finance = finance - 3000;
}
if(dormMates.length === 1){
    finance = finance - 2500;
}
if(dormMates.length === 2){
    finance = finance - 2000;
}
if(dormMates.length === 3){
    finance = finance - 1500;
}
if(dormMates.length === 4){
    finance = finance - 1000;
}
if(dormMates.length === 5){
    finance = finance - 500;
}

// Also include the school_WH here 
if(school_WH === true && currentGrade === "B"){
    currentGrade = "A"; 
    school_WH = false; 
} 
else if(school_WH === true && currentGrade === "C"){
    currentGrade = "B"; 
    school_WH = false; 
}
else if(school_WH === true && currentGrade === "D"){
    currentGrade = "C"; 
    school_WH = false; 
}       
else if(school_WH === true && currentGrade === "F"){
    currentGrade = "D"; 
    school_WH = false; 
}

// school_SO
if(school_SO === true && currentGrade === "A"){
    currentGrade = "B"; 
    school_SO = false; 
} 
else if(school_SO === true && currentGrade === "B"){
    currentGrade = "C"; 
    school_SO = false; 
}
else if(school_SO === true && currentGrade === "C"){
    currentGrade = "D"; 
    school_SO = false; 
}       
else if(school_SO === true && currentGrade === "D"){
    currentGrade = "F"; 
    school_SO = false; 
}

document.getElementById("money_div").textContent = "$" + finance;
++i
console.log(finance); 
 }
}
// End of Opening 



/* Errors: 
- Hover and Active of options_div still there 
- Need Error Message for when you don't put first and last name 
- Need Error Message for Pressing a Button Twice 
- Remove hovers and actives from finances 
- Need a way to remove stuff from clubs, jobs, internships
- Add Financial Stuff to Dorms
*/ 

/*Ideas
- To quit jobs/internships/etc you just press current jobs, find it and there will be a quit button 
- To Output Current, Use counter and if statement 
    - Also need to add limits to number of clubs 
    - If array.size = 1 then output 1 
    - If array.size = 2 output 2 

- For Clubs
    - Work Harder    (Work Hard 3 times to get leadership position ) (Securtary, Treasurer, VP, Pres)
    - Slack Off  (Slack off 3 times and to be asked to leave club)
    - Get to know CoWorkers  (Probably will just have a randomized name rather than a list) (Maybe 3 new people for each job/internship)
    - Quit Club 

- For Internship/Jobs  (Need Programming for When you get raise/fired )
   - Work Harder    (Work Hard 3 times and be promoted)
   - Make Friends (Probably will just have a randomized name rather than a list)
   - Slack Off  (Slack off 3 times and be fired)
   - Quit Job 

- For Roommates 
    - Befriend 
    - Become Enemies 
    - Start Dating  

- For School 
 - Work Hard 
 - Slack Off
 - Make Friends 

- We can change it from friends to relationships (Friends, Enemies, Partners )

If I want to make this game easier to program, I am going yo need a limited number of friends 
- We only want 8 for everything 
But how can you make friends from clubs if there is 8 clubs and only 8 friends 
8 clubs, 1 internship, 8 part time jobs
 - 8 friends 


 - How are we going to do working hard, because how will we know whether the work hard came from Jobs, Internships, Clubs, etc. 
    - Probably Add something to my text
        - Work hard at job
        - Work hard at Internship
        - Work hard at club 


Maybe if something is in 

Only 8 relationships (1 partner, 4 friends, 3 enemies)

Can't be someones enemy and partner 

Need a main and options back_button

if textContent = " " then remove the hover and active 

Interests and likelyhood of becoming friends 
Add challenges to getting a job/internship (Can't get one if grades are bad like if grades are D or F)

*** For back button *** 
Make array of all first option titles, second option titles and third option titles 
if first
send to main 
if second 
second back to first

Most internships usually last at most a year, so we might have to edit that in the future but I won't for now 

Start with C and have it go up or down and if you don't do anything it stays a C
Need buttons to quit jobs, part time internship, clubs, remove dormmates 
Change relationship with people if you want 
Click on Jobs and be given the possibelity to work hard slack off or makr friends 
Don't know if I want the ability to work hard at job or internship because why you know, what will it add 
- Maybe I should lower the scope and only add finding friends for school and dorms 
- Only add working harder for school, so I can get this complete 

Add the ability to change relationships
Create a ending page that says your time in school is over 
Messages saying you have reached the limit of dormmates, clubs, internships, jobs 
*/


