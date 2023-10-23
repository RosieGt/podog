//import React, {useState } from 'react';
 //   import { View, Text, Image, StyleSheet } from 'react-native';

   // export default props => {
   //     const [podoguia, setPodogos] = useState({})
    //    const { id } = props.route.params

     //   fetch(`https://rosiecruz13.pythonanywhere.com/api/podoguia/${id}`)
     //           .then(data => data.json())
     //           .then(json => setPodogos(json.results))
     //           .catch(error => console.warn(error))
        
       // return (
        //    <View style={styles.container}>
         //   <View style={styles.avatarContainer}>
       //         <Image
       //         source={{ uri: podoguia.avatar  }}
        //        style={styles.avatar} />
        //        <Text style={styles.name}>{this.props.data.nome}</Text>
         //   </View>
         //   <View style={styles.infoContainer}>
         //       <Text style={styles.infoLabel}>Email:</Text>
         //       <Text style={styles.infoValue}>{this.props.data.email}</Text>
         //   </View>
         //   <View style={styles.infoContainer}>
         //       <Text style={styles.infoLabel}>Endereco:</Text>
         //       <Text style={styles.infoValue}>{this.props.data.endereco}</Text>
        //    </View>
         //   <View style={styles.infoContainer}>
        //        <Text style={styles.infoLabel}>Bio:</Text>
        //        <Text style={styles.infoValue}>{this.props.data.info}</Text>
        //    </View>
        //    </View>
     //   );
      //  };

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
        },
        avatarContainer: {
            alignItems: 'center',
            marginTop: 20,
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
        },
        name: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
        },
        infoContainer: {
            marginTop: 20,
        },
        infoLabel: {
            fontWeight: 'bold',
        },
        infoValue: {
            marginTop: 5,
        },
        });

                                        