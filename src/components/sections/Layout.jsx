import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import LoadingScreen from '../LoadingScreen';


export default function Layout() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Loading Screen */}
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    <div className="bg-black text-white p-4">
                        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <div className="bg-black text-white p-4">
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </>
            )}
        </div>
        
        </>
    )
}
