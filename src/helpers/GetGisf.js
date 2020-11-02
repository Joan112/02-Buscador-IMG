export const  getGisf = async (categorias) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categorias)}&limit=10&api_key=HHzb8jzvtl3DhGuABthPP7RmwAKPrUh1`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    console.log(gifs)

    return gifs
}