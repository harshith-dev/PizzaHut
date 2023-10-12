let bill=0;
let CustomerOrders =[];
function prom(){
    let MenuOption=prompt("************************Wellcome to Pizza Hut******************** \nSelect What do you want \n1.Pizza \n2.Desserts \n3.IceCreams \n4.Soft Drinks");
    if(MenuOption<0){
        alert("invalid input\n Try again");
        prom();
    }
    switch (Number(MenuOption)) {
        case 1:
            Pizza()
            break;

        case 2:
            Desserts();
            break;
        case 3:
            IceCream();
            break;
        case 4:
            SoftDrink();
            break;
        default:
            alert("please Enter a valid input");
            prom();
            break;
}

}
function Pizza(){
    let a = Number(prompt("Select what type of pizza\n1.Veg\n2.Non Veg"))
    if(a<0){
        alert("Invalid Input, Please  Enter a Valid Input");
        Pizza();
    }
    switch(a){
        case 1:
            Veg();
            break;
        case 2:
            NonVeg();
            break;
        default:
            alert("no input found");
            let s = Number(prompt("Do you want to Continue.\n1.For yes press 1\n2.For No press 2"));
            if (s === 1) {
                Pizza()
            }
            else {
                alert("Thank you for Visiting.");
            }
            

    }
}

function Veg(){
    let v = Number(prompt("Select what type of Veg pizza do you want\n1.Paneer special\n2.Spicy Mexican\n3.Vegetarian Special\n4.Four Cheese Special"));
    if(v<0){
        alert("please enter a valid input")
    }
    else{
        switch(v){
            case 1:
                order("Paneer Special Pizza",500);
                break;
            case 2:
                order("Spicy Mexican Pizza",750);
                break;
            case 3:
                order("Vegetarian Special Pizza",800);
                break;
            case 4:
                order("Four Cheese Special Pizza",900);
                break;
            default:
                alert("item not found try again");
                Veg();
                break;
        }
    }
}
function NonVeg(){
    let n = Number(prompt("Select what type of Non_Veg pizza do you want\n1.Chicken Golden Delight\n2.Chicken Dominator\n3.Pepper Barbecue Chicken\n4.Keema Do Pyaza"))
    if(n<0){
        alert("Invalid Input");
        NonVeg();
    }
    else{
        switch(n){
            case 1:
                order("Chicken Golden Delight Pizza",750);
                break;
            case 2:
                order("Chicken Dominator Pizza",900);
                break;
            case 3:
                order("Pepper Barbecue Chicken Pizza",1000);
                break;
            case 4:
                order("Keema Do Pyaza Pizza",1200);
                break;
            default:
                alert("Item not Found please try again");
                NonVeg();
                break;

        }
    }
}

function order(name,price){
    let [sizes,cost] = size(price);
            alert(`The Price of ${sizes} ${name} is:${cost}`)
            let A1 = Number(prompt(`How many ${name} do you want`))
            
            if(A1<0){
                alert("Invalid Input\nPlease enter a valid input");
                order(name,price);
            }
            else{
                let total = cost * A1;
                bill+=total;
                alert(`The Total price is:${A1}*${cost}=${total}`);
                orderedItems(`${sizes} ${name}`,A1,total);
            }
            let s = Number(prompt("Do you want to Continue.\n1.For yes press 1\n2.For No press enter any key"));            
               if(s==1){
                prom();
               }
               else{
                let out = Number(prompt("Do you Want to Exit\n1.For No Press1\n2.To Exit Press any key"))
                if(out==1){
                    prom()
;                }
                    else{
                
                Bill();
                alert("Thank You Visit Again"); 
            }
               }
            
        
        
        }
function size(price){
    let A = Number(prompt("Select which medium pizza do you want\n1.Small\n2.Medium\n3.Large"))
    if(A<0){
        alert("invalid Input");
        size(price);
    }
    else{
        switch(A){
            case 1:
                return ["size",price*0.5];
            case 2:
                return ["medium" , price];
            case 3:
                return ["large",price*1.5];
            default:
                alert("Option is not found");
                size(price);
                break;
        }
    }
}

function IceCream(){
    let i = Number(prompt("Select what type of Ice Cream do you want\n1.Black_Raspberry\n2.Caramel\n3.Mango Kulfi"));
    if(i<0){
        alert("Invalid Input");
        IceCream();
    }
    else{
        switch(i){
            case 1:
                otherorders("Black Raspberry Ice Cream",180);
                break;
            case 2:
                otherorders("Caramel Ice Cream",200);
                break;
            case 3:
                otherorders("Mango kulfi",280);
                break;
            default:
                alert("No item found \n Please try again ");
                break;

        }
    }
}
function Desserts(){
    let i = Number(prompt("Select what type of Desserts do you want\n1.Chocolate Frosted Doughnuts\n2.Blueberry Frozen Yogurt\n3.Cupcakes"))
    if(i<0){
        alert("invalid input\nTry again");
        Desserts();
    }
    else{
        switch(i){
            case 1:
                otherorders("Chocolate Frosted Doughnuts",220);
                break;
            case 2:
                otherorders("Blueberry Frozen Yogurt",250);
                break;
            case 3:
                otherorders("Cupcakes",250);
                break;
            default:
                alert("No items found\nPlease Try Again");
                Desserts();
                break;
        }
    }
}
function SoftDrink(){
    let s = Number(prompt("Select What type of Soft Drinks you you want\n1.Pepsi\n2.Limca\n3.Coca-Cocla\n4.Chocolate MilkShake"))
    if(s<0){
        alert("Invalid Input\nPlease Try Again");
        SoftDrink();
    }
    else{
        switch(s){
            case 1:
                otherorders("Pepsi",50);
                break;
            case 2:
                otherorders("Limca",50);
                break;
            case 3:
                otherorders("Coca-Cola",50);
                break;
            case 4:
                otherorders("Strawberry MilkShake",99);
                break;
            default:
                alert("No Item Found\nPlease Try Again");
                SoftDrink();
                break;

        }
    }
}
function otherorders(name,cost){
    alert(`The Price of ${name} is:${cost}`);
    let A1 = Number(prompt(`How many ${name} do you want`))
    if(A1<0){
        alert("Invalid Input\nPlease enter a valid input");
        otherorders(name,cost);
    }
    else{
        let total = cost * A1;
        bill+=total;
        alert(`The Total price is:${A1}*${cost}=${total}`);
        orderedItems(name,A1,total)
    }
    let s = Number(prompt("Do you want to Continue.\n1.For yes press 1\n2.For No press any key"));
    if (s === 1) {
        prom()
    }
    else {
        let out = Number(prompt("Do you Want to Exit\n1.For No Press1\n2.To Exit Press any key"))
        if(out==1){
            prom()
;                }
            else{
        
        Bill();
        alert("Thank You Visit Again"); 
    }
    }
}
function Bill(){
    alert("*****************Please Pay The BIll*******************************");
    let itemlist="";
    for (let item of CustomerOrders) {
        itemlist+=`Items Ordered\n---------\nItem :   ${item.name}\nQuantity  : ${item.quantity}\nPrice   :   ${item.price}\n`
    }
    alert(`${itemlist}\nTotal Bill: Rs.${bill}\n`);
    
}
function orderedItems(name,quant,price){
    alert(`Items Ordered\n--------------\nItem Name  :  ${name}\nQuantity  :  ${quant}\nPrice  :  ${price}`);
    CustomerOrders.push({name,quantity:quant,price:price});
}
prom();