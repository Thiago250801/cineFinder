import { useEffect, useState } from "react";
import {
  getEmCartaz,
  getPopularMovie,
  getTopRatedMovie,

  getUpcomingMovie,
} from "../../services/mediaService";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";
import Loading from "../Loading";

export default function ListMovie() {
  const [popularMovie, setPopularMovie] = useState<Media[]>([]);
  const [topRatedMovie, setTopRatedMovie] = useState<Media[]>([]);
  const [upcomingMovie, setUpcomingMovie] = useState<Media[]>([]);
  const [emCartazMovie, setEmCartazMovie] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataEmCartazMovie = await getEmCartaz();
        const dataPopularMovie = await getPopularMovie();
        const dataTopRatedMovie = await getTopRatedMovie();
        const dataUpcomingMovie = await getUpcomingMovie();

        setEmCartazMovie(dataEmCartazMovie);
        setPopularMovie(dataPopularMovie);
        setTopRatedMovie(dataTopRatedMovie);
        setUpcomingMovie(dataUpcomingMovie);
      } catch (error) {
        console.error("Ocorreu um erro na requisição: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const sections = [
    { title: "Em Cartaz", data: emCartazMovie },
    { title: "Populares", data: popularMovie },
    { title: "Bem Avaliados", data: topRatedMovie },
    { title: "Em breve", data: upcomingMovie }
  ];

  const renderSection = ({ item }: { item: Section }) => (
    <HorizontalList sections={item} />
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={sections}
      renderItem={renderSection}
      keyExtractor={(item) => item.title}
    />
  );
}
