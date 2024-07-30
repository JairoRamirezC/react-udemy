
const ApiGifs = async (categories) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Nd37WkEL7jW4I3O2HZuIMLGLk7LL7BJY&q=${categories}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gift = data.map(item => ({
      id: item?.id,
      title: item?.title,
      urlImage: item?.images.downsized_medium.url
    }));

    return gift;
  } catch (error) {
    console.log('Error >>> ', error);
  }
}

export default ApiGifs;