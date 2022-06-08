import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Typography, Button, ScoreCard, Card, WinModal } from "../components";
import { sizes } from "../theme";
import { shuffleCards } from "../utils/card";
import { Cards, CardsType } from "../constants/cards";

export const PlayScreen: React.FC<{
  navigation: StackNavigationProp<{}>;
}> = ({ navigation }) => {
  const [cards, setCards] = React.useState<CardsType[]>([]);
  const [attempts, setAttempts] = React.useState(0);
  const [matches, setMatches] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState<CardsType | null>(null);
  const [choiceTwo, setChoiceTwo] = React.useState<CardsType | null>(null);

  React.useEffect(() => {
    const shuffled = shuffleCards(Cards);
    setCards(shuffled);
  }, []);

  React.useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.label === choiceTwo.label) {
        setCards((prev) =>
          prev.map((card) => {
            return card.label === choiceTwo.label
              ? { ...card, matched: true }
              : card;
          })
        );
        setMatches((prev) => prev + 1);
        resetChoice();
      } else {
        setTimeout(() => resetChoice(), 500);
      }
    }
  }, [choiceTwo]);

  const setChoice = (card: CardsType) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetChoice = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setAttempts((prev) => prev + 1);
  };

  const resetGame = () => {
    resetChoice();
    setMatches(0);
    setAttempts(0);
    setCards((prev) => prev.map((item) => ({ ...item, matched: false })));
  };

  return (
    <SafeAreaView style={styles.container}>
      {matches === Cards.length && (
        <WinModal
          attempts={attempts}
          matches={matches}
          resetGame={resetGame}
          navigation={navigation}
        />
      )}
      <View style={styles.board}>
        <View style={styles.header}>
          <ScoreCard label="Attempts" value={attempts} />
          <Typography style={{ fontSize: sizes.h1 }}>Play</Typography>
          <ScoreCard label="Matches" value={matches} />
        </View>
        <FlatList
          data={cards}
          renderItem={({ item }) => (
            <Card
              card={item}
              handleChoice={setChoice}
              flipped={
                choiceOne?.id === item.id ||
                choiceTwo?.id === item.id ||
                item.matched
              }
            />
          )}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
        <View style={styles.header}>
          <Button
            label="MENU"
            onPress={() => navigation.goBack()}
            variant="filled"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    flex: 1,
    width: "100%",
    position: "relative",
  },

  board: {
    alignItems: "center",
  },
  header: {
    padding: sizes.base,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
