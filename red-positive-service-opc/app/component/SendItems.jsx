const SendItems = ({ value }) => {
  const handleSend = () => {
    console.log(value);
  };

  return (
    <>
      <div className="mt-5">
        <button
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 w-full rounded"
          onClick={() => handleSend()}
        >
          Print Selected Data in Console
        </button>
      </div>
    </>
  );
};

export default SendItems;
