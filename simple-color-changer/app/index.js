import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
// import ColorBox from "../components/Box";
import styles from "../components/Box.style";
import search from "../constants/icons";

const Home = () => {
  const [coloring, setColoring] = useState("#0E9775");

  const [in_text, setIn_text] = useState("");

  const handlePress = () => {
    let value = in_text;
    setIn_text("");
    if (value === "") {
      return;
    }
    setColoring(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: coloring }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fff" },
          headerShadowVisible: false,
          headerTitle: "simple_color_changer?!",
        }}
      />
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Home {coloring}</Text>

        {/* <ColorBox coloring={setColoring} /> */}
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
                placeholder="hex only ✨"
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
        {/* <ColorBox coloring={setColoring} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
