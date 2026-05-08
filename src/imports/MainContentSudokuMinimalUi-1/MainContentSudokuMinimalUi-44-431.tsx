import svgPaths from "./svg-006gdutbaa";
import imgContainer1 from "./1ed9ef1d8fa8d0d9012282ecb38ee9540a16e5be.png";
import imgThr1 from "./9a40461ec8f9972a133b34729389f49809e4281c.png";

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[50.398px] items-start left-[32px] top-[88px] w-[152.563px]" data-name="Heading 1">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[50.4px] not-italic relative shrink-0 text-[#ff9d1c] text-[42px] whitespace-nowrap">Sudoku kee mao</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid left-[158px] overflow-clip rounded-[18px] size-[72px] top-[148px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[72px] top-1/2" data-name="Container 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-[84.641px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3f3f46] text-[14px] whitespace-nowrap">Player name</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[21px] py-px relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a1a1aa] text-[17px] whitespace-pre">{`Your name 🥴  `}</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[46.391px] relative shrink-0 w-[280px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.2px] left-0 not-italic text-[#71717a] text-[16px] top-[0.5px] w-[338px]">Enter a player name to save your best times.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[32px] top-[230px] w-[326px]">
      <Container1 />
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <button className="absolute bg-[#ff9d1c] block border border-[#ff9d1c] border-solid cursor-pointer h-[56px] left-[32px] rounded-[14px] top-[378px] w-[326px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[118.06px] not-italic text-[16px] text-left text-white top-[17.5px] whitespace-nowrap">Start game</p>
    </button>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32px] top-[462px] w-[326px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[13px] text-center">or choose difficulty first</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[40px] left-[32px] rounded-[999px] top-[514px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[31.46px] not-italic text-[13px] text-white top-[11.5px] whitespace-nowrap">Easy</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[40px] left-[147px] rounded-[999px] top-[514px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[23px] not-italic text-[#71717a] text-[13px] top-[11.5px] whitespace-nowrap">Normal</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[40px] left-[262px] rounded-[999px] top-[514px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[30.87px] not-italic text-[#71717a] text-[13px] top-[11.5px] whitespace-nowrap">Hard</p>
    </div>
  );
}

function Container8() {
  return (
    <button className="absolute bg-[#fafafa] block border border-[#ff9d1c] border-solid cursor-pointer h-[40px] left-[147px] rounded-[999px] top-[711px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[13px] not-italic text-[#ff9d1c] text-[13px] text-left top-[11px] whitespace-nowrap">Champion</p>
    </button>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] left-[48px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] top-[45px] w-[390px]" data-name="Section">
      <Heading />
      <Container />
      <Frame />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <div className="absolute h-[84px] left-[162px] top-[612px] w-[64px]" data-name="thr 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThr1} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[33.594px] items-start left-[28px] top-[60px] w-[102.531px]" data-name="Heading 1">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[33.6px] not-italic relative shrink-0 text-[#ff9d1c] text-[28px] whitespace-nowrap">Sudoku</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[21.5px] items-start left-[154px] top-[64px] w-[82px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#3f3f46] text-[18px] text-center">04:28</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[34px] left-[28px] rounded-[999px] top-[108px] w-[76px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[21.46px] not-italic text-[13px] text-white top-[8.5px] whitespace-nowrap">Easy</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[34px] left-[116px] rounded-[999px] top-[108px] w-[108px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] left-[17.02px] not-italic text-[#71717a] text-[13px] top-[8.5px] whitespace-nowrap">
        <span className="leading-[normal] text-[#ff9d1c]">0</span>
        <span className="leading-[normal]">{` mistakes`}</span>
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[34px] left-[239px] rounded-[999px] top-[108px] w-[122px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[24.6px] not-italic text-[#71717a] text-[13px] top-[8.5px] whitespace-nowrap">Best 05:12</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#ff9d1c] border-solid h-[34px] left-[240px] rounded-[999px] top-[61px] w-[122px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[24px] not-italic text-[#71717a] text-[0px] top-[14.5px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[13px]">🏆</span>
          <span className="leading-[normal] text-[16px]">#1</span>
          <span className="leading-[normal] text-[13px]">{` 03:12`}</span>
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[16px] left-[263px] rounded-[999px] top-[87px] w-[76px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[19px] not-italic text-[13px] text-white top-[-2px] whitespace-nowrap">name</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[239px] top-[60px]">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[16.47px] top-[33.25px] w-[27.063px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Undo</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-0 rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text />
      <div className="absolute inset-[calc(23.15%-0.54px)_calc(37.1%-0.26px)_calc(51.72%+0.03px)_calc(37.78%-0.24px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5741 14.575">
          <path d={svgPaths.pe176800} fill="var(--fill-0, #71717A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[15.68px] top-[33.25px] w-[28.633px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Erase</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-[91px] rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text1 />
      <div className="absolute inset-[calc(22.41%-0.55px)_calc(37.1%-0.26px)_calc(51.72%+0.03px)_calc(32.26%-0.35px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
          <path d={svgPaths.p2b8c5d00} fill="var(--fill-0, #71717A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[14.88px] top-[33.25px] w-[30.234px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Notes</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#ffce8d] border border-[#d4d4d8] border-solid h-[58px] left-[182px] rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text2 />
      <div className="absolute inset-[calc(17.48%-0.65px)_calc(34.09%-0.32px)_calc(50.63%+0.01px)_calc(36.08%-0.28px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.495 18.4959">
          <path d={svgPaths.p3f6d5e00} fill="var(--fill-0, #71717A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[19.21px] top-[33.25px] w-[21.578px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Hint</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-[273px] rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text3 />
      <div className="absolute inset-[calc(17.24%-0.66px)_calc(35.48%-0.29px)_calc(51.72%+0.03px)_calc(35.48%-0.29px)]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2ef1f600} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[58px] left-[28px] top-[532px] w-[334px]" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-white h-[36px] left-[147px] top-[617px] w-[97px]" />;
}

function Container20() {
  return (
    <div className="absolute bg-white h-[36px] left-[196px] rounded-[999px] top-[617px] w-[167px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic right-[118px] text-[#ffce8d] text-[13px] top-[10px] translate-x-full whitespace-nowrap">Notes OFF</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#ff9d1c] h-[36px] left-[30px] rounded-[999px] top-[617px] w-[166px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[52px] not-italic text-[13px] text-white top-[10px] whitespace-nowrap">Notes ON</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[29px] top-[616px]">
      <Frame1 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-5.52px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">1</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.02px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">2</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[36px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.83px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">3</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.56px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">4</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.28px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">5</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.59px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">6</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-6.58px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">7</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.63px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">8</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.59px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">9</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-center left-[28px] top-[684px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[10.39px] not-italic text-[#ff9d1c] text-[23px] top-[4.33px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container34() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container35() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container38() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container39() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container41() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container42() {
  return (
    <div className="absolute bg-white border-[#e4e4e7] border-b border-r border-solid left-[35px] not-italic size-[36.664px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[10.39px] text-[#ff9d1c] text-[23px] top-[4.33px] whitespace-nowrap">5</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-px text-[#71717a] text-[8px] top-[31px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-px text-[#71717a] text-[8px] top-[4.7px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-px text-[#71717a] text-[8px] top-[18px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-[28px] text-[#71717a] text-[8px] top-[18px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-[15px] text-[#71717a] text-[8px] top-[31px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[15px] text-[#71717a] text-[8px] top-[4.7px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-[28px] text-[#71717a] text-[8px] top-[31px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[28px] text-[#71717a] text-[8px] top-[4.7px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Container43() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container44() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container45() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container46() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container47() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container48() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container49() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container50() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container51() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-0" data-name="Container" />;
}

function Container52() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container54() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container55() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container57() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container58() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container59() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container60() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-0" data-name="Container" />;
}

function Container61() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container62() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container63() {
  return <div className="absolute bg-white border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container64() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container65() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container66() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container67() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container68() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container69() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-0" data-name="Container" />;
}

function Container70() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container71() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container72() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container73() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container74() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container75() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container76() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container77() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container78() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-0" data-name="Container" />;
}

function Container79() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container80() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container81() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container82() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container83() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container84() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container85() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container86() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container87() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-0" data-name="Container" />;
}

function Container88() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container89() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container90() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container91() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container92() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container93() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container94() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container95() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container96() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-0" data-name="Container" />;
}

function Container97() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container98() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container99() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container100() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container101() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container102() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container103() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container104() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container105() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-0" data-name="Container" />;
}

function Container106() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container107() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container108() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container109() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container110() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container111() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container112() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container113() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="absolute bg-white border-2 border-[#52525b] border-solid h-[335px] left-[29px] overflow-clip rounded-[6px] top-[169px] w-[332px]" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
      <Container95 />
      <Container96 />
      <Container97 />
      <Container98 />
      <Container99 />
      <Container100 />
      <Container101 />
      <Container102 />
      <Container103 />
      <Container104 />
      <Container105 />
      <Container106 />
      <Container107 />
      <Container108 />
      <Container109 />
      <Container110 />
      <Container111 />
      <Container112 />
      <Container113 />
      <div className="absolute flex h-[337.005px] items-center justify-center left-[107.97px] top-[-2px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 5" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[337.005px] items-center justify-center left-[219px] top-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 5" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-5px] top-[221px] w-[337.005px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 7" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-0 top-[110px] w-[337.005px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 7" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] left-[478px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] top-[969px] w-[390px]" data-name="Section">
      <Heading1 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Group1 />
      <Container15 />
      <Group2 />
      <Container22 />
      <Container32 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[33.594px] items-start left-[28px] top-[60px] w-[102.531px]" data-name="Heading 1">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[33.6px] not-italic relative shrink-0 text-[#ff9d1c] text-[28px] whitespace-nowrap">Sudoku</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex h-[21.5px] items-start left-[154px] top-[64px] w-[82px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#3f3f46] text-[18px] text-center">04:28</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[34px] left-[28px] rounded-[999px] top-[108px] w-[76px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[21.46px] not-italic text-[13px] text-white top-[8.5px] whitespace-nowrap">Easy</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[34px] left-[116px] rounded-[999px] top-[108px] w-[108px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] left-[17.02px] not-italic text-[#71717a] text-[13px] top-[8.5px] whitespace-nowrap">
        <span className="leading-[normal] text-[#ff9d1c]">0</span>
        <span className="leading-[normal]">{` mistakes`}</span>
      </p>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[34px] left-[239px] rounded-[999px] top-[108px] w-[122px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[24.6px] not-italic text-[#71717a] text-[13px] top-[8.5px] whitespace-nowrap">Best 05:12</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#ff9d1c] border-solid h-[34px] left-[240px] rounded-[999px] top-[61px] w-[122px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] left-[24px] not-italic text-[#71717a] text-[0px] top-[14.5px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[13px]">🏆</span>
          <span className="leading-[normal] text-[16px]">#1</span>
          <span className="leading-[normal] text-[13px]">{` 03:12`}</span>
        </p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[16px] left-[263px] rounded-[999px] top-[87px] w-[76px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[19px] not-italic text-[13px] text-white top-[-2px] whitespace-nowrap">name</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[239px] top-[60px]">
      <Container118 />
      <Container119 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[16.47px] top-[33.25px] w-[27.063px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Undo</p>
    </div>
  );
}

function MaterialSymbolsUndoRounded() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%-8px)]" data-name="material-symbols:undo-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:undo-rounded">
          <path d={svgPaths.p3202300} fill="var(--fill-0, #71717A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-0 rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text4 />
      <MaterialSymbolsUndoRounded />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[15.68px] top-[33.25px] w-[28.633px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Erase</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-[91px] rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text5 />
      <div className="absolute inset-[calc(22.41%-0.55px)_calc(37.1%-0.26px)_calc(51.72%+0.03px)_calc(32.26%-0.35px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
          <path d={svgPaths.p2b8c5d00} fill="var(--fill-0, #71717A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[14.88px] top-[33.25px] w-[30.234px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] text-left whitespace-nowrap">Notes</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.9%_4.74%_0.78%_18.2%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.495 21.6779">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p3f6d5e00} fill="var(--fill-0, #71717A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcutePencilLine() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-1px)] overflow-clip size-[24px] top-[calc(50%-9px)]" data-name="mingcute:pencil-line">
      <Group />
    </div>
  );
}

function Container123() {
  return (
    <button className="absolute bg-[#fafafa] block border border-[#d4d4d8] border-solid cursor-pointer h-[58px] left-[182px] rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text6 />
      <MingcutePencilLine />
    </button>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[11.5px] items-start left-[19.21px] top-[33.25px] w-[21.578px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[10px] whitespace-nowrap">Hint</p>
    </div>
  );
}

function TablerBulb() {
  return (
    <div className="absolute left-[18px] size-[24px] top-[6px]" data-name="tabler:bulb">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:bulb">
          <path d={svgPaths.p262d00} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[58px] left-[273px] rounded-[16px] top-0 w-[62px]" data-name="Container">
      <Text7 />
      <TablerBulb />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute h-[58px] left-[28px] top-[532px] w-[334px]" data-name="Container">
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
    </div>
  );
}

function Frame2() {
  return <div className="absolute bg-white h-[36px] left-[146px] top-[616px] w-[97px]" />;
}

function Container125() {
  return (
    <div className="absolute bg-[#ff9d1c] h-[36px] left-[196px] rounded-[999px] top-[617px] w-[167px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic right-[118px] text-[13px] text-white top-[10px] translate-x-full whitespace-nowrap">Notes OFF</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute bg-white h-[36px] left-[30px] rounded-[999px] top-[617px] w-[166px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[52px] not-italic text-[#ffce8d] text-[13px] top-[10px] whitespace-nowrap">Notes ON</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[29px] top-[616px]">
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container128() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-5.52px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">1</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.02px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">2</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[36px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.83px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">3</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.56px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">4</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.28px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">5</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.59px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">6</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-6.58px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">7</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.63px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">8</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-white h-[40px] relative rounded-[16px] shrink-0 w-[37px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%-7.59px)] not-italic text-[#ff9d1c] text-[24px] top-[calc(50%-14px)] whitespace-nowrap">9</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex items-center left-[28px] top-[684px]" data-name="Container">
      <Container128 />
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[10.39px] not-italic text-[#ff9d1c] text-[23px] top-[4.33px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container139() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container140() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container141() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container142() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container143() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container144() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container145() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container146() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[-2px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container147() {
  return (
    <div className="absolute bg-white border-[#e4e4e7] border-b border-r border-solid left-[35px] not-italic size-[36.664px] top-0" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[10.39px] text-[#ff9d1c] text-[23px] top-[4.33px] whitespace-nowrap">5</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-px text-[#71717a] text-[8px] top-[31px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-px text-[#71717a] text-[8px] top-[4.7px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-px text-[#71717a] text-[8px] top-[18px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-[28px] text-[#71717a] text-[8px] top-[18px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-[15px] text-[#71717a] text-[8px] top-[31px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[15px] text-[#71717a] text-[8px] top-[4.7px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[8px] justify-center leading-[0] left-[28px] text-[#71717a] text-[8px] top-[31px] w-[5px]">
        <p className="leading-[normal]">5</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[28px] text-[#71717a] text-[8px] top-[4.7px] whitespace-nowrap">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Container148() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container149() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container150() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container151() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container152() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container153() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container154() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container155() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[35px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container156() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-0" data-name="Container" />;
}

function Container157() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container158() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container159() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container160() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container161() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container162() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container163() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container164() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[72px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container165() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-0" data-name="Container" />;
}

function Container166() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container167() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container168() {
  return <div className="absolute bg-white border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container169() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container170() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container171() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container172() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container173() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[109px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container174() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-0" data-name="Container" />;
}

function Container175() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container176() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container177() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container178() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container179() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container180() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container181() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container182() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[146px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container183() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-0" data-name="Container" />;
}

function Container184() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container185() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container186() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container187() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container188() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container189() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container190() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container191() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[183px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container192() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-0" data-name="Container" />;
}

function Container193() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container194() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container195() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container196() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container197() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container198() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container199() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container200() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[220px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container201() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-0" data-name="Container" />;
}

function Container202() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container203() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container204() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container205() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container206() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container207() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container208() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container209() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[257px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container210() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-0" data-name="Container" />;
}

function Container211() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[37px]" data-name="Container" />;
}

function Container212() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[74px]" data-name="Container" />;
}

function Container213() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[111px]" data-name="Container" />;
}

function Container214() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[148px]" data-name="Container" />;
}

function Container215() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[185px]" data-name="Container" />;
}

function Container216() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[222px]" data-name="Container" />;
}

function Container217() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[259px]" data-name="Container" />;
}

function Container218() {
  return <div className="absolute border-[#e4e4e7] border-b border-r border-solid left-[293px] size-[36.664px] top-[296px]" data-name="Container" />;
}

function Container137() {
  return (
    <div className="absolute bg-white border-2 border-[#52525b] border-solid h-[335px] left-[29px] overflow-clip rounded-[6px] top-[169px] w-[332px]" data-name="Container">
      <Container138 />
      <Container139 />
      <Container140 />
      <Container141 />
      <Container142 />
      <Container143 />
      <Container144 />
      <Container145 />
      <Container146 />
      <Container147 />
      <Container148 />
      <Container149 />
      <Container150 />
      <Container151 />
      <Container152 />
      <Container153 />
      <Container154 />
      <Container155 />
      <Container156 />
      <Container157 />
      <Container158 />
      <Container159 />
      <Container160 />
      <Container161 />
      <Container162 />
      <Container163 />
      <Container164 />
      <Container165 />
      <Container166 />
      <Container167 />
      <Container168 />
      <Container169 />
      <Container170 />
      <Container171 />
      <Container172 />
      <Container173 />
      <Container174 />
      <Container175 />
      <Container176 />
      <Container177 />
      <Container178 />
      <Container179 />
      <Container180 />
      <Container181 />
      <Container182 />
      <Container183 />
      <Container184 />
      <Container185 />
      <Container186 />
      <Container187 />
      <Container188 />
      <Container189 />
      <Container190 />
      <Container191 />
      <Container192 />
      <Container193 />
      <Container194 />
      <Container195 />
      <Container196 />
      <Container197 />
      <Container198 />
      <Container199 />
      <Container200 />
      <Container201 />
      <Container202 />
      <Container203 />
      <Container204 />
      <Container205 />
      <Container206 />
      <Container207 />
      <Container208 />
      <Container209 />
      <Container210 />
      <Container211 />
      <Container212 />
      <Container213 />
      <Container214 />
      <Container215 />
      <Container216 />
      <Container217 />
      <Container218 />
      <div className="absolute flex h-[337.005px] items-center justify-center left-[107.97px] top-[-2px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 5" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[337.005px] items-center justify-center left-[219px] top-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 5" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[-5px] top-[221px] w-[337.005px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 7" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-0 top-[110px] w-[337.005px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[337.005px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337.005 1">
                <line id="Line 7" stroke="var(--stroke-0, #FFDBAC)" x2="337.005" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] left-[478px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] top-[48px] w-[390px]" data-name="Section">
      <Heading2 />
      <Container114 />
      <Container115 />
      <Container116 />
      <Container117 />
      <Group3 />
      <Container120 />
      <Frame2 />
      <Group4 />
      <Container127 />
      <Container137 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[33.594px] items-start left-[28px] top-[60px] w-[128.375px]" data-name="Heading 1">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[33.6px] not-italic relative shrink-0 text-[#ff9d1c] text-[28px] whitespace-nowrap">Statistics 🏆</p>
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute bg-white border border-[#ff9d1c] border-solid h-[34px] left-[290px] rounded-[14px] top-[60px] w-[68px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[14.15px] not-italic text-[#ff9d1c] text-[13px] top-[8.5px] whitespace-nowrap">Home</p>
    </div>
  );
}

function Container221() {
  return (
    <div className="absolute bg-[#ff9d1c] left-[24px] rounded-[16px] size-[48px] top-[22px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[17.48px] not-italic text-[20px] text-white top-[12.25px] whitespace-nowrap">P</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[23.5px] items-start left-[90px] top-[20px] w-[58.914px]" data-name="Heading 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[20px] whitespace-nowrap">Player</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20.297px] left-[90px] top-[48px] w-[207.094px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.3px] left-0 not-italic text-[#71717a] text-[14px] top-[0.5px] whitespace-nowrap">Ranked by best completion time</p>
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute bg-white border border-[#d4d4d8] border-solid h-[92px] left-[28px] rounded-[22px] top-[112px] w-[334px]" data-name="Container">
      <Container221 />
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function Container222() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[28px] top-[232px] w-[63.773px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#3f3f46] text-[14px] whitespace-nowrap">Difficulty</p>
    </div>
  );
}

function Container223() {
  return (
    <div className="absolute bg-[#ff9d1c] border border-[#ff9d1c] border-solid h-[40px] left-[28px] rounded-[999px] top-[266px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[31.46px] not-italic text-[13px] text-white top-[11.5px] whitespace-nowrap">Easy</p>
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[40px] left-[147px] rounded-[999px] top-[266px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[23px] not-italic text-[#71717a] text-[13px] top-[11.5px] whitespace-nowrap">Normal</p>
    </div>
  );
}

function Container225() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#d4d4d8] border-solid h-[40px] left-[262px] rounded-[999px] top-[266px] w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[30.87px] not-italic text-[#71717a] text-[13px] top-[11.5px] whitespace-nowrap">Hard</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[21.75px] left-[24px] top-[28px] w-[284px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[21.75px] left-0 not-italic text-[#71717a] text-[15px] top-0 whitespace-nowrap">Easy rank</p>
    </div>
  );
}

function Container227() {
  return (
    <div className="absolute h-[52px] left-[24px] top-[53.75px] w-[284px]" data-name="Container">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[52px] left-0 not-italic text-[#ff9d1c] text-[52px] top-0 whitespace-nowrap">#01</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20.297px] left-[24px] top-[138px] w-[284px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.3px] left-0 not-italic text-[#71717a] text-[14px] top-[0.5px] whitespace-nowrap">Best time across all Easy games</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20.297px] left-[24px] top-[110px] w-[284px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20.3px] left-0 not-italic text-[#ff9d1c] text-[14px] top-[0.5px] whitespace-nowrap">Player Name</p>
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute bg-[#fafafa] border border-[#e4e4e7] border-solid h-[50px] left-[198px] rounded-[18px] top-[40px] w-[104px]" data-name="Container">
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[23.46px] not-italic text-[#ff9d1c] text-[20px] top-[12.25px] whitespace-nowrap">05:12</p>
    </div>
  );
}

function Container226() {
  return (
    <div className="absolute bg-white border border-[#d4d4d8] border-solid h-[180px] left-[28px] rounded-[22px] top-[338px] w-[334px]" data-name="Container">
      <Paragraph2 />
      <Container227 />
      <Paragraph3 />
      <Paragraph4 />
      <Container228 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[21.5px] items-start left-[28px] top-[552px] w-[150.586px]" data-name="Heading 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff9d1c] text-[18px] whitespace-nowrap">Best time ranking</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[16px] top-[12.25px] w-[44px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-center">1</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[60px] top-[12.25px] w-[186px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px]">Player</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[246px] top-[12.25px] w-[70px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-right">05:12</p>
    </div>
  );
}

function Container230() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid h-[44px] left-0 rounded-[14px] top-0 w-[334px]" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[16px] top-[12.25px] w-[44px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-center">2</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[60px] top-[12.25px] w-[186px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px]">Mina</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[246px] top-[12.25px] w-[70px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-right">05:40</p>
    </div>
  );
}

function Container231() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid h-[44px] left-0 rounded-[14px] top-[54px] w-[334px]" data-name="Container">
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[16px] top-[12.25px] w-[44px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-center">3</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[60px] top-[12.25px] w-[186px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px]">Krit</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[246px] top-[12.25px] w-[70px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-right">06:03</p>
    </div>
  );
}

function Container232() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid h-[44px] left-0 rounded-[14px] top-[108px] w-[334px]" data-name="Container">
      <Text14 />
      <Text15 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[16px] top-[12.25px] w-[44px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-center">4</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[60px] top-[12.25px] w-[186px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px]">Ploy</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[246px] top-[12.25px] w-[70px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-right">06:18</p>
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid h-[44px] left-0 rounded-[14px] top-[162px] w-[334px]" data-name="Container">
      <Text17 />
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[16px] top-[12.25px] w-[44px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-center">5</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[60px] top-[12.25px] w-[186px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px]">Beam</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[246px] top-[12.25px] w-[70px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[15px] text-right">06:44</p>
    </div>
  );
}

function Container234() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid h-[44px] left-0 rounded-[14px] top-[216px] w-[334px]" data-name="Container">
      <Text20 />
      <Text21 />
      <Text22 />
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute h-[260px] left-[28px] top-[590px] w-[334px]" data-name="Container">
      <Container230 />
      <Container231 />
      <Container232 />
      <Container233 />
      <Container234 />
    </div>
  );
}

function Small() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Small">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[12px]">Ranking</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="content-stretch flex h-[23.5px] items-start relative shrink-0 w-full" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[20px]">1</p>
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-[22px] top-[10.25px] w-[96px]" data-name="Container">
      <Small />
      <BoldText />
    </div>
  );
}

function Small1() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Small">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[12px]">Avg time</p>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="content-stretch flex h-[23.5px] items-start relative shrink-0 w-full" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[20px]">05:12</p>
    </div>
  );
}

function Container237() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-[118px] top-[10.25px] w-[96px]" data-name="Container">
      <Small1 />
      <BoldText1 />
    </div>
  );
}

function Small2() {
  return (
    <div className="content-stretch flex h-[14px] items-start relative shrink-0 w-full" data-name="Small">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#71717a] text-[12px]">Streak</p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="content-stretch flex h-[23.5px] items-start relative shrink-0 w-full" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[#ff9d1c] text-[20px]">4</p>
    </div>
  );
}

function Container238() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[39.5px] items-start left-[214px] top-[10.25px] w-[96px]" data-name="Container">
      <Small2 />
      <BoldText2 />
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute bg-white border border-[#d4d4d8] border-solid h-[62px] left-[28px] rounded-[22px] top-[766px] w-[334px]" data-name="Container">
      <Container236 />
      <Container237 />
      <Container238 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#f7f7f6] border border-[#e4e4e7] border-solid h-[844px] left-[908px] overflow-clip rounded-[32px] shadow-[0px_28px_80px_0px_rgba(24,24,27,0.08)] top-[48px] w-[390px]" data-name="Section">
      <Heading3 />
      <Container219 />
      <Container220 />
      <Container222 />
      <Container223 />
      <Container224 />
      <Container225 />
      <Container226 />
      <Heading5 />
      <Container229 />
      <Container235 />
    </div>
  );
}

export default function MainContentSudokuMinimalUi() {
  return (
    <div className="bg-[#eeeeec] relative size-full" data-name="Main Content (Sudoku Minimal UI)">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}