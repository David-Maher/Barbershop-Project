import React, { useState, useEffect } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { collection, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase';

export default function ServicesDash() {
  const [services, setServices] = useState([]);
  const [editCard, setEditCard] = useState(null); 
  const [tempTitle, setTempTitle] = useState("");
  const [tempDesc, setTempDesc] = useState("");
  const [preview, setPreview] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editedImage, setEditedImage] = useState(null);

  const handleFileChange = (e) => {
  const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setEditedImage(file);
    }
  };
  const [Service, setService] = useState({
    title: "",
    description: "",
    image: ""
  });
  const handleChange = (e) => {
    setService({ ...Service, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Listen للتغييرات في Collection ServiceDashboard
    const unsub = onSnapshot(collection(db, "ServiceDashboard"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title || "No title",
        description: doc.data().description || "No description",
        imageUrl: doc.data().imageUrl || ""
      }));
      setServices(data);
    });

    return () => unsub(); // تنظيف الاشتراك عند unmount
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "ServiceDashboard", id));
  };

  const handleEdit = (card) => {
    setEditCard(card.id);
    setTempTitle(card.title);
    setTempDesc(card.description);
  };

  const handleSave = async (id) => {
    await updateDoc(doc(db, "ServiceDashboard", id), {
      title: tempTitle,
      description: tempDesc
    });
    setEditCard(null);
  };

  return (
    <div className="p-5 flex flex-col justify-center items-center min-h-screen">
      <p className='text-center text-6xl font-bold mb-10'>Welcome to Services</p>
      <div className=' mb-10 btn  items-center btn-primary w-45'>
        <button>Add Services</button>
      </div>
      <div className='flex justify-center gap-5 flex-wrap'>
        {services.length === 0 && (
          <p className="text-center text-gray-500 w-full">Loading services...</p>
        )}
        {services.map((service) => (
          <div key={service.id} className='p-5 card bg-base-100 w-96 shadow-sm hover:shadow-xl hover:scale-105 hover:bg-base-200 transition-all duration-300 rounded-lg'>
            
            {/* الصورة */}
            {service.imageUrl ? (
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-3 rounded-md">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {editCard === service.id ? (
              <div>
                <input
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                  className='input input-bordered w-full mb-2'
                  placeholder="Title"
                />
                
                <textarea
                  value={tempDesc}
                  onChange={(e) => setTempDesc(e.target.value)}
                  className='textarea textarea-bordered w-full'
                  placeholder="Description"
                />
                                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-2 mt-5 cursor-pointer bg-blue-600 text-white rounded-full px-6 py-3 font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300" />
                  {preview && <img src={preview} alt="preview" className="w-32 h-32 object-cover rounded-full mx-auto mb-2 shadow-lg transform hover:scale-110 transition-all duration-500" />}

                <button onClick={() => handleSave(service.id)} className='btn btn-success btn-sm mt-2 w-full'>Save</button>
              </div>
            ) : (
              <div>
                <p className='font-bold text-[25px] mb-2'>{service.title}</p>
                <p className='mb-3'>{service.description}</p>
                <div className='flex justify-between mt-5'>
                  <MdEdit onClick={() => handleEdit(service)} className='text-orange-400 cursor-pointer text-xl' />
                  <MdDelete onClick={() => handleDelete(service.id)} className='text-red-500 cursor-pointer text-xl' />
                </div>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  )
}
