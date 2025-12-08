import { useNavigate } from 'react-router-dom';
import des1 from '../assets/destination-img-1.png'
import des2 from '../assets/destination-img-2.png'
import des3 from '../assets/destination-img-3.png'
import "remixicon/fonts/remixicon.css";

function Dashboard() {

    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/')
    }

    return (
        <div>

            {/* NavBar */}
            <nav className='bg-white p-4 flex items-center justify-between z-10 shadow-md sticky top-0'>
                <div className='flex gap-2'>
                    <h1 className='text-2xl font-medium text-black'>Travel</h1>
                    <i className="ri-flight-takeoff-fill text-black text-2xl"></i>
                </div>
                <div className='flex items-center bg-white cursor-pointer transition-all duration-300' onClick={handleLogOut}>
                    <i class="ri-logout-box-r-line text-xl text-black"></i>
                    <p className='text-black'>Logout</p>
                </div>
            </nav>

            <section>
                <h2 className='text-black font-semibold text-3xl text-center my-5'>Best <br /> Destinations</h2>

                <div className="flex justify-center">
                    <div className="grid justify-center lg:grid-cols-3">

                        <article className='w-80 text-black bg-slate-200 rounded-md'>
                            <img src={des1} alt="destination-1" />
                            <div className='flex flex-col items-center my-3'>
                                <h3>Bali</h3>
                                <h2>ISLAND</h2>
                                <p className='flex gap-1'>
                                    <i className="ri-map-pin-fill"></i>
                                    <span>Indonesia</span>
                                </p>
                            </div>
                        </article>

                        <article className='w-80 text-black bg-slate-200 rounded-md'>
                            <img src={des2} alt="destination-2" />
                            <div className='flex flex-col items-center my-3'>
                                <h3>Banana</h3>
                                <h2>BEACH</h2>
                                <p className='flex gap-1'>
                                    <i className="ri-map-pin-fill"></i>
                                    <span>Tailandia</span>
                                </p>
                            </div>
                        </article>

                        <article className='w-80 text-black bg-slate-200 rounded-md'>
                            <img src={des3} alt="destination-3" />
                            <div className='flex flex-col items-center my-3'>
                                <h3>Santorini</h3>
                                <h2>ISLAND</h2>
                                <p className='flex gap-1'>
                                    <i className="ri-map-pin-fill"></i>
                                    <span>Grecia</span>
                                </p>
                            </div>
                        </article>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Dashboard