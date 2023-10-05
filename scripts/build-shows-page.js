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
            showCard.setAttribute('id','show-card');
            const showHeader=document.createElement("div")
            var showDate = document.createElement("p");
            const showVenue = document.createElement("p");
            const showLocation = document.createElement("p");
            const showButton = document.createElement("button")
            //assign text
            
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
            document.querySelector("main").appendChild(showCard);
            
        }
    
displayShows(showsArr[i]);
}

const x = document.querySelectorAll("article");
x.forEach((c) => {
    
    c.addEventListener("click", (e) => {
        x.forEach((d)=>{
            d.style.backgroundColor='white';
            });
        console.log(e.currentTarget.id)
        c.style.backgroundColor='black';
    });
});
