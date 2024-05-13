import { useEffect, useState } from "react";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const [maxChar, setMaxChar] = useState(null);
  const [loading, setLoading] = useState(false);

  const resultLists = [
    {
      name: "A",
      value: "Woody = Feige",
      description:
        "Kamu memegang teguh nilai-nilai tradisional dan memiliki ketenangan dalam menjalani kehidupan.",
      point: [
        "Hangat",
        "Bertanggung Jawab",
        "Loyal",
        "Dapat Diandalkan",
        "Stabil",
      ],
    },
    {
      name: "B",
      value: "Buzz = Pitta",
      description:
        "Selalu siap menjelajahi hal baru dan menghadapi tantangan dengan penuh semangat.",
      point: [
        "Berani",
        "Suka Hal Baru",
        "Percaya Diri",
        "Penuh Semangat",
        "Cepat Tanggap",
      ],
    },
    {
      name: "C",
      value: "Bo-Peep = Movet",
      description:
        "Selalu menghargai hubungan antar manusia dan kehangatan dalam interaksi sosial.",
      point: ["Lembut", "Penuh Empati", "Hangat", "Ramah", "Peduli"],
    },
  ];

  useEffect(() => {
    setLoading(true);
    function getMaxCharacter(obj) {
      const chars = obj;
      let max = 0;
      let maxKey = "";

      for (let char in chars) {
        if (chars[char] > max) {
          max = chars[char];
          maxKey = char;
        }
      }
      setMaxChar(maxKey);
    }

    getMaxCharacter(result);

    setLoading(false);
  }, [result]);

  return (
    <>
      <div className="bg-game-grey flex h-screen items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <h1 className="font-quicksand text-4xl font-bold">
            GAME PERSONALITY TEST <br /> You Story & Product Scent
          </h1>

          <div className="mt-8 max-w-screen-md rounded-lg bg-gray-800 p-8">
            {!maxChar && !loading ? (
              <p className="text-xl font-medium">Hasilnya apa yaaa.......</p>
            ) : (
              <p className="text-2xl font-medium">
                Hasilnya adalah ..... {maxChar === "A" && resultLists[0].value}{" "}
                {maxChar === "B" && resultLists[1].value}{" "}
                {maxChar === "C" && resultLists[2].value}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
