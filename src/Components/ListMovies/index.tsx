import { useEffect, useState } from "react";
import {
  getEmCartaz,
  getPopularMovie,
  getTopRatedMovie,
  getTreendingMovie,
} from "../../services/mediaService";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList, ActivityIndicator, View } from "react-native";

export default function ListMovie() {
  const [popularMovie, setPopularMovie] = useState<Media[]>([]);
  const [topRatedMovie, setTopRatedMovie] = useState<Media[]>([]);
  const [trendingMovie, setTrendingMovie] = useState<Media[]>([]);
  const [emCartazMovie, setEmCartazMovie] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataEmCartazMovie = await getEmCartaz();
        const dataPopularMovie = await getPopularMovie();
        const dataTopRatedMovie = await getTopRatedMovie();
        const dataTrendingMovie = await getTreendingMovie();

        setEmCartazMovie(dataEmCartazMovie);
        setPopularMovie(dataPopularMovie);
        setTopRatedMovie(dataTopRatedMovie);
        setTrendingMovie(dataTrendingMovie);
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
    { title: "TENDÊNCIAS", data: trendingMovie },
    { title: "Populares", data: popularMovie },
    { title: "Bem Avaliados", data: topRatedMovie },
  ];

  const renderSection = ({ item }: { item: Section }) => (
    <HorizontalList sections={item} />
  );

  if (isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0F1A' }}>
        <ActivityIndicator size="large" color="#00A3FF"/>
      </View>
    )
  }

  return (
    <FlatList
      data={sections}
      renderItem={renderSection}
      keyExtractor={(item) => item.title}
    />
  );
}
