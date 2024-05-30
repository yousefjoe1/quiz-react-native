import { Link, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <View>
        <Text>Home from tabs</Text>
        <Link href={`/`}>Go to Home Link</Link>
      </View>
    </SafeAreaView>
//     <Tabs.Screen
//   name="index"
//   options={{
//     title: 'Home',
//     tabBarIcon: ({ color, focused }) => (
//       <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//     ),
//   }}
// />
  );
}

{
  /* <Tabs
screenOptions={{
  tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
  headerShown: false,
}}>
<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
    ),
  }}
/>
</Tabs> */
}
