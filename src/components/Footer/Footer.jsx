import footerLogo from './../../assets/logo-footer.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-[#06091A]'>
            {/* ------------- MAIN FOOTER SECTION ------------- */}
            <div className='w-full sm:w-[88%] mx-auto pt-60 pb-[72px]'>
                {/* ------------- FOOTER LOGO ------------- */}
                <div className='mb-16'>
                    <img className='mx-auto' src={footerLogo} alt="Footer Logo" />
                </div>

                {/* ------------- FOOTER ITEMS ------------- */}
                <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-start footer_items'>
                    <div className='lg:max-w-[291px] text-center lg:text-left mb-10 lg:mb-0'>
                        <h5>About Us</h5>
                        <p className='font-normal text-base text-[rgba(255,255,255,0.6)]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className='lg:w-[310px] text-center lg:text-left mb-10 lg:mb-0'>
                        <h5>Quick Links</h5>
                        <div className='flex flex-row lg:flex-col'>
                            <li className='mx-5 lg:mx-0'><a href="#">Home</a></li>
                            <li className='mx-5 lg:mx-0'><a href="#">Services</a></li>
                            <li className='mx-5 lg:mx-0'><a href="#">About</a></li>
                            <li className='mx-5 lg:mx-0'><a href="#">Contact</a></li>
                        </div>
                    </div>

                    <div className='text-center lg:text-left'>
                        <h5>Subscribe</h5>
                        <p className='font-normal text-base text-[rgba(255,255,255,0.6)]'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='mt-[21px] flex'>
                            <input className='px-[30px] rounded-l-2xl py-3.5 bg-[#ffffff]' placeholder='Enter your email' type="email" name="" id="" />
                            <button className='px-[30px] rounded-r-2xl py-3.5 bg-[#da6a6a] text-[#040D11] font-bold text-base cursor-pointer'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------- COPYRIGHT SECTION ------------- */}
            <div className='py-8 border-t-2 border-[rgba(255,255,255,0.15)]'>
                <p 
                    className='text-base font-normal text-[rgba(255,255,255,0.6)] text-center'
                >@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;