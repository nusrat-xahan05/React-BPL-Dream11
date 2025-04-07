// import banner_img from './../../assets/bg-shadow.png'
import banner_img2 from './../../assets/banner-main.png'
import './Banner.css'

const Banner = ({handleCoin}) => {
    return (
        <div className='w-full sm:w-[88%] mx-auto'>
            <div className='banner_img text-center'>
                <img className='mx-auto' src={banner_img2} alt="Banner Image" />
                <h1 
                    className='font-bold text-[40px] text-[#ffffff] mt-4 mb-6'
                >Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p 
                    className='font-medium text-2xl text-[rgba(255,255,255,0.7)] mb-6'
                >Beyond Boundaries Beyond Limits</p>
                <div className='border-2 border-[#E7FE29] p-2 inline-block rounded-2xl'>
                    <button 
                        onClick={handleCoin}
                        className='px-5 py-3.5 bg-[#E7FE29] rounded-2xl font-bold text-base text-[#131313] cursor-pointer'
                    >Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;