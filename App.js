// https://example-chefshare-bucket.s3.us-east-2.amazonaws.com/public/sushi-2853382.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCMp4z77c9bXWE0MArr1Rf8lJyK7zaETZy%2BSXpST5nZjwIhALt0j7H2uG0Y%2FXhHjs%2FkYQADmIKjnEaDW9DGF%2B6%2BkXb9KvYCCGkQABoMMjg2NDQ2NDM3ODU0Igx9%2BXtRhD%2B92Uydbq0q0wJh2hVeoAQoQMsX4SvOGa2z9AvniRsjbZdhl2WbLcZw0fYD2h%2BhS8ZQNoYxcyFCfVWxcbhY5h3kACipowcmXWAUKnVsYbjjP%2BWYT7x0QC80y%2FYckIWqr8dAd81nH5NF5kjcs%2BKYgdmEcu6nrRlgJLQp1g46w1UEdiqt71QL2ZaRHydiv6HLfd67g8UXcPzSb%2BGGmukblMLBHRJy%2FKJdlPwgZvbxI2vZWaTTQkh2KDcnY%2FAxs55nrnWSeeT9aQMrfOaAaFc32x7R%2Fl6VrxeGUhp5R2gAvZ%2FMTqVf2GOHTaNWc%2BNtexRu%2FRuI4xSMCegSZqoqlNCO8ZqRw4I78SwXWbtlhHAMqr%2Beul6RurBhR2m%2Bs8KN9otCCDfsPAxHJKlCuZ6%2BT4tm7ypgIHy9LAqPSacRyksfQNPK7hZogb83JPV1LljADZn%2Fw0dVYYnCBhfagbZheSAwn%2FivjQY6sgJpc8f8Uev9y%2FjV9MSlTtmrgjCExqCjiY5yJfidNkQMLlOPZyei4WjBheVRN3hqEFcLHDLdikmrZqfiOB0skOhYH7dYBJD5xNMt8fkjZEwp7qc%2FVGE%2FOkpvZpxEtz0lD7rt%2Fpp1D5rO2zE7t8xfTaEGR7haIOvqqQ6WT6dDAK9O23JWd1Q7ftxGCP0dmW%2FYP724bNZbwStJfoxoEJDw1qv05v6v4olqdKO%2FquZJklyxbiznmZlGugmN0R4D5vEjxSKRhbMek69z7GlHMMKUu0NtSWkXom5VqIMJxU5p%2BipUcidT0CV5mi3WvgRehi47Y1iRtiEPgmn0OQUZF0faeDc4DpkTHQ4tQNkZZPB8xK%2FkEuB%2BL41Dfglp0GQIgdy9HW%2B6c4HgEYonm%2BrizZ5jyl%2BOZbI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211205T063826Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUFMMJYXPPAPLFUF6%2F20211205%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=aebea9bd5118df222be636b237ac8add58781fba1c55f0f0e1ddd59264e52c91
// http://financelystaging-env.eba-ppbpqmef.us-east-2.elasticbeanstalk.com/recipeshttp://financelystaging-env.eba-ppbpqmef.us-east-2.elasticbeanstalk.com/recipes
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import BigList from 'react-native-big-list';

import axios from 'axios';

let keepGoing = true;

// const data = [
//   {label: '1', value: 1 /* ... */},
//   {label: '2', value: 2 /* ... */},
//   {label: '3', value: 3 /* ... */},
//   {label: '4', value: 4 /* ... */},
//   {label: '5', value: 5 /* ... */},
//   /* ... */
// ];

import ListImage from './components/ListImage';

let baseURL =
  'http://financelystaging-env.eba-ppbpqmef.us-east-2.elasticbeanstalk.com';

const fetchAllRecipeCards = ({limit = 20, offset = 0}) =>
  axios({
    baseURL, // 'https://jsonplaceholder.typicode.com',
    url: `recipes?limit=${limit}&offset=${offset}`,
    method: 'GET',
  })
    .then(response => response.data)
    .catch(error => {
      // handle error
      console.log('error', error);
      return {success: false, error};
    });

// 'https://unsplash.it/400/400?image=1'
const Item = ({item, onPress, backgroundColor, textColor}) => {
  let placeholderUrl = `https://unsplash.it/1080?random`; // ?random&rnd${new Date().getTime()}
  const {images = []} = item;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.item,
        width: 200,
        // borderWidth: 1,
        // borderColor: 'gray',
        // borderStyle: 'solid',
      }}
    >
      <ListImage
        style={{
          height: '100%',
          aspectRatio: 1 * 1.4,
          // borderRadius: 9
        }}
        uri={images?.[0]?.url || placeholderUrl}
        resizeMode={FastImage.resizeMode.cover}
      />

      {/*<Text style={[styles.title, textColor]}>{JSON.stringify(item)}</Text>*/}
    </TouchableOpacity>
  );
};

const {height, width} = Dimensions.get('screen');

const App = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [nextOffset, setNextOffset] = useState(0);

  async function fetchData(offset = 0) {
    console.log('keepGoing', keepGoing);
    if (!keepGoing) return;
    // get the resources
    let response = await fetchAllRecipeCards({offset: nextOffset});
    if (response.success && response.data) {
      setData([...data, ...response.data]);
      setNextOffset(response.nextOffset);
    } else keepGoing = false;
  }

  const renderRows = data => {
    // render the flatlist
    if (!data) return;
    console.log(
      'Rendering to flatlist data.process._stopProfilerIdleNotifier();',
      data.length,
    );
    return data;
  };

  useEffect(() => {
    // load resources
    fetchData();
    return () => {
      // effect
    };
  }, []);

  useEffect(() => {
    console.log('nextOffset', nextOffset);
    console.log('keepGoing', keepGoing);
    return () => {
      // effect
    };
  }, [nextOffset, keepGoing]);

  console.log('App rendered with count', count);

  const result = React.useMemo(() => renderRows(data), [data]);

  const renderItem = ({item, index}) => {
    const backgroundColor = index === selectedIndex ? '#6e3b6e' : '#f9c2ff';
    const color = index === selectedIndex ? 'black' : 'dimgray';

    return (
      <Item
        item={item}
        onPress={() => {
          // console.log('item', JSON.stringify(item, null, 2));
          // console.log({index});
          setSelectedIndex(index);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const renderEmpty = () => (
    <View style={{backgroundColor: 'steelblue', flex: 1}} />
  );
  const renderHeader = () => (
    <View style={{backgroundColor: 'coral', flex: 1}}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
  const renderFooter = () => (
    <View
      style={{
        backgroundColor: 'lightblue',
        flex: 1,
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <BigList
        onEndReached={fetchData}
        onEndReachedThreshold={0.4}
        data={data}
        renderItem={renderItem}
        // renderEmpty={renderEmpty}
        // renderHeader={renderHeader}
        // renderFooter={renderFooter}
        itemHeight={180} // Required (default 0)
        headerHeight={180} // Required to show header
        footerHeight={180} // Required to show footer
        extraData={selectedIndex}
        keyExtractor={item => String(item.id)}
        windowSize={1}
        initialNumToRender={6}
        maxToRenderPerBatch={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ecf0f1',
  },
  card: {
    flexDirection: 'row',
  },
  item: {
    // padding: 10,
    marginVertical: 5,
    marginHorizontal: 12,
    // justifyContent: 'space-between',
  },
  title: {
    fontSize: 10,
    color: 'black',
    // textAlign: 'center',
  },
});

export default App;
