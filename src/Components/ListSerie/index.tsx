import { useEffect, useState } from "react";
import { getPopularTv, getTopReateTv } from "../../services/mediaService";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";
import Loading from "../Loading";

export default function ListSerie() {
  const [popularTv, setPopularTv] = useState<Media[]>([]);
  const [topRatedTv, setTopRatedTv] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPopularTv = await getPopularTv();
        const dataTopRatedTv = await getTopReateTv();

        setPopularTv(dataPopularTv);
        setTopRatedTv(dataTopRatedTv);
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
