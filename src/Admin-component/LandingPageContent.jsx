import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function LandingPageContent() {
  const [heroTitle, setHeroTitle] = useState("");
  const [HeroContent, setHeroContent] = useState("");
  const [secondLandingTitle, setSecondLandingTitle] = useState("");
  const [services, setServices] = useState([]);
  const showSaved = (section = "Section") => {
    Swal.fire({
      title: "Saved",
      text: `${section} saved successfully.`,
      icon: "success",
      timer: 1400,
      showConfirmButton: false,
    });
  };

  const handleSaveHero = (e) => {
    e.preventDefault();
    const landingRef = doc(db, "LandingPage", "LandingPanner");
    const secondRef = doc(db, "LandingPage", "SecondLandingTitle");
    const servicesRef = doc(db, "LandingPage", "Services");

    const p1 = setDoc(landingRef, { LandingTitle: heroTitle, LandingContent: HeroContent }, { merge: true });
    const p2 = setDoc(secondRef, { SecondLandingpageTitle: secondLandingTitle }, { merge: true });
    const p3 = setDoc(servicesRef, { services: services || [] }, { merge: true });

    Promise.all([p1, p2, p3])
      .then(() => {
        showSaved("Landing Page");
      })
      .catch((err) => {
        console.error("Save failed", err);
        Swal.fire({ title: "Error", text: "Failed to save landing page.", icon: "error" });
      });
  };

  const handleSaveFeatures = (e) => {
    e.preventDefault();
    console.log("Saving features:", { featureA, featureB, featureC });
    showSaved("Features");
  };

  useEffect(() => {
    const landingRef = doc(db, "LandingPage", "LandingPanner");
    const secondRef = doc(db, "LandingPage", "SecondLandingTitle");
    const servicesRef = doc(db, "LandingPage", "Services");

    const unsubLanding = onSnapshot(landingRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setHeroTitle(data.LandingTitle || "");
        setHeroContent(data.LandingContent || "");
      }
    });

    const unsubSecond = onSnapshot(secondRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setSecondLandingTitle(data.SecondLandingpageTitle || "");
      }
    });

    const unsubServices = onSnapshot(servicesRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setServices(Array.isArray(data.services) ? data.services : []);
      }
    });

    return () => {
      unsubLanding();
      unsubSecond();
      unsubServices();
    };
  }, []);

  const handleAddService = () => setServices((s) => [...s, ""]);

  const handleChangeService = (index, value) =>
    setServices((s) => s.map((it, i) => (i === index ? value : it)));

  const handleDeleteService = (index) =>
    setServices((s) => s.filter((_, i) => i !== index));


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 tracking-tight">
            Landing Page Editor
          </h1>
          <p className="mt-2 text-slate-400 max-w-3xl">
            Craft the hero, features and footer that visitors see. Use the live preview to verify changes instantly.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Editor */}
          <section className="lg:col-span-7 space-y-6">
            {/* Hero Card */}
            <div className="bg-gradient-to-br from-slate-900/75 to-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">
              <h2 className="text-lg font-semibold text-white">Hero / Banner</h2>
              <form onSubmit={handleSaveHero} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Headline Title</label>
                  <input
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    placeholder="Your Style Starts Here"
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <label className="block text-xs font-medium text-slate-300 mb-1 mt-2">Content</label>
                  <input value={HeroContent}
                    onChange={(e) => setHeroContent(e.target.value)}
                    placeholder="We build our passion for the art of barbering through our commitment to our customers."
                    className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                    
                    </input>
                    
                </div>
                  <div>
                    <p className="text-lg font-semibold text-white">Services</p>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Secondary Title</label>
                    <input
                      value={secondLandingTitle}
                      onChange={(e) => setSecondLandingTitle(e.target.value)}
                      placeholder="Secondary heading"
                      className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />

                    {services.map((s, idx) => (
                      <div key={idx} className="mt-3 flex items-start gap-3">
                        <textarea
                          value={s}
                          onChange={(e) => handleChangeService(idx, e.target.value)}
                          placeholder={`Service ${idx + 1}`}
                          className="flex-1 bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white placeholder-slate-500 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteService(idx)}
                          className="inline-flex items-center gap-2 bg-rose-500 text-white font-semibold px-3 py-2 rounded-lg shadow-md hover:opacity-95 focus:outline-none"
                        >
                          Delete
                        </button>
                      </div>
                    ))}

                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleAddService}
                        className="text-amber-400 font-semibold"
                      >
                        + Add Service
                      </button>
                    </div>
                  </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:opacity-95 focus:outline-none"
                  >
                    Save Edit
                  </button>
                </div>
              </form>
            </div>
        </section>
        </main>
      </div>
    </div>
  );
}