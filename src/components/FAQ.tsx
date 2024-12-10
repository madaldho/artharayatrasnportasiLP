import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Membandingkan Harga Sewa Mobil Pada Setiap Rental",
    answer: "Nah, tips yang pertama yaitu, membandingkan harga sewa pada setiap jasa rental mobil. Setiap rental mobil tentunya, memiliki harga sewa yang berbeda-beda. Dengan begini anda wajib mempertimbangakan apakah budget sewa mobil mewah di surabaya cukup untuk menyewa kendaraan yang akan digunakan guna berlibur. Pilihlah harga yang menurut anda serta keluarga terbaik dan tentunya tepat dengan kebutuhan bertamasya. "
  },
  {
    question: " Pilih Kendaraan Beroda Empat Yang Pas Dengan Kebutuhan",
    answer: "Selanjutnya tips sewa mobil mewah di surabaya yang tak kalah pentingnya yaitu memilih mobil sesuai dengan kebutuhan anda. Hal yang perlu anda pertimbangkan dalam step ini yakni, siapa saja yang ikut berlibur dan besarnya kapasitas penumpang dalam mobil. Semakin banyak membawa penumpang, tentunya anda wajib menyiapkan mobil dengan ukuran lebih besar. Sehingga anda harus menyiapkan daftar penumpang, untuk memastikan nya. "
  },
  {
    question: "Pentingnya Untuk Sewa Mobil Jauh-Jauh Hari",
    answer: "Tips sewa mobil yang ketiga yaitu mengorder atau persewaan mobil jauh-jauh hari. Sehingga anda tak kehabisan ketersediaan mobil, sebab mengingat yang mencari sewa mobil bahkan cukup banyak. Jadi pastikan anda sudah membooking mobil yang sudah ditentukan bersama keluarga. Akan lebih bagus anda booking mobil rental, jauh-jauh hari. "
  },
  {
    question: "Menyiapkan Prasyarat Untuk Menyewa mobil",
    answer: "Hal yang juga perlu sekaligus penting ketika anda menyewa mobil yaitu mempersiapkan identitas pengenal. Pada Setiap rental kendaraan beroda empat anda dimintai kartu pengenal atau KTP dan juga SIM yang dipakai sebagai syarat untuk menyewa mobil. Tips sewa mobil satu ini, pasti akan berlaku pada semua persewaan mobil. Sebab langkah ini ialah salah satu langkah supaya terciptanya hubungan baik antara pelanggan dan juga pemilik rental. Juga untuk menghindari hal-hal yang tidak diinginkan pastinya. ."
  },
  {
    question: " Pastikan Kondisi Armada Prima Dan Siap Jalan",
    answer: "Tips sewa mobil yang selanjutnya juga tak kalah menyita perhatian, yaitu memeriksa keadaan kendaraan yang akan dibawa berlibur. Pastikan armada yang anda pakai dalam kondisi prima dan layak untuk jalan. Hal ini dilakukan untuk meminimalisir gangguan perjalanan anda. Agar kendaraan armada yang sudah anda sewa tidak mengalami problem, yang dapat mengurangi suasana nyaman liburan. "
  },
  
  {
    question: "Percayakan Pada Sewa Mobil Mewah Di Surabaya Terpercaya",
    answer: "Oke yang satu ini, anda pun wajib memperhatikannya. Karenanya marak terjadi ketidakpuasan para pelanggan akan pelayanan yang dikasih oleh jasa rental mobil. Oleh sebab itu pastikan anda sudah melakukan survey . Bila anda bisa menimbang yang mana travel terbaik berdasarkan anda. "
  },
  
  {
    question: "Peraturan Lepas Kunci Atau tidak",
    answer: "Tapi ialah salah satu fasilitas, yang wajib anda ketahui pada jasa rental mobil surabaya. Bisa pemilik rental menghendaki tak lepas kunci, berarti anda dipandu oleh seorang driver yang sudah disiapkan untuk mengantar perjalanan. Supaya jikalau dibiarkan untuk lepas kunci. Pastikan juga salah satu penumpang mobil anda. Sekaligus mengemudi atau mengendarai kendaraan roda empat atau mobil."
  },
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <section id="faq" className="py-16 md:px-40  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-800 hover:text-blue-600 transition-colors duration-300">
        Persewaan Mobil Mewah
          </span>{" "}
          <span className="text-black hover:text-gray-700 transition-colors duration-300">
          Kontrak Plus Driver Profesional
          </span>
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openItems.includes(index) ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openItems.includes(index) && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

