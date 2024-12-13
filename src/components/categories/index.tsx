import { FlatList } from "react-native";

import { styles } from "./styles"
import { categories } from  "@/src/utils/categories";
import { Category } from "@/src/components/category";

type Props = {
    selected: string
    onChange: (category: string) => void
  }

export function Categories(){
    return(
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Category name={item.name} icon={item.icon} isSelected={false}/>
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    
    )
}