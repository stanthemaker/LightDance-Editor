import PlayBackController from "./PlayBackController";
import TimeController from "./TimeController";
import WaveSurferApp from "../Wavesurfer/WaveSurferApp";
import VolumeSlider from "./VolumeSlider";
import ScaleSlider from "./ScaleSlider";
import FadeSwitch from "./FadeSwitch";

import useRoute from "@/hooks/useRoute";

function ControlBar({ wavesurfer }: { wavesurfer: WaveSurferApp }) {
  const { page } = useRoute();

  return (
    <>
      <PlayBackController wavesurfer={wavesurfer} />
      <TimeController />
      {page === "EDITOR" && <FadeSwitch />}
      <VolumeSlider wavesurfer={wavesurfer} />
      <ScaleSlider wavesurfer={wavesurfer} />
    </>
  );
}

export default ControlBar;
