function minimize(productQuantityId,productPriceId,amount,condition){
    // Counting Product Quantity Start
    const currentNumber = document.getElementById(productQuantityId);
    const currentNumberValue = parseInt(currentNumber.value);
    var quantity = 0;
    if(condition == false)
    {
        if(currentNumberValue > 0)
        {
            quantity = currentNumberValue - 1;
            currentNumber.value = quantity;
        }
    }
    else
    {
        quantity = currentNumberValue + 1;
        currentNumber.value = quantity;
    }
    // Counting Product Quantity End
    // Product Price Update According to the Quantity Start
    const price = document.getElementById(productPriceId);
    const pastPrice = parseInt(price.innerText);
    const presentPrice = amount * quantity;
    price.innerText = presentPrice; 
    // Product Price Update According to the Quantity End
    // Subtotal Update Start
    const change = presentPrice - pastPrice;
    const subTotal = document.getElementById('sub-total')
    const subTotalValue = parseInt(subTotal.innerText);
    subTotal.innerText = subTotalValue + change;
    // Subtotal Update End
    // Tax Update Start 
    const tax = (subTotalValue + change)/10;
    document.getElementById('tax').innerText = parseInt(tax);
    // Tax update End
    // Updating Total Amount 
    document.getElementById('total-amount').innerText = parseInt((subTotalValue + change)+tax);
}
document.getElementById('minimize1').addEventListener('click',function(){
    minimize('quantity1','price1',1219,false);
})
document.getElementById('minimize2').addEventListener('click',function(){
    minimize('quantity2','price2',59,false);
})
document.getElementById('summation1').addEventListener('click',function(){
    minimize('quantity1','price1',1219,true);
})
document.getElementById('summation2').addEventListener('click',function(){
    minimize('quantity2','price2',59,true);
})