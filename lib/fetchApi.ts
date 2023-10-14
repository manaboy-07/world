const BASE_URL = 'https://restcountries.com/v3.1'

export async function getWorld(url: string){
    try{
        const searchUrl = `${BASE_URL}/${url}`
        const response = await fetch(searchUrl)
        console.log(searchUrl)
        
        return response.json()
    }catch(err){
       console.log(err)
    }
    
}