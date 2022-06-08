import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { CardsType } from "../constants/cards";
import { colors, sizes } from "../theme";
import { Typography } from ".";

interface CardProps {
  card: CardsType;
  style?: StyleProp<ViewStyle>;
  handleChoice(card: CardsType): void;
  flipped: boolean;
}

interface ScoreCardProps {
  label: string;
  value: number;
}

export const Card: React.FC<CardProps> = ({
  card,
  style,
  handleChoice,
  flipped,
}) => {
  return (
    <View style={[style, styles.container]}>
      {flipped ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            padding: sizes.padding,
            backfaceVisibility: "hidden",
          }}
        >
          <Typography
            style={{
              fontSize: sizes.h1,
              textAlign: "center",
              fontWeight: "bold",
              color: colors.persianRose,
            }}
          >
            {card.label}
          </Typography>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            backgroundColor: colors.redVioletCrayola,
            padding: sizes.padding,
          }}
          onPress={() => handleChoice(card)}
        >
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.persianRose,
              fontSize: sizes.h1,
            }}
          >
            *
          </Typography>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const ScoreCard: React.FC<ScoreCardProps> = ({ label, value }) => {
  return (
    <View style={scoreCardStyles.container}>
      <Typography style={scoreCardStyles.label}>{label}</Typography>
      <Typography style={scoreCardStyles.value}>{value}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.persianRose,
    height: 100,
    width: 70,
  },
});

const scoreCardStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: { fontSize: sizes.title },
  value: { fontSize: sizes.h2 },
});
