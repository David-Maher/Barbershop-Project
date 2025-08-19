import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../Firebase';  // تأكد من الاستيراد الصحيح
import Swal from 'sweetalert2';
import './Admin.css'
export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // استخدم useNavigate للتوجيه بعد النجاح في تسجيل الدخول

    // دالة لتعامل مع عملية تسجيل الدخول
    const handleSubmit = async (e) => {
        e.preventDefault();  // منع التحديث التلقائي للصفحة عند إرسال النموذج

        try {
            // محاولة تسجيل الدخول باستخدام Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);  // استخدم `signInWithEmailAndPassword`

            // بعد نجاح تسجيل الدخول، توجيه المستخدم إلى لوحة التحكم (Admin Dashboard)
            navigate('/Dashboard');  // التوجيه باستخدام useNavigate

            // عرض رسالة نجاح تسجيل الدخول
            Swal.fire({
                text: 'Login successful!',
                icon: 'success',
                timer: 1300
            });
        } catch (error) {
            // في حالة حدوث خطأ، عرض رسالة الخطأ
            setError('فشل في تسجيل الدخول: ' + error.message);
            Swal.fire({
                text: 'Login error!',
                icon: 'error',
            });
        }
    };

    return (
        <div className='forha h-[100vh] bg-gray-300 text-white flex justify-center items-center'>
            <div className='w-80 rounded-lg shadow-lg bg-white p-6'>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h2 className="text-2xl font-medium text-slate-700 text-center">Login</h2>
                </div>

                <form className="h-[50vh] flex justify-center items-center flex-col w-full mt-4 space-y-3" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="text-slate-700">البريد الإلكتروني</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-slate-700">كلمة المرور</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <button className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" type="submit">
                        تسجيل الدخول
                    </button>
                </form>
            </div>
        </div>
    );
}
