import React from "react";
import { Helmet } from "react-helmet";

const SECTIONS = [
  {
    title: "Nasr City Branches",
    locations: [
      {
        name: "16 Makram Ebeid",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.319848724637!2d31.345684400000003!3d30.056364999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f0c3164ad43%3A0x60e7b61c487b4a5a!2sSaeid%20Rabie%20men%20salon!5e0!3m2!1sen!2seg!4v1762614571910!5m2!1sen!2seg",
      },
      {
        name: "Abass el Akkad",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.304237654964!2d31.338347499999998!3d30.056812599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e694e215129%3A0x356313fe479d6812!2sSaied%20Rabie%20Men%20Saloon!5e0!3m2!1sen!2seg!4v1762614649099!5m2!1sen!2seg",
      },
    ],
  },
  {
    title: "El Mohandessin Branches",
    locations: [
      {
        name: "14 Syria",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.6801323009677!2d31.197779531044763!3d30.052889474919393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413767b81b9d%3A0xbf975c580f05b0!2sSaeid%20Rabie%20Men%20Salon!5e0!3m2!1sen!2seg!4v1762618798574!5m2!1sen!2seg",
      },
      {
        name: "Gameat Al Dewal",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5388732439174!2d31.199329500000008!3d30.050084500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458417534625bff%3A0x59222d94e2fb78c0!2z2LXYp9mE2YjZhiDYs9i52YrYryDYsdio2YrYuQ!5e0!3m2!1sen!2seg!4v1762618651052!5m2!1sen!2seg",
      },
    ],
  },
  {
    title: "El Zamalek Branches",
    locations: [
      {
        name: "Bahgat، Aly St",
        fullWidth: true, // TAKE FULL WIDTH
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0061115913945!2d31.216687399999994!3d30.0653593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841a00ed0b2fd%3A0x3df03eb027f70c00!2z2LXYp9mE2YjZhiDYs9i52YrYryDYsdio2YrYuSDZhNmE2K3ZhNin2YLYqQ!5e0!3m2!1sen!2seg!4v1762619216044!5m2!1sen!2seg",
      },
    ],
  },
  {
    title: "North Coast Branches",
    locations: [
      {
        name: "chillout Marasi",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.60977246545934!2d28.735099631080498!3d30.973881574468795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145ffd00738a61a7%3A0xbf57e6326d0617fb!2zU2FpZWQgUmFiaWUgTWVuIFNhbG9uIC0g2LXYp9mE2YjZhiDYs9i52YrYryDYsdio2YrYuSDZhNmE2LHYrNin2YQ!5e0!3m2!1sen!2seg!4v1762616935408!5m2!1sen!2seg",
      },
      {
        name: "Marina 5",
        src:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3425.942771120142!2d28.964914975584243!3d30.832269674536413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ5JzU2LjIiTiAyOMKwNTgnMDMuMCJF!5e0!3m2!1sen!2seg!4v1762617018587!5m2!1sen!2seg",
      },
      {
        name: "Marina 4",
        fullWidth: true, // TAKE FULL WIDTH
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.1075649178365!2d28.982433500000003!3d30.827651999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145fed4e2515d595%3A0x644ee1bbd908c65f!2sSaeid%20rabie%20men%20salon!5e0!3m2!1sen!2seg!4v1762617176930!5m2!1sen!2seg",
      },
    ],
  },
  {
    title: "Other Branches",
    locations: [
      {
        name: "Alexandria",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.4070806432865!2d29.9350525!3d31.2094494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5704d617bfd%3A0x6e853c93fe8d7b0!2sSaeid%20Rabie%20men%20salon!5e0!3m2!1sen!2seg!4v1762619608051!5m2!1sen!2seg",
      },
      {
        name: "El Shorouk City",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.015365767445!2d31.603776099999997!3d30.150976699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581d4407dd2bf9%3A0xe50fa7227caf4839!2zU2FlZWQgUmFiaWUgLSDYs9i52YrYryDYsdio2YrYuSDvuI8!5e0!3m2!1sen!2seg!4v1762619815121!5m2!1sen!2seg",
      },
      {
        name: "Zayed",
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.92523475027983!2d31.014264913614355!3d30.01379084072909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b9f8900ccdf%3A0xb2fbd3df226fe0e4!2z2LXYp9mE2YjZhiDYs9i52YrYryDYsdio2YrYuSB8IFNhaWVkIFJhYmll!5e0!3m2!1sen!2seg!4v1762625407659!5m2!1sen!2seg",
        fullWidth: true, 
      }
    ],
  },
  {
    title: "New Cairo Branches",
    locations: [
      {
        name: "Northern 90th street",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.889381495809!2d31.457770847185763!3d30.030255739552526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823002c3eac03%3A0xb22f5cb2b8db0c71!2z2LPYudmK2K8g2LHYqNmK2Lk!5e0!3m2!1sen!2seg!4v1762611849030!5m2!1sen!2seg",
      },
      {
        name: "New Cairo 1",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4307349645833!2d31.4672695!3d30.0531855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823697a71073d%3A0xd58c0e834af4467!2z2LPYudmK2K8g2LHYqNmK2Lk!5e0!3m2!1sen!2seg!4v1762611457537!5m2!1sen!2seg",
      },
      {
        name: "Second New Cairo",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5658242894774!2d31.4413603!3d30.0493116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dce8ec96f7b%3A0x6e378487acdc2375!2z2LPYudmK2K8g2LHYqNmK2Lkgc2FlaWQgcmFiaWU!5e0!3m2!1sen!2seg!4v1762613005220!5m2!1sen!2seg",
      },
      {
        name: "104 Street 17, New Cairo 1",
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.169657379978!2d31.421684599999995!3d30.003284500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dd4ceb3b809%3A0x6839a53f53a5f7c4!2sSaeid%20Rabie%20Men%20Salon!5e0!3m2!1sen!2seg!4v1762614045424!5m2!1sen!2seg",
      },
      {
        name: "the waterway, 2 N Teseen",
        fullWidth: true, // TAKE FULL WIDTH
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2894700332167!2d31.490492!3d30.028552199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823f7e9d06aa9%3A0xfc70759b83acc378!2zU2FpZWQgUmFiZWkgU2Fsb24gLSDYs9i52YrYryDYsdio2YrYuQ!5e0!3m2!1sen!2seg!4v1762614460536!5m2!1sen!2seg",
      },
    ],
  },
];

export default function Branches() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="الخدمات التي تُعزز من تجربتك للحلاقة" />
        <title>فروع سعيد ربيع</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4 flex justify-center">
        <div className="w-full  max-w-6xl space-y-6">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              className="bg-gradient-to-r transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200 from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg text-white"
            >
              <header className="mt-15 text-center mb-15">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  {section.title}
                </h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.locations.map((loc) => (
                  <div
                    key={loc.name}
                    className={`bg-gray-900/40 p-4 rounded-lg flex flex-col items-center text-center ${loc.fullWidth ? "md:col-span-2" : ""}`}
                  >
                    <p className="font-bold text-lg md:text-xl mb-3">{loc.name}</p>

                    <div className="w-full">
                      <iframe
                        title={loc.name}
                        src={loc.src}
                        className="w-full h-56 md:h-72 lg:h-96 rounded-lg shadow-md border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}