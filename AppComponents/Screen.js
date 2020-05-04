import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./Navbar"
import ExpenditureList from "./ExpenditureList"
import AddButton from "./AddButton"

var expenseReset = [
            {name: `McDonald's`,amount:-250,backgroundColor:"#ff6060",category:"Food"},
            {name: `Mom's medicines`,amount:-100,backgroundColor:"#43bee0",category:"Medical"},
            {name: 'Ritesh',amount:250,backgroundColor:"#dd66f4",category:"Bills"},
            {name: 'Electricity bill',amount:-1000,backgroundColor:"#ff7200",category:"Bills"},
            {name: 'Internet recharge',amount:-800,backgroundColor:"#dd66f4",category:"Internet"},
            {name: 'Netflix subscription',amount:-450,backgroundColor:"#6cfc86",category:"Entertainment"},
            {name: `Fridge EMI`,amount:-2500,backgroundColor:"#ff6060",category:"Bills"},
            {name: `Miscellaneous`,amount:-250,backgroundColor:"#43bee0",category:"Bills"},
            {name: 'Wings of Fire',amount:-250,backgroundColor:"#ff7200",category:"Books"}
          ]



export default function Screen() {
  const [expenses,setExpenses] = useState([
                                    {name: `McDonald's`,amount:-250 ,category: 0},
                                    {name: `Mom's medicines`,amount:-100 ,category:1},
                                    {name: 'Ritesh',amount:250,category:2},
                                    {name: 'Electricity bill',amount:-1000,category:2},
                                    {name: 'Internet recharge',amount:-800,category:3},
                                    {name: 'Netflix subscription',amount:-450,category:4},
                                    {name: `Fridge EMI`,amount:-2500 ,category:2},
                                    {name: `Miscellaneous`,amount:-250 ,category:2},
                                    {name: 'Wings of Fire',amount:-250,category:5}
                                  ])
  const addExpenseHandler = (newExpense)=>{
                                setExpenses(currentExpenses => {
                                    return [newExpense,...currentExpenses]
                                    //return expenseReset       // only for resetting array of expenses
                                })
                            }
  var totalSpent = 0;
    expenses.forEach(expense=>{
    totalSpent+=expense.amount
  })
  return (
    <View style={styles.container}>
      <Navbar totalSpent={totalSpent}/>
      <AddButton onAddExpense = {addExpenseHandler}/>
      <ExpenditureList expenses={expenses}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    }
})
