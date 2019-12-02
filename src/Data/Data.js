const menuItems= {
      value: "menu-items",
      id: 1,
      items: [
        {
          next: true,
          value: "Fashion",
          id: 2,
          items: [
            {
              value: "back",
            },
            {
              next: true,
              value: "Men",
              id: 3,
              items: [
                {
                  value: "back",
                },
                {
                  value: "Shirts",
                },
                {
                  value: "Jackets",
                },
                {
                  value: "Chinos & Trousers",
                },
                {
                  value: "Jeans",
                },
                {
                  value: "T-Shirts",
                },
                {
                  value: "Underwear",
                },
              ],
            },
            {
              value: "Women",
              next: true,
              id: 4,
              items: [
                {
                  value: "back",
                },
                {
                  value: "Jackets",
                },
                {
                  value: "Knits",
                },
                {
                  value: "Jeans",
                },
                {
                  value: "Dresses",
                },
                {
                  value: "Blouses",
                },
                {
                  value: "T-Shirts",
                },
                {
                  value: "Underwear",
                },
              ],
            },
            {
              value: "Children",
              next: true,
              id: 5,
              items: [
                {
                  value: "back",
                },
                {
                  value: "Boys",
                },
                {
                  value: "Girls",
                },
              ],
            },
          ],
        },
        {
          next: true,
          value: "Electronics",
          id: 6,
          items: [
            {
              value: "back",
            },
            {
              value: "Camera & Photo",
            },
            {
              value: "TV & Home Cinema",
            },
            {
              value: "Phones",
            },
            {
              value: "PC & Video Games",
            },
          ],
        },
        {
          next: true,
          value: "Furnitures",
          id: 7,
          items: [
            {
              value: "back",
            },
            {
              value: "Living Room",
              next: true,
              id: 8,
              items: [
                {
                  value: "back",
                },
                {
                  value: "Sofas & Loveseats",
                },
                {
                  value: "Coffee & Accent Tables",
                },
                {
                  value: "Chairs & Recliners",
                },
                {
                  value: "Bookshelves",
                },
              ],
            },
            {
              value: "Bedroom",
              next: true,
              id: 9,
              items: [
                {
                  value: "back",
                },
                {
                  value: "beds",
                  next: "true",
                  id: 10,
                  items: [
                    {
                      value: "back",
                    },
                    {
                      value: "Upholstered Beds",
                    },
                    {
                      value: "Divans",
                    },
                    {
                      value: "Metal beds",
                    },
                    {
                      value: "Storage Beds",
                    },
                    {
                      value: "Wooden Beds",
                    },
                    {
                      value: "Children's Beds",
                    },
                  ],
                },
                {
                  value: "Bedroom Sets",
                },
                {
                  value: "Chests & Dresses",
                },
              ],
            },
            {
              value: "Home Office",
            },
            {
              value: "Dining & Bar",
            },
            {
              value: "Patio",
            },
          ],
        },
        {
          next: true,
          value: "Jewelery&watches",
          id: 11,
          items: [
            {
              value: "back",
            },
            {
              value: "Fine Jewelry",
            },
            {
              value: "Fashion Jewelry",
            },
            {
              value: "Watches",
            },
            {
              value: "Wedding Jewelry",
              next: true,
              id: 12,
              items: [
                {
                  value: "back",
                },
                {
                  value: "Engagement Rings",
                },
                {
                  value: "Bridal Sets",
                },
                {
                  value: "Women's Wedding Bands",
                },
                {
                  value: "Men's Wedding Brands",
                },
              ],
            },
          ],
        },
      ],
    }

export default menuItems;