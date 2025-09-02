import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import LoadingScreen from '../LoadingScreen';
import RealConnect from './Connect';

export default function Layout() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Loading Screen */}
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            {isLoaded && (
                <>
                    {/* Navbar */}
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                    {/* Main content */}
                    <div className="relative z-10">
                        <Outlet />
                    </div>

                    {/* Footer & Connect */}
                    <Footer />
                    <RealConnect />
                </>
            )}
        </div>
    );
}
