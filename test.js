const { useState } = require("react");

const [quantity, setQuantity] = useState(1);

const handleQuantityChange = (id, action) => {
  setQuantity((prev) => {
    const currenQuantity = prev[id] || 0;
    const newQuantity =
      action === "add" ? currenQuantity + 1 : currenQuantity - 1;
    return { ...prev, [id]: newQuantity };
  });
};



 // const HandleAddToCart = async (dish, action) => {
  //   let newQty
  //   const id = dish.id

  //   setQuantities(prev => {
  //     const currentQty = prev[id] || 0

  //     newQty = action === 'add' ? currentQty + 1 : Math.max(currentQty - 1, 0)
  //     console.log('new:', newQty)

  //     return { ...prev, [id]: newQty }
  //   })

  //   // const Storedfood = storedFood && storedFood
  //   const storedData = await AsyncStorage.getItem('storedFood')
  //   let Storedfood = storedData ? JSON.parse(storedData) : []
  //   const existingFood = Storedfood.find(item => item.id === parseInt(dish.id))

  //   if (existingFood) {
  //     const updatedFood = Storedfood.map(item =>
  //       item.id === parseInt(dish.id)
  //         ? {
  //             ...item,
  //             quantity: newQty,
  //             price: parseFloat(dish.price) * newQty
  //           }
  //         : item
  //     )

  //     console.log('update:', updatedFood)

  //     setStoredFood(updatedFood)
  //     await AsyncStorage.setItem('storedFood', JSON.stringify(updatedFood))
  //     // await AsyncStorage.removeItem('cartItems')
  //   } else {
  //     const newFood = { ...dish, quantity: newQty }
  //     const UpdatedFood = [...Storedfood, newFood]

  //     setStoredFood([...storedFood, newFood])
  //     await AsyncStorage.setItem('storedFood', JSON.stringify(UpdatedFood))
  //   }
  // }
