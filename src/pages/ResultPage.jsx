import { useEffect, useState } from "react";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const [maxChar, setMaxChar] = useState(null);
  // const [loading, setLoading] = useState(false);

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
    // setLoading(true);
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
      if (maxKey == "A") setMaxChar(0);
      if (maxKey == "B") setMaxChar(1);
      if (maxKey == "C") setMaxChar(2);
    }

    getMaxCharacter(result);

    // setLoading(false);
  }, [result]);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-game-grey">
        <div className="mt-8 h-5/6 w-4/6 rounded-[50px] border-4 border-game-white bg-game-white p-16 shadow-[-10px_10px_0_0_rgba(1,78,153,0.75)] shadow-game-light-blue">
          {maxChar !== null && (
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center justify-between">
                <h1 className="font-quicksand text-4xl font-bold text-game-light-blue">
                  RESULT <br /> {resultLists[maxChar].value}
                </h1>
                <p className="w-1/3 text-right">
                  {resultLists[maxChar].description}
                </p>
              </div>
              <div className="mt-12 flex w-2/3 flex-col text-center">
                {resultLists[maxChar].point.map((point, index) => (
                  <p
                    key={index}
                    className="mb-4 w-1/3 rounded-md border-2 border-game-blue bg-game-yellow py-1 font-quicksand font-bold text-game-blue"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResultPage;
