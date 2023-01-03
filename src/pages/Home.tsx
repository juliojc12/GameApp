import axios from 'axios';
import { useEffect, useState } from 'react'
import { GameCard } from '../components/GameCard'
import { Navbar } from '../components/Navbar';
import { Games } from '../interfaces/Games'



export function Home() {
    
  const [games, setGames] = useState([])
  

  useEffect(() => {
    async function fetchGames() {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games')
      console.log(response.data)
      setGames(response.data)
    }
    fetchGames()
  }, [])
    
    return(
        <>
          <Navbar />
          <div className="h-screen w-full bg-zinc-900 flex justify-center items-center flex-wrap gap-4 px-6 my-10 z-0">
            <div className='w-[1280px] flex flex-wrap gap-4 justify-center'>
              {games.map((game: Games) => (
                  <GameCard key={game.id} {...game} />
                  ))}
              </div>
          </div>
        </>
    )
}