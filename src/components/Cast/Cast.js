import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FetchMovieCastAPI from '../../services/FetchMovieCastAPI';
import img from '../../img/person_img.png';

export default function Cast(){
    const { id } = useParams();
    const [ cast, setCast ] = useState(null);

    useEffect(() => {
            FetchMovieCastAPI(id).then(data => setCast(data.cast));
    },[id])
    console.log(cast)
    return(
        <ul>
            {cast && (
                cast.map(c => {return(
                    <li key={c.name}>
                <img src={c.profile_path?"https://image.tmdb.org/t/p/original/"+c.profile_path:img} alt={c.name} width="150" height="200"/>
                <p>{c.name}</p>
                <p>{c.character}</p>
            </li>
                )})
            
            )}
        </ul>
    )
}


