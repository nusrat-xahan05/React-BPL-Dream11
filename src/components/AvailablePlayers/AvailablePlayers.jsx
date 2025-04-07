import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './AvailablePlayers.css'

const AvailablePlayers = ({handleActiveBtn, activeBtn, selectedPlayers, handleChoosePlayer, alreadyChooseBtn, alreadyChooseBtnId, handleRemovePlayer, handleAddMorePlayer}) => {

    const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
        fetch('PlayersData.json')
        .then(res => res.json())
        .then(data => setAllPlayers(data))
    }, [])

    return (
        <div className=''>
            <div className='flex justify-between items-center mb-8'>
                {/* ------------- SECTION HEADING ------------- */}
                <div className='font-bold text-[28px] text-[#131313]'>
                    {
                        activeBtn?'Available Players':`Selected Player (${selectedPlayers.length}/6)`
                    }
                </div>

                {/* ------------- SECTION BUTTON ------------- */}
                <div className='border-2 border-[rgba(19,19,19,0.1)] rounded-2xl inline-block'>
                    <button 
                        onClick={() => handleActiveBtn('availableBtn')} 
                        className={`${activeBtn?'toogle_btn btn px-[30px] rounded-l-2xl':'btn px-[30px] rounded-l-2xl'}`}
                    >Available</button>
                    <button 
                        onClick={() => handleActiveBtn('selectedBtn')} 
                        className={`${activeBtn?'btn px-5 rounded-r-2xl':'toogle_btn btn px-5 rounded-r-2xl'}`}
                    >Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {/* ------------- BUTTON TOGGLE SECTIONS ------------- */}
            <div>
                {
                    activeBtn?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {allPlayers.map(player => <Player key={player.playerId} player={player} handleChoosePlayer={handleChoosePlayer} alreadyChooseBtn={alreadyChooseBtn} alreadyChooseBtnId={alreadyChooseBtnId}></Player>)}
                    </div>
                    : 
                    <div>
                        <SelectedPlayers selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer} handleAddMorePlayer={handleAddMorePlayer}></SelectedPlayers>
                    </div>
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;