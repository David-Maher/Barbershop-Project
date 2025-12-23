import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { IoChevronBackCircleSharp } from "react-icons/io5";

export default function BlogDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "Articles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      } else {
        console.log("No such article!");
      }
    };
    fetchArticle();
  }, [id]);

  if (!article)
    return (
      <p className="text-white text-center mt-10 text-xl animate-pulse">
        Loading article...
      </p>
    );

  return (
    <>
      {/* ✅ الخط العربي */}
      <link
        href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-[#1c1c1c] flex flex-col items-center justify-start p-6 text-white"
        dir="Auto"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        <div className="mt-30">
        {/* 🔹 عنوان المقالة */}
        <h1 className="text-4xl font-bold mb-6 text-center text-[#febb03] border-b border-gray-600 pb-3 w-full max-w-3xl">
          {article.title || ""}
        </h1>

        {/* 🔹 محتوى المقالة */}
        </div>
        <div
          className="bg-[#2d2d2d] p-8 rounded-2xl shadow-lg max-w-3xl w-full leading-loose text-lg text-gray-200 tracking-wide prose prose-invert prose-lg"
          dangerouslySetInnerHTML={{
            __html: article.content
              // نسيب وسوم الفقرات والعناوين عشان التنسيق يبان
              .replace(/data-[^=]+=\"[^\"]*\"/g, "")
              .replace(/<p/g, '<p style="margin-bottom: 1.5rem; line-height: 2;"')
              .replace(/<h2/g, '<h2 style="color:#febb03; margin-top:2rem; margin-bottom:1rem; font-size:1.5rem;"')
              .replace(/<br\s*\/?>/g, "<br/><br/>"), // نضمن السطر الجديد يبان
          }}
        />

        {/* 🔹 زر الرجوع */}
        <div className="mt-10 flex justify-center items-center  ">
          <button
            onClick={() => window.history.back()}
            className="bg-[#facc15] hover:bg-[#eab308]  text-black font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-200"
          >
          <div className="flex flex-col cursor-pointer justify-center items-center">
         <p>Back to articles</p> <IoChevronBackCircleSharp />        
          </div>
          </button>
        </div>
      </div>
    </>
  );
}
