/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { Chess, Square } from "chess.js";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  DEFAULT_BOARD_SIZE,
  BOARD_RANKS,
  BOARD_FILES,
  CHESS_PIECE_MAP,
} from "../../constants";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchParams } = new URL(req.url!);
  const fen = searchParams.get("fen") || undefined;
  const boardSize =
    parseInt(searchParams.get("size") || "") || DEFAULT_BOARD_SIZE;
  const chess = new Chess(fen);
  return new ImageResponse(
    (
      <div style={{ display: "flex" }}>
        {BOARD_FILES.map((file) => {
          return (
            <div
              key={file}
              style={{
                display: "flex",
                flexDirection: "column",
                width: boardSize / 8,
              }}
            >
              {[...BOARD_RANKS].reverse().map((rank) => {
                const square = `${file}${rank}` as Square;
                const piece = chess.get(square);
                return (
                  <div
                    key={`${file}${rank}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: boardSize / 8,
                      height: boardSize / 8,
                      backgroundColor:
                        chess.squareColor(square) === "light"
                          ? "#eeeed2"
                          : "#769656",
                    }}
                  >
                    {piece ? (
                      <img
                        alt="Vercel"
                        width={boardSize / 8}
                        height={boardSize / 8}
                        src={`data:image/png;base64,${
                          CHESS_PIECE_MAP[piece.color][piece.type]
                        }`}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    ),
    {
      width: boardSize,
      height: boardSize,
    }
  );
};

export default handler;
