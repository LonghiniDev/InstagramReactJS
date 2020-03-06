import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export default class App extends React.Component {
    constructor(propos) {
        super(propos);
        this.state = {
            statusCoracao: false
        };
    }
    renderCoracao() {
        if (this.state.statusCoracao) {
            return <AntDesign name="heart" size={22} color="#ff0000" />;
        } else {
            return <AntDesign name="hearto" size={22} color="#ffffff" />;
        }
    }
    mudeStatusCoracao() {
        this.state({
            statusCoracao: !this.state.statusCoracao
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.fundoEscuro}>
                <ScrollView style={{ height: '100%' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{
                                    width: 44, height: 44, borderRadius: 24, margin: 2,
                                    borderWidth: 2, borderColor: "#e60000"
                                }}
                                source={{
                                    uri:
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbpl192h7_EmuFVA9lnIKyUGagejCiUbfqOeIzdV2oRVvyZPEk',
                                }}
                            />
                            <Image
                                style={{
                                    width: 44, height: 44, borderRadius: 24, margin: 4,
                                    borderWidth: 2, borderColor: "#e60000"
                                }}
                                source={{
                                    uri:
                                        'https://metalinjection.net/wp-content/uploads/2019/10/m4fordrt49o.jpg',
                                }}
                            />
                            <Image
                                style={{
                                    width: 44, height: 44, borderRadius: 24, margin: 4,
                                    borderWidth: 2, borderColor: "#e60000"
                                }}
                                source={{
                                    uri:
                                        'https://2.bp.blogspot.com/-QWuq6irV2Yw/Vk5_6s-bZCI/AAAAAAAAHnE/fWRiAkw4coE/s1600/tosin-abasi-en-chile-770x472.jpg',
                                }}
                            />
                            <Image
                                style={{
                                    width: 44, height: 44, borderRadius: 24, margin: 4,
                                    borderWidth: 2, borderColor: "#b3b3b3"
                                }}
                                source={{
                                    uri:
                                        'https://www.ibanez.com/common/product_artist_file/file/a_main_SteveVai.jpg',
                                }}
                            />
                            <Image
                                style={{
                                    width: 44, height: 44, borderRadius: 24, margin: 4,
                                    borderWidth: 2, borderColor: "#b3b3b3"
                                }}
                                source={{
                                    uri:
                                        'https://lh3.googleusercontent.com/proxy/UUEoqAI_Huoom28zSsf845XCm591aqst0wy0TIJlxHLIZELQnegazEtUj88KO0yCA8_AxFHDwdWOaZTjebv_N7fU1rhR1iovk9GQSMPUyKCItio68_bsKQM',
                                }}
                            />
                            <Image
                                style={{
                                    width: 44, height: 44, borderRadius: 24, margin: 4,
                                    borderWidth: 2, borderColor: "#b3b3b3"
                                }}
                                source={{
                                    uri:
                                        'https://www.spirit-of-metal.com/les%20goupes/J/Jason%20Richardson/pics/8875_2.jpg',
                                }}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 14 }}
                                source={{
                                    uri:
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbpl192h7_EmuFVA9lnIKyUGagejCiUbfqOeIzdV2oRVvyZPEk',
                                }}
                            />
                            <Text style={styles.texto}> Guilherme Longhini</Text>
                        </View>
                        <Entypo name="dots-three-vertical" size={16} color="#f2f2f2" />
                    </View>

                    <View>
                        <Image
                            style={{ width: 320, height: 250 }}
                            source={{
                                uri:
                                    'https://i.ytimg.com/vi/lDJ_4sRAPTY/hqdefault.jpg',
                            }}
                        />
                    </View>

                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                padding: 8,
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onClick={() => this.mudeStatusCoracao()}>
                                    {this.renderCoracao()}
                                </TouchableOpacity>
                                <View style={{ marginLeft: 6 }}>
                                    <AntDesign name="message1" size={20} color="#f2f2f2" />
                                </View>
                                <View style={{ marginLeft: 6 }}>
                                    <Feather name="send" size={20} color="#f2f2f2" />
                                </View>
                            </View>
                            <View style={{ marginLeft: 6 }}>
                                <Feather name="bookmark" size={22} color="#f2f2f2" />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.texto}>
                            Curtido por Renan, Bruna e outras pessoas.
            </Text>
                    </View>
                    <View>
                        <Text style={styles.textoCometario}>
                            Ver todos os 40 Comentários
            </Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', padding: 6 }}>
                            <Image
                                style={{
                                    width: 30, height: 30, borderRadius: 14, marginLeft: 2,
                                    marginRight: 4
                                }}
                                source={{
                                    uri:
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbpl192h7_EmuFVA9lnIKyUGagejCiUbfqOeIzdV2oRVvyZPEk',
                                }}
                            />
                            <Text style={styles.textoCometario}>
                                Adicione um comentário...
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.textoHora}>Há 30 Minutos</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    fundoEscuro: {
        backgroundColor: '#000000',
        flex: 1,
    },
    texto: {
        color: '#ffffff',
        marginLeft: 4,
        marginTop: 4,
    },
    textoHora: {
        color: '#808080',
        fontSize: 10,
        marginLeft: 4,
    },

    textoCometario: {
        color: '#808080',
        fontSize: 14,
        marginLeft: 4,
        marginTop: 4
    },
});
