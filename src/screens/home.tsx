import * as React from "react";
import { SafeAreaView, StyleSheet, View, BackHandler } from "react-native";

import { Typography, Button } from "../components";
import { navigate } from "../routes/navigator";
import { colors, sizes } from "../theme";

export const HomeScreen: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Typography style={styles.header}>Memory Game</Typography>
      <View style={styles.buttons}>
        <Button
          variant="filled"
          label="PLAY"
          onPress={() => navigate("Play")}
        ></Button>
        <Button
          variant="filled"
          label="EXIT"
          onPress={() => BackHandler.exitApp()}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    padding: sizes.padding,
  },
  header: {
    fontSize: sizes.h1,
    color: colors.redVioletCrayola,
    fontWeight: "bold",
  },
  buttons: {
    width: "100%",
    padding: sizes.padding,
  },
});
