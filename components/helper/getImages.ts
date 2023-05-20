const searchImages = async (query: string, perPage: number) => {
  const accessKey = "J1EeTO8XWDrRXYLBdj-MnzZIUc1Lryx8cI9gLceh1B8";

  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${accessKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return await data.results;
  } catch (error) {
    console.error(error);
  }
};
export default searchImages;
