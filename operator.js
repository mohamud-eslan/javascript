// D = (L - S )/ L * 100
var listingPrice = 799;
var sellingPrice = 199;
var DiscountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discounted percentage is" + DiscountPrice);
displayDiscountPencentage = Math.round(DiscountPrice);
console.log(displayDiscountPencentage + "% off");

var result = listingPrice > sellingPrice;

console.log(typeof result);