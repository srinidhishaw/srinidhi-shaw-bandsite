
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

    async likeComment(comId){
        try{
            const likeCom = await axios.put(this.baseUrl+"comments/"+`${comId}`+"/like"+"?api_key="+this.apiKey)
            //     method: 'PUT', 
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(comId),
            // });
            // console.log(updatedData)
            return likeCom
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


// console.log(seeShows.deleteComment("bf25c665-eac7-49e9-8b58-8a9924cdaa4b"))

console.log(seeShows.getComments())

export default BandSiteAPI;