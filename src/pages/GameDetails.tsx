import axios from "axios"
import { useEffect, useState } from "react"
import { BsWindows } from "react-icons/bs"
import { IoBrowsers } from "react-icons/io5"
import { useParams } from "react-router-dom"
import { Games } from "../interfaces/Games"


export function GameDetails() {
  const { id } = useParams<{ id: string }>()
  const [game, setGame] = useState<Games | null>(null)
  //const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGame() {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${id}`)
      console.log(response.data)
      setGame(response.data)
      //setLoading(false)
    }
    fetchGame()
  }, [id])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex max-w-[1300px] bg-zinc-700 p-10 rounded-lg border-2 border-zinc-600">
        <div className="bg-zinc-700 p-2 rounded-lg w-[600px] flex flex-col">
          <img src={game?.thumbnail} alt={game?.title} className="rounded-lg"/>
          
            
            <div className="flex items-center justify-around pt-6">
            {game?.screenshots.map((screenshot) => (
              <a href={screenshot.image}>
                <img src={screenshot.image} alt={screenshot.id} className="w-[150px] border-2 p-2 hover:scale-x-100" />
              </a>
              ))}
              </div>
        </div>

        <div className="w-[600px] text-white px-4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold py-4">
              {game?.title}
            </h1>
          </div> 
          {game?.description}
        <div className="py-10 px-2 mt-8 flex justify-end">
          <a href={game?.game_url} 
            className="p-4 rounded-2xl w-[150px] text-center text-white bg-zinc-900 border-2 border-zinc-500"
            target="_blank"
          >
            Site oficial
          </a>
        </div>          
        </div>
      </div>
    </div>
  )
}