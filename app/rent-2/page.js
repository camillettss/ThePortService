"use client"

import React from 'react';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CarRentalPage() {
  const searchParams = useSearchParams();

  const date = searchParams.get("date");

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Imposta il caricamento all'inizio
    fetch(`/api/cars/available?date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data); // Aggiorna lo stato con i dati ricevuti
        setLoading(false); // Disattiva il caricamento
      })
      .catch((error) => {
        console.error("Errore nel caricamento delle auto:", error);
        setLoading(false); // Anche in caso di errore, togliamo il loading
        setCars([]);
      });
  }, [date]);

  const handleSelectCar = (car) => {

  }

  return (
    <>
      <Head>
        <title>Rent a Car</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Work+Sans%3Awght%40400%3B500%3B700%3B900"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </Head>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-80">
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filter</h3>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">Economy</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">Compact</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">Standard</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">Full Size</p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">Luxury</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 flex-wrap pr-4">

              </div>

              <div className="@container">
                <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
                  <p className="text-white text-base font-medium leading-normal w-full shrink-[3]">Price Range</p>
                  <div className="flex h-[38px] w-full pt-1.5">
                    <div className="flex h-1 w-full rounded-sm bg-[#3c4753] pl-[60%] pr-[15%]">
                      <div className="relative">
                        <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                          <div className="size-4 rounded-full bg-white"></div>
                          <p className="text-white text-sm font-normal leading-normal">$20</p>
                        </div>
                      </div>
                      <div className="h-1 flex-1 rounded-sm bg-white"></div>
                      <div className="relative">
                        <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                          <div className="size-4 rounded-full bg-white"></div>
                          <p className="text-white text-sm font-normal leading-normal">$200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 p-4">
                <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
                  <div className="flex items-center p-1 justify-between">
                    <button>
                      <div className="text-white flex size-10 items-center justify-center" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                        </svg>
                      </div>
                    </button>
                    <p className="text-white text-base font-bold leading-tight flex-1 text-center">Sep 2022</p>
                    <button>
                      <div className="text-white flex size-10 items-center justify-center" data-icon="CaretRight" data-size="18px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="grid grid-cols-7">
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">M</p>
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">W</p>
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">F</p>
                    <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                    <button className="h-12 w-full text-white col-start-4 text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">1</div>
                    </button>
                    <button className="h-12 w-full text-white text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">2</div></button>
                    <button className="h-12 w-full text-white text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">3</div></button>
                    <button className="h-12 w-full text-white text-sm font-medium leading-normal"><div className="flex size-full items-center justify-center rounded-full">4</div></button>
                    <button className="h-12 w-full text-white rounded-l-full bg-[#293038] text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full bg-[#1980e6]">5</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">6</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">7</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">8</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">9</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">10</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">11</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">12</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">13</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">14</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">15</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">16</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">17</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">18</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">19</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">20</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">21</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">22</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">23</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">24</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">25</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">26</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">27</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">28</div>
                    </button>
                    <button className="h-12 w-full bg-[#293038] text-white text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full">29</div>
                    </button>
                    <button className="h-12 w-full text-white rounded-r-full bg-[#293038] text-sm font-medium leading-normal">
                      <div className="flex size-full items-center justify-center rounded-full bg-[#1980e6]">30</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-transparent text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Reset filters</span>
                </button>
              </div>
            </div>
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-white tracking-light text-[32px] font-bold leading-tight">Rent a car in San Francisco</p>
                  <p className="text-[#9dabb8] text-sm font-normal leading-normal">See all cars available on Sep 10, 2022</p>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured rentals</h3>
              <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white-500"></div>
                    </div>
                  ) : cars.length === 0 || !cars ? (
                    <p className="text-gray-600">Nessuna auto disponibile per questa data.</p>
                  ) : (
                    <div className="flex h-full shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] pl-4 pr-4">
                      {cars.map((car) => (
                        <div key={car.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                          <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"style={{ backgroundImage: 'url("/panda.jpg")' }}></div>
                          <div>
                            <p className="text-white text-base font-medium leading-normal">{car.name}</p>
                            <p className="text-[#9dabb8] text-sm font-normal leading-normal">${car.pricePerDay}/day</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
