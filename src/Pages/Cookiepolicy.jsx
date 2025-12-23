import React from 'react'

export default function Cookiepolicy() {
  return (
    <>
           <>
      {/* Hero Section */}
      <div className='min-h-[60vh] bg-[#1e1e1e] flex justify-center items-center text-white px-4'>
        <div className="terms-of-use text-center">
          <p className='font-bold text-3xl'>Cookie Policy</p>
        </div>
      </div>

      {/* Content Section */}
      <div className='bg-[#1e1e1e] gap-5 py-10 flex justify-center'>
        <div className=' w-full grid gap-5 grid-cols-1 p-6 '>          
        <div className='  rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white '>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
          ما هي الكوكيز؟</p>
          <div dir='rtl' className='leading-7 p-5 '>
<p>هي ملفات صغيرة تُخزن في جهازك لمساعدتنا على تحسين تجربتك عند زيارة الموقع.</p>
          </div>

        </div>
        {/*كيف نستخدم الكوكيز؟ */}
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
كيف نستخدم الكوكيز؟</p>
          <div dir='rtl' className='leading-7 p-5 '>
           
          <ul className='list-disc list-inside'>
            <p className='!text-black font-bold font'>
نستخدم الكوكيز من أجل:
            </p>
            <li className='!text-black'>
تذكر تفضيلاتك في الموقع.            </li>
            <li  className='!text-black'>
تحسين سرعة وأداء التصفح.            </li>
            <li className='!text-black'>
تحليل طريقة استخدام الزوار للموقع لتطويره.            </li>
            <li className='!text-black'>
عرض محتوى مناسب لك.            </li>
            </ul>
          </div>

        </div>
        {/* أنواع الكوكيز التي نستخدمها */}
        <div className='w-auto rounded-2xl  transition-transform duration-300 hover:scale-103 bg-white'>
          <p className='leading-7 text-center font-bold text-2xl p-5 '>
أنواع الكوكيز التي نستخدمها
</p>
          <div dir='rtl' className='leading-7 p-5 '>
            <ul className='list-disc list-inside'>
            <li className='!text-black'>
كوكيز أساسية لتشغيل الموقع.  
  </li>
            <li className='!text-black'>
        كوكيز تحليلية لمعرفة أداء الصفحات.
</li>
            <li className='!text-black'>
كوكيز تخص التخصيص وتجربة المستخدم.
</li>
            </ul>
            </div>

        </div>

        </div>
      </div>
    </>

    </>
  )
}
