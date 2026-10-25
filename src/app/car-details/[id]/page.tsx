import { layout } from "@/constant/layout";
import { useTheme } from "@/hooks/use-theme";
import { Car } from "@/types/car.type";
import { ThemeType } from "@/types/theme-types";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { carModels } from "@/mock/car-models";
interface ModelCardProps {
    model: Car;
}
export default function CarDetailsPage() {
    const {id} = useLocalSearchParams();
    const car = carModels.find(car => car.id === id)
    console.log(id);
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    const { top } = useSafeAreaInsets();

    if(!car){
        return <Text>Car not found</Text>
    }
    return (
        <View style={styles.contentContainer}>
        <Image source={{ uri: car.image }} style={styles.modelCardImage} />
        <View style={[styles.container, { paddingTop: top + 16 }]}>
            
            <Text style={styles.carName}>{car.brand} {car.model}</Text>
            <View style={styles.container2}>
                <View style={styles.CarParameter}></View>
                <View style={styles.CarParameter}></View>
                <View style={styles.CarParameter}></View>
                <View style={styles.CarParameter}></View>
                <View style={styles.CarParameter}></View>
                <View style={styles.CarParameter}></View>
            </View>


        </View>
    </View>
    )
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    modelCardImage: {
    },
    container: {
        backgroundColor: "#000000",
        flexDirection: "column",
        marginTop: 'auto', 
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 16, 
    },
    carName: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
    },
    container2: {
        flexDirection: "row",
        flexWrap: "wrap", 
        justifyContent: "space-between", 
        width: "100%",
    },
    CarParameter: {
        backgroundColor: "rgb(38, 38, 38)",
        width: "31%", 
        height: 120,
        borderWidth: 1,
        borderColor: "rgb(50, 50, 50)",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12, 
        padding: 10,
    },
});