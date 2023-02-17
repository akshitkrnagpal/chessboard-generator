import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { BOARD_FILES, BOARD_RANKS, CHESS_PIECE_MAP } from "../../constants";
import Image from "next/image";
import clsx from "clsx";

const Board = ({
  chess,
  onSquareClick,
}: {
  chess: Chess;
  onSquareClick: (square: Square) => void;
}) => {
  return (
    <div className="flex shadow">
      {BOARD_FILES.map((file) => (
        <div key={file} className="flex flex-col">
          {[...BOARD_RANKS].reverse().map((rank) => {
            const square = `${file}${rank}` as Square;
            const piece = chess.get(square);
            return (
              <button
                key={square}
                className={clsx(
                  "relative w-16 h-16",
                  chess.squareColor(square) === "light"
                    ? "bg-[#eeeed2]"
                    : "bg-[#769656]"
                )}
                onClick={() => onSquareClick(square)}
              >
                {piece ? (
                  <Image
                    src={`data:image/png;base64,${
                      CHESS_PIECE_MAP[piece.color][piece.type]
                    }`}
                    alt=""
                    fill
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
