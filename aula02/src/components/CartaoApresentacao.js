import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const CartaoApresentacao = () => {
    return (
        <View style={styles.container}>
            {/* Imagem de Perfil */}
            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
                style={styles.imagemPerfil}
            />
            {/* Nome e Descrição */}
            <Text style={styles.nome}>John Doe</Text>
            <Text style={styles.descricao}>Desenvolvedor Mobile / Apaixonado por tecnologia</Text>

            {/* Botões de Contato */}
            <View style={styles.botaoContainer}>
            <TouchableOpacity style={[styles.botao, styles.botaoGithub]}>
                <Text style={styles.textoBotao}>Github</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.botaoLinkedin]}>
                <Text style={styles.textoBotao}>Linkedin</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 28,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,

    },
    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },
    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    botaoGithub:{
        backgroundColor:'#333',
    },
    botaoLinkedin:{
        backgroundColor:'#0077b5'

    },
    textoBotao:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    botaoContainer:{
        flexDirection:'row',
        marginTop:10,
    }

})

export default CartaoApresentacao