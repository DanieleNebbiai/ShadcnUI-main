"use client";

import { Heart, MapPin, Star, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/ThemeCard";
import { Button } from "@/components/ui/ThemeButton";
import { Typography } from "./Typography";
import { Image } from "@/components/ui/ThemeImage";

interface DestinationCardProps {
  name: string;
  location: string;
  image: string;
  thumbnails: string[];
  rating: number;
  distance: number;
  available: number;
  price: number;
  description: string;
}

export function DestinationCardComponent({
  name = "Nusa Pedina",
  location = "Bali, Indonesia",
  thumbnails = [
    "/placeholder.svg?height=60&width=60",
    "/placeholder.svg?height=60&width=60",
    "/placeholder.svg?height=60&width=60",
  ],
  rating = 4.8,
  price = 250,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est vel odio elementum non id venenatis, elementum. Enim augue velit tristique eu viverra. Massa.",
}: DestinationCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden">
      <CardHeader className="p-0 relative">
        <Image
          variant="default"
          src="https://picsum.photos/1000/1000"
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {thumbnails.map((_, index) => (
            <div key={index} className="w-2 h-2 " />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-4"
        >
          <Heart className="w-6 h-6" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-start my-4 ">
          <div>
            <Typography variant="h3" className="mt-2">
              {name}
            </Typography>
            <Typography variant="p" className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> {location}
            </Typography>
          </div>
          <Typography variant="p" className="flex items-center mt-2">
            <DollarSign className="w-5 h-5" />
            {price}
          </Typography>
        </div>
        <div className="flex justify-between text-sm mb-3">
          <span className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" /> {rating} (32k)
          </span>
        </div>
        <Typography variant="p" className="line-clamp-3">
          {description}
        </Typography>
      </CardContent>
      <CardFooter>
        <Button className="w-full ">Book A Trip</Button>
      </CardFooter>
    </Card>
  );
}
