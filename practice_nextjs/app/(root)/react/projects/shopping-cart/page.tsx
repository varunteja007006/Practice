"use client";
import CustomPageHeader from "@/components/custom/CustomPageHeader";
import React, { useContext, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetShoppingData from "./hooks/useGetShoppingData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { cartContext } from "./context/cartContext";
import { RiDeleteBinLine } from "react-icons/ri";

function ShoppingCartPage() {
  const { shoppingData, error, isLoading } = useGetShoppingData();

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>Oops something went wrong</>;
  }

  if (!shoppingData) {
    return;
  }

  const context = useContext(cartContext);

  if (context) {
    context.setState(shoppingData);
  }

  const handleIncrement = (id: number) => {
    console.log("Increment");
  };

  const handleDecrement = (id: number) => {
    console.log("Decrement");
  };

  const handleRemoveAll = () => {
    console.log("remove all");
  };

  return (
    <CustomPageHeader pageHeading="Shopping Cart">
      <Card className="bg-black text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="mb-2">Shopping Cart</CardTitle>
            <CardDescription>
              Checkout here with your cart items.
            </CardDescription>
          </div>
          <div>
            <Button
              onClick={handleRemoveAll}
              variant="outline"
              className="text-black hover:bg-black hover:text-white"
            >
              <RiDeleteBinLine className="h-4 w-4 mr-2" />
              Remove All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {shoppingData &&
            shoppingData.length > 0 &&
            shoppingData?.map((item) => {
              return (
                <Card
                  key={item.id}
                  className="mb-2 rounded-sm bg-black text-white"
                >
                  <CardContent className="px-3 py-2 flex flex-row gap-2 justify-between">
                    <div className="flex flex-row gap-2">
                      <Image src={item.image} width={100} height={100} alt="" />
                      <div className="flex flex-col gap-2 items-start justify-center">
                        <p className=" font-semibold text-lg">{item.model}</p>
                        <p>${item.cost}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 items-center justify-center">
                      <Button
                        onClick={() => handleIncrement(item.id)}
                        variant="outline"
                        size="icon"
                        className="text-black hover:bg-black hover:text-white"
                      >
                        <MdOutlineKeyboardArrowUp className="h-4 w-4 " />
                      </Button>
                      <p>{item.quantity}</p>
                      <Button
                        onClick={() => handleDecrement(item.id)}
                        variant="outline"
                        size="icon"
                        className="text-black hover:bg-black hover:text-white"
                      >
                        <MdOutlineKeyboardArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </CardContent>
        <CardFooter>All Payments accepted.</CardFooter>
      </Card>
    </CustomPageHeader>
  );
}

export default ShoppingCartPage;
