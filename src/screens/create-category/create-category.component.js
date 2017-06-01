import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner,

} from 'native-base';

import styles from './create-category.styles';

export default class CreateCategoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    }
  }

  handleFieldOnChange(field, value){
    this.setState({
      [field]: value
    });
  }

  getCategoryData() {
    return {
      name: this.state.name,
      description: this.state.description,
    }
  }


  render() {
    return (
      <Container style={styles.container}>

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Nome'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('name', text)}
            value={this.state.name}
          />
        </Item>

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Descrição'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('description', text)}
            value={this.state.description}

          />
        </Item>

          <View style={{ flex: 1 }}>
            {this.props.category.sendingData ?
              <Spinner />
              :
                <Button warning block style={{ borderRadius: 30}}
                  onPress={() => this.props.createCategory(this.getCategoryData())}
                >
                  <Text>Criar Categoria</Text>
                </Button>
            }

        </View>



      </Container>
    );

  }
}