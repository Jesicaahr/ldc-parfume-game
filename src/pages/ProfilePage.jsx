// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormProfilePage = () => {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [birth, setBirth] = useState("");
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      whatsapp_number: "",
      birth_year: "",
    },
  });

  const onSubmit = (data) => {
    axios
      .post(`${baseUrl}/api/profile`, data, {
        headers: {
          "x-api-key": apiKey,
        },
      })
      .then((response) => {
        console.log(response);
        // console.log(baseUrl);
        reset();
        navigate("/result");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex max-w-[90vw] items-center justify-center font-quicksand lg:max-w-[30vw]">
        <div className="text-white text-center">
          <h1 className="mb-2 text-4xl font-bold">
            Submit Profil Kamu di sini!
          </h1>
          <p className="text-md mb-5 font-bold">
            Be the first to know our latest updates! Please fill in your
            detailed information below for future surprises.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-2 flex flex-col"
          >
            <div className="mb-3 flex flex-col items-start">
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="mt-2 w-full rounded-md border border-game-blue px-3 py-2 focus:outline-game-blue"
                {...register("name", {
                  required: "Please input your name",
                })}
              />
              {errors.name && (
                <span className="ml-3 text-sm text-game-red">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-3 flex flex-col items-start">
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="mt-2 w-full rounded-md border border-game-blue px-3 py-2 focus:outline-game-blue"
                {...register("email", {
                  required: "Please input your email",
                })}
              />
              {errors.email && (
                <span className="ml-3 text-sm text-game-red">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-3 flex flex-col items-start">
              <input
                type="number"
                id="whatsapp_number"
                placeholder="Enter your Whatsapp Number"
                className="mt-2 w-full rounded-md border border-game-blue px-3 py-2 focus:outline-game-blue"
                {...register("whatsapp_number", {
                  required: "Please input your Whatsapp Number",
                })}
              />
              {errors.whatsapp_number && (
                <span className="ml-3 text-sm text-game-red">
                  {errors.whatsapp_number.message}
                </span>
              )}
            </div>
            <div className="mb-3 flex flex-col items-start">
              <input
                type="date"
                id="birth_year"
                placeholder="Enter your Birth Date"
                className="mt-2 w-full rounded-md border border-game-blue px-3 py-2 focus:outline-game-blue"
                {...register("birth_year", {
                  required: "Please input your birth date",
                })}
              />
              {errors.birth_year && (
                <span className="ml-3 text-sm text-game-red">
                  {errors.birth_year.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 w-1/2 self-center rounded-md border-2 border-game-blue bg-game-yellow py-2 font-bold text-game-blue lg:w-1/3"
            >
              Lihat Hasil
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormProfilePage;
