import { NavLink } from 'react-router-dom'

export default function CTA() {
    return (
        <div className='w-full flex justify-center bg-[#FFF8F7] '>
            <div className='bg-primary rounded-[10px] m-10 w-200 h-60 flex justify-center gap-4 items-center border-2 flex-col text-white text-center '>
                <h2 className='text-4xl text-center '>Every Drop Count. <br />Start your Donation Journey Today</h2>
                <p>Join our community of over 10,000 and help us ensure that <br /> no life is lost due to blood shortage</p>

                <NavLink to='/register' className='bg-white text-primary hover:bg-fadedPrimary py-2 px-4 rounded-[10px] font-bold'>
                    Donate Now
                </NavLink>


            </div>

        </div>
    )
}
