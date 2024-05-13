import QuestionList from "../components/QuestionList";

const PlayGamePage = () => {
  return (
    <>
      <div className="bg-game-grey flex h-screen items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          {/* <h1 className="text-4xl font-bold">Start Playing</h1>
          <h2 className="mt-3 text-2xl font-bold">
            Tes Kepribadian Toy Story: Pilih Aroma yang Sesuai
          </h2> */}
          <QuestionList />
        </div>
      </div>
    </>
  );
};

export default PlayGamePage;
