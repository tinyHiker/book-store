import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase/firebase.config';
import avatarImg from '../assets/avatar.png';
import { useGetOrderByEmailQuery } from '../redux/features/orders/ordersApi';


function getMostCommonAddress(orders) {
    const addressCount = {};
    
    for (const order of orders) {
      
      const { city, country, state, zipcode } = order.address;
      
      const addressString = `${city}, ${state}, ${zipcode}, ${country}`;
  
      if (!addressCount[addressString]) {
        addressCount[addressString] = 0;
      }
      addressCount[addressString]++;
    }
  
    let mostCommon = null;
    let maxCount = 0;
  
    for (const addr in addressCount) {
      if (addressCount[addr] > maxCount) {
        maxCount = addressCount[addr];
        mostCommon = addr;
      }
    }
  
    return mostCommon; "
  }
  
  function getMostCommonPhone(orders) {
    const phoneCount = {};
  
    for (const order of orders) {
      const phone = order.phone;
      if (!phoneCount[phone]) {
        phoneCount[phone] = 0;
      }
      phoneCount[phone]++;
    }
  
    let mostCommon = null;
    let maxCount = 0;
    for (const ph in phoneCount) {
      if (phoneCount[ph] > maxCount) {
        maxCount = phoneCount[ph];
        mostCommon = ph;
      }
    }
  
    return mostCommon;
  }
  
  function getTenMostRecentProducts(orders) {
    
    const sortedOrders = [...orders].sort((a, b) => new Date(b.placedAt) - new Date(a.placedAt));
  
    const productsInChronologicalOrder = [];
    for (const order of sortedOrders) {
      
      productsInChronologicalOrder.push(...order.productIds);
    }
  
    
    return productsInChronologicalOrder.slice(0, 10);
  }
  
  function getTotalMoneySpent(orders) {
    return orders.reduce((sum, order) => sum + order.totalPrice, 0);
  }

  
  const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
  
    if (loading) return <div>Loading user...</div>;
    if (error) return <div>Error loading user.</div>;
    if (!user) return <div>Please log in</div>;
  
    
    const {
      data: orders = [],
      isLoading,
      isError,
    } = useGetOrderByEmailQuery(user.email);
  
    if (isLoading) {
      return <div>Loading orders...</div>;
    }
  
    if (isError) {
      return <div>Error fetching orders</div>;
    }
  
    
    console.log('Orders:', orders);
  
  
    const commonAddress = getMostCommonAddress(orders);
  
   
    const commonPhone = getMostCommonPhone(orders);
  
    
    const recentProducts = getTenMostRecentProducts(orders);
  
    
    const totalSpent = getTotalMoneySpent(orders);
  
    return (
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={avatarImg}
            alt="Avatar"
            className="w-12 h-12 rounded-full ring-2 ring-blue-500"
          />
          <div>
            <h2 className="text-xl font-bold">User Profile</h2>
            <p>Logged in as: {user.email}</p>
            <p>User ID: {user.uid}</p>
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Most Common Address</h3>
          {commonAddress ? (
            <p>{commonAddress}</p>
          ) : (
            <p className="text-sm text-gray-500">No address found.</p>
          )}
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Most Common Phone</h3>
          {commonPhone ? (
            <p>{commonPhone}</p>
          ) : (
            <p className="text-sm text-gray-500">No phone number found.</p>
          )}
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold">10 Most Recent Products</h3>
          {recentProducts && recentProducts.length > 0 ? (
            <ul className="list-disc pl-5">
              {recentProducts.map((product, idx) => (
                <li key={idx}>
                  {/* If product is populated, you can access product.title, etc. */}
                  {product.title} - ${product.newPrice}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No recent products found.</p>
          )}
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Total Amount Spent</h3>
          <p>${totalSpent.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default UserProfile;
  