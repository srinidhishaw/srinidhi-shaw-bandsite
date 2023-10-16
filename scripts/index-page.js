import BandSiteAPI from './band-site-api.js';

let apiKey="e81de9cb-7131-4a10-a47d-5300c33f5e3d";
const seeComments = new BandSiteAPI(apiKey);
let commentsArr=[];
// let likeCount =0;
// const commentsArr = [
//     {
//         name:"Connor Walton",
//         timeStamp:"02/17/2021",
//         comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//     },
//     {
//         name:"Emilie Beach",
//         timeStamp:"01/09/2021",
//         comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name:"Miles Acosta",
//         timeStamp:"12/20/2020",
//         comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     },
    
// ]
// console.log(commentArray);

async function importComments(){
  try {
    commentsArr=[]
      const commentPromise = await seeComments.getComments();
      
      const commentArr = commentPromise.data;
      console.log(commentArr)
      commentArr.forEach(key => {
        const date = new Date(key.timestamp);
        const time = date.getDate() + "/"+(date.getMonth()+1)  + "/"+date.getFullYear();
        const comObj={
          name:key.name,
          timeStamp: time,
          comment: key.comment,
          id:key.id,
          likes:key.likes
        }
        commentsArr.push(comObj);
        
        
    });
    for(let i=commentsArr.length-1;i>=0;i--){
      displayComment(commentsArr[i]);
    }
    
  } catch (error) {
    console.error(error);
}
}
importComments();
    
function createForm(){
  
}
  const titleArr = {
    name:"Name: ", comment:"Comment: "
  }
  const comments = document.createElement("section");
  
  const formContainer = document.createElement("section");
  
  const getStartedTitle = document.createElement('h1');
  getStartedTitle.innerText="Join the Conversation";
  
  getStartedTitle.classList.add("getstarted-title");
  const commentForm = document.createElement('form');
  const userImg = document.createElement("img");
  const inputName = document.createElement("input");
  const inputCom= document.createElement("input");
  const inputButton = document.createElement("input");
  const card = document.createElement("div")
  card.classList.add("card");
  const titleName = document.createElement("p")
  const titleComment=document.createElement("p")
  titleName.innerText=titleArr.name;
  titleComment.innerText= titleArr.comment;
  titleName.classList.add("titles")
  titleComment.classList.add("titles")
  
  inputName.type = "text";
  inputCom.type = "textarea";
  inputCom.id = 'comment';
inputCom.placeholder = 'Add a new comment';
  inputName.name = "name";
  // inputCom.name = "comment";
  userImg.setAttribute("src","../assets/Images/Mohan-muruge.jpg");
  
  userImg.classList.add("user-image");
  inputName.placeholder = "Enter your name";
  inputName.classList.add("input")
  inputCom.classList.add("input")
  inputCom.placeholder = "Add a new comment";
  inputCom.style.height="100px";
  inputButton.type = "submit";
  // inputButton.value = "COMMENT";
  inputButton.classList.add("input-button");
  commentForm.appendChild(userImg);
  card.appendChild(titleName)
  card.appendChild(inputName);
  card.appendChild(titleComment)
  card.appendChild(inputCom);
  card.appendChild(inputButton);
  
  commentForm.appendChild(card);
  formContainer.appendChild(commentForm);
  document.querySelector("main").appendChild(getStartedTitle);
  document.querySelector("main").appendChild(formContainer);
  commentForm.classList.add("comment-form");
  formContainer.classList.add("form-container");



    const submissionsArray = [];
    let showCom = false;
