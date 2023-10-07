// const heroSub = document.querySelector("hero-content__subtitle");
const showsArr = [
    {
        date:"Mon Sept 06 2021",
        venue:"Ronald Lane",
        location:"San Francisco, CA"
    },
    {
        date:"Tue Sept 21 2021",
        venue:"Pier 3 East",
        location:"San Francisco, CA"        },
    {
        date:"Fri Oct 15 2021",
        venue:"View Lounge",
        location:"San Francisco, CA"    },
    {
        date:"Sat Nov 06 2021",
        venue:"Hyatt Agency",
        location:"San Francisco, CA"    },
    {
        date:"Fri Nov 26 2021",
        venue:"Moscow Center",
        location:"San Francisco, CA"    },
    {
        date:"Wed Dec 15 2021",
        venue:"Press Club",
        location:"San Francisco, CA"
        },
    
]

const titleArr = [
    "Date: ", "Venue: ", "Location: "
]
// titleArr.forEach((b)=>{
//     console.log(b);
//     b.classList.add("title-array");

// }

// );
// titleArr.classList.add("title-array");
const shows = document.createElement("div");
shows.setAttribute('id',"shows");
const showCardTitle = document.createElement("h2");
showCardTitle.innerText="Shows";
        showCardTitle.style.fontSize = '$mobile-section-header--size';
        showCardTitle.style.fontFamily = 'AvenirNextBold';
        showCardTitle.style.color='$navbar-color';
shows.innerText = "";
shows.appendChild(showCardTitle)

for (let i=0;i<showsArr.length;i++){
    function displayShows(showObj){
            console.log("hi")
            //definitions
            const showCard = document.createElement("article");
            // showCard.setAttribute('id','show-card');
            const showHeader=document.createElement("div")
            // const showHeader2=document.createElement("div")
            // const showHeader3=document.createElement("div")
            var showDate = document.createElement("p");
            const showHeaderDate = document.createElement("div");
            const showHeaderVenue = document.createElement("div");
            const showHeaderLoc = document.createElement("div");
            const showVenue = document.createElement("p");
            const showLocation = document.createElement("p");
            const showButton = document.createElement("button")
            //assign text
            showHeaderDate.innerText=titleArr[0];
            console.log(showHeaderDate)
            showHeaderDate.classList.add("title-array");
            showHeaderVenue.innerText=titleArr[1];
            showHeaderVenue.classList.add("title-array");
            showHeaderLoc.innerText=titleArr[2];
            showHeaderLoc.classList.add("title-array");
            showButton.classList.add("button")
            
            // showHeader2.appendChild(showHeaderDate)
            // showHeader2.appendChild(showDate)
            // showHeader2.appendChild(showHeaderVenue)
            // showHeader2.appendChild(showHeaderVenue)
            // console.log(showHeader2)
            // showHeader2.classList.add("show-header2")

            
            // showHeader3.appendChild(showVenue)
            // showHeader3.appendChild(showLocation)
            
            // showHeaders.classList.add("title-array");
            showHeaderDate.textContent
            showDate.innerText=showObj.date;
            // showDate.appendChild(showObj.date);
            showVenue.innerText = showObj.venue;
            showLocation.innerText = showObj.location;
            showButton.innerText = "BUY TICKETS";
            showDate.style.fontWeight='700' ;
            showVenue.style.fontWeight='400';
            // showDate.style.color='$navbar-color';
            showHeader.classList.add("show-header");
            
            // showHeader3.classList.add("show-header3")
            // showHeader.style.justifyContent="space-between";
            showHeader.appendChild(showHeaderDate);
            showHeader.appendChild(showDate);
            showHeader.appendChild(showHeaderVenue);
            showHeader.appendChild(showVenue);
            showHeader.appendChild(showHeaderLoc);
            showHeader.appendChild(showLocation);
            showCard.appendChild(showHeader);
            // showCard.appendChild(showHeader2)
            // showCard.appendChild(showHeader3)
            showCard.appendChild(showButton);
            shows.appendChild(showCard);
            document.querySelector("main").appendChild(shows);
            // document.querySelector("main").appendChild(showCard);
            showCard.classList.add("show-card");
            
        }
    
displayShows(showsArr[i]);
}
console.log("show-card");
const x = document.querySelectorAll("article");
i=0;
let prevC={};
x.forEach((c) => {
    let solid = false;

    c.addEventListener("click", (e) => {
        if (i>0){
            console.log(prevC);
            prevC.classList.remove('active-state');
            
        }
        
       
        solid = true;
        prevC = Object.assign(c);  
        c.classList.toggle("active-state");
        
        i++;
        
        
    });
     
});


