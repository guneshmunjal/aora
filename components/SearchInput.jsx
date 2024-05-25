import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="  space-x-4 flex-row items-center focus:border-secondary-100 rounded-5xl border-2 border-black-500 w-full h-16 px-4 bg-black-100">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder="search for a video"
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        {...props}
      />

      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
