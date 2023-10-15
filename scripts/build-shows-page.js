import BandSiteAPI from './band-site-api.js';

let apiKey="e81de9cb-7131-4a10-a47d-5300c33f5e3d";
const seeShows = new BandSiteAPI(apiKey);
let showsArr=[];

// const showsArr = [
//     {
//         date:"Mon Sept 06 2021",
//         venue:"Ronald Lane",
//         location:"San Francisco, CA"
//     },
//     {
//         date:"Tue Sept 21 2021",
//         venue:"Pier 3 East",
//         location:"San Francisco, CA"        },
//     {
//         date:"Fri Oct 15 2021",
//         venue:"View Lounge",
//         location:"San Francisco, CA"    },
//     {
//         date:"Sat Nov 06 2021",
//         venue:"Hyatt Agency",
//         location:"San Francisco, CA"    },
//     {
//         date:"Fri Nov 26 2021",
//         venue:"Moscow Center",
//         location:"San Francisco, CA"    },
//     {
//         date:"Wed Dec 15 2021",
//         venue:"Press Club",
//         location:"San Francisco, CA"
//         },
    
// ]
async function importShows(){
    try {
      showsArr=[]
        const showPromise = await seeShows.getShowDates();
        
        const showArr = showPromise.data;
        console.log(showArr)
        showArr.forEach(key => {
          let dateShow = new Date(key.date);
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateShow= (dateShow.toLocaleDateString('en-US', options)).replace(/,/, '');
            let dayOf = (dateShow.split(" ")[0]).substr(0,3);
            let monthOf = (dateShow.split(" ")[1]).substr(0,3);
            dateShow = dateShow.replace(dateShow.split(' ')[0], dayOf);
            dateShow = dateShow.replace(dateShow.split(' ')[1], monthOf);
            // console.log(dateShow)
          const showObj={
            date: dateShow,
            venue:key.place,
            location:key.location
          }
          showsArr.push(showObj);
          
          
      });
      for (let i=0;i<showsArr.length;i++){
        displayShows(showsArr[i]);
      }
    //   for(let i=showsArr.length-1;i>=0;i--){
    //     displayComment(showsArr[i]);
    //   }
      
    } catch (error) {
      console.error(error);
  }
  }
  importShows();
      
const titleArr = {
    date:"Date: ", venue:"Venue: ", location:"Location:", empty:""
}
const showsContainer = document.createElement("div");
const shows = document.createElement("div");
shows.setAttribute('id',"shows");
const showCardTitle = document.createElement("h2");
const showCardTitle2 = document.createElement("h2");
showCardTitle.innerText="Shows";
showCardTitle2.innerText="Shows";
// showCardTitle2.innerText+= "Date:" +;
        showCardTitle2.style.fontSize = '$mobile-section-header--size';
        showCardTitle2.style.fontFamily = 'AvenirNextBold';
        showCardTitle2.style.color='$navbar-color';
        showCardTitle2.classList.add("showcard-title2")
        showCardTitle.classList.add("showcard-title")
shows.innerText = "";
showsContainer.appendChild(showCardTitle)

const showHeader2=document.createElement("div")
const showHeaderDate = document.createElement("p");
const showHeaderVenue = document.createElement("p");
const showHeaderLoc = document.createElement("p");

showHeader2.appendChild(showHeaderDate)
showHeader2.appendChild(showHeaderVenue)
showHeader2.prepend(showCardTitle2)
showHeader2.appendChild(showHeaderLoc)
showsContainer.classList.add("shows-container");
showsContainer.appendChild(showHeader2);


showHeader2.classList.add("show-header2")
// for (let i=0;i<showsArr.length;i++){
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
            showHeaderDate.innerText=titleArr.date;
            showHeaderDate.classList.add("title-array");
            showHeaderVenue.innerText=titleArr.venue;
            showHeaderVenue.classList.add("title-array");
            showHeaderLoc.innerText=titleArr.location;
            showHeaderLoc.classList.add("title-array");
            

            showButton.classList.add("button")
        
            showHeaderDate.textContent
            showDate.innerText=showObj.date;
            showVenue.innerText = showObj.venue;
            showLocation.innerText = showObj.location;
            showButton.innerText = "BUY TICKETS";
            showDate.style.fontWeight='700' ;
            showVenue.style.fontWeight='400';
            showHeader.classList.add("show-header");
            const showHeaderDate2 = document.createElement("p");
            const showHeaderVenue2 = document.createElement("p");
            const showHeaderLoc2 = document.createElement("p");
            showHeaderDate2.innerText=titleArr.date;
            console.log(showHeaderDate)

            showHeaderDate2.classList.add("title-array2");
            showHeaderVenue2.innerText=titleArr.venue;
            showHeaderVenue2.classList.add("title-array2");
            showHeaderLoc2.innerText=titleArr.location;
            showHeaderLoc2.classList.add("title-array2");


            showHeader.appendChild(showHeaderDate2);
            showHeader.appendChild(showDate);
            showHeader.appendChild(showHeaderVenue2);
            showHeader.appendChild(showVenue);
            showHeader.appendChild(showHeaderLoc2);
            showHeader.appendChild(showLocation);
            showHeader.appendChild(showButton);
            showCard.appendChild(showHeader);
            
            showsContainer.appendChild(showCard);
            shows.appendChild(showsContainer);
            document.querySelector("main").appendChild(shows);
            // document.querySelector("main").appendChild(showCard);
            showCard.classList.add("show-card");
            
        }
    
// displayShows(showsArr[i]);
// }
// console.log("show-card");
const x = document.querySelectorAll("article");
let i=0;
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


