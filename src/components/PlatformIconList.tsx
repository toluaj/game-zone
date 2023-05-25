import {
  FaApple,
  FaAndroid,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconSlugMap: { [key: string]: IconType } = {
    //x number ofbjects have keys of type string and each key is mapped to a type IconType
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          as={iconSlugMap[platform.slug]}
          color={"orange.100"}
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
