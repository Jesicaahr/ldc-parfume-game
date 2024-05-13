import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showInstruction, setShowInstruction] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-game-grey flex h-screen items-center justify-center">
        <div className="text-center">
          {!showInstruction ? (
            <>
              <div className="bg-game-white border-game-light-blue shadow-game-light-blue mt-8 max-w-screen-md rounded-3xl border-4 p-8 shadow-lg">
                <h1 className="font-quicksand text-game-light-blue mb-10 text-6xl font-bold">
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
                  className="bg-game-yellow text-game-blue font-quicksand border-game-blue mt-8 rounded-md border-2 px-20 py-2 font-bold"
                >
                  START!
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="bg-game-white border-game-light-blue shadow-game-light-blue mt-8 max-w-screen-md rounded-3xl border-4 p-8 shadow-lg">
                <h1 className="font-quicksand text-game-light-blue mb-10 text-6xl font-bold">
                  INSTRUCTIONS
                </h1>
                <p className="mt-10 text-lg">
                  Bacalah setiap pertanyaan dengan cermat dan pilih jawaban yang
                  paling menggambarkan diri Anda.
                </p>
              </div>
              <button
                onClick={() => navigate("/startplaying")}
                className="bg-game-yellow text-game-blue font-quicksand border-game-blue mt-8 rounded-md border-2 px-20 py-2 font-bold"
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
