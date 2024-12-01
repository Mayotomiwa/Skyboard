import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TermsConditionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat
        lacus laoreet non curabitur gravida arcu. Amet nisl purus in mollis nunc
        sed id. Elementum curabitur vitae nunc sed. A pellentesque sit amet
        porttitor eget. Ac turpis egestas integer eget aliquet nibh. Nibh
        praesent tristique magna sit amet purus gravida. Sagittis nisl rhoncus
        mattis rhoncus urna neque viverra. Volutpat sed cras ornare arcu dui
        vivamus arcu felis bibendum.
      </Text>
      <Text style={styles.text}>
        Sagittis vitae et leo duis ut diam. Et pharetra pharetra massa massa.
        Faucibus et molestie ac feugiat. Ac feugiat sed lectus vestibulum.
        Sagittis eu volutpat odio facilisis. Venenatis urna cursus eget nunc
        scelerisque viverra mauris. Facilisi cras fermentum odio eu feugiat
        pretium nibh ipsum consequat. Etiam tempor orci eu lobortis elementum
        nibh. Quis auctor elit sed vulputate mi sit. Quis ipsum suspendisse
        ultrices gravida dictum fusce ut placerat orci. Suspendisse potenti
        nullam ac tortor vitae purus faucibus ornare suspendisse. Lorem sed
        risus ultricies tristiqu.
      </Text>
    </View>
  );
};

export default TermsConditionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 18,
  },
});
