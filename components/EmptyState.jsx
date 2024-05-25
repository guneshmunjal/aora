import { View, Text, Image, Button } from "react-native";
import React from "react";

import { images } from "../constants";
const EmptyState = ({ title }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      {/* <Text className="font-pmedium text-sm text-gray-100">{title}</Text> */}

      <Text className="text-2xl font-psemibold text-white">{title}</Text>
      <Button
        // onPress={() => router.push("/home")}
        style={{ fontSize: 20, color: "#FF9C01" }}
        styleDisabled={{ color: "red" }}
        title="create video"
      />
    </View>
  );
};

export default EmptyState;
