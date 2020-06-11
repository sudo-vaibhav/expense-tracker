import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Navbar from "./Navbar"
import ExpenditureList from "./ExpenditureList"
import AddButton from "./AddButton"

var expenseReset = [
            {name: `Electricity`,amount:-950,backgroundColor:"#ff6060",category:"Bills",mode:"Credit-Card" },
            
          ]


export default function Add() {
  const [expenses,setExpenses] = useState([
                                    {name: `Hotstar`,amount:-499 ,category: 4 ,mode:4},

                                    
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
