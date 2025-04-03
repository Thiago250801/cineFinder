import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Media, Section } from "../../types/types";
import { styles } from "./styles";
import { useRouter } from "expo-router";

type HorizontalListProps = {
    sections: Section
}

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export default function HorizontalList({ sections }: HorizontalListProps) {

    const router = useRouter();

    const handleNavigationToDetails = (id: number) => {
        router.push(`/Details/${id}`)
    }

    const renderItem = ({ item }: {item: Media}) => (
        <TouchableOpacity style={ styles.cardItem } onPress={() => handleNavigationToDetails(item.id) }  >

            <Image style={ styles.cardImage } 
            resizeMode="cover" source={{ uri: `${BASE_IMAGE_URL}${item.poster_path} ` }} 
             />

            <Text style={ styles.cardTitle } numberOfLines={1} ellipsizeMode="tail" >{ item.name || item.title }</Text>
        </TouchableOpacity>
    )

    return (
        <View style={ styles.containerList } >
            <Text style={ styles.titleList } >{ sections.title }</Text>

            <FlatList 
            data={ sections.data }
            renderItem={ renderItem }
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={ styles.list }
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={155}

            />
        </View>
    )

}