import { useState } from 'react'
import { View, Image, TouchableOpacity, FlatList, Modal, Text } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import { router } from 'expo-router'    

import { styles } from "./styles"
import { colors } from "../../styles/colors"

import { Link } from "@/src/components/link"
import { Option } from "@/src/components/option"
import { Categories } from "@/src/components/categories"
import { Category } from '@/src/components/category'
import { categories } from '@/src/utils/categories'

export default function Index(){
    const [Category, setCategory] = useState(categories[0].name)
    return (
    <View style = {styles.container}>

        <View style = {styles.header}>
            <Image source={require("@/src/assets/logo.png")} style={styles.logo}/>

            <TouchableOpacity onPress={() => router.navigate("/add")}>
                 <MaterialIcons name="add" size={32} color={colors.green[300]}/>
            </TouchableOpacity>
        </View>
        
        <Categories onChange={setCategory} selected={Category}/>      

       

      <FlatList
      data={["1", "2", "3", "4", "5"]}
      keyExtractor={item => item}
      renderItem={()=> (
        <Link 
        name='Rocketseat'
        url='https://www.rocketseat.com.br/'
        onDetails={() => console.log('Clicou!')}
      />
      )}
      style={styles.links}
      contentContainerStyle={styles.linksContent}
      showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}>Curso</Text>
                        <TouchableOpacity>
                        <MaterialIcons name="close" size={20} color={colors.gray [400]}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.modalLinkName}>
                        Rocketseat
                    </Text>

                    <Text style={styles.modalUrl}>https://www.rocketseat.com.br/</Text>
                    <View style={styles.modalFooter}>
                        <Option name="Excluir" icon="delete" variant="segundary" />
                        <Option name="Abrir" icon="language" />
                    </View>
                </View>

            </View>
      </Modal>
    </View>
    
    )
}

