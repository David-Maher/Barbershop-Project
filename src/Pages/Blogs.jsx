import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

export default function Blogs() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Articles"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
    <Helmet>
     <meta name="description" content="Blogs" /> 
     <meta name="robots" content="index, follow" />
      <meta name="robots" content="noindex, nofollow" /> 
    </Helmet>
<div className="h-auto bg-[#333333] py-10 min-h-screen">
  <div className="text-center mt-30">
    <h1 className="text-3xl font-bold text-white border-b-2 border-yellow-400 inline-block pb-2">
Blogs
  </h1>
  </div>

  <div className="flex flex-wrap justify-center mt-10 gap-6 px-3">
    {articles.slice(0, 10).map((article) => (
      <div
        key={article.id}
        className="card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%]"
      >
        <figure>
          <img
            src={
              article.imageUrl ||
              article.content?.match(/<img[^>]+src="([^">]+)"/)?.[1] ||
              "https://i.postimg.cc/jj1mCTZF/man-barbershop-salon-doing-haircut-beard-trim1-min.webp"
            }
            alt="Blog"
            className="h-52 w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg font-semibold text-gray-900">
            {article.title || ""}
          </h2>
          <p className=" text-gray-700">
            {article.content
              ? article.content.replace(/<[^>]+>/g, "").slice(0, 110) + "..."
              : ""}
          </p>
          <div className="card-actions justify-start mt-4">
            <Link to={`/blog/${article.id}`} className="btn text-white bg-[#b8a269]">
              Read More
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}
