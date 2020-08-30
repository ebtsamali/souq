// products reducer

const productsReducer = [
   {  
      id: "1",
      name: "Coffee",
      price: 100,
      image: "coffee.jpg"
   },
   {
      id: "2",
      name: "Tea",
      price: 50,
      image: "tea.jpeg"
   },
   {
      id: "3",
      name: "Nescafe",
      price: 50,
      image: "nescafe.jpg"
   }
]

export default ( state = productsReducer, action ) => {
   switch(action.type) {
      default :
         return state
   }
}