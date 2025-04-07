import { MdPerson } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import './Player.css'

const Player = ({player, handleChoosePlayer, alreadyChooseBtn, alreadyChooseBtnId}) => {

    const {image, name, country, role, battingType, bowlingType, biddingPrice} = player
    
    return (
        // ------------- EACH PLAYER CARD -------------
        <div className='playerCard p-6 border-2 border-[rgba(19,19,19,0.1)] rounded-2xl hover:shadow-xl hover:shadow-indigo-500/50'>
            {/* ------------- IMAGE PART ------------- */}
            <img className='rounded-2xl' src={image} alt="Player Image" />

            {/* ------------- TEXT PART ------------- */}
            <div className='mt-6'>
                {/* NAME */}
                <div className="flex items-center">
                    <MdPerson className="text-3xl text-[rgba(19,19,19,0.8)]"/>
                    <h4 className='font-semibold text-xl text-[#131313] ml-3.5'>{name}</h4>
                </div>

                {/* COUNTRY, ROLE */}
                <div className="flex justify-between items-center py-4 border-b-2 border-[rgba(19,19,19,0.1)]">
                    <div className="flex items-center text-[rgba(19,19,19,0.5)]">
                        <FaFlag />
                        <p className="ml-3 font-normal text-base">{country}</p>
                    </div>
                    <div className="inline-block bg-[rgba(19,19,19,0.05)] rounded-lg text-sm font-normal text-[#131313] py-[9px] px-4">{role}</div>
                </div>

                {/* RATING, TYPE, PRICE, CHOOSE BUTTON */}
                <div className="mt-4">
                    <h5 className="mb-4 font-bold text-base text-[#131313]">Rating</h5>
                    <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-base text-[#131313]">{battingType}</h5>
                        <h5 className="font-normal text-base text-[rgba(19,19,19,0.7)]">{bowlingType}</h5>
                    </div>
                    <div className="mt-2.5 flex justify-between items-center">
                        <h5 className="font-semibold text-base text-[#131313]">Price: ${biddingPrice}</h5>
                        <div onClick={() => handleChoosePlayer(player)}>
                            {
                                (alreadyChooseBtn && (alreadyChooseBtnId.find(id => id===player.playerId)))?
                                <button 
                                className="font-semibold text-sm text-[rgba(19,19,19,0.9)] px-4 py-[9px] rounded-xl border-2 border-[#E7FE29] bg-[#E7FE29]"
                                >Already Choosed</button>
                                : <button 
                                className="playerBtn hover:shadow-xl "
                                >Choose Player</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;