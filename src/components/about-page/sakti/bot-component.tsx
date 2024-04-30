import React from "react";

export default function BotComponent() {
  const valueSakti1 = [
    {
      id: 1,
      headline: "Solusi",
      text: "Didukung jaringan yang luas dan kuat di seluruh wilayah Indonesia yang dapat membuat kami bisa memberikan solusi yang efektif untuk anda. Kami siap mendengarkan kebutuhan logistik anda.",
    },
    {
      id: 2,
      headline: "Amanah",
      text: "Berpedoman bekerja untuk mendapatkan barokah, kami akan selalu menjaga amanah atau kepecayaan anda. Kami akan pastikan setiap pengiriman anda akan aman dan sesuai",
    },
  ];

  const valueSakti2 = [
    {
      id: 1,
      headline: "Komunikasi",
      text: "Memastikan setiap customer mendapatkan informasi yang cepat & akaurat dengan teknologi yang terkini. Selain itu, Kunci dari sebuah hubungan yang baik dengan semua pihak adalah komunikasi.",
    },
    {
      id: 2,
      headline: "Tanggung Jawab",
      text: "Kami akan bertanggung jawab penuh kepada setiap pekerjaan yang sudah kami terima. Setiap pekerjaan memiliki resiko tersendiri, namun ini adalah sebuah komitmen kami untuk menyelesaikan perngiriman sampai dengan tuntas & tanpa masalah.",
    },
    {
      id: 3,
      headline: "Inovasi",
      text: "Terus beradaptasi dengan perkembangan zaman melalui teknologi terkini. Tidak pernah puas dan selalu berinovasi dalam segala linear untuk selalu menjadi yang terbaik di bidangnya.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {valueSakti1.map((value) => (
          <div
            className="bg-slate-50 rounded-xl p-6 w-full col-span-3 hover:bg-blueatm-900 hover:text-white group"
            data-aos="zoom-in-down"
            data-aos-delay="450"
            data-aos-offset="-400"
            key={value.id}
          >
            <h1 className="text-left text-3xl text-blueatm-900 group-hover:text-white font-semibold">
              {value.headline}
            </h1>
            <h1 className="text-sm pt-2">{value.text}</h1>
          </div>
        ))}

        {valueSakti2.map((value) => (
          <div
            className="bg-slate-50 rounded-xl p-6 w-full col-span-2 hover:bg-blueatm-900 hover:text-white group"
            data-aos="zoom-in-down"
            data-aos-delay="450"
            data-aos-offset="-400"
            key={value.id}
          >
            <h1 className="text-left text-3xl text-blueatm-900 group-hover:text-white font-semibold">
              {value.headline}
            </h1>
            <h1 className="text-sm pt-2">{value.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
