import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showInstruction, setShowInstruction] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="game-world-bg flex h-screen items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          {!showInstruction ? (
            <>
              <div className="mt-8 max-w-screen-md rounded-lg bg-gray-800 p-8">
                <h1 className="mb-10 text-6xl font-bold">INTRODUCTION</h1>
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
                  className="mt-8 rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
                >
                  START!
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mt-8 max-w-screen-md rounded-lg bg-gray-800 p-8">
                <h1 className="mb-10 text-6xl font-bold">INSTRUCTIONS</h1>
                <p className="mt-10 text-lg">
                  Bacalah setiap pertanyaan dengan cermat dan pilih jawaban yang
                  paling menggambarkan diri Anda.
                </p>
              </div>
              <button
                onClick={() => navigate("/register")}
                className="mt-8 rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
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
