
import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacypolicy() {
  return (
       <>
      {/* Hero Section */}
      <div className='min-h-[60vh] bg-[#1e1e1e] flex justify-center items-center text-white px-4'>
        <div className="terms-of-use text-center">
          <p className='font-bold text-3xl'>Privacy policy</p>
        </div>
      </div>

      {/* Content Section */}
      <div className='bg-[#1e1e1e] gap-5 py-10 flex justify-center'>
        <div className=' w-full grid gap-5 grid-cols-1 p-6 '>          
        <div className='  rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white '>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
البيانات التي نجمعها          </p>
          <div dir='rtl' className='leading-7 p-5 '>
<p> بيانات تقدمها لنا بشكل مباشر (مثل: الاسم، البريد الإلكتروني عند التسجيل أو التواصل).</p>
          </div>

        </div>
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
كيفية استخدام البيانات          </p>
          <div dir='rtl' className='leading-7 p-5 '>
           
          <ul className='list-disc list-inside'>
            <p className='!text-black font-bold font'>
              نستخدم بياناتك من أجل:
            </p>
            <li className='!text-black'>
تحسين تجربة الاستخدام.
            </li>
            <li  className='!text-black'>
التواصل معك عند الحاجة.
            </li>
            <li className='!text-black'>
 تحليل الأداء وتطوير خدمات الموقع.
            </li>
            </ul>
          </div>

        </div>
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
مشاركة البيانات          
</p>
          <div dir='rtl' className='leading-7 p-5 '>
            <p>لا نقوم ببيع أو تأجير بياناتك لطرف ثالث            </p>
            </div>

        </div>
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
حماية البيانات          </p>
          <div dir='rtl' className='leading-7 p-5 '>
          <p>نستخدم إجراءات أمان تقنية لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الضياع.</p>
          </div>

        </div>

        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
        ملفات تعريف الارتباط </p>
          <div dir='rtl' className='leading-7 p-5 '>
          <p>يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل النشاط.</p>
          </div>

        </div>

        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
     حقوقك</p>
          <div dir='rtl' className='leading-7 p-5 '>
          <ul className='list-disc list-inside'>
            <p className='!text-black font-bold font'>
              نستخدم بياناتك من أجل:
            </p>
            <li className='!text-black'>
طلب معرفة البيانات المخزنة عنك.            </li>
            <li  className='!text-black'>
طلب حذف بياناتك.            </li>
            </ul>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}
