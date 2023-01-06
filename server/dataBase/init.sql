BEGIN;

DROP TABLE IF EXISTS users, products, orderHistory CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  phone VARCHAR (255) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  type TEXT,  -- airpods, iphones, ipads
  name TEXT,
  model TEXT,
  image TEXT,
  description TEXT, 
  price VARCHAR (255)
);
CREATE TABLE orderhistory(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_ids VARCHAR(255),
  total_price VARCHAR(255),
  order_date timestamp,
  payment_card_number VARCHAR(255)
);



INSERT INTO users (username, email, password,age,phone) VALUES ('aa', 'a@a', '123','25','0505555555');
INSERT INTO orderhistory ( user_id, total_price, order_date, payment_card_number, product_ids) VALUES ( 1, 100.00, '2021-01-01', '1234-5678-9012-3456', '[1,2,3]');




INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad (7th generation)', 'iPad7,12', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYK4JrD-iT11GvC9c9mDG0BQhPtHdQMnr8w&usqp=CAU', 'The display is now a 10.2” Retina display. Powered by the Apple A10 chipset and available with either 32 or 128GB of storage, the iPad now supports Apple Pencil and the Apple Smart Keyboard. There’s even a headphone jack here. The new iPad OS makes the rounds here, allowing for improved multitasking, external storage support, and overall better iPad experience. The Wi-Fi 7th gen iPad starts at $329 for the 32GB version, while the 128GB will cost you $429. The Wi-Fi + Cellular iPad costs $429 for the 32GB one, while the 128GB one costs $599.', 1155);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad (8th generation)', 'iPad11,6', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlgrDmm3MZte_Web6HSQimwQ-mH_2CujKtQ&usqp=CAU', 'The Apple iPad (2020) specs include Apple A12 Bionic chipset, 10.2-inch Retina display, 32GB/128GB storage and iPadOS 14. The tablet is available for the starting price of $329.', 1200);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad (9th generation)', 'iPad12,1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlglsN1zjdGvZfP2TvTfIyDFghCYWtwihm-w&usqp=CAU', 'The iPad 10.2 (2021) is offering 10.2 inch display that supports Apple Pencil and it has Wi-Fi only model or with LTE enabled. The tablet comes with 8526mAh battery, Apple A13 Bionic processor and offers two internal storage variants - 64GB or 256GB.', 2399);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad Air', 'iPad4,1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoL2gZrclbMri0jgtNK8cYbAD0V8bxfaKJLA&usqp=CAU', 'Here are the iPad Air 1`s basic specs: A7 processor chip with 64bit architecture and M7 motion coprocessor. 9.7-inch (diagonal) LED-backlit MultiTouch Retina display with IPS technology, 2048×1536 resolution at 264 pixels per inch (ppi) and fingerprint-resistant oleophobic coating.', 1549);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad Air 2', 'iPad5,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbTlOT0AJPedxAbTigh15t96y7rcCg4W7Nw&usqp=CAU', 'The iPad Air 2 is technically Apple`s sixth generation iPad, and the second to carry the `Air` moniker. It`s slightly thinner than the original Air, but differs little in appearance. The main changes are under the hood: the tablet runs on iOS 8 and is powered by Apple`s A8X chip, and it gets a higher-resolution 8-megapixel camera.', 1899);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad Air (3rd generation)', 'iPad11,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRW2CFfARe4juBQpXQgSPrVMIVANo5qpE4Q&usqp=CAU', 'The iPad (2022) comes with 10.9-inch display and Apple A14 Bionic processor. Specs also include Single camera on the back with 12MP and 64GB or 256GB internal storage options.', 1999);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad Air (4th generation)', 'iPad13,1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2G1jBEgj5Hn2mgOAXgozr3Pfj0wrk8XLsvA&usqp=CAU', 'The Apple iPad Air (2020) or 4th generation is the first Apple device powered by the next-gen 5nm A14 Bionic chipset. Other specs include a 10.9-inch Liquid Retina display, 12MP main camera, USB Type-C, and five new colors.', 2199);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad Air (5th generation)', 'iPad13,16', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VPieHW6kTz-089aPw47GxFLUYweZ6zbggQ&usqp=CAU', 'The Apple iPad Air (2022) or 5th generation is the first Apple device powered by the next-gen Apple M1 chipset. Other specs include a 10.9-inch Liquid Retina display, 12MP main camera, USB Type-C and 12MP front Selfie camera.', 2399);
INSERT INTO products (type, name, model, image, description, price) VALUES ('ipad', 'iPad Pro (11-inch)', 'iPad8,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOxf6fCnGxJwM9ACs8yk-eEJ37BFTQekJew&usqp=CAU', 'The Apple iPad Pro is the largest iPad in Apple`s tablet lineup with a 12.9-inch diplay that makes it a perfect tool for productivity. The iPad Pro has tight intergration and support for the Microsoft Office suite and creative Adobe apps, and it comes with two key accessories: the Smart Keyboard that docks to the tablet via a dedicated magnetic connector on the slate, and the new Apple Pencil that supports various levels of pressure that allow you to draw with great precision. These two accessories are sold separately. On its own, the iPad Pro is a powerful tablet featurign the Apple A9X system chip. In terms of design, it keeps the iPad Air styling and is about as lightweight as the original iPad.', 3699);
INSERT INTO products (type, name, model, image, description, price) VALUES ('airpods', 'AirPods (1st generation)', 'AirPods1,1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IEzqwi2D3FFKrMV50-MFcMwgSwFRhM40w&usqp=CAU', 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.', 259);
INSERT INTO products (type, name, model, image, description, price) VALUES ('airpods', 'AirPods (2nd generation)', 'AirPods2,1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4OmkQlKEqqADJewxEOVLOaacZauzRRfUkHaNvhnea7jKneMm6bvMEBZakHpq4y6Gr9w&usqp=CAU', 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.', 450);
INSERT INTO products (type, name, model, image, description, price) VALUES ('airpods', 'AirPods (3rd generation)', 'AirPods1,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKkKCBz9SSIH-NFpq-RZuppORI1-s1q68Le_E1m18xaHk1SFvPTXeR8wcnCmI1rtPKJ8&usqp=CAU', 'Personalized Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies, and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or theater.', 600);
INSERT INTO products (type, name, model, image, description, price) VALUES ('airpods', 'AirPods Max', 'AirPodsMax1,1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQaRHB3keRetFJJQKlNeGLoTmnsab5IqUzw&usqp=CAU', 'Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.', 1920);
INSERT INTO products (type, name, model, image, description, price) VALUES ('airpods', 'AirPods Pro', 'AirPods2,2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiXzso7kvE1K4YgkfYfmbcr-lejnBF1LD6A&usqp=CAU', 'The new Apple‑designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom‑built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition — so every sound is more vivid than ever.', 650);
INSERT INTO products (type, name, model, image, description, price) VALUES ('airpods', 'AirPods Pro (2nd generation)', 'AirPodsPro1,2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaQX6LXYGV3XaZMwUUB3Lo_o59aeFv-nfrQ&usqp=CAU', ' The new Apple‑designed H2 chip is the force behind AirPods Pro and its advanced audio performance. It works in concert with a custom‑built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition — so every sound is more vivid than ever.', 850);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 12', 'iPhone13,2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3xr7fXvRppMr89vDKcWJKM0x5ZPzTeTUVQ&usqp=CAU', 'The iPhone 12 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less). Both models: HDR display.', 2549);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 12 Pro', 'iPhone13,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX6wdf6r1H-7ziPMzw5PoIcVhBHfbtZEUDX9ywSkKxCz-p-Biz2qXh_4zLrDtyaeF_gM&usqp=CAU', 'The iPhone 12 Pro features a 6.1-inch display (a bit bigger than the 5.8 on the iPhone 11 Pro) and starts at a price of $1,000, and arrives in Apple`s three signature colors: silver, graphite, and gold, as well as a fourth, brand new color option, a blue model. Storage for the base model is 128GB, and you can also buy a 256GB and a 512GB versions.', 2899);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 12 Pro Max', 'iPhone13,4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CYElX9v8EO52YTgkiK2W5fHh99NQMW07DQ&usqp=CAU', 'The iPhone 12 Pro Max has a 6.7-inch screen (slightly larger than the 6.5 on the iPhone 11 Pro Max), and its base price is set at $1,100. It arrives in the same choice of colors: silver, graphite, gold and the new blue option, and it is also offered in the same storage capacities: 128GB, 256GB, and 512GB.', 3099);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 13', 'iPhone14,5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zBJtY-a8BH0wGOYpPCtx5Klfs0kvORCTLYchqVQko8ospf6jnBTQh-GSb8uRLUCeo1Y&usqp=CAU', 'The iPhone 13 is the successor to Apple`s best selling iPhone 12, and it improves upon a successful formula: $800 price for a flagship processor and a 6.1-inch screen size that is not too large, nor too small. The iPhone 13 brings a new Apple A15 Bionic chip and improvements to the dual camera setup consisting of a wide and ultra-wide camera.', 3099);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 13 Pro', 'iPhone14,2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyN6K0W4CVraGoy6Kksxtdh96OmQ9wnOpYzg&usqp=CAU', 'The iPhone 13 Pro is Apple`s smaller premium iPhone with a 6.1 screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.', 3599);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 13 Pro Max', 'iPhone14,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkVyt6VcuA9neLAePuee90IxVqGfc8OvsyVqJR54LIGSAokYVCq2TtnbEqzVWafSBmMY&usqp=CAU', 'The iPhone 13 Pro Max is Apple`s biggest phone in the lineup with a massive, 6.7 screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. The benefit of such a gigantic phone is that it also comes with the biggest battery of all iPhone 13 series. Apple also introduces improvements to all three cameras on the Pro Max, the wide, ultra-wide and telephoto zoom ones, but there is no periscope style long-range zoom like on many Android phones.', 3799);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 14', 'iPhone14,7', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_5J5fH__uZoQJmUqZBjOfZNvuzxSwunFjA&usqp=CAU', 'iPhone 14 has the same superspeedy chip that`s in iPhone 13 Pro. A15 Bionic, with a 5‑core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultrafluid. An updated internal design delivers better thermal efficiency, so you can stay in the action longer.', 3999);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 14 Pro', 'iPhone15,2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SxnJUxhw_Vfi8fboVI9lYRtsvlZ6elBmPw&usqp=CAU', 'The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision, and a Face ID Dynamic Island that allows Apple to utilize an always-on display feature, which dims the lock screen similarly to an Apple Watch.', 4399);
INSERT INTO products (type, name, model, image, description, price) VALUES ('iphone', 'iPhone 14 Pro Max', 'iPhone15,3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8EakXL5FARpklyBnLh-TYxtTMfGs0TA4iA&usqp=CAU', 'The iPhone 14 Plus comes with 6.7-inch OLED display with 120Hz refresh rate and Apple`s improved Bionic A16 processor. On the back there is a Triple camera setup with 48MP main camera.', 4699);
COMMIT;

-- INSERT INTO reviews (user_id, Review, postDate) VALUES (1, 'random', now());