// simplified fee structure:
// 1. The basic transaction fee is 1.5% of the transaction amount.
// 2. However, there's a minimum fee of KES 10. If 1.5% of the amount is less than 10, rhe fee charged is KES 10.
// 3. Ther's also a maximum fee of of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.

// Calculator for Money Transaction
function estimateTransactionFee (amountToSend) {
    const percentageFee = amountToSend * 1.5 / 100   // This is percentage
    let transactionFee;

      // calculation for the tranaction fee
    if (percentageFee < 10) {
        transactionFee = 10;
    } else if (percentageFee > 70) {
       transactionFee = 70
    }else {
        transactionFee = percentageFee
    }
const totalAmount = amountToSend + transactionFee;

// Display result
console.log (`Sending KES ${amountToSend}`);
console.log (`Calculated transaction Fee: KES ${transactionFee}`);
console.log (`Total amount to transact: KES ${totalAmount}`);
console.log ("Send Money Securely")


}
// Ask input for how much the person wants to send
const transactionFeeInput = prompt ("Unatuma ngapi? (KES)");
const amountToSend = Number (transactionFeeInput);
estimateTransactionFee (amountToSend);
