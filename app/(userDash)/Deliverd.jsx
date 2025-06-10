import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-virtualized-view";
import { themeColors } from "@/theme";
import * as Icon from "react-native-feather";
import { useRouter } from "expo-router";

const Deliverd = () => {
  const delivered = [
    {
      dleveryId: 120,
      quantity: 2,
      name: "Chicken Sausage",
      amount: "20.00",
      paymentType: "Cash on Delivery",
      status: "deliverd",
    },

    {
      dleveryId: 465,
      quantity: 2,
      name: "Grilled Fish",
      amount: "40.00",
      paymentType: "Cash on Delivery",
      status: "pending",
    },
    {
      dleveryId: 247,
      quantity: 1,
      amount: "30.00",
      name: "Veggie Pizza",
      paymentType: "Credit Card",
      status: "deliverd",
    },
    {
      dleveryId: 245,
      quantity: 1,
      amount: "30.00",
      name: "Veggie Pizza",
      paymentType: "Credit Card",
      status: "pending",
    },

    {
      dleveryId: 344,
      quantity: 3,
      amount: "25.00",
      name: "Beef Burger",
      paymentType: "Mobile Payment",
      status: "deliverd",
    },
    {
      dleveryId: 122,
      quantity: 2,
      name: "Chicken Sausage",
      amount: "20.00",
      paymentType: "Cash on Delivery",
      status: "pending",
    },
    {
      dleveryId: 485,
      quantity: 2,
      name: "Grilled Fish",
      amount: "40.00",
      paymentType: "Cash on Delivery",
      status: "deliverd",
    },
    {
      dleveryId: 526,
      quantity: 1,
      amount: "35.00",
      name: "Chocolate Cupcake",
      paymentType: "Credit Card",
      status: "deliverd",
    },
    {
      dleveryId: 321,
      quantity: 3,
      amount: "25.00",
      name: "Beef Burger",
      paymentType: "Mobile Payment",
      status: "pending",
    },
    {
      dleveryId: 695,
      quantity: 1,
      amount: "55.00",
      name: "Chocolate",
      paymentType: "Credit Card",
      status: "deliverd",
    },
    {
      dleveryId: 741,
      quantity: 1,
      amount: "40.00",
      name: "Choco",
      paymentType: "Credit Card",
      status: "deliverd",
    },
  ];

  const pending = [
    {
      dleveryId: 144,
      quantity: 2,
      name: "Chicken Sausage",
      amount: "20.00",
      paymentType: "Cash on Delivery",
      status: "deliverd",
    },
    {
      dleveryId: 285,
      quantity: 1,
      amount: "30.00",
      name: "Veggie Pizza",
      paymentType: "Credit Card",
      status: "deliverd",
    },

    {
      dleveryId: 365,
      quantity: 3,
      amount: "25.00",
      name: "Beef Burger",
      paymentType: "Mobile Payment",
      status: "deliverd",
    },
    {
      dleveryId: 443,
      quantity: 2,
      name: "Grilled Fish",
      amount: "40.00",
      paymentType: "Cash on Delivery",
      status: "deliverd",
    },
    {
      dleveryId: 285,
      quantity: 1,
      amount: "30.00",
      name: "Veggie Pizza",
      paymentType: "Credit Card",
      status: "deliverd",
    },

    {
      dleveryId: 365,
      quantity: 3,
      amount: "25.00",
      name: "Beef Burger",
      paymentType: "Mobile Payment",
      status: "deliverd",
    },
    {
      dleveryId: 443,
      quantity: 2,
      name: "Grilled Fish",
      amount: "40.00",
      paymentType: "Cash on Delivery",
      status: "deliverd",
    },
  ];

  const router = useRouter();
  return (
    <SafeAreaView style={{ padding: 20 }} className="flex-1 bg-primary">
      <StatusBar backgroundColor="black" barStyle="white-content" />
      <View className="flex flex-row items-center justify-between w-full ">
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
          Delivered
        </Text>
      </View>

      <ScrollView className="flex-1 mt-6">
        {pending.length > 0 ? (
          <View style={{ paddingVertical: 10 }} className="flex flex-col gap-4">
            {pending.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: "/DeliveryDetails",
                  });
                }}
                key={index}
                style={{ ...styles.shadow }}
                className="flex flex-col  items-center mb-2 relative bg-white rounded-lg px-3 md:px-3 py-[1.5rem] "
              >
                <View className="flex items-center w-full gap-2 ">
                  <View className="flex flex-row items-center justify-between w-full ">
                    <View className="flex flex-row items-center gap-[5px] w-[50%] ">
                      <View
                        // style={{ backgroundColor: themeColors.bgColor(1) }}
                        className="flex items-center justify-center w-6 h-6 rounded-full bg-person "
                      >
                        <View
                          style={{
                            backgroundColor:
                              item.status === "deliverd"
                                ? themeColors.bgColor(1)
                                : "red",
                          }}
                          className="w-[10px] h-[10px] rounded-full h10"
                        ></View>
                      </View>

                      <View>
                        <Text
                          style={{
                            ...styles.font,
                            color: themeColors.bgColor(1),
                          }}
                          className="font-bold text-blue-500"
                        >
                          #{item.dleveryId}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{
                          ...styles.font,
                          color: themeColors.bgColor(1),
                        }}
                        className="font-bold"
                      >
                        ${item.amount}
                      </Text>
                    </View>
                  </View>
                  <View className="flex w-full ">
                    <Text className="text-lg font-semibold">
                      {item.quantity} x {item.name}
                    </Text>

                    <Text className="text-sm text-gray-500 ">
                      {item.paymentType}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View className="flex items-center justify-center w-full h-64 bg-white rounded-lg">
            <Image
              source={require("@/assets/images/deli.jpg")}
              style={{ width: 100, height: 100 }}
            />
            <Text
              style={{ ...styles.font, color: "#6B7280" }}
              className="text-lg text-center text-gray-500"
            >
              No deliveries available
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Deliverd;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "gray",
  },
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
    color: "black",
  },
});
