import React, { useEffect, useState } from "react";
// import axios from 'axios';

function Trending() {
  const [animeList, setanimeList] = useState();

  //  useEffect(()=>
  //  {
  //     axios.get('https://api.jikan.moe/v4/anime?q=&sfw').then(res=>
  //     {
  //         setanimelist(res.data.results);
  //     })
  //     .catch(err=>{
  //         console.log(err);
  //     })
  //  },[]);
  useEffect(() => {
    getlist();
  }, []);

  async function getlist() {
    try {
      const url = `https://api.jikan.moe/v4/anime?q=&sfw`;
      const res = await fetch(url);
      const resJson = await res.json();
      setanimeList(resJson.results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div>
      {animeList?.map((anime) => (
        <div key={anime.mal_id}>
            <h2>{anime.title}</h2>
          <img src={anime.image}/>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Trending;
