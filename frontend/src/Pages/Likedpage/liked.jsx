// import CultureGo from "../../Components/icons/CultureGo";
// import HomeIcon from "../../Components/icons/HomeIcons";
import TrashIcon from "../../Components/icons/Trash.svg";
import SortIcon from "../../Components/icons/Sort.svg";
import Sort from "../../Components/icons/Sort.jsx";
import Trash from "../../Components/icons/Trash.jsx";

import LogoText from "../../Components/icons/LogoText";

import LikedCard from "./LikedCard";

import {useState, useContext, createContext} from 'react'

import {deleteContext} from './DeleteContext'

const Liked = () => {

    var dell = useState(false);

    var [del, setDel] = dell


    var [list, setList] = useState(
        [<LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={dell[0]}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>,
        <LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={del}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>,
        <LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={del}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>,
        <LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={del}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>,
        <LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={del}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>,
        <LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={del}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>,
        <LikedCard name='Abba the museum' location='Stockholm' showDeleteOption={del}
        img='https://iynsfqmubcvdoqicgqlv.supabase.co/storage/v1/object/public/team-charlie-storage/charlie.jpg'/>]
    )


    const func = () => {
        setDel(!del);
    }

    return (
        <div className=" w-screen h-screen bg-white overflow-hidden">
            <div className=" w-screen h-20">
                {/* top of screen w/ logo */}

                <div className="p-4">
                    <LogoText/>

                </div>

            </div>
            <div className="w-full p-2 relative flex justify-normal h-12">
                {/* options bar */}
                <p className="pt-3 text-xl text p-2 flex-grow">Your liked items:</p>
                <Trash/>
                <Sort/>

            </div>
            <div className=" w-full p-5 pr-8 pl-8 overflow-scroll h-[calc(100vh-var(--navbar-height)-8rem)] overflow-x-hidden">
                {/* container for list */}
                
                <deleteContext.Provider value={del}>
                {
                    list
                }
                </deleteContext.Provider>
                
            </div>
            <button onClick={func}>
                hshshsshhs
            </button>
        </div>
    )
}

export default Liked