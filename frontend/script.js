function isGoodRecommendation(user, product) {
    const customer = user.username;
    const purchaseCategory = user.mostrecentpurchase.category;
    const productCategory = product.category;

    const result = {};
    result.customerName = userName;

    if (purchaseCategory !== productCategory && user.mostrecentpurchase.color === product.color && user.mostrecentpurchase.price < product.price) {
        result.isProductRecommended = true;
    } else {
        result.isProductRecommended = false;
    }
    return result

}




/*function isProductRecommended() {
    if (product.category !== user.mostRecentPurchase.category) {
        if (product.color === user.mostRecentPurchase.color) {
            if (product.price < user.mostRecentPurchase.price) {
            }
        }
        return true
    } else {
        return false
    }
}

let result = user.username + isProductRecommended();

return result */