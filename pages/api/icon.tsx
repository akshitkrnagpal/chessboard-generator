/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
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
  const iconSize = parseInt(searchParams.get("size") || "") || 512;
  const cellStyles = {
    display: "flex",
    width: iconSize / 2,
    height: iconSize / 2,
    border: "solid 1px black",
  };
  return new ImageResponse(
    (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ ...cellStyles, backgroundColor: "#eeeed2" }}>
            <img
              width="100%"
              height="100%"
              src={`data:image/png;base64,${CHESS_PIECE_MAP.b.k}`}
              alt=""
            />
          </div>
          <div style={{ ...cellStyles, backgroundColor: "#769656" }}>
            <img
              width="100%"
              height="100%"
              src={`data:image/png;base64,${CHESS_PIECE_MAP.w.r}`}
              alt=""
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ ...cellStyles, backgroundColor: "#769656" }}>
            <img
              width="100%"
              height="100%"
              src={`data:image/png;base64,${CHESS_PIECE_MAP.w.q}`}
              alt=""
            />
          </div>
          <div style={{ ...cellStyles, backgroundColor: "#eeeed2" }}>
            <img
              width="100%"
              height="100%"
              src={`data:image/png;base64,${CHESS_PIECE_MAP.b.p}`}
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    {
      width: iconSize,
      height: iconSize,
    }
  );
};

export default handler;
