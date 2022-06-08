import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";

import { sizes } from "../theme";
import { Button, Typography } from ".";

interface WinModalProps {
  matches: number;
  attempts: number;
  navigation: StackNavigationProp<{}>;
  resetGame(): void;
}

export const WinModal: React.FC<WinModalProps> = ({
  matches,
  attempts,
  navigation,
  resetGame,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Typography style={styles.title}>GAME OVER</Typography>
        <Typography style={styles.content}>
          {matches} matches in {attempts} attempts
        </Typography>
        <View style={styles.buttons}>
          <Button
            variant="default"
            onPress={() => navigation.goBack()}
            label="EXIT"
          />
          <Button variant="filled" onPress={() => resetGame()} label="RETRY" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#ffffffbf",
    flex: 1,
    top: 10,
    width: "100%",
    height: "100%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: sizes.padding,
    borderRadius: sizes.radius,
  },
  title: { fontSize: sizes.h1, textAlign: "center" },
  content: { fontSize: sizes.h3, textAlign: "center" },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
});
