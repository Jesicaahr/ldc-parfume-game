import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showInstruction, setShowInstruction] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col text-center">
        <div className="flex max-w-[90vw] flex-row items-center justify-between lg:max-w-screen-md">
          <img
            src="/lador-logo.png"
            alt="logo-lador"
            className="w-[30%] lg:w-[20%]"
          />

          <img
            src="/toy-story-logo.png"
            alt="logo-toy-story"
            className="h-auto w-[25%] lg:w-[15%]"
          />
        </div>
        {!showInstruction ? (
          <>
            <div className="mt-6 max-w-[90vw] rounded-[50px] border-4 border-game-light-blue bg-game-white p-5 shadow-box-sm-light shadow-game-light-blue lg:mt-8 lg:max-w-screen-md lg:p-8 lg:shadow-box-lg-light">
              <h1 className="mb-1 font-quicksand text-3xl font-bold text-game-light-blue lg:text-6xl">
                INTRODUCTION
              </h1>
              <p className="text-md mt-5 lg:text-lg">
                Selamat datang di Pesonality Test <br />{" "}
                <strong> Lador Keratin Perfumed Edition</strong> <br /> <br />{" "}
                Dalam permainan yang menyenangkan ini, kamu akan <br />{" "}
                <strong>
                  menemukan aroma mana yang paling cocok dengan kepribadianmu
                </strong>{" "}
                berdasarkan karakter-karakter ikonik Toy Story!
              </p>
              <button
                onClick={() => setShowInstruction(true)}
                className="mt-8 rounded-md border-2 border-game-blue bg-game-yellow px-20 py-2 font-quicksand font-bold text-game-blue"
              >
                START!
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-8 flex max-w-[90vw] flex-col items-center gap-4 rounded-[50px] border-4 border-game-light-blue bg-game-white p-8 shadow-box-sm-light shadow-game-light-blue lg:max-w-screen-md lg:flex-row lg:gap-8 lg:shadow-box-lg-light">
                <h1 className="rounded-full bg-game-light-blue p-4 px-10 font-quicksand text-2xl font-bold text-game-white lg:text-4xl">
                  INSTRUCTIONS
                </h1>
                <p className="text-md lg:text-lg">
                  Bacalah setiap pertanyaan dengan cermat dan pilih jawaban yang
                  paling menggambarkan dirimu!
                </p>
              </div>
              <button
                onClick={() => navigate("/startplaying")}
                className="mt-12  w-1/2 rounded-md border-2 border-game-blue bg-game-yellow py-2 font-quicksand font-bold text-game-blue lg:w-1/3"
              >
                YES, GOT IT!
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
