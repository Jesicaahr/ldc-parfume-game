import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import fs from "fs";

const FormEmailPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fs.readFile("./emailList.json", "utf8", (err, jsonString) => {
    //   if (err) {
    //     return;
    //   }
    //   try {
    //     const customer = JSON.parse(jsonString);
    //     console.log("HEHEHE", customer);
    //   } catch (err) {
    //     console.log("Error parsing JSON string:", err);
    //   }
    // });
    console.log("Email:", email);
    navigate("/startplaying");
  };

  return (
    <>
      <div className="game-world-bg flex h-screen items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">
            GAME PERSONALITY TEST <br /> You Story & Product Scent
          </h1>
          <h2 className="mt-3 text-2xl font-bold">
            Tes Kepribadian Toy Story: Pilih Aroma yang Sesuai
          </h2>
          <div className="mt-8 rounded-lg bg-gray-800 p-8">
            <h2 className="text-2xl font-bold">
              Please enter your email to start the game
            </h2>
            <form onSubmit={handleSubmit} className="mt-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="mr-5 mt-2 rounded-md border border-gray-700 px-3 py-2 text-gray-900 placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Start Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEmailPage;
