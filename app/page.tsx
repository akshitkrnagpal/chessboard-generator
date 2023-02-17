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
    if (!hand) return;
    chess.put(hand, square);
    forceRerender();
  };

  return (
    <main className="flex flex-col items-center space-y-8">
      <Spare color="b" hand={hand} onPieceClick={handleSparePieceClick} />
      <Board chess={chess} onSquareClick={handleBoardSquareClick} />
      <Spare color="w" hand={hand} onPieceClick={handleSparePieceClick} />
    </main>
  );
};

export default Home;
