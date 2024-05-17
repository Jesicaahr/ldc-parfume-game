import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionList = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ansResult, setAnsResult] = useState({
    A: 0,
    B: 0,
    C: 0,
  });
  const questions = [
    {
      questionText: "1. Kata mana yang paling menggambarkan diri kamu?",
      a: "Bertanggung Jawab",
      b: "Berani",
      c: "Penuh Empati",
    },
    {
      questionText: "2. Warna apa yang paling kamu sukai?",
      a: "Warna alam (coklat, hijau)",
      b: "Warna mencolok (merah, biru)",
      c: "Warna lembut (merah muda, ungu)",
    },
    {
      questionText: "3. Weekend activity apa yang paling kamu suka?",
      a: "Merencanakan perjalanan bersama teman-teman",
      b: "Menyusun strategi untuk mencapai tujuan baru",
      c: "Menghabiskan waktu bersama orang-orang terkasih",
    },
    {
      questionText: "4. Apa kekuatan terbesarmu?",
      a: "Kesetiaan dan dedikasi",
      b: "Kecerdasan dan strategi",
      c: "Empati dan kehangatan",
    },
    {
      questionText: "5. Bagaimana cara kamu menghadapi tantangan?",
      a: "Dengan ketenangan dan keterampilan praktis",
      b: "Dengan keberanian dan tekad yang kuat",
      c: "Dengan kecerdasan emosional dan kepemimpinan",
    },
    {
      questionText: "6. Aroma mana yang paling kamu banget?",
      a: "Aroma hangat dan kayu",
      b: "Aroma segar dan beraroma jeruk",
      c: "Aroma manis dan bunga",
    },
    {
      questionText: "7. Karakter Toy Story mana yang paling kamu kagumi?",
      a: "Woody",
      b: "Buzz Lightyear",
      c: "Bo Peep",
    },
    {
      questionText: "8. Gaya komunikasi mana yang kamu banget?",
      a: "To the point",
      b: "Enerjik dan persuasif",
      c: "Hangat dan empatik",
    },
    {
      questionText: "9. Motivasi mana yang paling kamu banget?",
      a: "Kesuksesan pribadi dan pencapaian",
      b: "Menjadi yang terbaik dalam segala hal",
      c: "Membangun hubungan yang berarti dan mendukung orang lain",
    },
    {
      questionText: "10. Bagaimana cara melepas stres?",
      a: "Melakukan aktivitas di alam terbuka",
      b: "Mengikuti hobi atau aktivitas yang menghibur",
      c: "Menghabiskan waktu bersama keluarga atau teman-teman",
    },
  ];

  useEffect(() => {
    localStorage.setItem(`answers`, JSON.stringify(answers));
    localStorage.setItem(`result`, JSON.stringify(ansResult));
  }, [answers, ansResult]);

  const AnswerButtonClick = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    setAnswers([...answers, e.target.value]);
    setCurrentQuestion(currentQuestion + 1);

    if (e.target.value == "A") {
      setAnsResult({
        ...ansResult,
        A: ansResult["A"] + 1,
      });
    } else if (e.target.value == "B") {
      setAnsResult({
        ...ansResult,
        B: ansResult["B"] + 1,
      });
    } else {
      setAnsResult({
        ...ansResult,
        C: ansResult["C"] + 1,
      });
    }

    if (currentQuestion == 9) {
      setTimeout(() => {
        setLoading(false);
        navigate("/result");
      }, 500);
    }
  };
  return (
    <>
      <div className="bg-gray-800 mt-8 rounded-lg p-8">
        {!loading ? (
          <>
            <div className="mb-8 mt-8 max-w-screen-md rounded-[30px] border-4 border-game-blue bg-game-white p-8 shadow-[-10px_10px_0_0_game-blue] shadow-game-blue">
              <h1 className="font-quicksand text-3xl font-bold text-game-blue">
                {questions[currentQuestion].questionText}
              </h1>
            </div>
            <div className="flex flex-col">
              <form className="flex flex-col">
                <button
                  id="a-btn"
                  name="a-btn"
                  className="mb-3 rounded-[14px] bg-game-blue py-3 font-quicksand font-semibold text-game-white"
                  value="A"
                  onClick={(e) => AnswerButtonClick(e)}
                >
                  {"A) "} {questions[currentQuestion].a}{" "}
                </button>
                <button
                  id="b-btn"
                  name="b-btn"
                  className="mb-3 rounded-[14px] bg-game-blue py-3 font-quicksand font-semibold text-game-white"
                  value="B"
                  onClick={(e) => AnswerButtonClick(e)}
                >
                  {"B) "}
                  {questions[currentQuestion].b}{" "}
                </button>
                <button
                  id="c-btn"
                  name="c-btn"
                  className="mb-3 rounded-[14px] bg-game-blue py-3 font-quicksand font-semibold text-game-white"
                  value="C"
                  onClick={(e) => AnswerButtonClick(e)}
                >
                  {"C) "}
                  {questions[currentQuestion].c}{" "}
                </button>
              </form>
            </div>
          </>
        ) : (
          <p className="font-quicksand text-3xl font-bold text-game-light-blue">
            Loading...
          </p>
        )}
      </div>
    </>
  );
};

export default QuestionList;
