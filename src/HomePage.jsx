import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

export default function HomePage() {
    return (
        <>
            <Header title="GLOZZIO" />

            <main className="container my-3">
                <h2 className="text-center mb-3">Featured Products</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <ProductCard
                            imageUrl="images/kiko3.jpg"
                            productName="KIKO"
                            price="10"
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <ProductCard
                            imageUrl="images/odette3.jpg"
                            productName="ODETTE"
                            price="10"
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <ProductCard
                            imageUrl="images/rose3.jpg"
                            productName="ROSE"
                            price="10"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}