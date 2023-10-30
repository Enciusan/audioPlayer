import React from "react";
import { NewSongCarousel, UpcomingCarousel } from "../../components/Carousel/Carousel";

export const Browse: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <section className="flex flex-col w-full gap-3">
        <span className="font-bold text-2xl text-left pl-3 text-teal-400">New songs</span>
        <NewSongCarousel />
      </section>
      <section className="flex flex-col w-full gap-3">
        <span className="font-bold text-2xl text-left pl-3 text-teal-400">Upcoming</span>
        <UpcomingCarousel />
      </section>
    </div>
  );
};
