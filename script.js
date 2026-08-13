
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
        <script src="https://js.paystack.co/v1/inline.js"></script>

<button class="btn" onclick="payWithPaystack()">
    PAY NOW
</button>

<script>
function payWithPaystack() {

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("phone").value;
    let laptop = document.getElementById("selectedLaptop").value;
    let price = document.getElementById("selectedPrice").value;

    if (!name || !phone || !laptop) {
        alert("Please complete your order details first.");
        return;
    }

    let amount = parseInt(
        price.replace(/[₦,]/g, "")
    );

    let handler = PaystackPop.setup({

        key: "pk_test_YOUR_PUBLIC_KEY",

        email: "customer@example.com",

        amount: amount * 100,

        currency: "NGN",

        ref: "LAPTOP_" + Date.now(),

        metadata: {
            customer_name: name,
            phone: phone,
            laptop: laptop
        },

        callback: function(response) {

            alert(
                "Payment successful!\n\n" +
                "Reference: " +
                response.reference
            );

            // Send reference to your backend
            // for secure payment verification.

        },

        onClose: function() {

            alert("Payment window closed.");

        }

    });

    handler.openIframe();
}

    });

}


