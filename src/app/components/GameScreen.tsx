import { useState, useEffect } from "react";
import svgPaths from "../../imports/MainContentSudokuMinimalUi-1/svg-006gdutbaa";

type Difficulty = "easy" | "normal" | "hard";

interface GameScreenProps {
  difficulty: Difficulty;
  playerName: string;
  onViewStats: () => void;
  onBack: () => void;
}

type CellValue = number | null;
type Board = CellValue[][];

const generateSudoku = (difficulty: Difficulty): { puzzle: Board; solution: Board } => {
  const emptyCount = difficulty === "easy" ? 35 : difficulty === "normal" ? 45 : 55;

  const base = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const solution = base.map((row) => [...row]);
  const puzzle = solution.map((row) => [...row]);

  let removed = 0;
  while (removed < emptyCount) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (puzzle[row][col] !== null) {
      puzzle[row][col] = null;
      removed++;
    }
  }

  return { puzzle, solution };
};

export default function GameScreen({
  difficulty,
  playerName,
  onViewStats,
  onBack,
}: GameScreenProps) {
  const [board, setBoard] = useState<Board>([]);
  const [solution, setSolution] = useState<Board>([]);
  const [initialBoard, setInitialBoard] = useState<Board>([]);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [time, setTime] = useState(0);
  const [notesMode, setNotesMode] = useState(true);
  const [history, setHistory] = useState<Board[]>([]);

  useEffect(() => {
    const { puzzle, solution: sol } = generateSudoku(difficulty);
    setBoard(puzzle);
    setSolution(sol);
    setInitialBoard(puzzle.map((row) => [...row]));
    setHistory([puzzle]);
  }, [difficulty]);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCellClick = (row: number, col: number) => {
    if (initialBoard[row][col] === null) {
      setSelectedCell([row, col]);
    }
  };

  const handleNumberClick = (num: number) => {
    if (!selectedCell) return;
    const [row, col] = selectedCell;
    if (initialBoard[row][col] !== null) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = num;

    if (solution[row][col] !== num) {
      setMistakes((m) => m + 1);
    }

    setHistory([...history, newBoard]);
    setBoard(newBoard);
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setBoard(newHistory[newHistory.length - 1]);
    }
  };

  const handleErase = () => {
    if (!selectedCell) return;
    const [row, col] = selectedCell;
    if (initialBoard[row][col] !== null) return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = null;
    setHistory([...history, newBoard]);
    setBoard(newBoard);
  };

  return (
    <div className="bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] w-[390px] relative">
      {/* Header */}
      <div className="absolute content-stretch flex h-[33.594px] items-start left-[28px] top-[60px] w-[102.531px]">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[33.6px] not-italic relative shrink-0 text-[#ff9d1c] text-[28px] whitespace-nowrap">
          Sudoku
        </p>
      </div>

      {/* Timer */}
      <div className="absolute content-stretch flex h-[21.5px] items-start left-[154px] top-[64px] w-[82px]">
        <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#3f3f46] text-[18px] text-center">
          {formatTime(time)}
        </p>
      </div>

      {/* Difficulty Badge */}
      <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[34px] left-[28px] rounded-[999px] top-[108px] w-[76px]">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[21.46px] not-italic text-[13px] text-white top-[8.5px] whitespace-nowrap">
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </p>
      </div>

      {/* Mistakes Counter */}
      <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[34px] left-[116px] rounded-[999px] top-[108px] w-[108px]">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] left-[17.02px] not-italic text-[13px] top-[8.5px] whitespace-nowrap">
          <span className="leading-[normal] text-[#ff9d1c]">{mistakes}</span>
          <span className="leading-[normal] text-[#71717a]"> mistakes</span>
        </p>
      </div>

      {/* Stats Button */}
      <button
        onClick={onViewStats}
        className="absolute bg-[#fafafa] border border-[#ff9d1c] border-solid h-[34px] left-[240px] rounded-[999px] top-[61px] w-[122px] hover:bg-[#fff5e6] transition-colors cursor-pointer"
      >
        <div className="absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[24px] not-italic text-[#71717a] text-[0px] top-[14.5px] whitespace-nowrap">
          <p>
            <span className="leading-[normal] text-[13px]">🏆</span>
            <span className="leading-[normal] text-[16px]">#1</span>
            <span className="leading-[normal] text-[13px]"> 03:12</span>
          </p>
        </div>
      </button>

      {/* Player Name Badge */}
      <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[16px] left-[263px] rounded-[999px] top-[87px] w-[76px]">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[19px] not-italic text-[13px] text-white top-[-2px] whitespace-nowrap">
          {playerName || "name"}
        </p>
      </div>

      {/* Sudoku Board */}
      <div className="absolute bg-white border-2 border-[#52525b] border-solid h-[335px] left-[29px] overflow-clip rounded-[6px] top-[169px] w-[332px]">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isInitial = initialBoard[rowIndex][colIndex] !== null;
            const isSelected =
              selectedCell?.[0] === rowIndex && selectedCell?.[1] === colIndex;
            const isHighlighted =
              selectedCell &&
              (selectedCell[0] === rowIndex || selectedCell[1] === colIndex);

            return (
              <button
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                className={`absolute border-[#e4e4e7] border-b border-r border-solid size-[36.664px] transition-colors ${
                  isSelected
                    ? "bg-[#ffe4b3]"
                    : isHighlighted
                    ? "bg-[#fff9f0]"
                    : isInitial
                    ? "bg-white"
                    : ""
                } ${!isInitial ? "cursor-pointer hover:bg-[#fff9f0]" : ""}`}
                style={{
                  left: `${colIndex * 36.664 - 2}px`,
                  top: `${rowIndex * 36.664}px`,
                }}
              >
                {cell && (
                  <p
                    className={`absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[10.39px] not-italic text-[23px] top-[4.33px] whitespace-nowrap ${
                      isInitial ? "text-[#ff9d1c]" : "text-[#3f3f46]"
                    }`}
                  >
                    {cell}
                  </p>
                )}
              </button>
            );
          })
        )}

        {/* Grid Lines */}
        <div className="absolute flex h-[337.005px] items-center justify-center left-[107.97px] top-[-2px] w-0 pointer-events-none">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[337.005px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 337.005 1"
                >
                  <line stroke="#FFDBAC" x2="337.005" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[337.005px] items-center justify-center left-[219px] top-0 w-0 pointer-events-none">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[337.005px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 337.005 1"
                >
                  <line stroke="#FFDBAC" x2="337.005" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[-5px] top-[221px] w-[337.005px] pointer-events-none">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[337.005px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 337.005 1"
                >
                  <line stroke="#FFDBAC" x2="337.005" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-0 top-[110px] w-[337.005px] pointer-events-none">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[337.005px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 337.005 1"
                >
                  <line stroke="#FFDBAC" x2="337.005" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="absolute h-[58px] left-[28px] top-[532px] w-[334px]">
        {/* Undo */}
        <button
          onClick={handleUndo}
          className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-0 rounded-[16px] top-0 w-[62px] hover:bg-white transition-colors cursor-pointer"
        >
          <div className="absolute content-stretch flex h-[11.5px] items-start left-[16.47px] top-[33.25px] w-[27.063px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">
              Undo
            </p>
          </div>
          <div className="absolute inset-[calc(23.15%-0.54px)_calc(37.1%-0.26px)_calc(51.72%+0.03px)_calc(37.78%-0.24px)]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 15.5741 14.575"
            >
              <path d={svgPaths.pe176800} fill="#71717A" />
            </svg>
          </div>
        </button>

        {/* Erase */}
        <button
          onClick={handleErase}
          className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-[91px] rounded-[16px] top-0 w-[62px] hover:bg-white transition-colors cursor-pointer"
        >
          <div className="absolute content-stretch flex h-[11.5px] items-start left-[15.68px] top-[33.25px] w-[28.633px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">
              Erase
            </p>
          </div>
          <div className="absolute inset-[calc(22.41%-0.55px)_calc(37.1%-0.26px)_calc(51.72%+0.03px)_calc(32.26%-0.35px)]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19 15"
            >
              <path d={svgPaths.p2b8c5d00} fill="#71717A" />
            </svg>
          </div>
        </button>

        {/* Notes */}
        <button
          onClick={() => setNotesMode(!notesMode)}
          className={`absolute border border-[#d4d4d8] border-solid h-[58px] left-[182px] rounded-[16px] top-0 w-[62px] transition-colors cursor-pointer ${
            notesMode ? "bg-[#ffce8d]" : "bg-[#fafafa] hover:bg-white"
          }`}
        >
          <div className="absolute content-stretch flex h-[11.5px] items-start left-[14.88px] top-[33.25px] w-[30.234px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">
              Notes
            </p>
          </div>
          <div className="absolute inset-[calc(17.48%-0.65px)_calc(34.09%-0.32px)_calc(50.63%+0.01px)_calc(36.08%-0.28px)]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18.495 18.4959"
            >
              <path d={svgPaths.p3f6d5e00} fill="#71717A" />
            </svg>
          </div>
        </button>

        {/* Hint */}
        <button className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-[273px] rounded-[16px] top-0 w-[62px] hover:bg-white transition-colors cursor-pointer">
          <div className="absolute content-stretch flex h-[11.5px] items-start left-[19.21px] top-[33.25px] w-[21.578px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">
              Hint
            </p>
          </div>
          <div className="absolute inset-[calc(17.24%-0.66px)_calc(35.48%-0.29px)_calc(51.72%+0.03px)_calc(35.48%-0.29px)]">
            <div className="absolute inset-[-5.56%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
              >
                <path
                  d={svgPaths.p2ef1f600}
                  stroke="#71717A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Notes Toggle */}
      <div className="absolute h-[36px] left-[30px] top-[617px] w-[333px]">
        <div
          className={`absolute h-[36px] left-0 rounded-[999px] w-[166px] transition-colors ${
            notesMode ? "bg-[#ff9d1c]" : "bg-white"
          }`}
        >
          <p
            className={`absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[52px] not-italic text-[13px] top-[10px] whitespace-nowrap ${
              notesMode ? "text-white" : "text-[#ffce8d]"
            }`}
          >
            Notes ON
          </p>
        </div>
        <div
          className={`absolute h-[36px] left-[167px] rounded-[999px] w-[166px] transition-colors ${
            !notesMode ? "bg-[#ff9d1c]" : "bg-white"
          }`}
        >
          <p
            className={`absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] right-[52px] not-italic text-[13px] top-[10px] whitespace-nowrap ${
              !notesMode ? "text-white" : "text-[#ffce8d]"
            }`}
          >
            Notes OFF
          </p>
        </div>
      </div>

      {/* Number Buttons */}
      <div className="absolute content-stretch flex items-center gap-1 left-[28px] top-[684px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px] border border-[#e4e4e7] border-solid hover:bg-[#fff9f0] transition-colors cursor-pointer"
          >
            <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">
              {num}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
