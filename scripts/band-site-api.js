class BandSiteAPI{
    constructor(apiKey){
        this.apiKey = "e81de9cb-7131-4a10-a47d-5300c33f5e3d";
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
            
            return likeCom
        }
        catch{
            console.error();
        }
        
    }
    
    async getShowDates(){
        try{
            const showDateArr = await axios.get(this.baseUrl+"showdates"+"?api_key="+this.apiKey);
            
            return(showDateArr);
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

const newcom = 
{
    "name": "Nigel",
    "comment": "What a cool site"
};



console.log(seeShows.getComments())

export default BandSiteAPI;