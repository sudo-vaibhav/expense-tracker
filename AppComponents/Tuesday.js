import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Navbar from "./Navbar"
import ExpenditureList from "./ExpenditureList"
import AddButton from "./AddButton"

var expenseReset = [
            {name: `Netflix`,amount:-450,backgroundColor:"#ff6060",category:"Entertainment",mode:"GooglePay" },
            
          ]


export default function Tuesday() {
  const [expenses,setExpenses] = useState([
                                    {name: `Netflix`,amount:-450 ,category: 4 ,mode:0},
                                    
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
