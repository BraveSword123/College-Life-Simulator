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
let interns = []; 
let jobs = []; 
let grade; // May remove later
let dormCounter = 0;  

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
    document.getElementById("second_options").textContent = "Current Dorms";
    document.getElementById("third_options").textContent = " ";
    document.getElementById("fourth_options").textContent = " ";
    document.getElementById("fifth_options").textContent = " ";
    document.getElementById("sixth_options").textContent = " ";
    document.getElementById("seventh_options").textContent = " ";
    document.getElementById("eighth_options").textContent = " ";
}
function firstOption(){
    if(document.getElementById("first_options").textContent === "Join Clubs"){
        document.getElementById("title_options").textContent = "Find Clubs";
        document.getElementById("first_options").textContent = "Programming Club";
        document.getElementById("second_options").textContent = "Social Justice Club";
        document.getElementById("third_options").textContent = "Debate Club";
        document.getElementById("fourth_options").textContent = "Art Club";
        document.getElementById("fifth_options").textContent = "Finance Club";
        document.getElementById("sixth_options").textContent = "Psychology Club";
        document.getElementById("seventh_options").textContent = "Drama Club";
        document.getElementById("eighth_options").textContent = "Music Club";
    }

    else if(document.getElementById("first_options").textContent === "Programming Club" && clubs.includes("Programming Club") === false){ // Want to add something like if PC isn't in club 
        clubs.push("Programming Club");
        console.log(clubs); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
}

else if(document.getElementById("first_options").textContent === "Find Dormmates"){
    document.getElementById("title_options").textContent = "Dorms";
    document.getElementById("first_options").textContent = "Ava Morgan";
    document.getElementById("second_options").textContent = "Liam Carter";
    document.getElementById("third_options").textContent = "Chloe Bennett";
    document.getElementById("fourth_options").textContent = "Ethan Brooks";
    document.getElementById("fifth_options").textContent = "Isla Hayes";
    document.getElementById("sixth_options").textContent = "Nathan Reyes";
    document.getElementById("seventh_options").textContent = "Maya Dawson";
    document.getElementById("eighth_options").textContent = "Adrian Foster";
}

else if(document.getElementById("first_options").textContent === "Ava Morgan" && dormMates.includes("Ava Morgan") === false && dormCounter <= 5){ // Want to add something like if PC isn't in club 
    dormMates.push("Ava Morgan");
    console.log(dormMates); 
    document.getElementById("main_nav").style.display = 'block';
    document.getElementById("options_div").style.display = 'none';
    ++dormCounter;
    console.log(dormCounter);  
}
}

function secondOption(){
    if(document.getElementById("second_options").textContent === "Social Justice Club" && clubs.includes("Social Justice Club") === false){
        clubs.push("Social Justice Club");
        console.log(clubs); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
    }
    else if(document.getElementById("second_options").textContent === "Liam Carter" && dormMates.includes("Liam Carter") === false && dormCounter <= 5){ // Want to add something like if PC isn't in club 
        dormMates.push("Liam Carter");
        console.log(dormMates); 
        document.getElementById("main_nav").style.display = 'block';
        document.getElementById("options_div").style.display = 'none';
        ++dormCounter; 
        console.log(dormCounter); 
    }
     /*   else if (document.getElementById("second_options").textContent === "Current Clubs"){
    } */ 
    }

    function thirdOption(){
        if(document.getElementById("third_options").textContent === "Debate Club" && clubs.includes("Debate Club") === false){
            clubs.push("Debate Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(document.getElementById("third_options").textContent === "Chloe Bennett" && dormMates.includes("Chloe Bennett") === false && dormCounter <= 5){ // Want to add something like if PC isn't in club 
            dormMates.push("Chloe Bennett");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
    }

    function fourthOption(){
        if(document.getElementById("fourth_options").textContent === "Art Club" && clubs.includes("Art Club") === false){
            clubs.push("Art Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(document.getElementById("fourth_options").textContent === "Ethan Brooks" && dormMates.includes("Ethan Brooks") === false  && dormCounter <= 5){ // Want to add something like if PC isn't in club 
            dormMates.push("Ethan Brooks");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter);
        }
    }

    function fifthOption(){
        if(document.getElementById("fifth_options").textContent === "Finance Club" && clubs.includes("Finance Club") === false){
            clubs.push("Finance Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(document.getElementById("fifth_options").textContent === "Isla Hayes" && dormMates.includes("Isla Hayes") === false  && dormCounter <= 5){ 
            dormMates.push("Isla Hayes");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
    }

    function sixthOption(){
        if(document.getElementById("sixth_options").textContent === "Psychology Club" && clubs.includes("Psychology Club") === false){
            clubs.push("Psychology Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(document.getElementById("sixth_options").textContent === "Nathan Reyes" && dormMates.includes("Nathan Reyes") === false  && dormCounter <= 5){ 
            dormMates.push("Nathan Reyes");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); // Need to add finance system 
        }
    }

    function seventhOption(){
        if(document.getElementById("seventh_options").textContent === "Drama Club" && clubs.includes("Drama Club") === false){
            clubs.push("Drama Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(document.getElementById("seventh_options").textContent === "Maya Dawson" && dormMates.includes("Maya Dawson") === false  && dormCounter <= 5){ 
            dormMates.push("Maya Dawson");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
        }
    }

    function eighthOption(){
        if(document.getElementById("eighth_options").textContent === "Music Club" && clubs.includes("Music Club") === false){
            clubs.push("Music Club");
            console.log(clubs); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
        }
        else if(document.getElementById("seventh_options").textContent === "Adrian Foster" && dormMates.includes("Adrian Foster") === false  && dormCounter <= 5){ 
            dormMates.push("Adrian Foster");
            console.log(dormMates); 
            document.getElementById("main_nav").style.display = 'block';
            document.getElementById("options_div").style.display = 'none';
            ++dormCounter; 
            console.log(dormCounter); 
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
else if(i === 50){
console.log("Add Div to End Game Here"); 
}
}


// End of Opening 



/* Errors: 
- Hover and Active of options_div still there 
- Need Error Message for when you don't put first and last name 
- Need Error Message for Pressing a Button Twice 
*/ 



