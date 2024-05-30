import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import { Video, ResizeMode } from "expo-av";
import { icons } from "../../constants";
const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: " ",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white mt-10">upload video</Text>
        <FormField
          className="rounded-2xl"
          title="video title"
          value={form.title}
          placeholder="give your video a catchy title"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2 ">
          <Text className="text-base text-gray-100">upload video</Text>
        </View>

        <TouchableOpacity>
          {form.video ? (
            <Video
              source={{ uri: form.video.uri }}
              className="w-full h-64"
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
            />
          ) : (
            <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
              <View className=" w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-12 h-1/2"
                ></Image>
              </View>
            </View>
          )}
        </TouchableOpacity>
        <View className="mt-7 space-y-2">
          <Text className="text-2xl text-white  font-pmedium mt-10">
            thumbnail image
          </Text>
          <TouchableOpacity>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View className="w-full h-16 px-4 border-2 border-black-200 flex-row space-x-2 bg-black-100 rounded-2xl justify-center items-center">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-5 h-5"
                ></Image>
                <Text className="text-sm text-gray-100 font-pmedium">
                  choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Button
          // onPress={() => router.push("/home")}
          style={{ fontSize: 20, color: "#FF9C01", marginTop: 30 }}
          // styleDisabled={{ color: "red" }}
          title="submit"
          className="bg-secondary mt-20"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
