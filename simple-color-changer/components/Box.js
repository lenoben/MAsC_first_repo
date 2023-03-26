import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Box.style";
import { search } from "../constants/icons";

const ColorBox = ({ setColoring }) => {
  const [in_text, setIn_text] = useState("");

  const handlePress = (in_text) => {
    let value = in_text;
    setIn_text("");
    if (value === "") {
      return;
    }
    setColoring(value);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Enter color § 🤗</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={in_text}
            onChangeText={setIn_text}
            placeholder="hex, rgb or colorName? ✨"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handlePress}>
          <Image
            source={search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ColorBox;
