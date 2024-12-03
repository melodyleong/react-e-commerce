import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

export default function HomePage() {
    return (
        <>
            <Header title="GLOZZIO" />

            <main className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            imageUrl="/images/DarkBlueBlouse1.jpg"
                            productName="NavyBlue Blouse"
                            price="$50"
                        />
                    </div>
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            imageUrl="/images/PinkBlouse1.jpg"
                            productName="Pink Blouse with Aari designs"
                            price="$60"
                        />
                    </div>
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            imageUrl="/images/GreenBlouse1.jpg"
                            productName="Green Blouse with peach"
                            price="$40"
                        />
                    </div>
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            imageUrl="/images/PurpleBlouse1.jpg"
                            productName="Purple Blouse with stones"
                            price="$45"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}