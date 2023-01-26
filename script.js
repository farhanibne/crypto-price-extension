var btc = document.getElementById("bitcoin");
var lite = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("doge");
var sol = document.getElementById("solana");
 
const API_URL =
"#######################################################"
 
fetch(API_URL)
    .then(response => response.json())
    .then(response => {
        // For debugging
        console.log(response)
        btc.innerHTML = response.bitcoin.usd;
        lite.innerHTML = response.litecoin.usd;
        eth.innerHTML = response.ethereum.usd;
        doge.innerHTML = response.dogecoin.usd;
        sol.innerHTML = response.solana.usd;
    });
