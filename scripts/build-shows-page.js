// const heroSub = document.querySelector("hero-content__subtitle");
const showsArr = [
    {
        date:"Mon Sept 06 2021",
        venue:"Ronald Lane",
        location:"San Francisco, CA",
        btn: "Buy Tickets" 
    },
    {
        date:"Tue Sept 21 2021",
        venue:"Pier 3 East",
        location:"San Francisco, CA",
        btn: "Buy Tickets" 
        },
    {
        date:"Fri Oct 15 2021",
        venue:"View Lounge",
        location:"San Francisco, CA",
        btn: "Buy Tickets"     
    },
    {
        date:"Sat Nov 06 2021",
        venue:"Hyatt Agency",
        location:"San Francisco, CA",
        btn: "Buy Tickets"     
    },
    {
        date:"Fri Nov 26 2021",
        venue:"Moscow Center",
        location:"San Francisco, CA",
        btn: "Buy Tickets"     
    },
    {
        date:"Wed Dec 15 2021",
        venue:"Press Club",
        location:"San Francisco, CA",
        btn: "Buy Tickets"    
    },
    
]
const shows = document.createElement("div");
shows.innerText = "";
for (let i=0;i<showsArr.length;i++){
function displayShows(showObj){
        console.log("hi")
        //definitions
        const showCard = document.createElement("article");
        const showHeader=document.createElement("div")
        var showDate = document.createElement("p");
        const showVenue = document.createElement("p");
        const showLocation = document.createElement("p");
        const showButton = document.createElement("button")
        //assign text
        const textNode = document.createTextNode("Date:");
        textNode.textContent+=showObj.date;
        showDate.innerText+="Date:\n"+showObj.date;
        // showDate.appendChild(showObj.date);
        showVenue.innerText += "Venue:\n"+ showObj.venue;
        showLocation.innerText += "Location:\n"+showObj.location;
        showButton.innerText = "BUY TICKETS";


        showDate.style.fontSize='$mobile-bodycopy--size' ;
        showDate.style.fontFamily='AvenirNextBold';
        showDate.style.color='$navbar-color';
        showCard.style.display='block';
        showHeader.style.display='block';
        // showHeader.style.justifyContent="space-between";
        showHeader.appendChild(showDate);
        showHeader.appendChild(showVenue);
        showHeader.appendChild(showLocation);
        showCard.appendChild(showHeader);
       showCard.appendChild(showButton);
        shows.appendChild(showCard);
        document.querySelector("main").appendChild(shows);
        
    }
    
displayShows(showsArr[i]);
}