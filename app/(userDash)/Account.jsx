import {
  Animated,
  StyleSheet,
  Text,
  View,
  Easing,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import * as Icon from "react-native-feather";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { rBar } from "expo-status-bar";
import { themeColors } from "@/theme";
import { useFocusEffect, useRouter } from "expo-router";
import { useSelector } from "react-redux";

const Account = () => {
  const { width } = useWindowDimensions();

  const isExtraSmall = width < 500;
  const isSmall = width >= 500 && width < 768;
  const isMedium = width >= 768 && width < 1001;
  const isLargeScreen = width >= 768 && width < 1001;
  const isExtra = width > 1001;

  const [slideAnim] = useState(new Animated.Value(width));
  const userInfo = useSelector((state) => state?.user?.userInfo);
  const router = useRouter();
  useFocusEffect(
    React.useCallback(() => {
      // Reset animation position
      slideAnim.setValue(width);

      // Start animation
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }, [width])
  );

  return (
    <View>
      {isLargeScreen && isMedium && isExtra ? (
        <Animated.View
          style={{
            padding: 16,
            flex: 1,
            backgroundColor: "rgb(229, 231, 23)",
            position: "relative",
            transform: [{ translateX: slideAnim }],
          }}
        >
          {/* <Text className="text-2xl font-bold">Account</Text> */}
          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>> Parent View */}
          <View className="flex flex-col items-center justify-center w-full gap-12 mt-8">
            {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(AccoutInfo) ********************/}
            <View
              style={{ overflow: "hidden" }}
              className="flex flex-row justify-between w-full p-4 overflow-hidden bg-white rounded-md shadow-md item-center"
            >
              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>> subChild(user icon) */}
              <View
                // style={{ borderRadius: '100%', height: 20, width: 20 }}
                className={`bg-person relative rounded-full  p-6 self-start`}
              >
                {userInfo?.image ? (
                  <Image
                    style={{ height: 30, width: 30, resizeMode: "cover" }}
                    source={{ uri: userInfo?.image }}
                  />
                ) : (
                  <Icon.User
                    height={"20"}
                    width={"20"}
                    strokeWidth={2.5}
                    stroke={"white"}
                  />
                )}
              </View>
              {/* Done */}

              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>>> subChild(name/email) */}
              <View className="flex flex-col justify-center item-center">
                <Text className="text-lg font-semibold">
                  Hi, {userInfo?.firstname} {userInfo?.lastname}
                </Text>
                <Text className="text-gray-500 text-small">
                  {userInfo?.email}
                </Text>
              </View>
              {/* Done */}

              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>> subChild( logout) */}
              <View
                // style={{ borderRadius: '100%', height: 20, width: 20 }}
                className="flex flex-row items-center self-center justify-between "
              >
                <Icon.LogOut
                  height={"35"}
                  width={"35"}
                  strokeWidth={2.5}
                  stroke={"rgba(107, 114, 128, .5)"}
                />
              </View>
              {/* Done */}
            </View>
            {/* Done */}

            {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(Edit Information) ********************/}
            <View className="flex flex-col w-full ">
              <View
                style={{ paddingVertical: 5, paddingHorizontal: 20 }}
                className="w-full p-4 "
              >
                <Text className="my-2 text-lg font-semibold text-gray-500">
                  Edit Information
                </Text>
              </View>
              <View className="flex flex-row justify-between w-full p-4 bg-white rounded-md shade">
                <Text className="text-lg font-bold">Edit Account</Text>

                <Pressable
                  style={{ backgroundColor: "red" }}
                  className="bg-red-500"
                  onPress={() => {
                    router.push({
                      pathname: "/EditAccount",
                    });
                  }}
                >
                  <Icon.ChevronRight
                    stroke={"rgba(107, 114, 128, .5)"}
                    strokeWidth={4}
                  />
                </Pressable>
              </View>
            </View>
            <View className="flex flex-col w-full ">
              <View
                style={{ paddingVertical: 5, paddingHorizontal: 20 }}
                className="w-full p-4 "
              >
                <Text className="my-2 text-lg font-semibold text-gray-500">
                  More Settings
                </Text>
              </View>
              <View className="flex flex-col gap-[2px] justify-center items-center w-full shade">
                <View className="flex flex-row justify-between w-full p-4 bg-white rounded-tr-md rounded-tl-md">
                  <View className="flex flex-row items-center justify-center gap-4">
                    <Icon.Sun
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={2.5}
                    />
                    <Text className="text-lg font-bold">Light</Text>
                  </View>

                  <View>
                    <Icon.ToggleRight
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={2.5}
                      height={"60"}
                      width={"60"}
                    />
                  </View>
                </View>
                <View className="flex flex-row justify-between w-full p-4 bg-white rounded-br-md rounded-bl-md">
                  <View className="flex flex-row items-center justify-center gap-4">
                    <Icon.Globe
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={2.5}
                    />
                    <Text className="text-lg font-bold">Language</Text>
                  </View>

                  <View>
                    <Icon.ChevronRight
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={4}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Done */}

          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(buttom icons) ********************/}
        </Animated.View>
      ) : (
        <Animated.View
          style={{
            // flex: 1,
            padding: 10,
            backgroundColor: "rgb(229, 231, 235)",
            position: "relative",
            transform: [{ translateX: slideAnim }],
          }}
        >
          <Text className="text-2xl font-bold">Accounttt</Text>
          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>> Parent View */}
          <View className="flex flex-col items-center justify-center w-full gap-12 mt-8">
            {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(AccoutInfo) ********************/}
            <View
              style={{ overflow: "hidden", ...styles.shadow }}
              className="flex flex-row justify-between w-full p-4 overflow-hidden bg-white rounded-md  item-center"
            >
              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>> subChild(user icon) */}
              <View
                // style={{ borderRadius: '100%', height: 20, width: 20 }}
                className={`bg-person relative rounded-full  p-2 self-start`}
              >
                {userInfo?.image ? (
                  <Image
                    style={{ height: 45, width: 45, resizeMode: "cover" }}
                    source={{ uri: userInfo?.image }}
                  />
                ) : (
                  <Icon.User
                    height={"35"}
                    width={"35"}
                    strokeWidth={2.5}
                    stroke={"white"}
                  />
                )}
              </View>
              {/* Done */}

              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>>> subChild(name/email) */}
              <View className="flex flex-col justify-center item-center">
                <Text className="text-lg font-semibold">
                  Hi, {userInfo?.firstname || "Chibuzor"}{" "}
                  {userInfo?.lastname || "Emekalam"}
                </Text>
                <Text className="text-gray-500 text-small">
                  {userInfo?.email || "chibuzormekalam@gmail.com"}
                </Text>
              </View>
              {/* Done */}

              {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>> subChild( logout) */}
              <View
                // style={{ borderRadius: '100%', height: 20, width: 20 }}
                className="flex flex-row items-center self-center justify-between "
              >
                <Icon.LogOut
                  height={"25"}
                  width={"25"}
                  strokeWidth={2.5}
                  stroke={"rgba(107, 114, 128, .5)"}
                />
              </View>
              {/* Done */}
            </View>
            {/* Done */}

            {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(Edit Information) ********************/}
            <View className="flex flex-col w-full ">
              <View
                style={{ paddingVertical: 5, paddingHorizontal: 20 }}
                className="w-full p-4 "
              >
                <Text className="my-2 text-lg font-semibold text-gray-500">
                  Edit Information
                </Text>
              </View>
              <View
                style={{ ...styles.shadow }}
                className="flex flex-row justify-between w-full p-4 bg-white rounded-md shade"
              >
                <Text className="text-lg font-bold">Edit Account</Text>

                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: "/EditAccount",
                    });
                  }}
                >
                  <Icon.ChevronRight
                    stroke={"rgba(107, 114, 128, .5)"}
                    strokeWidth={4}
                  />
                </Pressable>
              </View>
            </View>
            <View className="flex flex-col w-full ">
              <View
                style={{ paddingVertical: 5, paddingHorizontal: 20 }}
                className="w-full p-4 "
              >
                <Text className="my-2 text-lg font-semibold text-gray-500">
                  More Settings
                </Text>
              </View>
              <View className="flex flex-col gap-[2px] justify-center items-center w-full shade">
                <View
                  style={{ ...styles.topShadow }}
                  className="flex flex-row justify-between w-full p-4 bg-white rounded-tr-md rounded-tl-md"
                >
                  <View className="flex flex-row items-center justify-center gap-4">
                    <Icon.Sun
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={2.5}
                    />
                    <Text className="text-lg font-bold">Light</Text>
                  </View>

                  <View>
                    <Icon.ToggleRight
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={2.5}
                      height={"60"}
                      width={"60"}
                    />
                  </View>
                </View>
                <View
                  style={{ ...styles.bottomShadow }}
                  className="flex flex-row justify-between w-full p-4 bg-white rounded-br-md rounded-bl-md"
                >
                  <View className="flex flex-row items-center justify-center gap-4">
                    <Icon.Globe
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={2.5}
                    />
                    <Text className="text-lg font-bold">Language</Text>
                  </View>

                  <View>
                    <Icon.ChevronRight
                      stroke={"rgba(107, 114, 128, .5)"}
                      strokeWidth={4}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Done */}

          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh>>  child(buttom icons) ********************/}
        </Animated.View>
      )}
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 }, // Negative height pushes shadow up
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Required for Android, but affects all sides
    backgroundColor: "white", // Needed to visualize the shadow properly
  },
  bottomShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 }, // Negative height pushes shadow up
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Required for Android, but affects all sides
    backgroundColor: "white", // Needed to visualize the shadow properly
  },
});
