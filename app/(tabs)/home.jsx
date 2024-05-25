import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { icons } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // re call videos
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary  min-h-full">
      <FlatList
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-6 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  js mastery
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMethod="contain"
                />
              </View>
            </View>
            <SearchInput />

            {/* Latest videos section */}
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Trending Videos
              </Text>
              <Trending />
            </View>
            <View>
              <ScrollView>
                <Text className="text-gray-100 text-lg font-pregular mb-3">
                  All Videos
                </Text>
                {[
                  images.vr,
                  images.japan,
                  images.newyork,
                  images.imagescreen,
                  images.dog,
                ].map((image, index) => (
                  <View key={index} className="relative mt-10">
                    <Image
                      source={image}
                      className="w-[410px] h-[250px] rounded-3xl mr-12"
                      resizeMethod="contain"
                    />
                    <Image
                      source={icons.play}
                      className="w-12 h-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      resizeMethod="contain"
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
