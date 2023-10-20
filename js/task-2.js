`use stritt`
function getShippingMessage(country, price, deliveryFee) { return `Shipping to ${country} will cost ${price + deliveryFee} credits`; }

console.log(getShippingMessage("Australia", 120, 58)); // "Shipping to Australia will cost 178 credits"
console.log(getShippingMessage("Germany", 88, 20)); // "Shipping to Germany will cost 108 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // Shipping to Sweden will cost 120 credits"