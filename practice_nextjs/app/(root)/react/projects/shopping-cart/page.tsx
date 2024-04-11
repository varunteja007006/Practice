"use client";
import CustomPageHeader from "@/components/custom/CustomPageHeader";
import React, { useContext } from "react";
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

function ShoppingCartPage() {
  const { shoppingData, error, isLoading } = useGetShoppingData();
  const state = useContext(cartContext);

  if (isLoading) {
    return <>Loading</>;
  }

  if (error) {
    return <>Oops something went wrong</>;
  }

  return (
    <CustomPageHeader pageHeading="Shopping Cart">
      <Card className="bg-black text-white">
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
          <CardDescription>Checkout here with your cart items.</CardDescription>
        </CardHeader>
        <CardContent>
          {shoppingData.length > 0 &&
            shoppingData?.map((item) => {
              return (
                <Card key={item.id} className="mb-2 rounded-sm bg-gray-300">
                  <CardContent className="px-3 py-2 flex flex-row gap-2 justify-between">
                    <div className="flex flex-row gap-2">
                      <Image src={item.image} width={100} height={100} alt="" />
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <p className=" font-semibold text-lg">{item.model}</p>
                        <p>${item.cost}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 items-center justify-center">
                      <Button variant="outline" size="icon">
                        <MdOutlineKeyboardArrowUp className="h-4 w-4" />
                      </Button>
                      <p>{item.quantity}</p>
                      <Button variant="outline" size="icon">
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
