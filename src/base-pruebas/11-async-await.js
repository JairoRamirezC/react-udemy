

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {
    try {
        const apiKey = 'Nd37WkEL7jW4I3O2HZuIMLGLk7LL7BJY';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp?.json();
        const { url } = data?.images?.original;
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro el gif';
    }
}

// getImagen();



