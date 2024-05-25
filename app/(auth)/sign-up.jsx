import { View, Text, ScrollView, Image, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full justify-center min-h-[80vh]
        px-4 my-6"
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]
            "
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            LOGIN TO AURO
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <Button
            onPress={() => router.push("/sign-in")}
            style={{ fontSize: 20, color: "#FF9C01" }}
            styleDisabled={{ color: "red" }}
            title="Sign Up"
          />

          <View className="justify-center pt-5 flex-row gap-2"></View>
          <Text className="text-lg text-gray-100 font-pregular">
            Have an account already ?
          </Text>
          <Link
            href="/sign-in"
            className="text-lg font-psemibold text-secondary"
          >
            Sign In
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
