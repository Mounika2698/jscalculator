const queryString = window.location.search;
var totalAmountUser = 0;
var totalAmountAccount = 0;

const pricePlan = queryString.includes("file=a") ? {
    "priceLists": {
        "priceSets": [
            {
                "setId": "pricing10Stdusers",
                "priceValue": "100"
            },
            {
                "setId": "pricing30Stdusers",
                "priceValue": "80"
            },
            {
                "setId": "pricing50Stdusers",
                "priceValue": "60"
            },
            {
                "setId": "pricing10Prousers",
                "priceValue": "110"
            },
            {
                "setId": "pricing30Prousers",
                "priceValue": "90"
            },
            {
                "setId": "pricing50Prousers",
                "priceValue": "70"
            },
            {
                "setId": "pricing4Stdaccounts",
                "priceValue": "100"
            },
            {
                "setId": "pricing10Stdaccounts",
                "priceValue": "80"
            },
            {
                "setId": "pricing4Proaccounts",
                "priceValue": "110"
            },
            {
                "setId": "pricing10Proaccounts",
                "priceValue": "90"
            },
            {
                "setId": "pricingStd",
                "priceValue": "100"
            },
            {
                "setId": "pricingPro",
                "priceValue": "110"
            }
        ]
    }
} : {
    "priceLists": {
        "priceSets": [
            {
                "setId": "pricing10Stdusers",
                "priceValue": "1000"
            },
            {
                "setId": "pricing30Stdusers",
                "priceValue": "800"
            },
            {
                "setId": "pricing50Stdusers",
                "priceValue": "600"
            },
            {
                "setId": "pricing10Prousers",
                "priceValue": "1100"
            },
            {
                "setId": "pricing30Prousers",
                "priceValue": "900"
            },
            {
                "setId": "pricing50Prousers",
                "priceValue": "700"
            },
            {
                "setId": "pricing4Stdaccounts",
                "priceValue": "1000"
            },
            {
                "setId": "pricing10Stdaccounts",
                "priceValue": "800"
            },
            {
                "setId": "pricing4Proaccounts",
                "priceValue": "1100"
            },
            {
                "setId": "pricing10Proaccounts",
                "priceValue": "900"
            },
            {
                "setId": "pricingStd",
                "priceValue": "1000"
            },
            {
                "setId": "pricingPro",
                "priceValue": "1100"
            }
        ]
    }
}

const priceSets = pricePlan.priceLists.priceSets;

const updatePriceId = (setId , isUser) =>{
    const getUserPrice = priceSets.find(value => value.setId == setId)
    if(isUser){
        totalAmountUser = getUserPrice.priceValue
    }else{
        totalAmountAccount = getUserPrice.priceValue
    }
    document.getElementById("total-amount").innerHTML = "$" + (+totalAmountUser + +totalAmountAccount)
}

const standardPrice = priceSets.find(value => value.setId == "pricingStd")
const proPrice = priceSets.find(value => value.setId == "pricingPro")

document.getElementById("standard").innerHTML = "$" + standardPrice.priceValue
document.getElementById("professtional").innerHTML = "$" + proPrice.priceValue


document.getElementById("user-select").addEventListener("change", (e)=>{
    const rangeValue = e.target.value;
    document.getElementById("user-input").value = rangeValue
    if(+rangeValue >= 1 && +rangeValue <= 10){
        updatePriceId("pricing10Stdusers",true)
        document.getElementById("user-input").step = "1";
    }else if(+rangeValue >= 11 && +rangeValue <= 30){
        updatePriceId("pricing30Stdusers",true)
        document.getElementById("user-input").step = "2";
    }else if(+rangeValue >= 31 && +rangeValue <= 50){
        updatePriceId("pricing50Stdusers",true)
        document.getElementById("user-input").step = "4";
    }
});

document.getElementById("account-select").addEventListener("change", (e)=>{
    const rangeValue = e.target.value;
    document.getElementById("account-input").value = rangeValue
    if(+rangeValue >= 1 && +rangeValue <= 4){
        updatePriceId("pricing4Stdaccounts")
        document.getElementById("account-input").step = "1";
    }else if(+rangeValue >= 5 && +rangeValue <= 10){
        updatePriceId("pricing10Stdaccounts")
        document.getElementById("account-input").step = "2";
    }
});


document.getElementById("user-input").addEventListener("change", (e)=>{
    const value = e.target.value;
    if(+value > 50){
        document.getElementById("user-input").value = 50
    }else if(+value < 0){
        document.getElementById("user-input").value = 1
    }else{
        document.getElementById("user-select").value = value
        if(+value >= 11 && +value <= 30){
            updatePriceId("pricing30Stdusers",true)
            document.getElementById("user-input").step = "2";
        }else if(+value >= 31 && +value <= 50){
            updatePriceId("pricing50Stdusers",true)
            document.getElementById("user-input").step = "4";
        }
    }
});

document.getElementById("account-input").addEventListener("change", (e)=>{
    const value = e.target.value;
    if(+value > 10){
        document.getElementById("account-input").value = 10
    }else if(+value < 0){
        document.getElementById("account-input").value = 1
    }else{
        document.getElementById("account-select").value = value
        if(+value >= 1 && +value <= 4){
            updatePriceId("pricing4Stdaccounts")
            document.getElementById("account-input").step = "1";
        }else if(+value >= 5 && +value <= 10){
            updatePriceId("pricing10Stdaccounts")
            document.getElementById("account-input").step = "2";
        }
    }
});