import React, { useState } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

export default function ServicesDash() {
  
  const [ServCards, setServCards] = useState([
    { id: "1", title: "HairCut", description: "Precision haircuts craffed to suit your personal style and preferences" },
    { id: "2", title: "Beard Trim", description: "Expert beard trimining and shaping to a clean and polished look" },
    { id: "3", title: "shaving", description: "Classic shaving service using a high quality products for smooth finish" },
    { id: "4", title: "kids", description: "Classic shaving service using a high quality products for smooth finish" },
  ]);

  const [editCard, setEditCard] = useState(null); 
  const [tempTitle, setTempTitle] = useState("");
  const [tempDesc, setTempDesc] = useState("");

  const handleDelete = (id) => {
    setServCards(ServCards.filter(card => card.id !== id));
  };

  const handleEdit = (card) => {
    setEditCard(card.id);
    setTempTitle(card.title);
    setTempDesc(card.description);
  };

  const handleSave = (id) => {
    setServCards(
      ServCards.map(card =>
        card.id === id ? { ...card, title: tempTitle, description: tempDesc } : card
      )
    );
    setEditCard(null); // نقفل الفورم
  };

  return (
    <div>
      <p className='text-center text-6xl'>Welcome to Services</p>

      <div className='mt-10 flex gap-5 flex-wrap'>
        {ServCards.map((Card) => (
          <div key={Card.id} className='p-5 card bg-base-100 w-96 shadow-sm hover:shadow-xl hover:scale-105 hover:bg-base-200 transition-all duration-300'>
            {editCard === Card.id ? (
              <div>
                <input
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  className='input input-bordered w-full mb-2'
                />
                <textarea
                  value={tempDesc}
                  onChange={(e) => setTempDesc(e.target.value)}
                  className='textarea textarea-bordered w-full'
                />
                <button onClick={() => handleSave(Card.id)} className='btn btn-success btn-sm mt-2'>Save</button>
              </div>
            ) : (
              <div>
                <p className='font-bold text-[25px]'>{Card.title}</p>
                <p>{Card.description}</p>
                <div className='flex justify-between mt-5'>
                  <MdEdit onClick={() => handleEdit(Card)} className='text-orange-400 cursor-pointer' />
                  <MdDelete onClick={() => handleDelete(Card.id)} className='text-red-500 cursor-pointer' />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
