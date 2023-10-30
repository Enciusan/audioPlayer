import React from "react";
import { NewSongsCard, UpcomingSongsCard } from "../Cards/Cards";

export const NewSongCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-auto">
        <div className="relative">
          <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4">
            <NewSongsCard
              songImage={
                "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Heroes_%26_Villains_%28Heroes_Version%29_cover.jpg/220px-Heroes_%26_Villains_%28Heroes_Version%29_cover.jpg"
              }
              songName="Heroes&Villains"
              songArtist="Metro Boomin"
            />
            <NewSongsCard
              songImage={"https://i1.sndcdn.com/artworks-000492776109-59n6ex-t500x500.jpg"}
              songName="Big shot"
              songArtist="Gunna"
            />
            <NewSongsCard
              songImage={"https://i1.sndcdn.com/artworks-000509955570-pcg0kf-t500x500.jpg"}
              songName="Bank accout"
              songArtist="21 Savage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const UpcomingCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-auto">
        <div className="relative">
          <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4">
            <UpcomingSongsCard
              songImage={
                "https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_3000,h_3000,c_limit/Drake-For-all-the-Dogs.jpg"
              }
              songDescription="For All the Dogs"
              songArtist="Drake"
              songType="New Album"
            />
            <UpcomingSongsCard
              songImage={"https://images.genius.com/474d93dfd01897128c3190005f3abc7b.1000x1000x1.png"}
              songDescription="Tha Fix Before Tha VI"
              songArtist="Lil Wayne"
              songType="New EP"
            />
            <UpcomingSongsCard
              songImage={"https://images.genius.com/8cd98b9c35b2d2e9109861a88f873634.1000x1000x1.png"}
              songDescription="my neighbours don't know."
              songArtist="M Huncho"
              songType="Tribut"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
