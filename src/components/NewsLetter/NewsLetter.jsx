import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='bg text-center rounded-3xl'>
            <h3 
                className='font-bold text-[32px] text-[#131313]'
            >Subscribe to our Newsletter</h3>
            <p 
                className='mt-4 mb-6 font-medium text-xl text-[rgba(19,19,19,0.7)]'
            >Get the latest updates and news right in your inbox!</p>
            <div className='flex justify-center'>
                <input 
                    className='mr-4 px-[30px] rounded-2xl py-3.5 bg-[#ffffff] border-2 border-[rgba(19,19,19,0.15)]' placeholder='Enter your email' type="email" name="" id="" />
                <button 
                    className='px-[30px] rounded-2xl py-3.5 bg-[#da6a6a] text-[#040D11] font-bold text-base cursor-pointer'
                >Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;