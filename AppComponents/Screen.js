import React,{useState} from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Navbar from "./Navbar"
import ExpenditureList from "./ExpenditureList"
import AddButton from "./AddButton"

var expenseReset = [
            {name: `McDonald's`,amount:-250,backgroundColor:"#ff6060",category:"Food",mode:"PayTM" },
            
          ]


export default function Screen() {
  const [expenses,setExpenses] = useState([
                                    {name: `McDonald's`,amount:-250 ,category: 0 ,mode:1},
                                    
                                  ])
  const addExpenseHandler = (newExpense)=>{
                                setExpenses(currentExpenses => {
                                    return [newExpense,...currentExpenses]
                                    //return expenseReset       
                                    // only for resetting array of expenses
                                })
                            }
  var totalSpent = 0;
    expenses.forEach(expense=>{
    totalSpent+=expense.amount
  })
  return (
    <ScrollView style={styles.container}>
      <Navbar totalSpent={totalSpent}/>
      <AddButton onAddExpense = {addExpenseHandler}/>
      <ExpenditureList expenses={expenses}/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    }
})
