document.getElementById('deposit-button').addEventListener('click',function(){
   const depositField=document.getElementById('deposit-input')
   const newDepositAmountString=depositField.value;
   const newDepositAmount=parseFloat(newDepositAmountString);
  

   const depositTotalELement=document.getElementById('deposit-total')
   const previousDepositTotalString=depositTotalELement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    
    const currentDepositTotal=previousDepositTotal+newDepositAmount;

   depositTotalELement.innerText=currentDepositTotal;
   depositField.value='';

const balanceTotalElement=document.getElementById('balance-total')
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
const currentBalance=previousBalanceTotal+newDepositAmount;
balanceTotalElement.innerText=currentBalance;
   //-----------------------------------



})