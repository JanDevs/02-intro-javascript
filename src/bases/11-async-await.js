
const getImagen = async () => {
    
    try{
        const apiKey = 'n4KZZK848aHXx7PQbb8hzDefbPsjL8D6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = await data.images.original;
        const img = document.createElement( 'img' );
    
        img.src = url;
        document.body.append( img );
        console.log( data );
    }catch(e){
        console.error(e);
    }
}
getImagen();