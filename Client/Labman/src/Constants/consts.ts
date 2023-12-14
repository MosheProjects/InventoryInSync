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



export const USERS_INFO_FIELDS=
[
  { he: "שם מלא", en: "name", id: "full-name" },
  { he: "מספר טלפון נייד", en: "phone_number", id:"phone-number" },
  { he: "שם ענף/חברה", en: "group", id: "group" },
]
export const LENDING_FORM_FIELDS = [
  { he: "בודק/ת", en: "QA", id: "Qa" },
  { he: "הערות", en: "comments", id: "comments" },
];

export interface categoryFields {
  cables: string[];
  computers: string[];
  usb_sticks: string[];
  components: string[];
  generalProducts: string[];
}
export const FIELDS_OF_CATEGORIES:categoryFields = {
  cables: ["שם רתמה", "מספר קטלוגי", "לאיזה כלי", "הערות", "כמות זמינה"],
  computers: [
    "שם מחשב",
    "מספר צ",
    "סוג",
    "חתימה",
    "סוג",
    "הערות",
    "כמות זמינה",
  ],
  usb_sticks: [
    "שם",
    "מקום אחסון",
    "למי שייך",
    "בוט-אבל",
    "מספר קטלוגי",
    "לאיזה כלי",
    "הערות",
    "כמות זמינה",
  ],
  components: [
    "שם מכלוןל",
    "מספר צ",
    "לאיזה כלי",
    "חתימה",
    "מספר קטלוגי",
    "הערות",
    "כמות זמינה",
  ],
  generalProducts: [
    "שם",
    "מספר צ",
    "קטגוריה",
    "לאיזה כלי",
    "חתימה",
    "מיקום",
    "מספר קטלוגי",
    "הערות",
    "כמות זמינה",
  ],
};