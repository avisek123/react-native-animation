import React, {useState, useEffect} from 'react';
import {TextInput, FlatList, Text, View} from 'react-native';

const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 2000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);
  console.log('debouncedSearchTerm', debouncedSearchTerm);
  const fetchSearchResults = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://demo.dataverse.org/api/search?q=${debouncedSearchTerm}`,
      );
      const data = await response.json();
      console.log('dat', data?.results);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const renderItem = ({item}: any) => <Text>{item.title}</Text>;

  return (
    <View
      style={{
        flex: 1,
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search"
        onSubmitEditing={fetchSearchResults}
      />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList data={searchResults} renderItem={renderItem} />
      )}
    </View>
  );
};
export default App;
