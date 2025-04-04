import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Media } from "../../../types/types";
import { ScrollView, View, Image, Text, TouchableOpacity, Button } from "react-native";
import { getDetailsMedia } from "../../../services/mediaService";
import styles from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Loading from "../../../components/Loading";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function DetailsMedia() {
  const { id , type} = useLocalSearchParams();
  const router = useRouter();
  

  const [media, setMedia] = useState<Media | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMedia = await getDetailsMedia(Number(id), type as 'movie' | 'tv');
        setMedia(dataMedia);
      } catch (error) {
        console.error("Ocorreu um erro na requisição: ", error);
      } finally{
          setIsLoading(false);
      }
    };

    if (id && type) fetchData();
  }, [id, type]);



  const formatRuntime = (minutes: number) => {
    const hour = Math.floor(minutes / 60);
    const ramainingMinutes = minutes % 60;

    return `${hour}h e ${ramainingMinutes}min`;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleNavigationBack = () => {
    router.back();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.containerDetails}>
      {/*  Container Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.posterImage}
          resizeMode="contain"
          source={{ uri: `${BASE_IMAGE_URL}${media?.poster_path}` }}
        />


        <LinearGradient
          style={styles.gradient}
          colors={["rgba(10, 15, 26, 0)", "rgba(10, 15, 26, 0.9)"]}
        />

        <TouchableOpacity
          style={styles.buttonReturn}
          onPress={handleNavigationBack}
        >
          <Ionicons name="arrow-back" color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {/* Informações do filme */}
      <View style={styles.detailsContent}>
        {/* Principais Informações */}
        <View>
          <Text style={styles.infoTitle}>{media?.title || media?.name}</Text>

          <View style={styles.infoMedia}>
            <Text></Text>
            <Text style={styles.infoDate}>
              {media?.release_date?.substring(0, 4)} -{" "}
              {media?.runtime ? formatRuntime(media.runtime) : "N/A"}
            </Text>

            <View style={styles.rating}>
              <Ionicons name="star" color="#FFD700" size={16} />
              <Text style={styles.ratingText}>8/10</Text>
            </View>
          </View>
        </View>

        {/* Sinopse */}
        <View style={styles.sinopseContainer}>
          <Text style={styles.titleInfo}>Sinopse</Text>
          <Text style={styles.textSinopse}>
            {media?.overview ? media.overview : "N/A"}
          </Text>
        </View>

        {/* Outras Informações */}
        <View style={styles.otherInfoContainer}>
          <Text style={styles.titleInfo}>Detalhes</Text>
          <Text style={styles.otherInfoText}>
            Orçamento: {media?.budget ? formatCurrency(media.budget) : "N/A"}{" "}
          </Text>
          <Text style={styles.otherInfoText}>
            Receita: {media?.revenue ? formatCurrency(media.revenue) : "N/A"}{" "}
          </Text>
          <Text style={styles.otherInfoText}>
            Status: {media?.status ? media.status : "N/A"}{" "}
          </Text>
          <Text style={[styles.otherInfoText]}>
            Idioma Original:{" "}
            {media?.original_language ? media.original_language.toLocaleUpperCase() : "N/A"}{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
