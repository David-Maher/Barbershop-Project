 import { useState } from 'react';
export default function BarbersDash() {
  const [editingId, setEditingId] = useState(null);
  const [cards, setCards] = useState([
    { id: "1", title: "Ahmed Adel", description: "Barber/stylist" },
    { id: "2", title: "Alaa Mohamed", description: "Barber/stylist" },
    { id: "3", title: "Ramy Ahmed", description: "Barber/stylist" },
    { id: "4", title: "Karem Mostafa", description: "Barber/stylist" },
    { id: "5", title: "Mazen Amr", description: "Barber/stylist" },
    { id: "6", title: "Hassan Ali", description: "Barber/stylist" },
    { id: "7", title: "Mohsen Mohamed", description: "Barber/stylist" },
    { id: "8", title: "Ahmed Ali", description: "Barber/stylist" },
  ]);

  const [editedTitle, setEditedTitle] = useState('');
  const [editedDesc, setEditedDesc] = useState('');

  const handleEditClick = (card) => {
    setEditingId(card.id);
    setEditedTitle(card.title);
    setEditedDesc(card.description);
  };

  const handleSaveClick = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? { ...card, title: editedTitle, description: editedDesc }
          : card
      )
    );
    setEditingId(null);
  };

  return (
    <>
      <div>
        <p className='text-6xl text-center'>welcome to Our Barbers</p>
      </div>
      <div className='mt-10 flex gap-5 flex-wrap'>
        {cards.map((card) => (
          <div key={card.id} className="flex p-5 card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
            <div className='flex justify-center mb-5'>
              <figure className='w-35 '>
                <img className='w-auto h-auto rounded-full'
                  src="/src/assets/images/4234.jpg"
                  alt="Shoes" />
              </figure>
            </div>
            <div className="card-body text-center">
              {editingId === card.id ? (
                <>
                  <input
                    className="border px-2 py-1 rounded mb-2 text-center"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <input
                    className="border px-2 py-1 rounded mb-4 text-center"
                    value={editedDesc}
                    onChange={(e) => setEditedDesc(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p className='text-[20px] font-bold'>{card.title}</p>
                  <h2 className=" text-2xl text-center text-[#b8a269]">{card.description}</h2>
                </>
              )}

              <div className='flex gap-5 justify-center'>
                {editingId === card.id ? (
                  <button
                    type='button'
                    onClick={() => handleSaveClick(card.id)}
                    className='cursor-pointer text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => handleEditClick(card)}
                    className='cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'
                  >
                    Edit
                  </button>
                )}
                <button type='button' className='cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
