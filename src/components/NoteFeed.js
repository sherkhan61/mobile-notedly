import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Note from './Note';

const notes = [
  { id: 0, content: 'Giant Steps' },
  { id: 1, content: 'Tomorrow is the question' },
  { id: 2, content: 'Tonight at noon' },
  { id: 3, content: 'Out to lunch' },
  { id: 4, content: 'Green street' },
  { id: 5, content: 'In a silent way' },
  { id: 6, content: 'Lanquidity' },
  { id: 7, content: 'Nuff Said' },
  { id: 8, content: 'Nova' },
  { id: 9, content: 'The awakening' }
];


const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

const NoteFeed = props => {
  return (
    <View>
      <FlatList data={props.notes}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator/>}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() =>
                    props.navigation.navigate('Note', {
                      id: item.id
                    })
                  }>
                    <FeedView>
                      <Note note={item}/>
                    </FeedView>
                  </TouchableOpacity>
                )}/>
    </View>
  );
};

export default NoteFeed;