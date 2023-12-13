export interface CATAGORY_OBJECT_TYPE {
  he: string;
  en: string;
}

export const EQUIPMENT_CATAGORIES: CATAGORY_OBJECT_TYPE[] = [
  { he: "רתמות", en: "cables" },
  { he: "מחשבים", en: "computers" },
  { he: "דיסק און קי", en: "usb_sticks" },
  { he: "מכלולים", en: "components" },
  { he: "ציוד היקפי", en: "generalProducts" },
];

export const USERS_INFO_FIELDS = [
  { he: "שם מלא", en: "name", id: "full-name" },
  { he: "מספר טלפון נייד", en: "phone_number", id: "phone-number" },
  { he: "שם ענף/חברה", en: "group", id: "group" },
];

export const LENDING_FORM_FIELDS = [
  { he: "בודק/ת", en: "QA", id: "Qa" },
  { he: "הערות", en: "comments", id: "comments" },
];
