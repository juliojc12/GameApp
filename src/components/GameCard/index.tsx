
import { BsWindows } from "react-icons/bs";
import { IoBrowsers } from "react-icons/io5";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";

import { Games } from '../../interfaces/Games';


export function GameCard({...props} : Games){
    
    return(
        <Tilt>
            <Link to={`${props.id}`} className="rounded-t-lg text-[14px]" data-aos="fade-up">
                <div className="w-[300px] h-[400px] rounded-lg border shadow-lg shadow-white">
                    <img src={props.thumbnail} alt="Game Cover"  className="rounded-t-lg"/>
                    <div className="flex justify-center item-center text-xl h-[50px] hover:flex-wrap">
                        <h1 className="text-white text-center text-xl font-bold hover:overflow-auto px-2 ">{props.title}</h1>
                    </div>
                        <p className="text-white p-3 h-[100px] overflow-hidden ">
                            {props.short_description}
                        </p>

                        <div className="flex justify-between items-center px-3 text-white">
                            <div className="h-[70px] w-[150px] flex justify-between items-center">
                                <h3 className="mt-2 hover:text-clip">{props.developer}</h3>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className=" bg-zinc-600 rounded-xl p-2 mr-4 flex justify-center items-center mx-2 uppercase text-center text-[10px]">
                                    <p className="mt-1 truncate">
                                        {props.genre}                           
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    {props.platform === 'PC (Windows)' ? <BsWindows /> : <IoBrowsers />}
                                </div>
                            </div>
                        </div>
                </div>
            </Link>
        </Tilt>
    )
}