export default function FetchTrendingMoviesAPI() {
  const api_key = '9852f66ffe27e9e772243ba7caefae3c';
  const page = 1;

  const searchParams = new URLSearchParams({
    api_key,
    page,
  });

  const url = `https://api.themoviedb.org/3/trending/all/day?${searchParams}`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Фильмы не найдены'));
  });
}


