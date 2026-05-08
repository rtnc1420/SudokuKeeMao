import imgContainer1 from "../../imports/MainContentSudokuMinimalUi-1/1ed9ef1d8fa8d0d9012282ecb38ee9540a16e5be.png";
import imgThr1 from "../../imports/MainContentSudokuMinimalUi-1/9a40461ec8f9972a133b34729389f49809e4281c.png";

type Difficulty = "easy" | "normal" | "hard";

interface StartScreenProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  onStartGame: () => void;
}

export default function StartScreen({
  playerName,
  setPlayerName,
  difficulty,
  setDifficulty,
  onStartGame,
}: StartScreenProps) {
  return (
    <div className="bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] w-[390px] relative">
      {/* Title */}
      <div className="absolute content-stretch flex h-[50.398px] items-start left-[32px] top-[88px] w-[152.563px]">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[50.4px] not-italic relative shrink-0 text-[#ff9d1c] text-[42px] whitespace-nowrap">
          Sudoku kee mao
        </p>
      </div>

      {/* Beer Icon */}
      <div className="absolute bg-white border border-[#e4e4e7] border-solid left-[158px] overflow-clip rounded-[18px] size-[72px] top-[148px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[72px] top-1/2">
          <img
            alt="Beer icon"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgContainer1}
          />
        </div>
      </div>

      {/* Player Name Input */}
      <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[32px] top-[230px] w-[326px]">
        <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-[84.641px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3f3f46] text-[14px] whitespace-nowrap">
            Player name
          </p>
        </div>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Your name 🥴  "
          className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full border border-[#d4d4d8] border-solid px-[21px] py-px font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#3f3f46] text-[17px] placeholder:text-[#a1a1aa] outline-none focus:border-[#ff9d1c] transition-colors"
        />
        <div className="h-[46.391px] relative shrink-0 w-[280px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.2px] not-italic text-[#71717a] text-[16px]">
            Enter a player name to save your best times.
          </p>
        </div>
      </div>

      {/* Start Game Button */}
      <button
        onClick={onStartGame}
        className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[56px] left-[32px] rounded-[14px] top-[378px] w-[326px] hover:bg-[#e88d0a] transition-colors cursor-pointer"
      >
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic text-[16px] text-white">
          Start game
        </p>
      </button>

      {/* Difficulty Label */}
      <div className="absolute content-stretch flex h-[15px] items-start left-[32px] top-[462px] w-[326px]">
        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[13px] text-center">
          or choose difficulty first
        </p>
      </div>

      {/* Difficulty Buttons */}
      <button
        onClick={() => setDifficulty("easy")}
        className={`absolute h-[40px] left-[32px] rounded-[999px] top-[514px] w-[96px] border transition-colors cursor-pointer ${
          difficulty === "easy"
            ? "bg-[#ff9d1c] border-[#ff9d1c]"
            : "bg-[#fafafa] border-[#d4d4d8] hover:border-[#ff9d1c]"
        }`}
      >
        <p
          className={`font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic text-[13px] ${
            difficulty === "easy" ? "text-white" : "text-[#71717a]"
          }`}
        >
          Easy
        </p>
      </button>

      <button
        onClick={() => setDifficulty("normal")}
        className={`absolute h-[40px] left-[147px] rounded-[999px] top-[514px] w-[96px] border transition-colors cursor-pointer ${
          difficulty === "normal"
            ? "bg-[#ff9d1c] border-[#ff9d1c]"
            : "bg-[#fafafa] border-[#d4d4d8] hover:border-[#ff9d1c]"
        }`}
      >
        <p
          className={`font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic text-[13px] ${
            difficulty === "normal" ? "text-white" : "text-[#71717a]"
          }`}
        >
          Normal
        </p>
      </button>

      <button
        onClick={() => setDifficulty("hard")}
        className={`absolute h-[40px] left-[262px] rounded-[999px] top-[514px] w-[96px] border transition-colors cursor-pointer ${
          difficulty === "hard"
            ? "bg-[#ff9d1c] border-[#ff9d1c]"
            : "bg-[#fafafa] border-[#d4d4d8] hover:border-[#ff9d1c]"
        }`}
      >
        <p
          className={`font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic text-[13px] ${
            difficulty === "hard" ? "text-white" : "text-[#71717a]"
          }`}
        >
          Hard
        </p>
      </button>

      {/* Trophy Image */}
      <div className="absolute h-[84px] left-[162px] top-[612px] w-[64px]">
        <img
          alt="Trophy"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgThr1}
        />
      </div>

      {/* Champion Button */}
      <button className="absolute bg-[#fafafa] border border-[#ff9d1c] border-solid h-[40px] left-[147px] rounded-[999px] top-[711px] w-[96px] hover:bg-[#fff5e6] transition-colors cursor-pointer">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic text-[#ff9d1c] text-[13px]">
          Champion
        </p>
      </button>
    </div>
  );
}
