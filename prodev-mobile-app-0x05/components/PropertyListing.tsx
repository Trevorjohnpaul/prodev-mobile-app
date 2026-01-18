import { View } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { PropertListing } from "@/interfaces";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View style={{ rowGap: 10 }}>
      {listings.map((listing, index) => (
        <PropertyListingCard key={index} {...listing} />
      ))}
    </View>
  );
};

export default PropertyListing;
