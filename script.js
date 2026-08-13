
/* SELECT LAPTOP */

function buyLaptop(name,price){

    document.getElementById(
        "orderSection"
    ).style.display="block";


    document.getElementById(
        "selectedLaptop"
    ).value=name;


    document.getElementById(
        "selectedPrice"
    ).value=price;


    document.getElementById(
        "orderSection"
    ).scrollIntoView({
        behavior:"smooth"
    });

}



/* SUBMIT ORDER */

function submitOrder(event){

    event.preventDefault();


    const name =
    document.getElementById(
        "customerName"
    ).value;


    const phone =
    document.getElementById(
        "phone"
    ).value;


    const laptop =
    document.getElementById(
        "selectedLaptop"
    ).value;


    const price =
    document.getElementById(
        "selectedPrice"
    ).value;


    const country =
    document.getElementById(
        "country"
    ).value;


    const location =
    document.getElementById(
        "location"
    ).value;


    const address =
    document.getElementById(
        "address"
    ).value;


    const notes =
    document.getElementById(
        "notes"
    ).value;


    alert(
        "ORDER CREATED SUCCESSFULLY!\n\n" +

        "Customer: " + name + "\n" +

        "Phone: " + phone + "\n" +

        "Laptop: " + laptop + "\n" +

        "Price: " + price + "\n" +

        "Country: " + country + "\n" +

        "Location: " + location
    );


    document.getElementById(
        "payment"
    ).scrollIntoView({
        behavior:"smooth"
    });

}



/* COPY ACCOUNT */

function copyAccount(){

    navigator.clipboard.writeText(
        "8106417282"
    );

    alert(
        "OPay account number copied!"
    );

}



/* SEARCH LAPTOP */

function searchProducts(){

    const search =
    document.getElementById(
        "search"
    ).value.toLowerCase();


    const products =
    document.querySelectorAll(
        ".product"
    );


    products.forEach(product => {

        const text =
        product.innerText.toLowerCase();


        if(text.includes(search)){

            product.style.display="block";

        }else{

            product.style.display="none";

        }

    });

}


