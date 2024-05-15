import React, { useState } from 'react';
import './nabvar.css';
import AcmeLogo from '@/app/ui/acme-logo';


export default function Navbar({ children }) {

    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className="navbar bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center justify-between h-16'>
                            <div className="flex-shrink-0">
                                <a href='/' className="navbar-logo">
                                <div className="flex items-end rounded-lg bg-blue-500 p-4 md:h-52">
                                    <div className="navbar-logo-container">
                                        <AcmeLogo className="navbar-logo" /> {/* Ajusta el tamaño del logo con los estilos CSS */}
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href='/' className="navbar-menu-item">
                                    POAI
                                </a>
                                <a href='/' className="navbar-menu-item">
                                    Planes de Acción
                                </a>
                                <a href='/' className="navbar-menu-item">
                                    Seguimiento
                                </a>
                                <a href='/' className="navbar-menu-item">
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
