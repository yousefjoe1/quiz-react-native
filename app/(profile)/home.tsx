import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const router = useRouter();

const navFunc = (to:string) => {
  console.log(to);
  
}

  return (
    <SafeAreaView>
      <View style={styles.welcomeSection}>
        <Image
          source={{
            uri: "https://cdn6.aptoide.com/imgs/7/e/b/7ebb3119aca4ef7bb17542f2ec52679f_icon.png",
          }}
          width={200}
          height={130}
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      {/* btns */}
      <View>
      <TouchableOpacity onPress={()=> navFunc('signUp')} style={styles.loginBtn}>
          <Text style={{ fontSize: 25, color: "black" }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  course: {
    borderRadius: 12,
    backgroundColor: "#E4E4E4",
    padding: 10,
    // width:300,
    height: 180,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  welcomeSection: {
    backgroundColor: "litegray", // Important for background colors to work with gradients
    width: "100%", // Adjust width as needed
    height: 220, // Adjust height as needed
    borderRadius: 50, // Adjust for desired corner rounding
    justifyContent: "space-between", // Center content vertically (optional)
    alignItems: "center", // Center content horizontally (optional)
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 20,
  },
  loginBtn: {
    width: 290,
    backgroundColor: "#436185",
    borderRadius: 25,
    height: 60,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
