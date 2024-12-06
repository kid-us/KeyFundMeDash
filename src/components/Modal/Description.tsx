interface Props {
  description: string;
  title: string;
  onClose: () => void;
}

const Description = ({ description, title, onClose }: Props) => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-neutral-700/50 w-full h-full z-50 "></div>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="py-6 lg:px-8 px-5 rounded lg:w-[70%] lg:h-[85vh] h-[90vh] overflow-y-scroll lg:mx-0 mx-3 bg-white">
            <div className="flex justify-between mb-5">
              <p className="font-bold lg:text-xl">Description of "{title}"</p>
              <button
                onClick={() => onClose()}
                className="text-red-500 bi-x-lg"
              ></button>
            </div>
            <div
              className="text-[15px]"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
