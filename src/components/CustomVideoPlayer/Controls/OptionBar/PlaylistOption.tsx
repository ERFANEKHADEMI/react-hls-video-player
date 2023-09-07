import { Icon } from "@components/ui/Icon";
import { rem } from "@utils";
import { useState } from "react";
import { styled } from "styled-components";

const PlaylistOptionContainer = styled.div``;
const PlaylistWindow = styled.ul`
  position: absolute;
  right: ${rem("8px")};
  bottom: calc(65px + ${rem("8px")});
  min-width: 200px;
  max-height: 300px;
  background-color: #303030;
  color: #fff;
  border-radius: 4px;
  &:hover {
    background-color: #302030;
  }
`;
const PlaylistTrack = styled.li`
  display: flex;
  align-items: baseline;
  font-family: helvetica;
  font-size: ${rem("16px")};
  padding: ${rem("8px")} ${rem("16px")};
  user-select: none;
  svg {
    margin-left: ${rem("8px")};
  }
  &:hover {
    cursor: pointer;
    color: #303030;
    background-color: #fff;
    border-radius: 4px;
    svg > path {
      fill: #303030;
    }
  }
`;

interface PlaylistOptionProps {
  sources: Array<string>;
  playingSrc: string;
  setPlayingSrc: any;
}

const PlaylistOption = ({
  playingSrc,
  setPlayingSrc,
  sources,
}: PlaylistOptionProps) => {
  const [showPlaylist, setShowPlaylist] = useState<boolean>(true);
  const handleShowPlaylist = () => {
    setShowPlaylist((prev) => !prev);
  };
  return (
    <PlaylistOptionContainer>
      <Icon name={"playing"} onClick={handleShowPlaylist} />
      {showPlaylist && (
        <PlaylistWindow
          onMouseEnter={() => setShowPlaylist(true)}
          onMouseLeave={() => setShowPlaylist(false)}
        >
          {sources.map((source, idx) => {
            const filename = source.split("/").pop();
            return (
              <PlaylistTrack
                key={`${idx}_source`}
                onClick={() => setPlayingSrc(source)}
              >
                {filename}
                {source === playingSrc && <Icon name={"check"} size={"16px"} />}
              </PlaylistTrack>
            );
          })}
        </PlaylistWindow>
      )}
    </PlaylistOptionContainer>
  );
};

export default PlaylistOption;
