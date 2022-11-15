import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRecoilState } from "recoil";
import { pageNumberState } from "../states/pageNumberState";
import { sortState } from "../states/sortState";
import { containers } from "../styles/containers";
import { wrappers } from "../styles/containers";
import { text } from "../styles/theme";

const data = [
  { label: "From least to most likes", value: "asc" },
  { label: "From most to least likes", value: "desc" },
];

const DropdownComponent = () => {
  const [sort, setSort] = useRecoilState(sortState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);

  return (
    <View>
      <View style={containers.sortContainer}>
        <Text style={text.label}>Sort stories</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          // maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select sorting order"
          value={sort}
          onChange={(item) => {
            setPageNumber(1);
            setSort(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="white"
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginLeft: 10,
    marginRight: 10,

    padding: 5,
    // height: 50,
    // width: "100%",
    borderColor: "white",
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
