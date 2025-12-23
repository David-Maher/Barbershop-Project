import './ContactUs.css'
import { db } from '../Firebase'
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactUs() {
  const [inputname, setinputname] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Contact-Us"), {
        name: inputname,
        email: Email,
        message: Message,
        createdAt: new Date()
      });

      // بعد الإرسال بنجاح
      setinputname("");
      setEmail("");
      setMessage("");

      Swal.fire({
        icon: 'success',
        title: 'تم إرسال الرسالة بنجاح',
        text: 'شكراً لتواصلك معنا، سنقوم بالرد في أقرب وقت.',
        confirmButtonColor: '#b8a269',
        background: '#1c1c1c',
        color: '#fff'
      });

    } catch (error) {
      console.error("Error adding message:", error);

      Swal.fire({
        icon: 'error',
        title: 'حدث خطأ',
        text: 'من فضلك حاول مرة أخرى.',
        confirmButtonColor: '#b8a269',
        background: '#1c1c1c',
        color: '#fff'
      });
    }
  };
  
  return (
    <>
      <div className='ContactUs flex justify-center items-center'>
        <div>
          <p className='capitalize text-6xl font-extrabold text-white'>contact us</p>
        </div>
      </div>

      <div className='bg-[#333333] text-3xl text-white pt-10 pb-10 text-center'>
        <p>Contact Us</p>
      </div>

      <div className='sora2 flex justify-center text-start pb-10 text-white'>
        <div className='h-auto w-2xl border-2 rounded-2xl border-[#b8a269]'>
          <div>
            <div className="flex justify-center items-center p-10 rounded-2xl text-white px-4">
              
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl shadow-lg w-full max-w-md space-y-15">
                <h2 className="text-2xl font-semibold text-center text-[#b8a269]">Contact Us</h2>

                {/* الاسم */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={inputname}
                    onChange={(e) => setinputname(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#b8a269] focus:outline-none focus:border-white text-white placeholder-gray-400 py-2"
                  />
                </div>

                {/* الإيميل */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="w-full bg-transparent border-b-2 border-[#b8a269] focus:outline-none focus:border-white text-white placeholder-gray-400 py-2"
                  />
                </div>

                {/* الرسالة */}
                <div className="relative">
                  <textarea
                    required
                    placeholder="Enter your message"
                    rows="3"
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#b8a269] focus:outline-none focus:border-white text-white placeholder-gray-400 py-2 resize-none"
                  />
                </div>

                {/* الزر */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#b8a269] cursor-pointer text-black font-medium px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
