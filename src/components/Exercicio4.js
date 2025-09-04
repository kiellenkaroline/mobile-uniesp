import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const Exercicio4 = () => {
    const times = [
        'Harry Potter e o Cálice de Fogo',
        'Adoraveis Mulheres',
        'Nárnia',
        'Orgulho e Preconceito',
        'Senhor dos Anéis',
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.titulo}>filmes</Text>

                {times.map((time, index) => (
                    <Text key={index} >
                        {time}
                    </Text>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

export default Exercicio4;