import { Player } from "@lottiefiles/react-lottie-player";
import LiveAnimation from "@/assets/images/live.json";
import { memo } from "react";

const SvgComponent = () => {
  return (
    <div className='w-full  mt-12'>
      <Player
        autoplay
        loop
        src={LiveAnimation}
        style={{ height: "110px", width: "110px" }}></Player>
    </div>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
