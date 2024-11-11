interface Props {
  label: string;
  bg?: string;
}

const Button = ({ label, bg }: Props) => {
  return (
    <button
      className={`py-3 btn-bg w-full rounded font-poppins shadow-sm shadow-black text-s font-bold ${
        bg && `${bg} text-white`
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
