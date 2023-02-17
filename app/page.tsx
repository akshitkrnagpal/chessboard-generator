"use client";

import { useState } from "react";
import { Chess, Color, Piece, PieceSymbol, Square } from "chess.js";
import Board from "./components/board";
import Spare from "./components/spare";
import useForceRerender from "./hooks/useForceRerender";

const Home = () => {
  const [chess] = useState<Chess>(new Chess());
  const [hand, setHand] = useState<Piece | null>(null);
  const forceRerender = useForceRerender();

  const handleSparePieceClick = (type: PieceSymbol, color: Color) => {
    setHand((hand) =>
      hand?.type === type && hand.color === color ? null : { color, type }
    );
  };

  const handleBoardSquareClick = (square: Square) => {
    const piece = chess.get(square);
    if (hand) {
      piece.type === hand.type && piece.color == hand.color
        ? chess.remove(square)
        : chess.put(hand, square);
    } else if (piece) {
      chess.remove(square);
    }
    forceRerender();
  };

  return (
    <main className="flex flex-col items-center space-y-6 py-6">
      <Spare color="b" hand={hand} onPieceClick={handleSparePieceClick} />
      <Board chess={chess} onSquareClick={handleBoardSquareClick} />
      <Spare color="w" hand={hand} onPieceClick={handleSparePieceClick} />
    </main>
  );
};

export default Home;
