import { Maximize } from "lucide-react"; // Ensure lucide-react is installed

type FullScreenProps = {
  onClick: () => void;
};

const FullScreen1: React.FC<FullScreenProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer border-none p-2 bg-[#25A25A] h-[35px] w-[40px] rounded-md flex items-center justify-center"
      aria-label="Fullscreen"
    >
      <Maximize size={20} color="white" />
    </button>
  );
};

export default FullScreen1;
