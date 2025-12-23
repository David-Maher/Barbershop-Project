import React from "react";
import Swal from "sweetalert2";

export default function HomePageContent() {
  const handleSubmit = (e, section = "Content") => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "Saved",
        text: `${section} saved successfully.`,
        icon: "success",
        timer: 1600,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an error saving the content.",
        icon: "error",
        timer: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 tracking-tight">
            Home Page Content Editor
          </h1>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Edit the main banner and content sections. Changes are saved per section.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Banner Card */}
          <section className="col-span-1 lg:col-span-1 bg-gradient-to-br from-slate-900/70 to-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-2">Banner</h2>
            <p className="text-sm text-slate-400 mb-6">
              Title and short tagline shown on the home page banner.
            </p>

            <form onSubmit={(e) => handleSubmit(e, "Banner Title")}>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Banner Title
              </label>
              <input
                name="bannerTitle"
                placeholder="Saeed Rabee Barber shop"
                className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <label className="block text-xs font-medium text-slate-300 mt-4 mb-2">
                Banner Subtitle
              </label>
              <textarea
                name="bannerSubtitle"
                placeholder="Unforgettable grooming experience near you"
                className="w-full resize-none bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white placeholder-slate-500 h-28 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center cursor-pointer gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:opacity-95 focus:outline-none"
                >
                  Save Banner
                </button>
              </div>
            </form>
          </section>

          {/* Quick Info Card */}
          <section className="col-span-1 bg-gradient-to-br from-slate-900/70 to-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-2">Quick Info</h2>
            <p className="text-sm text-slate-400 mb-6">
              Phone, working hours and a short welcome title.
            </p>

            <form onSubmit={(e) => handleSubmit(e, "Quick Info")}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    placeholder="+20 123 456 789"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Welcome Title
                  </label>
                  <input
                    name="welcomeTitle"
                    placeholder="Welcome to the Best Barbershop in Egypt"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Working Hours
                  </label>
                  <input
                    name="workingHours"
                    placeholder="Friday - Thursday 10:00 AM to 3:00 PM"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center cursor-pointer gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:opacity-95 focus:outline-none"
                >
                  Save Quick Info
                </button>
              </div>
            </form>
          </section>

          {/* About Us — Full width on smaller screens, takes one column here */}
          <section className="col-span-1 lg:col-span-2 bg-gradient-to-br from-slate-900/70 to-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">About Us</h2>
                <p className="text-sm text-slate-400">
                  Main About section content and two highlighted titles.
                </p>
              </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e, "About Us")} className="mt-6 space-y-6">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Center Content
                </label>
                <input
                  name="centerContent"
                  placeholder="Center-Content : SAEID RABIE"
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    First Title
                  </label>
                  <input
                    name="firstTitle"
                    placeholder="Welcome to the board"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <label className="block text-xs font-medium text-slate-300 mb-2 mt-4">
                    First Content
                  </label>
                  <textarea
                    name="firstContent"
                    placeholder="Short paragraph about the barber shop and community feel."
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white placeholder-slate-500 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Second Title
                  </label>
                  <input
                    name="secondTitle"
                    placeholder="Who Are We"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <label className="block text-xs font-medium text-slate-300 mb-2 mt-4">
                    Second Content
                  </label>
                  <textarea
                    name="secondContent"
                    placeholder="Welcome to our store, Saeed Rabie, where excellence meets quality..."
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white placeholder-slate-500 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-400 text-slate-900 font-semibold px-5 py-2 rounded-lg shadow-md hover:opacity-95 focus:outline-none"
                >
                  Save About Us
                </button>
              </div>
            </form>
          </section>
          <section className="col-span-1 lg:col-span-2 bg-gradient-to-br from-slate-900/70 to-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Our Details</h2>
                <p className="text-sm text-slate-400">
                  Main About section content and two highlighted titles.
                </p>
              </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e, "About Us")} className="mt-6 space-y-6">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
Working Hours
                </label>
                <input
                  placeholder="Friday - Thursday 10:00 to 3:00 / Sunday - Monday 10:00 to 3:00 / Tuesday - Wednesday 10:00 to 3:00 / Thursday - Friday 10:00 to 3:00"
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                  Location
                  </label>
                  <input
                    placeholder="Enter Your Location Here"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                 
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-400 text-slate-900 font-semibold px-5 py-2 rounded-lg shadow-md hover:opacity-95 focus:outline-none"
                >
                  Our Details
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}