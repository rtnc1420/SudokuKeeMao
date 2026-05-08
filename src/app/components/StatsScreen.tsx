type Difficulty = "easy" | "normal" | "hard";

interface StatsScreenProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  onBackToGame: () => void;
  onBackToStart: () => void;
}

const leaderboardData = [
  { rank: 1, name: "Player", time: "05:12" },
  { rank: 2, name: "Mina", time: "05:40" },
  { rank: 3, name: "Krit", time: "06:03" },
];

export default function StatsScreen({
  difficulty,
  setDifficulty,
  onBackToGame,
  onBackToStart,
}: StatsScreenProps) {
  return (
    <div className="bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] w-[390px] relative">
      {/* Header */}
      <div className="absolute content-stretch flex h-[33.594px] items-start left-[28px] top-[60px] w-[150px]">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[33.6px] not-italic relative shrink-0 text-[#ff9d1c] text-[28px] whitespace-nowrap">
          Statistics 🏆
        </p>
      </div>

      {/* Home Button */}
      <button
        onClick={onBackToStart}
        className="absolute bg-white border border-[#ff9d1c] border-solid h-[34px] left-[290px] rounded-[14px] top-[60px] w-[68px] hover:bg-[#fff9f0] transition-colors cursor-pointer"
      >
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[14.15px] not-italic text-[#ff9d1c] text-[13px] top-[8.5px] whitespace-nowrap">
          Home
        </p>
      </button>

      {/* Player Card */}
      <div className="absolute bg-white border border-[#d4d4d8] border-solid h-[92px] left-[28px] rounded-[22px] top-[112px] w-[334px]">
        <div className="absolute bg-[#ff9d1c] left-[24px] rounded-[16px] size-[48px] top-[22px]">
          <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[17.48px] not-italic text-[20px] text-white top-[12.25px] whitespace-nowrap">
            P
          </p>
        </div>
        <div className="absolute content-stretch flex h-[23.5px] items-start left-[90px] top-[20px] w-[58.914px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[20px] whitespace-nowrap">
            Player
          </p>
        </div>
        <div className="absolute h-[20.297px] left-[90px] top-[48px] w-[207.094px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.3px] left-0 not-italic text-[#71717a] text-[14px] top-[0.5px] whitespace-nowrap">
            Ranked by best completion time
          </p>
        </div>
      </div>

      {/* Difficulty Label */}
      <div className="absolute content-stretch flex h-[16.5px] items-start left-[28px] top-[232px] w-[63.773px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3f3f46] text-[14px] whitespace-nowrap">
          Difficulty
        </p>
      </div>

      {/* Difficulty Buttons */}
      <button
        onClick={() => setDifficulty("easy")}
        className={`absolute h-[40px] left-[28px] rounded-[999px] top-[266px] w-[96px] border transition-colors cursor-pointer ${
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
        className={`absolute h-[40px] left-[147px] rounded-[999px] top-[266px] w-[96px] border transition-colors cursor-pointer ${
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
        className={`absolute h-[40px] left-[262px] rounded-[999px] top-[266px] w-[96px] border transition-colors cursor-pointer ${
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

      {/* Rank Card */}
      <div className="absolute bg-white border border-[#d4d4d8] border-solid h-[180px] left-[28px] rounded-[22px] top-[338px] w-[334px]">
        <div className="absolute h-[21.75px] left-[24px] top-[28px] w-[284px]">
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21.75px] left-0 not-italic text-[#71717a] text-[15px] top-0 whitespace-nowrap">
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} rank
          </p>
        </div>
        <div className="absolute h-[52px] left-[24px] top-[53.75px] w-[284px]">
          <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[52px] left-0 not-italic text-[#ff9d1c] text-[52px] top-0 whitespace-nowrap">
            #01
          </p>
        </div>
        <div className="absolute h-[20.297px] left-[24px] top-[138px] w-[284px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.3px] left-0 not-italic text-[#71717a] text-[14px] top-[0.5px] whitespace-nowrap">
            Best time across all {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} games
          </p>
        </div>
        <div className="absolute h-[20.297px] left-[24px] top-[110px] w-[284px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.3px] left-0 not-italic text-[#71717a] text-[14px] top-[0.5px] whitespace-nowrap">
            Player Name
          </p>
        </div>
        <div className="absolute bg-[#fafafa] border border-[#e4e4e7] border-solid h-[50px] left-[198px] rounded-[18px] top-[40px] w-[104px]">
          <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[23.46px] not-italic text-[#ff9d1c] text-[20px] top-[12.25px] whitespace-nowrap">
            05:12
          </p>
        </div>
      </div>

      {/* Best Time Ranking */}
      <div className="absolute content-stretch flex h-[21.5px] items-start left-[28px] top-[552px] w-[150.586px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[18px] whitespace-nowrap">
          Best time ranking
        </p>
      </div>

      {/* Leaderboard */}
      <div className="absolute h-[260px] left-[28px] top-[590px] w-[334px]">
        {leaderboardData.map((entry, index) => (
          <div
            key={entry.rank}
            className="absolute bg-white border border-[#e4e4e7] border-solid h-[44px] left-0 rounded-[14px] w-[334px]"
            style={{ top: `${index * 54}px` }}
          >
            <div className="absolute content-stretch flex h-[17.5px] items-start left-[16px] top-[12.25px] w-[44px]">
              <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-center">
                {entry.rank}
              </p>
            </div>
            <div className="absolute content-stretch flex h-[17.5px] items-start left-[60px] top-[12.25px] w-[186px]">
              <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px]">
                {entry.name}
              </p>
            </div>
            <div className="absolute content-stretch flex h-[17.5px] items-start left-[246px] top-[12.25px] w-[70px]">
              <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-right">
                {entry.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="absolute bg-white border border-[#d4d4d8] border-solid h-[62px] left-[28px] rounded-[22px] top-[766px] w-[334px]">
        <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-[22px] top-[10.25px] w-[96px]">
          <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[12px]">
              Ranking
            </p>
          </div>
          <div className="content-stretch flex h-[23.5px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[20px]">
              1
            </p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-[118px] top-[10.25px] w-[96px]">
          <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[12px]">
              Avg time
            </p>
          </div>
          <div className="content-stretch flex h-[23.5px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[20px]">
              05:12
            </p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-[214px] top-[10.25px] w-[96px]">
          <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[12px]">
              Streak
            </p>
          </div>
          <div className="content-stretch flex h-[23.5px] items-start relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[20px]">
              4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
