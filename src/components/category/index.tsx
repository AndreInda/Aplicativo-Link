import { Text, Pressable } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/src/styles/colors"
import { styles } from "@/src/app/Index/styles"

export function Category(){
    return(
        <Pressable style={styles.container}>
            <MaterialIcons name="code" size={16} color={colors.gray[400]}/>
            <Text style={styles.name}>Projetos</Text>
        </Pressable>
    )
}