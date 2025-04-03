import { useEffect, useState } from "react";
import { getEmCartaz, getPopularMovie, getTopRatedMovie, getTreendingMovie } from "../../services/mediaService";
import { Media, Section } from "../../types/types";
import HorizontalList from "../HorizontalList";
import { FlatList } from "react-native";


export default function ListMovie() {

    const [ popularMovie, setPopularMovie ] = useState<Media[]>([]);
    const [ topRatedMovie, setTopRatedMovie ] = useState<Media[]>([]);
    const [ trendingMovie, setTrendingMovie ] = useState<Media[]>([]);
    const [ emCartazMovie, setEmCartazMovie ] = useState<Media[]>([]);

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
                console.error('Ocorreu um erro na requisição: ', error)
            }
        }

        fetchData();
    }, [] )

    const sections = [
        { title: 'Em Cartaz', data: emCartazMovie },
        {title: 'TENDÊNCIAS', data: trendingMovie},
        { title: 'Populares', data: popularMovie},
        {title: 'Bem Avaliados', data: topRatedMovie},
    ]

    const renderSection = ( { item }:{ item:Section } ) => (
        <HorizontalList sections={ item }  />
    )

    return (
        
        <FlatList 
        data={ sections }
        renderItem={ renderSection }
        keyExtractor={ (item) =>  item.title }
        />
    )

}