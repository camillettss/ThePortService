"use client"

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [searchData, setSearchData] = useState('s')
    const router = useRouter();

    // Search function
    const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchData) return;
        router.push(`/rent?date=${searchData}`)
    };

    const handleChange = (e) => {
        setSearchData(e.target.value);
    }

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
            <Head>
                <title>ThePortService</title>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                <link
                    rel="stylesheet"
                    as="style"
                    onLoad="this.rel='stylesheet'"
                    href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Work+Sans%3Awght%40400%3B500%3B700%3B900"
                />
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            </Head>

            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#111418]">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_535)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_535"><rect width="48" height="48" fill="white"></rect></clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">ThePortService</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Taxi</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Rent</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Laundry</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Luggage</a>
                        </div>
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Book a service</span>
                        </button>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e8ceecd9-43b1-41e5-92b8-8c0f63a91cc8.png")' }}
                        ></div>
                    </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                            <div className="@[480px]:p-4">
                                <div
                                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/2d35725f-3be2-44a2-ace2-0eb5db29f602.png")' }}
                                >
                                    <h1
                                        className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
                                    >
                                        Enjoy the city without carrying your luggage or waiting for a taxi.
                                    </h1>
                                    <div className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16 relative">
                                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                            <div
                                                className="text-[#637588] flex border border-[#dce0e5] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                                                data-icon="MagnifyingGlass"
                                                data-size="20px"
                                                data-weight="regular"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <input
                                                placeholder="Enter a date"
                                                onChange={handleChange}
                                                type="date"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-full placeholder:text-[#637588] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                                                required
                                            />
                                            <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dce0e5] bg-white pr-[7px]">
                                                <button
                                                    onClick={handleSearch}
                                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                                                >
                                                    <span className="truncate">Search</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Suggestions dropdown
                    {showSuggestions && suggestions.length > 0 && (
                      <div 
                        ref={suggestionsRef}
                        className="absolute left-0 right-0 top-full mt-1 z-10 bg-white rounded-xl shadow-lg border border-[#dce0e5] max-h-60 overflow-y-auto"
                      >
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="p-3 border-b border-[#f0f2f4] cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <p className="text-[#111418] text-sm">{suggestion.display_name}</p>
                            <p className="text-[#637588] text-xs mt-1">
                              {suggestion.address?.city || suggestion.address?.town || suggestion.address?.village || ''} 
                              {suggestion.address?.state ? `, ${suggestion.address.state}` : ''}
                              {suggestion.address?.country ? `, ${suggestion.address.country}` : ''}
                            </p>
                          </div>
                        ))}
                      </div>
                    )} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Book a service</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/8dae6a79-9f22-4464-90ef-53a61349344d.png")' }}
                                ></div>
                                <p className="text-[#111418] text-base font-medium leading-normal">Taxi</p>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/6e7de419-86cd-4d7c-92b2-8b2c42853b7a.png")' }}
                                ></div>
                                <p className="text-[#111418] text-base font-medium leading-normal">Rent</p>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/46fd6421-e55f-4ca6-b9d8-ab3b6eb8d4a8.png")' }}
                                ></div>
                                <p className="text-[#111418] text-base font-medium leading-normal">Laundry</p>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/a34df350-e154-453a-8e6a-930240f2cf44.png")' }}
                                ></div>
                                <p className="text-[#111418] text-base font-medium leading-normal">Luggage</p>
                            </div>
                        </div>
                        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What our customers say</h2>
                        <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
                            <div className="flex flex-col gap-3 bg-white">
                                <div className="flex-1">
                                    <p className="text-[#111418] text-base font-medium leading-normal">Sarah</p>
                                    <p className="text-[#637588] text-sm font-normal leading-normal">1 month ago</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="text-[#111418]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#111418] text-base font-normal leading-normal">
                                    I used City Movers to store my luggage while I explored the city. It was so easy and convenient. The driver was very friendly and helpful. Thank you!
                                </p>
                                <div className="flex gap-9 text-[#637588]">
                                    <button className="flex items-center gap-2">
                                        <div className="text-inherit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <p className="text-inherit">2</p>
                                    </button>
                                    <button className="flex items-center gap-2">
                                        <div className="text-inherit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            {/* Additional testimonials can be kept the same */}
                            <div className="flex flex-col gap-3 bg-white">
                                <div className="flex-1">
                                    <p className="text-[#111418] text-base font-medium leading-normal">Ben</p>
                                    <p className="text-[#637588] text-sm font-normal leading-normal">3 months ago</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="text-[#111418]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#111418] text-base font-normal leading-normal">
                                    I used City Movers to rent a bike. The process was simple and quick. I had a great time riding around the city.
                                </p>
                                <div className="flex gap-9 text-[#637588]">
                                    <button className="flex items-center gap-2">
                                        <div className="text-inherit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <p className="text-inherit">3</p>
                                    </button>
                                    <button className="flex items-center gap-2">
                                        <div className="text-inherit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 bg-white">
                                <div className="flex-1">
                                    <p className="text-[#111418] text-base font-medium leading-normal">Stella</p>
                                    <p className="text-[#637588] text-sm font-normal leading-normal">1 year ago</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="text-[#111418]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[#111418] text-base font-normal leading-normal">
                                    I used City Movers to do my laundry. The driver was on time and the process was fast. I was very satisfied with the service.
                                </p>
                                <div className="flex gap-9 text-[#637588]">
                                    <button className="flex items-center gap-2">
                                        <div className="text-inherit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <p className="text-inherit">1</p>
                                    </button>
                                    <button className="flex items-center gap-2">
                                        <div className="text-inherit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="flex justify-center">
                    <div className="flex max-w-[960px] flex-1 flex-col">
                        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                                <a className="text-[#637588] text-base font-normal leading-normal min-w-40" href="#">About</a>
                                <a className="text-[#637588] text-base font-normal leading-normal min-w-40" href="#">Careers</a>
                                <a className="text-[#637588] text-base font-normal leading-normal min-w-40" href="#">Blog</a>
                                <a className="text-[#637588] text-base font-normal leading-normal min-w-40" href="#">Press</a>
                                <a className="text-[#637588] text-base font-normal leading-normal min-w-40" href="#">Safety</a>
                                <a className="text-[#637588] text-base font-normal leading-normal min-w-40" href="#">Help Center</a>
                            </div>
                            <p className="text-[#637588] text-base font-normal leading-normal">© 2025 ThePortService s.r.l.</p>
                        </footer>
                    </div>
                </footer>
            </div>
        </div>
    );
}
