import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      ClassName={`bg-secondary 
    rounded-xl min -h-[62px] justify-center items-center`}
    >
      <Text ClassName="text-primary font-psemibold text-lg">
        {" "}
        CUSTOM BUTTON
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
