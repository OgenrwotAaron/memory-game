import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../components/typography";
import { sizes } from "../theme";
import { StyleSheet, View } from "react-native";

export const PlayScreen: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/**
       * attempts
       * matches complete
       * menu
       * list of cards
       */}
      <Typography variant="Regular">Play</Typography>
      <View style={styles.board}></View>
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
  board: {
    flex: 1,
  },
});
