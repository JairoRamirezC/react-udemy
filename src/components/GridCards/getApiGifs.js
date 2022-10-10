export const getDataApi = async (category) => {
  // console.log('category >>>', category)
  const url = `https://api.giphy.com/v1/gifs/search?api_key=T1iptJBPq4JpERglZNW4bRL1FyEnHWBF&q=${category}&limit=10`
  const resp = await fetch(url)
  const {data} = await resp.json()
  const gifs = data.map(({id, title, images}) => ({
    id,
    title,
    images: images.downsized_medium.url
  }));

  // console.log('gifs getAPI >>>', gifs);

  return gifs
}