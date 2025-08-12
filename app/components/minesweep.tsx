"use client";

import React, { useState } from "react";

type Cell = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
};

const ROWS = 6;  // smaller
const COLS = 5;  // smaller
const MINES = 7; // fewer mines

function generateBoard(): Cell[][] {
  const board: Cell[][] = Array(ROWS)
    .fill(null)
    .map(() =>
      Array(COLS).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0,
      }))
    );

  let minesPlaced = 0;
  while (minesPlaced < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!board[r][c].isMine) {
      board[r][c].isMine = true;
      minesPlaced++;
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!board[r][c].isMine) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (
              r + dr >= 0 &&
              r + dr < ROWS &&
              c + dc >= 0 &&
              c + dc < COLS &&
              board[r + dr][c + dc].isMine
            ) {
              count++;
            }
          }
        }
        board[r][c].neighborMines = count;
      }
    }
  }

  return board;
}

export default function Minesweeper() {
  const [board, setBoard] = useState<Cell[][]>(generateBoard());
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const revealEmptyCells = (r: number, c: number, newBoard: Cell[][]): void => {
    if (
      r < 0 ||
      r >= ROWS ||
      c < 0 ||
      c >= COLS ||
      newBoard[r][c].isRevealed ||
      newBoard[r][c].isFlagged
    )
      return;

    newBoard[r][c].isRevealed = true;

    if (newBoard[r][c].neighborMines === 0 && !newBoard[r][c].isMine) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr !== 0 || dc !== 0) {
            revealEmptyCells(r + dr, c + dc, newBoard);
          }
        }
      }
    }
  };

  const handleCellClick = (r: number, c: number): void => {
    if (gameOver || win) return;

    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));

    if (newBoard[r][c].isFlagged || newBoard[r][c].isRevealed) return;

    if (newBoard[r][c].isMine) {
      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
          if (newBoard[i][j].isMine) newBoard[i][j].isRevealed = true;
        }
      }
      setBoard(newBoard);
      setGameOver(true);
      return;
    }

    revealEmptyCells(r, c, newBoard);
    setBoard(newBoard);

    let safeCells = 0;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (!newBoard[i][j].isMine && newBoard[i][j].isRevealed) safeCells++;
      }
    }
    if (safeCells === ROWS * COLS - MINES) {
      setWin(true);
    }
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement>,
    r: number,
    c: number
  ): void => {
    e.preventDefault();
    if (gameOver || win) return;

    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
    if (newBoard[r][c].isRevealed) return;

    newBoard[r][c].isFlagged = !newBoard[r][c].isFlagged;
    setBoard(newBoard);
  };

  const resetGame = (): void => {
    setBoard(generateBoard());
    setGameOver(false);
    setWin(false);
  };

  return (
    <div
      style={{
        width: "auto",
        backgroundColor: "rgba(20, 30, 50, 0.8)",
        borderRadius: "2rem 0 2rem 0",
        padding: 10,
        boxShadow:
          "0 0 10px 2px rgba(0,255,115,0.4), inset 0 0 10px 2px rgba(0,255,115,0.2)",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 20,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: 3,
          flexGrow: 1,
          marginBottom: 10,
          cursor: gameOver || win ? "default" : "pointer",
        }}
      >
        {board.map((row, r) =>
          row.map((cell, c) => {
            const isMine = cell.isMine && cell.isRevealed;
            const isFlagged = cell.isFlagged;
            const isRevealed = cell.isRevealed;
            const neighborCount = cell.neighborMines;

            let bgColor = "#121a2b"; // default unrevealed
            let color = "#00ff73";
            let content: string | number = "";

            if (isRevealed) {
              // Brighter background for revealed cells
              bgColor = "#153447"; // brighter blueish background

              if (isMine) {
                content = "💣";
                color = "#ff4d4d";
              } else if (neighborCount > 0) {
                content = neighborCount;
                color =
                  neighborCount === 1
                    ? "#00ff73"
                    : neighborCount === 2
                    ? "#5aff82"
                    : neighborCount === 3
                    ? "#aaff9d"
                    : "#d0ffce";
              }
            } else if (isFlagged) {
              content = "🚩";
              bgColor = "#001a0c";
              color = "#ffb84d";
            }

            return (
              <div
                key={`${r}-${c}`}
                onClick={() => handleCellClick(r, c)}
                onContextMenu={(e) => handleRightClick(e, r, c)}
                style={{
                  width: 60,
                  height: 45,
                  backgroundColor: bgColor,
                  color: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  fontWeight: "bold",
                  fontSize: 20,
                  userSelect: "none",
                  boxShadow: isRevealed
                    ? "inset 0 0 10px 3px #00ff73"
                    : "0 0 3px #00ff73",
                  transition: "background-color 0.2s ease, box-shadow 0.3s ease",
                }}
              >
                {content}
              </div>
            );
          })
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#00ff73",
          fontWeight: "bold",
          fontSize: 16,
          fontFamily: "monospace",
        }}
      >
        <span>
          {gameOver
            ? "💥 Game Over! Click Reset."
            : win
            ? "🎉 You Win!"
            : "🔎 Minesweeper"}
        </span>
        <button
          onClick={resetGame}
          style={{
            backgroundColor: "#00ff73",
            border: "none",
            borderRadius: 9999,
            padding: "6px 16px",
            fontWeight: "bold",
            color: "black",
            cursor: "pointer",
            boxShadow: "0 0 6px #00ff73",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#00e666")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#00ff73")
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}
