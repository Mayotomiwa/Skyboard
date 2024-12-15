import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CelebrityPrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Odio eu feugiat pretium nibh ipsum consequat nisl. Tempus quam
        pellentesque nec nam aliquam sem et tortor consequat. Elit eget gravida
        cum sociis natoque penatibus. Sed elementum tempus egestas sed sed
        risus. Id interdum velit laoreet id donec ultrices. Fermentum leo vel
        orci porta non pulvinar neque laoreet. In mollis nunc sed id semper
        risus in hendrerit gravida. Venenatis lectus magna fringilla urna
        porttitor rhoncus dolor purus. Erat nam at lectus urna duis convallis
        convallis. Interdum velit laoreet id donec ultrices tincidunt arcu. Sit
        amet venenatis urna cursus eget nunc scelerisque viverra. Purus in massa
        tempor nec feugiat. Hendrerit gravida rutrum quisque non tellus orci ac
        auctor augue. Aenean vel elit scelerisque mauris pellentesque.
      </Text>
      <Text style={styles.text}>
        Odio eu feugiat pretium nibh ipsum consequat nisl. Tempus quam
        pellentesque nec nam aliquam sem et tortor consequat. Elit eget gravida
        cum sociis natoque penatibus. Sed elementum tempus egestas sed sed
        risus. Id interdum velit laoreet id donec ultrices. Fermentum leo vel
        orci porta non pulvinar neque laoreet. In mollis nunc sed id.
      </Text>
    </View>
  );
};

export default CelebrityPrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130828",
    padding: 20,
    marginTop: 50,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 18,
  },
});
