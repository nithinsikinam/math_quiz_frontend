interface RoomActionButtonProps {
    onClick: () => void;
    text: string;
    color: string;
  }
  
const RoomActionButton: React.FC<RoomActionButtonProps> = ({ onClick, text, color }) => (
    <button onClick={onClick} className={`block w-full mt-2 px-6 py-3 bg-${color}-500 text-white rounded-xl hover:bg-${color}-600 transition duration-200 ease-in-out`}>
      {text}
    </button>
);

export default RoomActionButton;

