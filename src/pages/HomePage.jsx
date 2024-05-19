import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showInstruction, setShowInstruction] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-game-grey">
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-3">
            <img src="/lador-logo.png" alt="logo-lador" className="w-[20%]" />
            <h1 className="font-quicksand text-4xl font-bold text-game-light-blue">
              X
            </h1>
            <img
              src="/toy-story-logo.png"
              alt="logo-toy-story"
              className="h-auto w-[15%]"
            />
          </div>
          {!showInstruction ? (
            <>
              <div className="mt-8 max-w-screen-md rounded-[50px] border-4 border-game-light-blue bg-game-white p-8 shadow-[22px_22px_0_0_rgba(1,78,153,0.75)] shadow-game-light-blue">
                <h1 className="mb-10 font-quicksand text-6xl font-bold text-game-light-blue">
                  INTRODUCTION
                </h1>
                <p className="mt-10 text-lg">
                  Selamat datang di Tes Kepribadian <br />{" "}
                  <strong> Lador Keratin Perfumed Edition x Toy Story</strong>{" "}
                  <br /> <br /> Dalam permainan yang menyenangkan ini, Anda akan{" "}
                  <br />{" "}
                  <strong>
                    temukan aroma mana yang paling cocok dengan kepribadian Anda
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
              <div className="mt-8 flex max-w-screen-md flex-row items-center gap-8 rounded-[50px] border-4 border-game-light-blue bg-game-white p-8 shadow-[22px_22px_0_0_rgba(1,78,153,0.75)] shadow-game-light-blue">
                <h1 className="rounded-full bg-game-light-blue p-4 font-quicksand text-4xl font-bold text-game-white">
                  INSTRUCTIONS
                </h1>
                <p className="text-lg">
                  Bacalah setiap pertanyaan dengan cermat dan pilih jawaban yang
                  paling menggambarkan diri Anda.
                </p>
              </div>
              <button
                onClick={() => navigate("/startplaying")}
                className="mt-12 rounded-md border-2 border-game-blue bg-game-yellow px-20 py-2 font-quicksand font-bold text-game-blue"
              >
                YES, GOT IT!
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
