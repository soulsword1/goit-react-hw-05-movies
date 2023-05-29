export default function FetchMovieByTitleAPI(query) {
    const api_key = '9852f66ffe27e9e772243ba7caefae3c';
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=1`;
  
    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(new Error('Информация о фильме не найдена'));
    });
  }

