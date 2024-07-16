import { createSlice } from "@reduxjs/toolkit";
import pizz1 from '../../assets/images/pizza/pizza1.png';
import pizz2 from '../../assets/images/pizza/pizza2.png';
import pizz3 from '../../assets/images/pizza/pizza3.png';
import pizz4 from '../../assets/images/pizza/pizza4.png';
import pizz5 from '../../assets/images/pizza/pizza5.png';
import pizz6 from '../../assets/images/pizza/pizza6.png';

import rice1 from '../../assets/images/rice/rice1.png';
import rice2 from '../../assets/images/rice/rice2.png';
import rice3 from '../../assets/images/rice/rice3.png';

import burger1 from '../../assets/images/burger/burger1.png';
import burger2 from '../../assets/images/burger/burger2.png';
import burger3 from '../../assets/images/burger/burger3.png';
import burger4 from '../../assets/images/burger/burger4.png';
import burger5 from '../../assets/images/burger/burger5.png';
import burger6 from '../../assets/images/burger/burger6.png';

import dessert1 from '../../assets/images/dessert/dessert1.png';
import dessert2 from '../../assets/images/dessert/dessert2.png';
import dessert3 from '../../assets/images/dessert/dessert3.png';
import dessert4 from '../../assets/images/dessert/dessert4.png';
import dessert5 from '../../assets/images/dessert/dessert5.png';

import pasta1 from '../../assets/images/pasta/pasta1.png';
import pasta2 from '../../assets/images/pasta/pasta2.png';
import pasta3 from '../../assets/images/pasta/pasta3.png';
import pasta4 from '../../assets/images/pasta/pasta4.png';

import sushi1 from '../../assets/images/sushi/sushi1.png';
import sushi2 from '../../assets/images/sushi/sushi2.png';
import sushi3 from '../../assets/images/sushi/sushi3.png';

import roll1 from '../../assets/images/roll/roll1.png';
import roll2 from '../../assets/images/roll/roll2.png';
import roll3 from '../../assets/images/roll/roll3.png';


const initialState = {
    cart:{},
    card:[    { id: 1, img: pizz1, title: 'Chicken Blast Special', rate: '4.5', price: '2500', category: 'pizza' },
        { id: 2, img: pizz2, title: 'Veggie Delight', rate: '4.2', price: '1800', category: 'pizza' },
        { id: 3, img: pizz3, title: 'Pepperoni Feast', rate: '4.8', price: '2200', category: 'pizza' },
        { id: 4, img: pizz4, title: 'Margherita Classic', rate: '4.0', price: '1500', category: 'pizza' },
        { id: 5, img: pizz5, title: 'BBQ Chicken', rate: '4.6', price: '2400', category: 'pizza' },
        { id: 6, img: pizz6, title: 'Hawaiian Paradise', rate: '4.3', price: '2300', category: 'pizza' },
        { id: 7, img: rice1, title: 'Chicken Biryani', rate: '4.3', price: '2300', category: 'rice' },
        { id: 8, img: rice2, title: 'Spicy Thai Rice', rate: '4.5', price: '2100', category: 'rice' },
        { id: 9, img: rice3, title: 'Vegetable Fried Rice', rate: '4.2', price: '1800', category: 'rice' },
        { id: 10, img: burger1, title: 'Classic Cheeseburger', rate: '4.7', price: '1200', category: 'burger' },
        { id: 11, img: burger2, title: 'BBQ Bacon Burger', rate: '4.6', price: '1350', category: 'burger' },
        { id: 12, img: burger3, title: 'Veggie Burger', rate: '4.3', price: '1100', category: 'burger' },
        { id: 13, img: burger4, title: 'Mushroom Swiss Burger', rate: '4.5', price: '1400', category: 'burger' },
        { id: 14, img: burger5, title: 'Spicy Chicken Burger', rate: '4.4', price: '1250', category: 'burger' },
        { id: 15, img: burger6, title: 'Double Beef Burger', rate: '4.8', price: '1500', category: 'burger' },
        { id: 16, img: dessert1, title: 'Chocolate Lava Cake', rate: '4.8', price: '800', category: 'dessert' },
        { id: 17, img: dessert2, title: 'Strawberry Cheesecake', rate: '4.7', price: '900', category: 'dessert' },
        { id: 18, img: dessert3, title: 'Vanilla Ice Cream', rate: '4.6', price: '500', category: 'dessert' },
        { id: 19, img: dessert4, title: 'Apple Pie', rate: '4.5', price: '750', category: 'dessert' },
        { id: 20, img: dessert5, title: 'Tiramisu', rate: '4.7', price: '950', category: 'dessert' },
        { id: 21, img: pasta1, title: 'Spaghetti Carbonara', rate: '4.6', price: '1200', category: 'pasta' },
        { id: 22, img: pasta2, title: 'Penne Arrabbiata', rate: '4.4', price: '1100', category: 'pasta' },
        { id: 23, img: pasta3, title: 'Fettuccine Alfredo', rate: '4.5', price: '1300', category: 'pasta' },
        { id: 24, img: pasta4, title: 'Lasagna Bolognese', rate: '4.7', price: '1400', category: 'pasta' },
        { id: 25, img: sushi1, title: 'California Roll', rate: '4.8', price: '1000', category: 'sushi' },
        { id: 26, img: sushi2, title: 'Spicy Tuna Roll', rate: '4.6', price: '1100', category: 'sushi' },
        { id: 27, img: sushi3, title: 'Dragon Roll', rate: '4.7', price: '1200', category: 'sushi' },
        { id: 28, img: roll1, title: 'Philadelphia Roll', rate: '4.5', price: '1150', category: 'roll' },
        { id: 29, img: roll2, title: 'Tempura Roll', rate: '4.6', price: '1250', category: 'roll' },
        { id: 30, img: roll3, title: 'Rainbow Roll', rate: '4.8', price: '1300', category: 'roll' }]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            if(!state.cart[action.payload]){
                state.cart[action.payload]=1
            }else{
                state.cart[action.payload]+=1
            }
        },
        removeFromCart:(state,action)=>{
            if(state.cart[action.payload]>0){
                state.cart[action.payload]-=1
                if(state,cart[action.payload]===0){
                    delete state.cart[action.payload]
                
                
                }
            }
        },
        showCart:(state)=>{
            return state.cart
        },
        getTotalAmount:(state)=>{
            let total=0;
            for(const item in state.cart){
                if(state.cart[item]>0){
                    const item=state.card.find((item)=>item.id===item)
                    total+=item.price*state.cart[item]
                }
            }
            return total;
        }
    }
})

export const {addToCart,removeFromCart,showCart,getTotalAmount}=cartSlice.actions
export default cartSlice.reducer