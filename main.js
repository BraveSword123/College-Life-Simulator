// Opening 
let firstMain; 
let lastMain; 
let genderMain; 
let majorMain; 
let set;  
let finance = 3000; 
let i = 0; 
let semester = "Fall"; 
let dormMates = []; 
let clubs = []; 
let friends = []; 
let jobs = []; 
let friend = []; 
let enemies = []; 
let partner = "None"; 
let hasInternship = false;  
let grade; // May remove later
let dormCounter = 0;  
let jobCounter = 0; 
let clubCounter = 0; 
let friendCounter = 0; 
let enemyCounter = 0; 
let classMates = ["Ava Morgan", "Liam Carter", "Chloe Bennett", "Ethan Brooks", "Isla Hayes", "Nathan Reyes", "Maya Dawson", "Adrian Foster"]; 
let shipHolder; 

let first = 1; // Test

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
    document.getElementById("first_options").textContent = "Housing";
    document.getElementById("second_options").textContent = "Internship(s)";
    document.getElementById("third_options").textContent = "Part Time Job(s)";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
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
        document.getElementById("first_options").textContent = "Current Internship"; 
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
    document.getElementById("second_options").textContent = "Current Jobs";
    document.getElementById("third_options").textContent = " ";
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
   /* for(let i = 0; i <= 8; i++){
        // If the previous is not equal to " ", then go to the next div and write our next friend 
        // Start with friends, if we reach the end of the friend array, start enemies, if we reach the end of enemies, write down partner 
        } */ 

    if(friend.length === 0 && enemies.length === 0 && partner === "None"){
        document.getElementById("first_options").textContent = "No Relationships"; 
        document.getElementById("second_options").textContent = " ";
        document.getElementById("third_options").textContent = " ";
        document.getElementById("fourth_options").textContent = " ";
        document.getElementById("fifth_options").textContent = " ";
        document.getElementById("sixth_options").textContent = " ";
        document.getElementById("seventh_options").textContent = " ";
        document.getElementById("eighth_options").textContent = " ";

    }
    console.log(friend.size); 
    console.log(enemies.size); 
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
    // Change to Array Later 
   else if(document.getElementById("second_options").textContent === "Current Clubs"){
        if(clubs.length === 0){
            document.getElementById("title_options").textContent = "Current Club";
            document.getElementById("first_options").textContent = "No Current Clubs"; 
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(clubs.length === 1){
            document.getElementById("title_options").textContent = "Current Club";
            document.getElementById("first_options").textContent = clubs[0];
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(clubs.length === 2){
            document.getElementById("title_options").textContent = "Current Clubs";
            document.getElementById("first_options").textContent = clubs[0];
            document.getElementById("second_options").textContent = clubs[1]; 
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(clubs.length === 3){
            document.getElementById("title_options").textContent = "Current Clubs";
            document.getElementById("first_options").textContent = clubs[0];
            document.getElementById("second_options").textContent = clubs[1]; 
            document.getElementById("third_options").textContent = clubs[2];
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(clubs.length === 4){
            document.getElementById("title_options").textContent = "Current Clubs";
            document.getElementById("first_options").textContent = clubs[0];
            document.getElementById("second_options").textContent = clubs[1]; 
            document.getElementById("third_options").textContent = clubs[2];
            document.getElementById("fourth_options").textContent = clubs[3];
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(clubs.length === 5){
            document.getElementById("title_options").textContent = "Current Clubs";
            document.getElementById("first_options").textContent = clubs[0];
            document.getElementById("second_options").textContent = clubs[1]; 
            document.getElementById("third_options").textContent = clubs[2];
            document.getElementById("fourth_options").textContent = clubs[3];
            document.getElementById("fifth_options").textContent = clubs[4];
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
    } 
      // Change to Array Later 
    else if(document.getElementById("second_options").textContent === "Current Dormmates"){  
        if(dormMates.length === 0){
            document.getElementById("title_options").textContent = "Current Dormmates";
            document.getElementById("first_options").textContent = "No Current Dormmates"; 
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(dormMates.length === 1){
            document.getElementById("title_options").textContent = "Current Dormmates";
            document.getElementById("first_options").textContent = dormMates[0];
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " "; 
        }
        else if(dormMates.length === 2){
            document.getElementById("title_options").textContent = "Current Dormmates";
            document.getElementById("first_options").textContent = dormMates[0];
            document.getElementById("second_options").textContent = dormMates[1]; 
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(dormMates.length === 3){
            document.getElementById("title_options").textContent = "Current Dormmates";
            document.getElementById("first_options").textContent = dormMates[0];
            document.getElementById("second_options").textContent = dormMates[1]; 
            document.getElementById("third_options").textContent = dormMates[2];
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(dormMates.length === 4){
            document.getElementById("title_options").textContent = "Current Dormmates";
            document.getElementById("first_options").textContent = dormMates[0];
            document.getElementById("second_options").textContent = dormMates[1]; 
            document.getElementById("third_options").textContent = dormMates[2];
            document.getElementById("fourth_options").textContent = dormMates[3];
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(dormMates.length === 5){
            document.getElementById("title_options").textContent = "Current Dormmates";
            document.getElementById("first_options").textContent = dormMates[0];
            document.getElementById("second_options").textContent = dormMates[1]; 
            document.getElementById("third_options").textContent = dormMates[2];
            document.getElementById("fourth_options").textContent = dormMates[3];
            document.getElementById("fifth_options").textContent = dormMates[4];
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
    } 
    else if(document.getElementById("second_options").textContent === "Current Jobs"){
        if(jobs.length === 0){
            document.getElementById("title_options").textContent = "Current Jobs";
            document.getElementById("first_options").textContent = "No Current Jobs"; 
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(jobs.length === 1){
            document.getElementById("title_options").textContent = "Current Jobs";
            document.getElementById("first_options").textContent = jobs[0];
            document.getElementById("second_options").textContent = " ";
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(jobs.length === 2){
            document.getElementById("title_options").textContent = "Current Jobs";
            document.getElementById("first_options").textContent = jobs[0];
            document.getElementById("second_options").textContent = jobs[1]; 
            document.getElementById("third_options").textContent = " ";
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
        }
        else if(jobs.length === 3){
            document.getElementById("title_options").textContent = "Current Jobs";
            document.getElementById("first_options").textContent = jobs[0];
            document.getElementById("second_options").textContent = jobs[1]; 
            document.getElementById("third_options").textContent = jobs[2];
            document.getElementById("fourth_options").textContent = " ";
            document.getElementById("fifth_options").textContent = " ";
            document.getElementById("sixth_options").textContent = " ";
            document.getElementById("seventh_options").textContent = " ";
            document.getElementById("eighth_options").textContent = " ";
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
        else if(document.getElementById("third_options").textContent === "Start Dating" && partner != shipHolder){
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        
            partner = shipHolder; 
            console.log(partner); 
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

    stat = new main(firstMain, lastMain, genderMain, majorMain); 
   
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
    ++i; 
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
}
else if(i === 16){ // Was 50 Before 
console.log("Add Div to End Game Here"); 
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
    - Make Friends (Probably will just have a randomized name rather than a list)
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

If I want to mae this game easier to program, I am going yo need a limited number of friends 
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
*/


