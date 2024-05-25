import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { images } from "../constants"; // Ensure the images are correctly imported
import { icons } from "../constants";
const Trending = ({ posts }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <ImageBackground
        source={item.source}
        className="w-52 h-72 mr-5 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
        resizeMode="cover"
      />
      <Image
        source={icons.play}
        className="w-12 h-12 absolute"
        resizeMethod="contain"
      />
    </TouchableOpacity>
  );

  const data = [
    { id: 1, source: images.imagescreen },
    { id: 2, source: images.vr },
    { id: 3, source: images.dog },
  ];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

export default Trending;
