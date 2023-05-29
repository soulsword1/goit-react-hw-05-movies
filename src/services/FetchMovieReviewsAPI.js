export default function FetchMovieReviewsAPI(id) {
  const api_key = '9852f66ffe27e9e772243ba7caefae3c';

  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&page=1`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Информация о фильме не найдена'));
  });
}
