import { Color, Piece, PieceSymbol } from "chess.js";
import { CHESS_PIECE_MAP } from "../../constants";
import Image from "next/image";
import clsx from "clsx";

const Spare = ({
  color,
  hand,
  onPieceClick,
}: {
  color: Color;
  hand: Piece | null;
  onPieceClick: (type: PieceSymbol, color: Color) => void;
}) => {
  const pieces = Object.keys(CHESS_PIECE_MAP[color]) as PieceSymbol[];

  return (
    <div className="flex">
      {pieces.map((piece) => (
        <button
          key={`spare-${color}-${piece}`}
          className={clsx(
            "relative w-16 h-16",
            hand && hand.type === piece && hand.color === color
              ? "bg-slate-200"
              : ""
          )}
          onClick={() => onPieceClick(piece, color)}
        >
          <Image
            src={`data:image/png;base64,${CHESS_PIECE_MAP[color][piece]}`}
            alt=""
            fill
          />
        </button>
      ))}
    </div>
  );
};

export default Spare;
