
// ?api_key=<your_api_key_here>
// {"api_key":"03ae98ad-15f5-4aae-b471-58102c9276f5"}
// const apiUrl ="https://project-1-api.herokuapp.com/comments?api_key=03ae98ad-15f5-4aae-b471-58102c9276f5";

// async function fetchComments(){
//     try{
//         const commentArr = await axios.get(apiUrl);
//     console.log(commentArr.data);
//     }
//     catch(error){
//         console.log("Error");
//     }
    
// }

// fetchComments();

class BandSiteAPI{
    constructor(apiKey){
        this.apiKey = "b1698d1c-8ba4-4a9e-beb7-0a5e27348a39";
        this.baseUrl = "https://project-1-api.herokuapp.com/";
    }

    async postComment(com){
        try{
        const response = await fetch(this.baseUrl+"comments"+"?api_key="+this.apiKey, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(com),
        });
    
        return await response.json();
    }
    catch{
        console.error();
    }        

    }

    async deleteComment(id){
        try{
            const deleteCom = await axios.delete(this.baseUrl+"comments/"+id+"?api_key="+this.apiKey);
        return deleteCom.json
        }
        catch{
            console.error();
        }
        
    }
    // const onPageLoad = async () => {
    //     const response = await fetch(`/api/project/projects`, {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //     })
        
    //     if (response.ok) {
    //         console.log(response.json())
    
    //     } else {
    //         console.error(err)
    //     }
    // }
    
    // onPageLoad();

    async getComments(){
        try{
            
            const commentArr = await axios.get(this.baseUrl+"comments"+"?api_key="+this.apiKey);
                return(commentArr);
        }
        catch{
            console.error();
        }

    }
    
    async getShowDates(){
        try{
            const showDateArr = await axios.get(this.baseUrl+"showdates"+"?api_key="+this.apiKey);
            // const date = new Date(timestamp);
            console.log(showDateArr.data);
        }
        catch(error){
            console.error();
        }
    }

   async getShows(){
        try{
            const showsArr = await axios.get(this.baseUrl+"shows"+"?api_key="+this.apiKey);
            console.log(showsArr.data);
            
        }
        catch(error){
            console.error();
        }

    }
}
const seeShows = new BandSiteAPI()

// console.log(seeShows.getShowDates())
// console.log(seeShows.getShows())
const newcom = 
{
    "name": "Nigel",
    "comment": "What a cool site"
};

// console.log(seeShows.deleteComment("e7e8ef59-c27c-42e9-9de3-f99fc99256d2"))
// console.log(seeShows.deleteComment("48a64df0-46ca-48d9-b547-94467d799a56"))
// console.log(seeShows.deleteComment("473179f2-1afa-4608-84ac-a71dc43346c5"))
// console.log(seeShows.deleteComment("ed28620b-6fc3-49b5-b168-32dbb3573f8a"))
// console.log(seeShows.deleteComment("81f0f615-223e-468f-86b3-5b67dfd1b0d7"))
// console.log(seeShows.deleteComment("6326432a-4804-49cc-a73c-e6870be0594b"))
// console.log(seeShows.deleteComment("65a6e690-e34a-4ce5-b669-fd4035209e8d"))
// console.log(seeShows.deleteComment("7b70b012-9b7c-413f-934b-8a7c6d7158bf"))
// console.log(seeShows.deleteComment("5b5580cd-cea6-49ea-b10b-62296e913391"))
// console.log(seeShows.deleteComment("58ea0c9a-ee5c-44c7-bcff-85b0ccc2c371"))
// console.log(seeShows.deleteComment("8e8934cf-3566-4560-9f06-876061cca431"))
// console.log(seeShows.deleteComment("897392fa-49a1-42e8-9366-7620b54822ca"))
// console.log(seeShows.deleteComment("bf25c665-eac7-49e9-8b58-8a9924cdaa4b"))

console.log(seeShows.getComments())

export default BandSiteAPI;