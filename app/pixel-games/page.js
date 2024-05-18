"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";

export default function PixelGame() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
  return (
    <main className={"main-inner"}>
      {pixelGames ? (
        <CardsListSection id="pixel" title="Пиксельные игры" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
