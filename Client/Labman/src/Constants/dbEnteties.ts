export interface CABLES {
  id:number
  name: string
  related_vehicle: number
  comments: string 
  order_id: string
  quantity: string
  is_available: boolean
}
export interface COMPONENTS {
  name: string;
  id: number;
  related_vehicle: string;
  signedBy: string;
  comments: string;
  is_available: boolean;
}

export interface COMPUTERS {
  name: string;
  id: number;
  type: string;
  signedBy: string;
  order_id: string;
  comments: string;
  is_available: boolean;
}

export interface GENERAL_PRODUCTS {
  name: string;
  id: number;
  category: string;
  related_vehicle: string;
  signedBy: string;
  comments: string;
  quantity: string;
  location: string;
  order_id: string;
  is_available:boolean
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
  id:number
  name: string;
  located: string;
  belongesTo: string;
  bootable: number;
  order_id: string;
  comments: string;
  is_available:boolean

}

export interface USERS {
  name: string;

  phone_number: string;
  group: string;

  taken_items: TAKEN_ITEMS[];
}
