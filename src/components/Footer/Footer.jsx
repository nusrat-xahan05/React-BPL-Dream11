import footerLogo from './../../assets/logo-footer.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-[#06091A]'>
            {/* ------------- MAIN FOOTER SECTION ------------- */}
            <div className='w-[1320px] mx-auto pt-60 pb-[72px]'>
                {/* ------------- FOOTER LOGO ------------- */}
                <div className='mb-16'>
                    <img className='mx-auto' src={footerLogo} alt="Footer Logo" />
                </div>

                {/* ------------- FOOTER ITEMS ------------- */}
                <div className='flex justify-between footer_items'>
                    <div className='max-w-[291px]'>
                        <h5>About Us</h5>
                        <p className='font-normal text-base text-[rgba(255,255,255,0.6)]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className='w-[310px]'>
                        <h5>Quick Links</h5>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>

                    <div>
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