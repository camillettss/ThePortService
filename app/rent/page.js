"use client"

import React, { Suspense } from 'react';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Create a component that uses useSearchParams
function CarRentalContent() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateDate = () => {
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
  }

  updateDate();

  const handleChangeDate = () => {
    // 
  }

  const handleSelectCar = (car) => {
    // Implementation for selecting a car
  }

  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="gap-1 px-6 flex flex-1 justify-center py-5">
            <div className="hidden lg:block layout-content-container flex flex-col w-80">
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

                  {/* Interactive Calendar Component */}
                  {(() => {
                    // Calendar state
                    const [currentDate, setCurrentDate] = useState(() => {
                      // Use the URL date or default to today
                      if (date) {
                        return new Date(date);
                      }
                      return new Date();
                    });

                    const [selectedDate, setSelectedDate] = useState(() => {
                      if (date) {
                        return new Date(date);
                      }
                      return new Date();
                    });

                    // Calendar utility functions
                    const getDaysInMonth = (year, month) => {
                      return new Date(year, month + 1, 0).getDate();
                    };

                    const getFirstDayOfMonth = (year, month) => {
                      return new Date(year, month, 1).getDay();
                    };

                    const getPreviousMonthDays = (year, month) => {
                      const firstDayOfMonth = getFirstDayOfMonth(year, month);
                      if (firstDayOfMonth === 0) return []; // Sunday is 0, no need for previous month days

                      const daysInPreviousMonth = getDaysInMonth(year, month - 1);
                      const previousMonthDays = [];

                      for (let i = 0; i < firstDayOfMonth; i++) {
                        previousMonthDays.unshift(daysInPreviousMonth - i);
                      }

                      return previousMonthDays;
                    };

                    // Month navigation
                    const goToPreviousMonth = () => {
                      setCurrentDate(prevDate => {
                        const newDate = new Date(prevDate);
                        newDate.setMonth(newDate.getMonth() - 1);
                        return newDate;
                      });
                    };

                    const goToNextMonth = () => {
                      setCurrentDate(prevDate => {
                        const newDate = new Date(prevDate);
                        newDate.setMonth(newDate.getMonth() + 1);
                        return newDate;
                      });
                    };

                    // Date selection
                    const handleDateClick = (day) => {
                      const newSelectedDate = new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day+1
                      );
                      setSelectedDate(newSelectedDate);
                      

                      // Format date as YYYY-MM-DD for the URL
                      const formattedDate = newSelectedDate.toISOString().split('T')[0];

                      // Use Next.js router to update URL
                      window.location.href = `?date=${formattedDate}`;
                    };

                    // Get current year and month
                    const year = currentDate.getFullYear();
                    const month = currentDate.getMonth();

                    // Get month name
                    const monthNames = [
                      "January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                    ];
                    const monthName = monthNames[month];

                    // Get days for the calendar grid
                    const daysInMonth = getDaysInMonth(year, month);
                    const previousMonthDays = getPreviousMonthDays(year, month);

                    const calendarDays = [];

                    // Previous month days
                    previousMonthDays.forEach(day => {
                      calendarDays.push({
                        day,
                        isCurrentMonth: false,
                        isSelected: false
                      });
                    });

                    // Current month days
                    for (let day = 1; day <= daysInMonth; day++) {
                      const date = new Date(year, month, day);
                      const isSelected =
                        selectedDate &&
                        date.getDate() === selectedDate.getDate() &&
                        date.getMonth() === selectedDate.getMonth() &&
                        date.getFullYear() === selectedDate.getFullYear();

                      calendarDays.push({
                        day,
                        isCurrentMonth: true,
                        isSelected
                      });
                    }

                    // Fill the remaining slots for a complete grid
                    const totalSlots = Math.ceil(calendarDays.length / 7) * 7;
                    const nextMonthDays = totalSlots - calendarDays.length;

                    for (let day = 1; day <= nextMonthDays; day++) {
                      calendarDays.push({
                        day,
                        isCurrentMonth: false,
                        isSelected: false
                      });
                    }

                    return (
                      <>
                        {/* Calendar header with month navigation */}
                        <div className="flex items-center p-1 justify-between">
                          <button onClick={goToPreviousMonth}>
                            <div className="text-white flex size-10 items-center justify-center" data-icon="CaretLeft" data-size="18px" data-weight="regular">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                              </svg>
                            </div>
                          </button>
                          <p className="text-white text-base font-bold leading-tight flex-1 text-center">
                            {monthName} {year}
                          </p>
                          <button onClick={goToNextMonth}>
                            <div className="text-white flex size-10 items-center justify-center" data-icon="CaretRight" data-size="18px" data-weight="regular">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                              </svg>
                            </div>
                          </button>
                        </div>

                        {/* Calendar weekday headers */}
                        <div className="grid grid-cols-7">
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">M</p>
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">W</p>
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">T</p>
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">F</p>
                          <p className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">S</p>

                          {/* Calendar days */}
                          {calendarDays.map((calendarDay, index) => {
                            const { day, isCurrentMonth, isSelected } = calendarDay;

                            // Determine day classes
                            let dayClasses = "h-12 w-full text-sm font-medium leading-normal ";

                            if (isCurrentMonth) {
                              dayClasses += isSelected ?
                                "text-white " :
                                "text-white ";

                              // Add background and border radius
                              if (isSelected) {
                                dayClasses += "bg-[#293038] ";
                              }

                              // Add rounded corners for the first and last selected days of a range
                              // Here we just handle single selection
                              if (isSelected) {
                                dayClasses += "rounded-full ";
                              }
                            } else {
                              // Previous or next month days (grayed out)
                              dayClasses += "text-[#9dabb8] ";
                            }

                            return (
                              <button
                                key={`${isCurrentMonth ? 'current' : 'other'}-${day}-${index}`}
                                className={dayClasses}
                                onClick={() => isCurrentMonth && handleDateClick(day)}
                                disabled={!isCurrentMonth}
                              >
                                <div className={`flex size-full items-center justify-center rounded-full ${isSelected ? 'bg-[#1980e6]' : ''}`}>
                                  {day}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    );
                  })()}
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
                  <p className="text-white tracking-light text-[32px] font-bold leading-tight">Noleggia un Auto</p>
                  <p className="text-[#9dabb8] text-sm font-normal leading-normal">Vedi tutte le auto disponibili il 05.02.2025</p>
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
                          <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{ backgroundImage: 'url("/panda.jpg")' }}></div>
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

// Main component with Suspense boundary
export default function CarRentalPage() {
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

      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-[#111418]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      }>
        <CarRentalContent />
      </Suspense>
    </>
  );
}