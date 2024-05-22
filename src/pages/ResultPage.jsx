import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const [maxChar, setMaxChar] = useState(null);
  const navigate = useNavigate();

  const resultLists = [
    {
      name: "A",
      value: "Feige",
      character: "Woody",
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
      value: "Pitta",
      character: "Buzz",
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
      value: "Movet",
      character: "Bo-Peep",
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
        <div className="mb-5 mt-10 max-w-[90vw] rounded-[50px] border-4 border-game-white bg-game-white p-3 shadow-box-lg-result shadow-game-light-blue lg:my-5 lg:max-w-screen-md lg:px-8 lg:py-5">
          {maxChar !== null && (
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
              <div className="flex w-full flex-col items-center gap-3 lg:w-2/5 lg:items-start">
                <h1 className="text-center font-quicksand text-3xl font-bold text-game-light-blue lg:text-left">
                  RESULT = {resultLists[maxChar].value}
                </h1>
                <p className="text-center lg:text-left">
                  {resultLists[maxChar].description}
                </p>
                <div className="flex-col px-2 text-center">
                  {resultLists[maxChar].point.map((point, index) => (
                    <p
                      key={index}
                      className="mb-2 rounded-md border-2 border-game-blue bg-game-yellow px-5 py-1 font-quicksand font-bold text-game-blue lg:mb-3"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              <img
                src={resultLists[maxChar].imageLador}
                alt="result-lador"
                className="h-auto w-2/5 lg:ml-[-50px] lg:w-1/5"
              />
              <div className="flex flex-col items-center gap-3 lg:w-1/3 lg:items-end">
                <img
                  src={resultLists[maxChar].imageStory}
                  alt="result-story"
                  className=" h-auto w-4/5  lg:h-[300px] lg:w-auto"
                />
                <h1 className="text-center font-quicksand text-3xl font-bold text-game-light-blue lg:text-left lg:text-4xl">
                  {resultLists[maxChar].character}
                </h1>
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
