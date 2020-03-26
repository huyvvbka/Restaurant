import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Container, Left, Header, Button, Body, Title, Right, Content, Text, Icon } from "native-base";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default class HomeScreens extends Component {
  constructor(props) {
    super(props);
    this.state= {
      category: [],
    }
  }

  componentDidMount() {

  }

  _renderCategory = (item) => {
    return(
      <View style={styles.categoryItem}>
        <Image style={{width: 80, height: 80, borderRadius: 35}} source={item.source}></Image>
        <Text>{item.name}</Text>
      </View>
    );
  }
  render () {
    return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Image style={styles.image} source={require('../images/menu.png')} />
						</Button>
					</Left>
					<Body>
						<Title>Home</Title>
					</Body>
					<Right>
						<Button transparent>
							<Image style={styles.image} source={require('../images/cart.png')} />
						</Button>
					</Right>
				</Header>
				<Content>
        <ScrollView>
					<Text style={styles.text}>Popular Categories</Text>
					<View style={styles.category}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
            <View style={styles.categoryItem}>
            <Image style={{width: 70, height: 70, borderRadius: 35, marginVertical: 5}} source={require('../images/breakfast.png')}></Image>
            <Text>Breakfast</Text>
            </View>
          </ScrollView>
            {/* <FlatList 
              data={this.state.category}
              renderItem={({ item }) => this._renderCategory(item)}
              keyExtractor={(item) => item.name}>
            </FlatList> */}
					</View>
          </ScrollView>
				</Content>
			</Container>
		);
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    flex: 1/4,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  categoryItem: {
    width: 80,
    height: 80,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 15,
  }
});