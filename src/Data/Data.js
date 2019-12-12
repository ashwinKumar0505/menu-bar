const menuItems = {
  value: "menu-items",
  id: 1,
  items: [
    {
      value: "Fashion",
      id: 11,
      items: [
        {
          id: 111,
          value: "back",
        },
        {
          value: "Men",
          id: 112,
          items: [
            {
              id: 1123,
              value: "back",
            },
            {
              id: 1124,
              value: "Shirts",
            },
            {
              id: 1125,
              value: "Jackets",
            },
            {
              id: 1126,
              value: "Chinos & Trousers",
            },
            {
              id: 1127,
              value: "Jeans",
            },
            {
              id: 1128,
              value: "T-Shirts",
            },
            {
              id: 1129,
              value: "Underwear",
            },
          ],
        },
        {
          value: "Women",
          id: 113,
          items: [
            {
              id: 1131,
              value: "back",
            },
            {
              id: 1132,
              value: "Jackets",
            },
            {
              id: 1133,
              value: "Knits",
            },
            {
              id: 1134,
              value: "Jeans",
            },
            {
              id: 1135,
              value: "Dresses",
            },
            {
              id: 1136,
              value: "Blouses",
            },
            {
              id: 1137,
              value: "T-Shirts",
            },
            {
              id: 1138,
              value: "Underwear",
            },
          ],
        },
        {
          value: "Children",

          id: 114,
          items: [
            {
              id: 1141,
              value: "back",
            },
            {
              id: 1142,
              value: "Boys",
            },
            {
              id: 1143,
              value: "Girls",
            },
          ],
        },
      ],
    },
    {
      value: "Electronics",
      id: 12,
      items: [
        {
          id: 121,
          value: "back",
        },
        {
          id: 122,
          value: "Camera & Photo",
        },
        {
          id: 123,
          value: "TV & Home Cinema",
        },
        {
          id: 124,
          value: "Phones",
        },
        {
          id: 125,
          value: "PC & Video Games",
        },
      ],
    },
    {
      value: "Furnitures",
      id: 13,
      items: [
        {
          id: 131,
          value: "back",
        },
        {
          id: 132,
          value: "Living Room",
          items: [
            {
              id: 1321,
              value: "back",
            },
            {
              id: 1322,
              value: "Sofas & Loveseats",
            },
            {
              id: 1323,
              value: "Coffee & Accent Tables",
            },
            {
              id: 1324,
              value: "Chairs & Recliners",
            },
            {
              id: 1325,
              value: "Bookshelves",
            },
          ],
        },
        {
          value: "Bedroom",
          id: 133,
          items: [
            {
              id: 1331,
              value: "back",
            },
            {
              id: 1332,
              value: "beds",
              next: "true",
              items: [
                {
                  id: 13321,
                  value: "back",
                },
                {
                  id: 13322,
                  value: "Upholstered Beds",
                },
                {
                  id: 13323,
                  value: "Divans",
                },
                {
                  id: 13324,
                  value: "Metal beds",
                },
                {
                  id: 13325,
                  value: "Storage Beds",
                },
                {
                  id: 13326,
                  value: "Wooden Beds",
                },
                {
                  id: 13327,
                  value: "Children's Beds",
                },
              ],
            },
            {
              id: 1333,
              value: "Bedroom Sets",
            },
            {
              id: 1334,
              value: "Chests & Dresses",
            },
          ],
        },
        {
          id: 134,
          value: "Home Office",
        },
        {
          id: 135,
          value: "Dining & Bar",
        },
        {
          id: 136,
          value: "Patio",
        },
      ],
    },
    {
      value: "Jewelery&watches",
      id: 14,
      items: [
        {
          id: 141,
          value: "back",
        },
        {
          id: 142,
          value: "Fine Jewelry",
        },
        {
          id: 143,
          value: "Fashion Jewelry",
        },
        {
          id: 144,
          value: "Watches",
        },
        {
          id: 145,
          value: "Wedding Jewelry",
          items: [
            { id: 1451, value: "back" },
            {
              id: 1452,
              value: "Engagement Rings",
            },
            {
              id: 1453,
              value: "Bridal Sets",
            },
            {
              id: 1454,
              value: "Women's Wedding Bands",
            },
            {
              id: 1455,
              value: "Men's Wedding Brands",
            },
          ],
        },
      ],
    },
  ],
};

export default menuItems;
