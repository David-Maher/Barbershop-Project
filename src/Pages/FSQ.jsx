import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FSQ() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div dir="rtl" className="bg-[#333333] flex justify-center py-10 px-4">
        <div className="w-full mt-40 max-w-6xl text-right">
          <h1 className="text-[#b8a269] text-3xl font-bold text-center mb-10">
            الأسئلة الشائعة
          </h1>

          {/* ✅ تقسيم الأسئلة في عمودين بثبات الاتجاه حتى على الموبايل */}
          <div className="flex flex-wrap justify-between gap-6" dir="rtl">
            {/* العمود الأول */}
            <div className="flex-1 min-w-[300px] space-y-4">
              <Accordion open={open === 1} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 1 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  فين فروعكم المتاحة حالياً؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  عندنا كذا فرع، ويمكنك معرفة أقرب فرع ليك من صفحة الفروع على الموقع.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 2 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل لازم أحجز قبل ما أجي؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  مش شرط، لكن بننصح بالحجز المسبق لتجنب الانتظار خصوصًا في أوقات الزحمة.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 3} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 3 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل بتقدموا خدمات للكبار ولا كمان للأطفال؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  نعم، عندنا خدمات مخصصة للرجال والأطفال في أقسام منفصلة لضمان راحة كل العملاء.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 4} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 4 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل في عروض أو خصومات حالياً؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  بنعمل عروض موسمية بشكل مستمر، تقدر تتابعها على صفحتنا الرئيسية أو حساباتنا على السوشيال ميديا.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 5} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 5 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  إيه المنتجات اللي بتستخدموها أثناء الحلاقة والعناية؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  بنستخدم منتجات أصلية من علامات موثوقة للحفاظ على جودة الخدمة وصحة البشرة والشعر.
                </AccordionBody>
              </Accordion>
            </div>

            {/* العمود الثاني */}
            <div className="flex-1 min-w-[300px] space-y-4">
              <Accordion open={open === 6} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 6 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل ممكن أطلب خدمة حلاقة منزلية؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  في بعض الفروع متاحة الخدمة دي، تقدر تتأكد منها عن طريق الاتصال بخدمة العملاء.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 7} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(7)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 7 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل في حلاقة بالماكينة فقط ولا كمان بالموس؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  الاختيارين مُتاحين حسب تفضيل العميل، سواء ماكينة، موس، أو حلاقة تقليدية كاملة.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 8} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(8)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 8 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل بتقدموا خدمة حلاقة اللحية أو تنسيقها؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  طبعًا، عندنا متخصصين في تنسيق اللحية بأحدث الصيحات.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 9} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(9)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 9 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل ممكن أختار الحلاق اللي أنا عايزه؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  أيوه، تقدر تختار الحلاق المفضل لما توصل الفرع.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 10} className="rounded-lg border border-gray-600 bg-[#3c3c3c] px-4 shadow-md text-right">
                <AccordionHeader
                  onClick={() => handleOpen(10)}
                  className={`border-b-0 text-white transition-colors justify-between ${
                    open === 10 ? "text-[#b8a269] font-bold" : ""
                  }`}
                >
                  هل في قسم للعناية بالبشرة؟
                </AccordionHeader>
                <AccordionBody className="pt-0 text-white font-normal">
                  نعم، كل فروعنا فيها خدمات إضافية زي تنظيف البشرة أو حمام البُخار بعد الحلاقة.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
