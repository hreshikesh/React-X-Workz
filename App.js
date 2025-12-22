import React from "react";
import ReactDOM from "react-dom/client";


const rootElement = ReactDOM.createRoot(document.getElementById("root"))




const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/053/762/082/non_2x/food-delivery-catering-fast-food-logo-icon-free-vector.jpg" alt="Logo" />
                <h4 className="title">Food Delivery</h4>
                <ul className="menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}


const FoodDetails = (props) => {
    return(
    <div className="card">
        <img className="food-image" src={props.foodImage} alt="Food Image" />
        <h2 className="restaurant-name">{props.restaurantName}</h2>
        <p className="ratings">{props.ratings}</p>
        <p className="location">{props.location}</p>
        <p className="food-description">{props.foodDescription}</p>
    </div>
    )
}


const Search=()=>{
    return(
        <div>
            <h1>Welcome to Food Delivery App</h1>
            <div className="search-container">
                <form className="form-container">
                    <input type="text" placeholder="Search for food..." />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div>
            <NavBar />
            <Search />
            <div className="card-container">
            <FoodDetails 
                foodImage="https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp"
                restaurantName="Pizza Palace"
                ratings="4.5 stars"
                location="123 Main St, Cityville"
                foodDescription="Delicious pepperoni pizza with fresh ingredients."
            />
             <FoodDetails 
                foodImage="https://rakskitchen.net/wp-content/uploads/2013/08/9634876480_20d7ac8196_o.jpg"
                restaurantName="Udupi Vihara"
                ratings="4.25 stars"
                location="1st Main Road ,Udupi"
                foodDescription="South Indian Food."
            />
             <FoodDetails 
                foodImage="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200825162617/iStock-980462262.jpg"
                restaurantName="Machli"
                ratings="4.5 stars"
                location="Airport Road, Mangalore"
                foodDescription="Seafood Specialties."
            />
             <FoodDetails 
                foodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9iRJd6qbAblgaIm2z0Nh0bTPnNYUJEkVg&s"
                restaurantName="Dominos"
                ratings="4 stars"
                location="4th Main Road,Mysore"
                foodDescription="Tasty Pizzas and Sides."
            />
             <FoodDetails 
                foodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkaFlADmQCD6JkXwM3nJZbgRiynKLZMgsKw&s"
                restaurantName="KFC"
                ratings="4.5 stars"
                location="Nexus Mall, Bangalore"
                foodDescription="Fried Chicken and More."
            />
             <FoodDetails 
                foodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4UbxnY6tU-fR_dQXCn57rb4CQnKdqBWnpQ&s"
                restaurantName="Indian Coffee House"
                ratings="4.1 stars"
                location="Main road , Kasargod"
                foodDescription="Traditional South Indian Coffee and Snacks."
            />
             <FoodDetails 
                foodImage="https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_5QC4HBC039RJ406SQH4UBH3695-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXbs"
                restaurantName="Pizza Hut"
                ratings="4 stars"
                location="HOme Groud,Hublic"
                foodDescription="Variety of Pizzas and Italian Dishes."
            />
             <FoodDetails 
                foodImage="https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705059.jpg?k=9e078265b31ad1815a573da8ed2a665f863e3925e1efd730df703421868a2ada&o="
                restaurantName="Taj Hotel"
                ratings="5 stars"
                location="MG Road, Bangalore"
                foodDescription="Luxury Dining Experience."
            />
             <FoodDetails 
                foodImage="https://media.gettyimages.com/id/157774909/photo/frappuccino-beverage-from-starbucks-coffee.jpg?s=612x612&w=gi&k=20&c=a9Yx_2GJ37TfadD-RJvTtb3fQPCFfp-ArjaqEzkULMc="
                restaurantName="Starbucks"
                ratings="4.5 stars"
                location="Brigade Road, Bangalore"
                foodDescription="Coffee and Beverages."
            />
             <FoodDetails 
                foodImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Vq946lcVAUxxQUS6mfW1jrIzYQggLto6fA&s"
                restaurantName="Mr Bhel Bhandar"
                ratings="4.5 stars"
                location="City Center, Mumbai"
                foodDescription="Famous Bhel Puri and Street Food."
            />
            </div>
        </div>
    )
}

rootElement.render(<AppLayout />);

