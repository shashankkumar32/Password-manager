
import { createContext, useContext } from "react";
interface Listing {
  id: number;
  company: string;
  login: string;
  password: string;
  token: string;
  link: string;
  tags: string[];
  color: string;
}


interface ListingContext {
  action: boolean;
  reload: boolean;
  listingdata: Listing[];
  allpassworddata: any;
  addPassword: (password: any) => void;
  addProduct: (product: Listing) => void;
  setActionState: (data: boolean) => void;
  setReloadAction: (data: boolean) => void;
}

export const ListingContext = createContext<ListingContext>({
  action: false,
  reload: false,
  listingdata: [],
  allpassworddata: [],
  addPassword(password) {},
  addProduct(product) {},
  setActionState(data) {},
  setReloadAction(data) {},
});

export const useListingContext = () => useContext(ListingContext);
