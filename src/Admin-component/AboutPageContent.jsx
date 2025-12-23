import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../Firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export default function AboutPageContent() {
  /* =======================
      Firebase References
  ======================= */
  const pannerRef = doc(db, "About-Us-Page", "Panner");
  const secondRef = doc(db, "About-Us-Page", "SecondSection");
  const thirdRef = doc(db, "About-Us-Page", "ThirdSectionContent");

  /* =======================
      States
  ======================= */
  const [panner, setPanner] = useState({ PannerTitle: "", PannerContent: "" });
  const [secondSectionTitle, setSecondSectionTitle] = useState("");
  const [secondSectionContent, setSecondSectionContent] = useState("");
  const [numberDetails, setNumberDetails] = useState("");
  const [days, setDays] = useState([]);
  const [lastSecondContent, setLastSecondContent] = useState([]); // Array
  const [thirdSecTitle, setThirdSecTitle] = useState("");
  const [thirdSecContent, setThirdSecContent] = useState("");

  /* =======================
      Read Data (Live)
  ======================= */
  useEffect(() => {
    const unsubPanner = onSnapshot(pannerRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setPanner({
          PannerTitle: data.PannerTitle || "",
          PannerContent: data.PannerContent || "",
        });
      }
    });

    const unsubSecond = onSnapshot(secondRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setSecondSectionTitle(data.SecondSectionTitle || "");
        setSecondSectionContent(data.SecondSectionContent || "");
        setNumberDetails(data.NumberDetails || "");
        setDays(data.Days || []);
        setLastSecondContent(data.LastSecondContent || []);
      }
    });

    const unsubThird = onSnapshot(thirdRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setThirdSecTitle(data.ThirdSecTitle || "");
        setThirdSecContent(data.ThirdSecContent || "");
      }
    });

    return () => {
      unsubPanner();
      unsubSecond();
      unsubThird();
    };
  }, []);

  /* =======================
      Handlers (Days)
  ======================= */
  const updateDay = (index, value) => {
    const updated = [...days];
    updated[index] = value;
    setDays(updated);
  };
  const addDay = () => setDays([...days, ""]);
  const deleteDay = (index) => {
    const updated = days.filter((_, i) => i !== index);
    setDays(updated);
  };

  /* =======================
      Handlers (LastSecondContent)
  ======================= */
  const updateLastSecondContent = (index, value) => {
    const updated = [...lastSecondContent];
    updated[index] = value;
    setLastSecondContent(updated);
  };
  const addLastSecondContent = () => setLastSecondContent([...lastSecondContent, ""]);
  const deleteLastSecondContent = (index) => {
    const updated = lastSecondContent.filter((_, i) => i !== index);
    setLastSecondContent(updated);
  };

  /* =======================
      Save Handler
  ======================= */
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await Promise.all([
        setDoc(pannerRef, {
          PannerTitle: panner.PannerTitle,
          PannerContent: panner.PannerContent,
        }, { merge: true }),

        setDoc(secondRef, {
          SecondSectionTitle: secondSectionTitle,
          SecondSectionContent: secondSectionContent,
          NumberDetails: numberDetails,
          Days: days,
          LastSecondContent: lastSecondContent,
        }, { merge: true }),

        setDoc(thirdRef, {
          ThirdSecTitle: thirdSecTitle,
          ThirdSecContent: thirdSecContent,
        }, { merge: true })
      ]);

      Swal.fire({
        title: "Saved",
        text: "Content saved successfully.",
        icon: "success",
        timer: 1400,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Firebase Error:", error);
      Swal.fire("Error", "Failed to save data", "error");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mt-10">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 tracking-tight">
              About Page Editor
            </h1>
          </header>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/75 to-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl">

              {/* Banner Section */}
              <h2 className="text-lg font-semibold text-white">Banner Content</h2>
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Banner Title"
                  value={panner.PannerTitle}
                  onChange={(e) => setPanner({ ...panner, PannerTitle: e.target.value })}
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
                <textarea
                  placeholder="Banner Content"
                  value={panner.PannerContent}
                  onChange={(e) => setPanner({ ...panner, PannerContent: e.target.value })}
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white h-24 resize-none"
                />
              </div>

              {/* Second Section */}
              <h2 className="text-lg font-semibold text-white mt-6">Second Section Content</h2>
              <input
                type="text"
                placeholder="Section 2 Title"
                value={secondSectionTitle}
                onChange={(e) => setSecondSectionTitle(e.target.value)}
                className="w-full bg-transparent mb-3 border border-slate-700 rounded-lg px-3 py-2 text-white mt-2"
              />
              <textarea
                placeholder="Section 2 Content"
                value={secondSectionContent}
                onChange={(e) => setSecondSectionContent(e.target.value)}
                className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white h-24 resize-none mt-2"
              />

              {/* Last Second Content (New Array Field) */}
              <label className="block text-xs font-medium mt-4 text-slate-300 mb-1">Last Second Content List</label>
              {lastSecondContent.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateLastSecondContent(index, e.target.value)}
                    className="flex-1 bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white"
                  />
                  <button 
                    type="button" 
                    onClick={() => deleteLastSecondContent(index)}
                    className="text-rose-500 px-2 hover:bg-rose-500/10 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button type="button" onClick={addLastSecondContent} className="text-amber-400 cursor-pointer text-sm mt-1 mb-4">
                + Add Last Content Item
              </button>

              {/* Days */}
              <label className="block text-xs font-medium mt-4 text-slate-300 mb-1">Working Days</label>
              {days.map((day, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={day}
                    onChange={(e) => updateDay(index, e.target.value)}
                    className="flex-1 bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white"
                  />
                  <button 
                    type="button" 
                    onClick={() => deleteDay(index)}
                    className="text-rose-500 px-2 hover:bg-rose-500/10 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button type="button" onClick={addDay} className="text-amber-400 cursor-pointer text-sm mt-1">+ Add Day</button>

              {/* Phone Number Field */}
              <h2 className="text-lg font-semibold text-white mt-6">Phone Number Details</h2>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={numberDetails}
                onChange={(e) => setNumberDetails(e.target.value)}
                className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white mt-2"
              />

              {/* Third Section */}
              <h2 className="text-lg font-semibold text-white mt-6">Third Section Content</h2>
              <div className="mt-2 space-y-4">
                <input
                  type="text"
                  placeholder="Third Section Title"
                  value={thirdSecTitle}
                  onChange={(e) => setThirdSecTitle(e.target.value)}
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
                <textarea
                  placeholder="Third Section Content"
                  value={thirdSecContent}
                  onChange={(e) => setThirdSecContent(e.target.value)}
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-3 py-3 text-white h-24 resize-none"
                />
              </div>

              <div className="pt-6 flex justify-end">
                <button type="submit" className="bg-gradient-to-r cursor-pointer from-amber-500 to-rose-500 text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105 active:scale-95">
                  Save All Edits
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}