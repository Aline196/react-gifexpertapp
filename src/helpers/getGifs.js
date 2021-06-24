

 export const getGifs = async (category) => {
    // Se obtienen las imagenes
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category)}&api_key=R9fJgdProJ7OljzDqoQa7r2uG2bbkttt&limit=10`;
    const resp = await fetch (url); //Esta sera la varible que va a recibir la respuesta
    const {data} = await resp.json();//La informacion que se recibe sera en formato json
    
    // Extraer informacion que necesitmaos de las imagenes y se retornara un nuevo objeto
    const gifs = data.map(img => {
        return{
            id:img.id,
            tittle: img.tittle,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}