const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "1d1d8844ae1e746c459e7be85c15c840",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