async function submitEvent(event){
      event.preventDefault();
      
      if(inputName.value !== ""){
        
        const name = inputName.value;
          const comment = inputCom.value;
          const date = new Date();
          const timeStamp = date.getDate() + "/"+(date.getMonth()+1)  + "/"+date.getFullYear();
          // + " @ "  
          // + date.getHours() + ":"  
          // + date.getMinutes() + ":" 
          // + date.getSeconds();
  
        const submissionData = {
          name,
          // timeStamp,
          comment
          
        };
        const postData = await seeComments.postComment(submissionData);
        console.log(postData)
        comments.innerText = "";
        importComments();
        
        
        
        commentForm.reset();
      }
      
    }
    commentForm.addEventListener("submit",submitEvent);
    async function delComment(event) {
      // Check if the clicked element is a delete button
      if (event.target.classList.contains('del-button')) {

        event.preventDefault();
        const comId = event.target.id;
          console.log("hi")
          const deleteId = await seeComments.deleteComment(comId);
        comments.innerText = "";
        importComments();
      }}

      document.addEventListener('click',delComment)

      async function likeComment(event) {
        
        if (event.target.classList.contains('like-button')) {
  
          event.preventDefault();
          const comId = event.target.id;
          if((commentsArr.find(obj => obj.id === comId)).likes<1){
            const likeId = await seeComments.likeComment(comId);
            console.log(likeId)
          }
          comments.innerText = "";
          importComments();
        }}
  
        document.addEventListener('click',likeComment)
    
comments.innerText = "";

async  function displayComment(commentObj){
            console.log("hi")
            const commentCard = document.createElement("article");
            const commentHeader1=document.createElement("div")
            const commentHeader2=document.createElement("div")
            const commentName = document.createElement("p");
            const commentTime = document.createElement("p");
            const commentText = document.createElement("p");
            const delButton = document.createElement("button");
            delButton.textContent="Delete"
            delButton.id=`${commentObj.id}`
            console.log(delButton.id)
            delButton.classList.add("del-button")
            delButton.classList.add("buttons");
            const likeButton = document.createElement("button");
            likeButton.classList.add("buttons");
            likeButton.textContent="Like"
            likeButton.id=`${commentObj.id}`
            likeButton.classList.add("like-button")
            const likeCounter = document.createElement("p");
            likeCounter.innerText="Likes: "+commentObj.likes;
            likeCounter.id=`${commentObj.id}`;
            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("button-div");
            buttonDiv.appendChild(delButton);
            buttonDiv.append(likeButton)
            buttonDiv.appendChild(likeCounter)
            const colorPlaceholder = document.createElement("div");
            const extraDiv=document.createElement("div");
            colorPlaceholder.style.backgroundColor = "#E1E1E1";
            
            commentCard.classList.add("comment-card");
            colorPlaceholder.classList.add("comment-image");
            
            commentName.innerText = commentObj.name;
            commentTime.innerText = commentObj.timeStamp;
            commentText.innerText = commentObj.comment;
            
            commentName.classList.add("comment-styles");
            commentText.classList.add("comment-styles")

            commentName.style.fontSize='$mobile-bodycopy--size' ;
            commentName.style.fontFamily='AvenirNextBold';
            commentName.style.color='$navbarcolor';
            commentCard.appendChild(colorPlaceholder);
            commentHeader1.appendChild(commentName);
            commentHeader1.appendChild(commentTime);
            commentHeader1.classList.add("header-style");
            
            commentCard.appendChild(commentHeader1);
            commentCard.appendChild(commentText);
            
            extraDiv.appendChild(colorPlaceholder);
            extraDiv.appendChild(commentCard)
            comments.appendChild(extraDiv);
            extraDiv.classList.add("extra-div")
            commentCard.appendChild(buttonDiv);
            // extraDiv.appendChild(likeButton);
            comments.classList.add("comments");
            document.querySelector("main").appendChild(comments);
            
        }
        for (let i=commentsArr.length-1;i>=0;i--){
          // console.log("hi")
          displayComment(commentsArr[i]);
          }        
    
  
// commentForm.addEventListener("submit", submitEvent);
    
  

const band = new BandSiteAPI();


// console.log(commentsArr)
    
    
    
    
    
    // window.globalFunction = displayComment;

// const commentsArr = [
//     {
//         name:"Connor Walton",
//         timeStamp:"02/17/2021",
//         comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
//     },
//     {
//         name:"Emilie Beach",
//         timeStamp:"01/09/2021",
//         comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name:"Miles Acosta",
//         timeStamp:"12/20/2020",
//         comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     },
    
// ]




// commentForm.addEventListener("submit", function (event) {
    
//   event.preventDefault();
// }

// console.log(comments);
 


