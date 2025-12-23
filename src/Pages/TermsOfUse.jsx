import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfUse() {
  return (
    <>
      {/* Hero Section */}
      <div className='min-h-[60vh] bg-[#1e1e1e] flex justify-center items-center text-white px-4'>
        <div className="terms-of-use text-center">
          <p className='font-bold text-3xl'>Terms of Use</p>
        </div>
      </div>

      {/* Content Section */}
      <div className='bg-[#1e1e1e] gap-5 py-10 flex justify-center'>
        <div className=' w-full grid gap-5 grid-cols-1 p-6 '>          
        <div className='  rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white '>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
            قبول الشروط
          </p>
          <div dir='rtl'>
            <p className='leading-7 p-5'>
            باستخدامك هذا الموقع، فأنت توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء منها، نرجو الامتناع عن استخدام الموقع.
            </p>
          </div>

        </div>
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
            استخدام الموقع
          </p>
          <div dir='rtl' className='leading-7 p-5 '>
           
          <ul className='list-disc list-inside'>
            <li className='!text-black'>
              يُسمح لك باستخدام المحتوى والخدمات الموجودة للاطلاع والاستخدام الشخصي فقط.
            </li>
            <li  className='!text-black'>
يمنع إعادة نشر أو توزيع أي محتوى بدون إذن مسبق.            
            </li>
            <li className='!text-black'>
يمنع إساءة استخدام الموقع أو محاولة الوصول غير المصرح به للخدمات أو الخوادم.            
            </li>
          </ul>
          </div>

        </div>
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
المحتوى          
          </p>
          <div dir='rtl'>
            <ul>
            <li className='!text-black leading-7 p-5'>
        يتم تشغيل خدمات الموقع وفق أعلى معايير الجودة المتاحة، ونعمل دائمًا على تحسين الأداء وتقديم أفضل تجربة للمستخدم.
            </li>
            </ul>
          </div>

        </div>
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
التواصل          
          </p>
          <div dir='rtl'>
            <p className='leading-7 p-5'>
إذا لديك أي استفسار، يمكن التواصل معنا من خلال صفحة <Link to="/ContactUs" className='text-blue-600 link link-hover font-bold '>ContactUs</Link>             
            </p>
          </div>

        </div>
        </div>
      </div>
    </>
  )
}
