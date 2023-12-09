import { FunctionComponent, useMemo, type CSSProperties } from "react";

type CardContainerType = {
  rectangle367?: string;
  star?: string;
  prop?: string;
  ethicalHackingMastery?: string;
  understandPenetrationTest?: string;
  rs149900?: string;
  rectangle362?: string;
  weeks?: string;
  group?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  rectangle367,
  star,
  prop,
  ethicalHackingMastery,
  understandPenetrationTest,
  rs149900,
  rectangle362,
  weeks,
  group,
  propLeft,
  propHeight,
}) => {
  const c1BigStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const understandPenetrationTestingStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="absolute top-[89px] left-[calc(50%_+_259px)] w-[302px] h-[502px] text-left text-sm text-gray-200 font-inter"
      style={c1BigStyle}
    >
      <img
        className="absolute top-[-1px] left-[calc(50%_-_152px)] rounded-3xl w-[304px] h-[504px]"
        alt=""
        src={rectangle367}
      />
      <div className="absolute top-[252.8px] left-[18px] w-[59.8px] h-[22px] font-open-sans">
        <img
          className="absolute top-[1.56px] left-[0px] w-[17.96px] h-[18.03px]"
          alt=""
          src={star}
        />
        <div className="absolute top-[0px] left-[26.8px] leading-[156.23%]">
          {prop}
        </div>
      </div>
      <b className="absolute top-[216px] left-[calc(50%_-_133px)] text-base leading-[156.23%]">
        {ethicalHackingMastery}
      </b>
      <div
        className="absolute top-[286.8px] left-[18px] leading-[156.23%] inline-block w-[261.19px] h-[60.4px]"
        style={understandPenetrationTestingStyle}
      >
        {understandPenetrationTest}
      </div>
      <div className="absolute top-[393.2px] left-[calc(50%_-_133px)] text-base leading-[156.23%] text-center text-darkslateblue">
        <b>{rs149900}</b>
        <span className="[text-decoration:line-through] text-red">
          3,499.00
        </span>
      </div>
      <img
        className="absolute top-[-2px] left-[calc(50%_-_153px)] rounded-3xl w-[306px] h-[212px] object-cover"
        alt=""
        src={rectangle362}
      />
      <div className="absolute top-[359.2px] left-[18px] w-[74.91px] h-[22px] text-dimgray-100 font-open-sans-hebrew">
        <div className="absolute top-[0px] left-[21.91px] leading-[156.23%]">
          {weeks}
        </div>
        <img
          className="absolute h-[63.64%] w-[18.69%] top-[18.18%] right-[81.31%] bottom-[18.18%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={group}
        />
      </div>
      <div className="absolute top-[442.5px] left-[72.5px] rounded-28xl [background:linear-gradient(89.36deg,_#68bfbf,_#9673b8)] box-border w-[158px] h-[50px] overflow-hidden flex flex-row items-center justify-center py-[25px] px-[67px] text-xl text-gray-300 border-[1px] border-solid border-white">
        <div className="relative font-medium">Enroll now</div>
      </div>
    </div>
  );
};

export default CardContainer;
