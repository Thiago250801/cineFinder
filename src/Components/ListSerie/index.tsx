import { useEffect, useState } from "react";
import {

  getPopularTv,
} from "../../services/mediaService";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";

export default function ListSerie() {
  const [popularSerie, setPopularSerie] = useState<Media[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {


        const dataPopularSerie = await getPopularTv();

        setPopularSerie(dataPopularSerie);
      } catch (error) {
        console.error("Ocorreu um erro na requisição: ", error);
      }
    };

    fetchData();
  }, []);

  const sections = [
    { title: "Populares", data: popularSerie },

  ];

  const renderSection = ({ item }: { item: Section }) => (
    <HorizontalList sections={item} />
  );

  return (
    <FlatList
      data={sections}
      renderItem={renderSection}
      keyExtractor={(item) => item.title}
    />
  );
}
