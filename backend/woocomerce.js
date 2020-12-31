import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
 
const api = new WooCommerceRestApi({
  url: process.env.API_URL,
  consumerKey: process.env.API_URL_CONSUMER_KEY,
  consumerSecret: process.env.API_URL_CONSUMER_SECRET,
  version: "wc/v3"
});

export default api