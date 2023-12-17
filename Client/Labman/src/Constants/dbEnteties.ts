export interface CABLES {
  name: string;
  order_id: string;
  related_vehicle: number;
  comments: string;
  quantity: number;
export interface COMPONENTS {
  name: string;
  vehicleNumber: string;
  related_vehicle: string;
  signedBy: string;
  order_id: string;
  comments: string;
  quantity: number;
}

export interface COMPUTERS {
  name: string;
  vehicleNumber: string;
  type: string;
  signedBy: string;
  order_id: string;
  comments: string;
  quantity: number;
}

export interface GENERAL_PRODUCTS {
  name: string;
  vehicleNumber: string;
  category: string;
  related_vehicle: string;
  signedBy: string;
  location: string;
  order_id: string;
  comments: string;
  quantity: number;
}

export interface TAKEN_ITEMS {
  item_name: string;
  item_category: string;
  users: USERS;
  date: Date;
  amount: number;
  status: string;
  comments: string;
  QA: string;
}

export interface USB_STICKS {
  name: string;
  located: string;
  belongesTo: string;
  bootable: number;
  order_id: string;
  related_vehicle: string;
  comments: string;
  quantity: number;
}

export interface USERS {
  name: string;
  phone_number: string;
  group: string;
  taken_items: TAKEN_ITEMS[];
}

export interface Visit {
  visiter: string;
  createdDate: string; 
  issuedBy:string;
  comments: string;

}