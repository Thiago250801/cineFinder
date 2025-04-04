import { useEffect, useState } from "react";
import { getAiringTodayTv, getOnTheAirTv, getPopularTv, getTopRatedTv } from "../../services/mediaService";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";
import Loading from "../Loading";

export default function ListSerie() {
  const [popularTv, setPopularTv] = useState<Media[]>([]);
  const [topRatedTv, setTopRatedTv] = useState<Media[]>([]);
  const [airingTodayTv, setAiringTodayTv] = useState<Media[]>([]);
  const [onTheAirTv, setOnTheAirTv] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPopularTv = await getPopularTv();
        const dataTopRatedTv = await getTopRatedTv();
        const dataAiringTodayTv = await getAiringTodayTv();
        const dataOnTheAirTv = await getOnTheAirTv();

        setPopularTv(dataPopularTv);
        setTopRatedTv(dataTopRatedTv);
        setAiringTodayTv(dataAiringTodayTv);
        setOnTheAirTv(dataOnTheAirTv);
      } catch (error) {
        console.error("Ocorreu um erro na requisição: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const sections = [
    {
        title: "Populares", data: popularTv
    },
    {
        title: "Bem Avaliados", data: topRatedTv,
    },
    {
        title: "Estão no ar", data: onTheAirTv
    },
    {
        title: "Em exibição hoje", data: airingTodayTv
    }
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
