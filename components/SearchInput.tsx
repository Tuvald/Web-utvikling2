import { TextInput, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { inputState } from "../states/inputState";
import { pageNumberState } from "../states/pageNumberState";
import { styles } from "../styles/SearchInput";

export default function SearchInput() {
  const [input, setInput] = useRecoilState(inputState);
  const [inputText, setInputText] = React.useState<string>("");
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  //handel click on search-button
  const handleOnClick = (ev: any) => {
    setPageNumber(1);
    setInput(inputText);
    //prevent refreash caused by form
  };

  return (
    <View style={styles.parentView}>
      <Text style={styles.label}>Search by title</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(newText) => setInputText(newText)}
        defaultValue={inputText}
        placeholder="Search..."
        placeholderTextColor="lightgray"
      />

      <TouchableOpacity style={styles.searchBtn} onPress={handleOnClick}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
