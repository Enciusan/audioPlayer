import React from "react";
import { Card, CardContent } from "../../libComponents/Card";

type NewSongCardProps = {
  songImage: string;
  songName: string;
  songArtist: string;
  songType?: string;
};
type UpcomingSongsCardProps = {
  songImage: string;
  songDescription?: string;
  songName?: string;
  songArtist?: string;
  songType?: string;
};

export const NewSongsCard: React.FC<NewSongCardProps> = (props) => {
  const { songImage, songName, songArtist, songType } = props;
  return (
    <Card className="snap-end shrink-0 max-w-[8.2rem] bg-transparent border-0">
      <img src={songImage} alt={songName} className="rounded-md h-[9.6rem] w-40" />
      <CardContent className="flex flex-col justify-start items-center w-full py-2 px-0">
        <span className="text-md text-foreground line-clamp-1 text-left w-full">{songName}</span>
        <p className="text-sm text-muted/60 text-left w-full">{songArtist}</p>
      </CardContent>
    </Card>
  );
};

export const UpcomingSongsCard: React.FC<UpcomingSongsCardProps> = (props) => {
  const { songImage, songDescription, songArtist, songType, songName } = props;
  return (
    <Card className="snap-end shrink-0 max-w-[13rem] bg-transparent border-0">
      <CardContent className="flex flex-col justify-start items-center w-full py-1 px-0">
        <span className="text-xs text-muted/60 line-clamp-1 font-bold text-left w-full uppercase">{songType}</span>
        <span className="text-md text-foreground line-clamp-1 text-left w-full">{songDescription ?? songName}</span>
        <p className="text-sm text-muted/60 text-left w-full pb-1.5">{songArtist}</p>
        <img src={songImage} alt={songArtist} className="rounded-lg h-[13rem] " />
      </CardContent>
    </Card>
  );
};
