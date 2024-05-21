import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const [maxChar, setMaxChar] = useState(null);
  const navigate = useNavigate();

  const resultLists = [
    {
      name: "A",
      value: "Woody = Feige",
      description:
        "Kamu memegang teguh nilai-nilai tradisional dan memiliki ketenangan dalam menjalani kehidupan.",
      imageStory: "/result-woody.png",
      imageLador: "/lador-woody.png",
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
      imageStory: "/result-buzz.png",
      imageLador: "/lador-buzz.png",
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
      imageStory: "/result-bopeep.png",
      imageLador: "/lador-bopeep.png",
      point: ["Lembut", "Penuh Empati", "Hangat", "Ramah", "Peduli"],
    },
  ];

  useEffect(() => {
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
  }, [result]);

  return (
    <>
      <div className="flex flex-col items-end">
        <div className="mb-5 mt-10 max-w-[90vw] rounded-[50px] border-4 border-game-white bg-game-white p-5 shadow-box-lg-result shadow-game-light-blue lg:my-5 lg:max-w-screen-md lg:px-16 lg:py-8">
          {maxChar !== null && (
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
                <h1 className="text-center font-quicksand text-3xl font-bold text-game-light-blue lg:text-left lg:text-4xl">
                  RESULT <br /> {resultLists[maxChar].value}
                </h1>
                <p className="text-center lg:w-1/3 lg:text-right">
                  {resultLists[maxChar].description}
                </p>
              </div>
              <div className="mt-6 flex flex-col items-center justify-center lg:flex-row">
                <div className="flex-col px-2 text-center">
                  {resultLists[maxChar].point.map((point, index) => (
                    <p
                      key={index}
                      className="mb-2 rounded-md border-2 border-game-blue bg-game-yellow px-5 py-1 font-quicksand font-bold text-game-blue lg:mb-4"
                    >
                      {point}
                    </p>
                  ))}
                </div>
                <div className="flex flex-row items-end">
                  <img
                    src={resultLists[maxChar].imageLador}
                    alt="result-lador"
                    className="mr-[-45px] h-[150px] w-auto"
                  />
                  <img
                    src={resultLists[maxChar].imageStory}
                    alt="result-story"
                    className="h-[300px] w-auto"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          className="mb-8 rounded-[50px] border-2  bg-game-blue px-8 py-2 font-quicksand font-bold text-game-white"
        >
          MAIN LAGI {">"}
        </button>
      </div>
    </>
  );
};

export default ResultPage;
