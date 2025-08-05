import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import EmergencyBanner from './EmergencyBanner';
import logo from '../Assets/logo.png';
import logoSub from '../Assets/logoSub.png';
import SolutionDropdown from '@app/Dropdown/SolutionDropdown';
import PartnersDropdown from '@app/Dropdown/PartnersDropdown';
import ServeDropdown from '@app/Dropdown/ServeDropdown';
import VijilanDropdown from '@app/Dropdown/VijilanDropdown';
import ResourceDropdown from '@app/Dropdown/ResourceDropdown';
import AboutDropdown from '@app/Dropdown/AboutDropdown';

const HeaderTwo = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // navlink
  const menuItems = [
    {
      key: 'solutions',
      name: 'Solutions',
      hasDropdown: true,
      dropdownComponent: <SolutionDropdown />,
      isFullWidth: true,
    },
    {
      key: 'serve',
      name: 'Who we serve',
      hasDropdown: true,
      dropdownComponent: <ServeDropdown />,
      isFullWidth: false,
    },
    {
      key: 'vijilan',
      name: 'Why Vijilan',
      hasDropdown: true,
      dropdownComponent: <VijilanDropdown />,
      isFullWidth: false,
    },
    {
      key: 'partners',
      name: 'Partners',
      hasDropdown: true,
      dropdownComponent: <PartnersDropdown />,
      isFullWidth: true,
    },
    {
      key: 'resources',
      name: 'Resources',
      hasDropdown: true,
      dropdownComponent: <ResourceDropdown />,
      isFullWidth: false,
    },
    {
      key: 'about',
      name: 'About us',
      hasDropdown: true,
      dropdownComponent: <AboutDropdown />,
      isFullWidth: false,
    },
  ];

  const showEmergencyBannerRoutes = ['/', '/serve', '/resources', '/complain-solution'];

  return (
    <div className='absolute top-0 right-0 left-0 z-[999999]'>
      {showEmergencyBannerRoutes.includes(location.pathname) && <EmergencyBanner />}

      <div className='!sticky top-[16px] z-50 w-full'>
        <header
          className={`mx-auto flex h-[96px] items-center ${scrolled ? 'border-b-solid !fixed top-0 right-0 left-0 border-b border-b-gray-500' : 'bg-transparent'} mt-[16px] w-11/12 !rounded-[12px] !px-[16px] backdrop-blur-sm lg:max-w-[1160px] lg:!rounded-[24px] xl:!px-[32px]`}
          style={{
            background: scrolled
              ? 'linear-gradient(0deg, rgba(8, 34, 53, 0.8) 53.83%, rgba(0, 174, 239, 0.8) 328.5%)'
              : 'linear-gradient(0deg, rgba(8, 34, 53, 0.8) 53.83%, rgba(0, 174, 239, 0.8) 328.5%)',
          }}
        >
          <div className='flex w-full items-center justify-between'>
            {/* Logo */}
            <Link
              to='/'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='flex flex-col items-center'
            >
              <img src={logo} alt='logo' className='h-[34px] w-[100px]' />
              <img src={logoSub} alt='sub' className='-mt-[6px] ml-[33px] h-[5px] w-[56px]' />
            </Link>
            <>
              {/* desktop menu style */}
              <style>
                {`
                  .desktop-menu {
                    display: none;
                  }

                  @media (min-width: 1024px) {
                    .desktop-menu {
                      display: flex !important;
                    }
                  }
                  
                  /* 🔽 Custom range: 1024px to 1240px */
                  @media (min-width: 1024px) and (max-width: 1200px) {
                    .fontSize {
                      font-size: 14px !important;
                    }
                  }
              `}
              </style>

              {/* Desktop Menu */}
              <div className='desktop-menu items-center !gap-[20px] xl:!gap-[24px]'>
                <nav className='relative flex lg:space-x-3 xl:space-x-6'>
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className='group relative'
                      onClick={() => {
                        item.hasDropdown &&
                          setActiveDropdown((prev) => (prev === item.name ? null : item.name));
                      }}
                    >
                      <a
                        className={`fontSize flex cursor-pointer items-center space-x-1 text-[16px] transition-all duration-200 ${activeDropdown === item.name ? 'text-active' : ''}`}
                      >
                        <span className={`${activeDropdown === item.name ? 'text-active' : ''}`}>
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`mb-[-4px] !ml-[-2px] h-[18px] w-[18px] transition-transform ${
                            activeDropdown === item.name
                              ? 'chevron-colored -translate-y-[2px] scale-125 rotate-180'
                              : ''
                          }`}
                        />
                      </a>

                      {activeDropdown === item.name && (
                        <div
                          ref={dropdownRef}
                          className={`z-50 mt-[43px] rounded-[24px] ${
                            item.isFullWidth
                              ? 'fixed left-0 h-[calc(100vh-40vh)] w-full overflow-y-auto'
                              : 'absolute top-full left-1/2 w-max max-w-[calc(100vw-20px)] min-w-[200px] -translate-x-1/2 overflow-auto'
                          }`}
                        >
                          {item.dropdownComponent}
                        </div>
                      )}
                    </div>
                  ))}

                  <Link
                    to='/contact'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className='fontSize text-[16px] text-white'
                  >
                    Contact
                  </Link>
                </nav>
                <Link
                  to={'/contact'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <button
                    className='rounded-lg px-[24px] py-[12px] text-[16px] font-semibold text-white'
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    }}
                  >
                    BOOK A CALL
                  </button>
                </Link>
              </div>
            </>
            {/* Mobile Menu Toggle */}
            <div className='lg:hidden'>
              <button onClick={toggleMenu} className='text-white'>
                {menuOpen ? (
                  <X className='h-[36px] w-[36px]' />
                ) : (
                  <Menu className='h-[36px] w-[36px]' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className={`fixed top-[96px] right-0 left-0 z-40 mx-auto w-full rounded-[24px] bg-[#082235] px-6 py-8 transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
            >
              <nav className='flex flex-col space-y-4'>
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    href='#'
                    className='group relative flex items-center justify-between text-[16px] text-white'
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.name
                          ? '-translate-y-[2px] scale-125 rotate-180'
                          : ''
                      }`}
                    />

                    {/* Dropdown Container */}
                    {activeDropdown && (
                      <div
                        ref={dropdownRef}
                        onMouseEnter={() => setActiveDropdown(activeDropdown)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className='fixed top-[64px] left-0 z-50 max-h-[80vh] w-fit overflow-y-auto'
                      >
                        {menuItems.find((item) => item.name === activeDropdown)?.dropdownComponent}
                      </div>
                    )}
                  </div>
                ))}
                <Link to='about' className='text-[16px] text-white'>
                  About
                </Link>
                <a href='#' className='text-[16px] text-white'>
                  Contact
                </a>
                <button
                  className='mt-2 w-full rounded-lg px-4 py-3 text-[16px] font-semibold text-white'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  BOOK A CALL
                </button>
              </nav>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default HeaderTwo;
