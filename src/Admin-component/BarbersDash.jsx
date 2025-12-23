import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";
import { db } from '../Firebase';

export default function BarbersDash() {

  const [cards, setCards] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDesc, setEditedDesc] = useState('');
  const [preview, setPreview] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  // ============= ADD FORM STATE =============
  const [person, setPerson] = useState({
    title: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  // ============= ADD NEW DOC =============
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "BarbersDashboard"), {
        title: person.title,
        description: person.description,
        image: person.image
      });

      setPerson({ title: "", description: "", image: "" });
      setShowForm(false);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // ============= PREVIEW IMAGE WHEN EDITING =============
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setEditedImage(file);
    }
  };

  // ============= GET DATA FROM FIREBASE =============
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "BarbersDashboard"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title || "No title",
        description: doc.data().description || "No description",
        image: doc.data().image || ""
      }));
      setCards(data);
    });

    return () => unsub();
  }, []);

  // ============= HANDLE EDIT CLICK =============
  const handleEditClick = (card) => {
    setEditingId(card.id);
    setEditedTitle(card.title);
    setEditedDesc(card.description);
    setPreview(card.image);
    setEditedImage(null);
  };

  // ============= SAVE EDIT TO FIREBASE =============
  const handleSaveClick = async (id) => {
    const docRef = doc(db, "BarbersDashboard", id);

    await updateDoc(docRef, {
      title: editedTitle,
      description: editedDesc,
      image: preview
    });

    setEditingId(null);
    setPreview(null);
    setEditedImage(null);
  };

  // ============= DELETE CARD =============
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "BarbersDashboard", id));
  };

  return (
    <>
      <div>
        <p className='text-6xl text-center'>welcome to Our Barbers</p>
      </div>

      {/* ADD BUTTON */}
      <div className='flex justify-center hover:scale-105 ease-in-out duration-300 cursor-pointer mt-10'>
        <button 
          className='btn text-white btn-success w-36 font-medium'
          onClick={() => setShowForm(true)}
        >
          Add Barber
        </button>
      </div>

      {/* ADD FORM */}
      {showForm && (
        <div className="mt-10 flex flex-col items-center gap-3 bg-base-200 p-5 rounded-xl w-[400px] mx-auto">
          
          <input 
            className="border px-3 py-2 rounded w-full"
            name="title"
            placeholder="Title"
            value={person.title}
            onChange={handleChange}
          />

          <input 
            className="border px-3 py-2 rounded w-full"
            name="description"
            placeholder="Description"
            value={person.description}
            onChange={handleChange}
          />

          <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2 cursor-pointer bg-blue-600 text-white rounded-full px-6 py-3 font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                  />
          <button 
            className="btn btn-primary w-full"
            onClick={handleSubmit}
          >
            Save Barber
          </button>
        </div>
      )}

      {/* CARDS */}
      <div className='mt-10 flex justify-center gap-5 flex-wrap'>
        {cards.map((card) => (
          <div key={card.id} className="flex p-5 card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">

            <div className='flex justify-center mb-5'>
              <figure className='w-35'>
                <img 
                  className='w-32 h-32 object-cover rounded-full'
                  src={editingId === card.id && preview ? preview : card.image}
                  alt="barber"
                />
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
                    className="border px-2 py-1 rounded mb-2 text-center"
                    value={editedDesc}
                    onChange={(e) => setEditedDesc(e.target.value)}
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2 cursor-pointer bg-blue-600 text-white rounded-full px-6 py-3 font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                  />

                  {preview && (
                    <img 
                      src={preview} 
                      alt="preview" 
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-lg transform hover:scale-110 transition-all duration-500"
                    />
                  )}
                </>
              ) : (
                <>
                  <p className='text-[20px] font-bold'>{card.title}</p>
                  <h2 className="text-2xl text-center text-[#b8a269]">{card.description}</h2>
                </>
              )}

              <div className='flex gap-5 justify-center'>
                {editingId === card.id ? (
                  <button
                    type='button'
                    onClick={() => handleSaveClick(card.id)}
                    className='cursor-pointer text-white bg-green-600 hover:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5'
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => handleEditClick(card)}
                    className='cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-5 py-2.5'
                  >
                    Edit
                  </button>
                )}

                <button
                  type='button'
                  onClick={() => handleDelete(card.id)}
                  className='cursor-pointer text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5'
                >
                  Delete
                </button>

              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}
