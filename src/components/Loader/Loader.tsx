interface Props {
  style?: string;
}

const Loader = ({ style }: Props) => {
  return (
    <p
      className={`${
        style ? style : "bg-primary text-white"
      } flex justify-center w-60 rounded-lg  py-3 shadow shadow-zinc-900`}
    >
      <span className="loader rounded"></span>
    </p>
  );
};

export default Loader;
