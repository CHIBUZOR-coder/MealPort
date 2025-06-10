import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { themeColors } from "@/theme";
import { Path } from "react-native-svg";
import * as Icon from "react-native-feather";
import { useRouter } from "expo-router";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import { ScrollView } from "react-native-virtualized-view";


const DeliveryDetails = () => {
  const [activeInfo, setActiveInfo] = useState("user");

  useEffect(() => {
    console.log("act:", activeInfo);
  }, [activeInfo]);

  const date = new Date();
  const router = useRouter();
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className=" flex-1 px-4 pt-16 bg-primary "
    >
      <View className="flex flex-row items-center justify-between w-full">
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          onPress={() => {
            router.push({
              pathname: "/DashIndex",
              params: { refresh: Date.now().toString() }, // unique param to force re-render
            });
          }}
          className="z-10 p-2 rounded-full shadow-lg "
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-500 ">
          DeliveryDetails
        </Text>
      </View>

      <View
        style={{ ...styles.shadow }}
        className=" mt-8 bg-white rounded-md p-4 w-full flex gap-8"
      >
        <View>
          <View className="flex flex-row justify-between  items-center w-full  ">
            <View className="flex flex-row gap-2 items-center w-1/2 ">
              <View>
                <Icon.List stroke={themeColors.bgColor(1)} />
              </View>

              <Text
                style={{ color: themeColors.bgColor(1) }}
                className=" font-semibold"
              >
                Order: #453
              </Text>
            </View>
            <Text
              style={[
                { ...styles.font },
                {
                  backgroundColor: themeColors.bgColor(1),
                  padding: 5,
                  color: "white",
                },
              ]}
              className="rounded-lg "
            >
              Successful
            </Text>
          </View>

          <Text style={[{ ...styles.font }]} className="text-gray-500 text-sm ">
            {date.toDateString()}
          </Text>
        </View>

        <View className="flex flex-row justify-between  w-full  ">
          <View className="f   ">
            <Text
              style={[{ ...styles.font }]}
              className=" text-lg  font-semibold"
            >
              X2 Chicken Noggots
            </Text>
            <Text
              style={[{ ...styles.font }]}
              className=" text-sm text-gray-500 "
            >
              cash on delivery
            </Text>
          </View>
          <Text
            style={[{ ...styles.font }, { color: themeColors.bgColor(1) }]}
            className="font-bold"
          >
            $105
          </Text>
        </View>
      </View>

      <ScrollView style={{ height: 500 }} className=" w-full mt-4">
        <View className="flex flex-row justify-center items-center gap-8 mt-8 ">
          <Pressable
            onPress={() => {
              setActiveInfo("user");
            }}
            className={` text-gray-400 text-sm`}
          >
            <Text
              style={[
                { fontSize: 14 },
                activeInfo === "user"
                  ? {
                      color: "blue",
                      borderBottomColor: "blue",
                      borderBottomWidth: 1,
                    }
                  : { color: "gray" },
              ]}
            >
              Customer Details
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setActiveInfo("store");
            }}
            className={` text-gray-400 text-sm`}
          >
            <Text
              style={[
                { fontSize: 14 },

                activeInfo === "store"
                  ? {
                      color: "blue",
                      borderBottomColor: "blue",
                      borderBottomWidth: 1,
                    }
                  : { color: "gray" },
              ]}
            >
              Store Information
            </Text>
          </Pressable>
        </View>

        <View className="mt-4">
          {activeInfo === "user" ? (
            <View
              style={[{ ...styles.shadow }]}
              className="bg-white rounded-md p-4  w-full flex gap-6"
            >
              <View className=" flex flex-row justify-between items-center w-full">
                <View>
                  <Text style={[{ ...styles.font }]} className="text-gray-400">
                    Full Name
                  </Text>
                  <Text
                    style={[{ ...styles.font }]}
                    className="font-semibold w-[90%] "
                  >
                    Emekalam Chibuzor Chinwendu
                  </Text>
                </View>

                <View
                  style={
                    ([styles.shadow],
                    { backgroundColor: themeColors.bgColor(1) })
                  }
                  className="rounded-full h-12 w-12 flex justify-center items-center"
                >
                  <Icon.User stroke={"white"} height={25} width={25} />
                </View>
              </View>

              <View className="bg-gray-400 h-px w-full my-2"></View>

              <View className=" flex flex-row justify-between items-center w-full">
                <View>
                  <Text className="text-gray-400">Phone Number</Text>
                  <Text className="font-semibold text-lg">+943368982914</Text>
                </View>

                <View
                  style={
                    ([styles.shadow],
                    { backgroundColor: themeColors.bgColor(1) })
                  }
                  className="rounded-full h-12 w-12 flex justify-center items-center"
                >
                  <Icon.Phone stroke={"white"} height={25} width={25} />
                </View>
              </View>

              <View className="bg-gray-400 h-px w-full my-2"></View>
              <View className=" flex flex-row justify-between items-center w-full">
                <View>
                  <Text style={[{ ...styles.font }]} className="text-gray-400">
                    Delivery Adress
                  </Text>
                  <Text
                    style={[{ ...styles.font }]}
                    className="font-semibold w-[90%] storDetals"
                  >
                    Lakhindra Sharma
                  </Text>
                  <Text
                    style={[{ ...styles.font }]}
                    className="font-semibold w-3/4 storDetals"
                  >
                    1041 Brunswick Harbor, Schaum
                  </Text>
                  <Text className="font-semibold text-lg w-[90%] storDetals">
                    burg, IL 60193, USA
                  </Text>
                </View>

                <View
                  style={
                    ([styles.shadow],
                    { backgroundColor: themeColors.bgColor(1) })
                  }
                  className="rounded-full h-12 w-12 flex justify-center items-center"
                >
                  <Icon.MapPin stroke={"white"} height={25} width={25} />
                </View>
              </View>
            </View>
          ) : (
            <>
              <View
                style={[{ ...styles.shadow }]}
                className="bg-white rounded-md p-4 w-full flex gap-6"
              >
                <View className=" flex flex-row justify-between items-center w-full">
                  <View>
                    <Text
                      style={[{ ...styles.font }]}
                      className="text-gray-400"
                    >
                      Store Name
                    </Text>
                    <Text
                      style={[{ ...styles.font }]}
                      className="font-semibold w-[90%]"
                    >
                      Mcdonals
                    </Text>
                  </View>

                  <View
                    style={
                      ([styles.shadow],
                      { backgroundColor: themeColors.bgColor(1) })
                    }
                    className="rounded-full h-12 w-12 flex justify-center items-center"
                  >
                    <Icon.Archive stroke={"white"} height={25} width={25} />
                  </View>
                </View>

                <View className="bg-gray-400 h-px w-full my-2"></View>

                <View className=" flex flex-row justify-between items-center w-full">
                  <View>
                    <Text className="text-gray-400">Store Phone</Text>
                    <Text className="font-semibold text-lg">+943368982914</Text>
                  </View>

                  <View
                    style={
                      ([styles.shadow],
                      { backgroundColor: themeColors.bgColor(1) })
                    }
                    className="rounded-full h-12 w-12 flex justify-center items-center"
                  >
                    <Icon.Phone stroke={"white"} height={25} width={25} />
                  </View>
                </View>

                <View className="bg-gray-400 h-px w-full my-2"></View>
                <View className=" flex flex-row justify-between items-center w-full">
                  <View>
                    <Text
                      style={[{ ...styles.font }]}
                      className="text-gray-400"
                    >
                      Store Adress
                    </Text>
                    <Text
                      style={[{ ...styles.font }]}
                      className="font-semibold w-3/4  storDetals"
                    >
                      Lakhindra Sharma
                    </Text>
                    <Text
                      style={[{ ...styles.font }]}
                      className="font-semibold w-3/4 storDetals"
                    >
                      1041 Brunswick Harbor, Schaum
                    </Text>
                    <Text className="font-semibold text-lg w-3/4 storDetals">
                      burg, IL 60193, USA
                    </Text>
                  </View>

                  <View
                    style={
                      ([styles.shadow],
                      { backgroundColor: themeColors.bgColor(1) })
                    }
                    className="rounded-full h-12 w-12 flex justify-center items-center"
                  >
                    <Icon.MapPin stroke={"white"} height={25} width={25} />
                  </View>
                </View>
              </View>
            </>
          )}
        </View>

        <View
          style={[
            { ...styles.shadow },
            {
              marginTop: 50,
            },
          ]}
          className="bg-white rounded-md p-4 w-full flex gap-3 my-4 "
        >
          <View className=" flex flex-row justify-between items-center w-full">
            <View>
              <Text className="text-gray-400">Delivery fee</Text>
            </View>

            <View>
              <Text className="font-semibold text-lg">$10</Text>
            </View>
          </View>
          <View className=" flex flex-row justify-between items-center w-full">
            <View>
              <Text className="text-gray-400">Taxa(Vat)</Text>
            </View>

            <View>
              <Text className="font-semibold text-lg">$4.5</Text>
            </View>
          </View>
          <View className=" flex flex-row justify-between items-center w-full">
            <View>
              <Text className="font-semibold text-lg">Total Payment</Text>
            </View>

            <View>
              <Text
                style={{ color: themeColors.bgColor(1) }}
                className="font-semibold text-lg"
              >
                $14.5
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="rounded-md  p-2 flex justify-center items-center"
          >
            <Text className="text-lg text-white font-semibold">
              Mark Delivered
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryDetails;

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
  status: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  font: {
    fontFamily: "Poppins_400Regular",
    // fontSize: 16,
  },
});
