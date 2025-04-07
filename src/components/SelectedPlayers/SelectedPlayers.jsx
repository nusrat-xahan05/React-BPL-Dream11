import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayers = ({selectedPlayers, handleRemovePlayer, handleAddMorePlayer}) => {
    return (
        <div>
            {/* ------------- 'SELECTED ITEMS' CARD ------------- */}
            {
                selectedPlayers.map((player) => (
                    <div key={player.playerId} className="mb-6 p-6 border-2 border-[rgba(19,19,19,0.1)] rounded-2xl flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-[100px] h-[100px] mr-6 rounded-2xl" src={player.image} alt="" />
                            <div>
                                <h5 className="font-semibold text-2xl text-[#131313]">{player.name}</h5>
                                <p className="mt-2 font-normal text-base text-[rgba(19,19,19,0.6)]">{player.battingType} || ${player.biddingPrice}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleRemovePlayer(player)}
                            className="cursor-pointer"
                        ><RiDeleteBin6Line className="text-[red] text-2xl"/></button>
                    </div>
                ))
            }

            {/* ------------- 'ADD MORE PLAYER' BUTTON ------------- */}
            <div className='mt-12 border-2 border-[#E7FE29] p-2 inline-block rounded-2xl'>
                <button 
                    onClick={handleAddMorePlayer}
                    className='px-5 py-3.5 bg-[#E7FE29] rounded-2xl font-bold text-base text-[#131313] cursor-pointer'
                >Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;
