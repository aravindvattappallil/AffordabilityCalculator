import { createSlice } from "@reduxjs/toolkit";
export const configSlice = createSlice({
    name:"calculator",
    initialState:{
       homeValue:0,
       downPayment:0,
       loanAmount:0,
       interestRate:0,
       loanDuration:0,
       monthlyPayment:0
    },
    reducers:{
    
        updateValues:(state,action)=>{
            state.homeValue=action.payload.homeValue
            state.downPayment=action.payload.downPayment
            state.loanAmount=action.payload.loanAmount
            state.interestRate=action.payload.interestRate
            state.loanDuration=action.payload.loanDuration
            console.log(state.homeValue,state.downPayment,state.loanAmount,state.interestRate,state.loanDuration)
        },
        // loanAmountCalc:(state,action)=>{
        //     state.downPayment=action.payload
        //     state.loanAmount=state.homeValue-state.downPayment
        //     console.log("loan Amount"+state.loanAmount)
        // },
        
        calculateMontlyPayment: (state,action)=>{
            const totalLoanMonths = state.loanDuration * 12;
            const interestPerMonth = state.interestRate / 100 / 12;
            const loanAmountCalc=state.homeValue-state.downPayment+state.loanAmount
            const mPayment =
              (loanAmountCalc *
                interestPerMonth *
                (1 + interestPerMonth) ** totalLoanMonths) /
              ((1 + interestPerMonth) ** totalLoanMonths - 1);
              console.log(mPayment)
              state.monthlyPayment=parseFloat(mPayment.toFixed(2))
              console.log(state.monthlyPayment)


        }
    }
})
export const{calculateMontlyPayment,updateValues,loanAmountCalc}= configSlice.actions;
export default configSlice.reducer