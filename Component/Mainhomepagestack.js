import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Animated,Easing } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {
  TouchableOpacity,
  FlatList, ScrollView
} from 'react-native';

export default class Mainhomepagestack extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
      opacity: new Animated.Value(0),
      search: '',
      data: [
        { id: 1, title: "Product 1", price: "$ 25.00 USD", image: "https://www.pinkblueindia.com/pub/media/catalog/product/cache/2260caabcc779615fb72a9c19ad8f7dd/b/l/blush-pink-birthday-party-dress-for-baby-girl-online-shopping.jpg" },
        { id: 2, title: "Product 2", price: "$ 10.13 USD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1x5_ayORmgZFGo7tbjnqUVpuFFQvaaM_iw&usqp=CAU" },
        { id: 3, title: "Product 3", price: "$ 12.12 USD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkM5BIXrjyyGDIGVuncPTNMGKbZUCid7K5qw&usqp=CAU" },
        { id: 4, title: "Product 4", price: "$ 11.00 USD", image: "https://cdnv2.vajor.com/pub/media/catalog/product/cache/b64cfc9c309d113c430214964a975af2/v/j/vj19clrt19aprg.jpg" },
        { id: 5, title: "Product 5", price: "$ 20.00 USD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB1MjN4B-e1OiYgrtvNiXaBavBv5ZW3TkEA&usqp=CAU" },
        { id: 6, title: "Product 6", price: "$ 33.00 USD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfrmWoPR5VNgjP7Xgpt5n9QuTTI1GutnOdg&usqp=CAU" },
        { id: 7, title: "Product 7", price: "$ 20.95 USD", image: "https://assets0.mirraw.com/images/7202850/7267_Mustard_small.jpg?1563103643" },
        { id: 8, title: "Product 8", price: "$ 13.60 USD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCgggZG6HmbUc2ZO_40YrpnarupyymaNH5g&usqp=CAU" },

      ],
     
    };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        delay:900,
        useNativeDriver:false,
       
      }
    ).start(() => this.animate())
  }
  
  render() {
    const { search } = this.state;
    const rotateY = this.animatedValue.interpolate({
      inputRange: [0, 0.5],
      outputRange: ['360deg', '0deg']
    })
  
    return (
      <View style={styles.header}>


        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center', color: 'pink' }}>
        <Animated.View style={{
          transform: [{rotateY}]}}>
            <Text style={{
              fontSize: widthsize * 10 / 100, fontWeight: 'bold', textShadowColor: '#2a98f2',
              textShadowOffset: { width: 1, height: 2 },
              textShadowRadius: 5, color: 'blue'
            }}>
              E-Commerce
                    </Text>
                    </Animated.View>
         
            <Text style={{
              fontSize: widthsize * 3 / 100, fontWeight: 'bold', color: '#2a98f2'
            }}> Welcome to Our Store !</Text>
         
        </View>
        <ScrollView>
          <View style={styles.container}>

            <View style={styles.box}>
              <Image style={styles.profileImage} source={{ uri: 'https://assets0.mirraw.com/images/7202850/7267_Mustard_small.jpg?1563103643' }} />
              <Text style={styles.name}>-For Girls-</Text>
            </View>


            <FlatList style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={this.state.data}
              horizontal={false}
              numColumns={2}
              keyExtractor={(item) => {
                return item.id;
              }}
              ItemSeparatorComponent={() => {
                return (
                  <View style={styles.separator} />
                )
              }}
              renderItem={(post) => {
                const item = post.item;
                return (
                  <View style={styles.card}>

                    <View style={styles.cardHeader}>
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                      </View>
                    </View>

                    <Image style={styles.cardImage} source={{ uri: item.image }} />

                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png' }} />
                            <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/50/000000/hearts.png' }} />
                            <Text style={styles.socialBarLabel}>25</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              }} />
            <View>
              <Text>Thank You !</Text>
            </View>


          </View>
        </ScrollView>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  box: {
    marginTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
    paddingTop: 10
  },
  name: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
  },
  profileImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
    marginBottom: 110
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})