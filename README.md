### 3box Chats on Foam Food Map

Decentralized chat threads on Foam map for NYC restaurants. Click on a restaurant location and see what people have said using 3box.js message threads and food data from Foam.  \ 

Pre-alpha version - please report bugs and make feature requests. \

### Motivation 

[Foam](https://www.foam.space/) provides decentralized spatial data for points on earth. Using Foam's smart contarcts and exposed APIs we can already begin to construct decentralzied versions of services like Yelp. 3box.js is a good match as it lets us easily build profiles for ethereum users and store information without centralized servers. 

### Next Steps

This application is intended to be used as a demo. It shows that with minimal development work we can already create decentralized threads that can be used to review restaurants around New York. More features are required to make an application like this scalable and secure:

- Better reputation systems : need a way to prevent spam and identify which users are reporting true information 
- Moderation system : need a way to consume posted data and filtyer based on what users find most valuable
- UX : obviously one thread per restaurant would get pretty crowded pretty quick. We need better UX on the message threads to display recent information, most valuable comments, and profile information 
- Performance : need load performance improvements for websocket fetches and live chat feeds 

#### Available Scripts

Users must have Metamask to use. 

In the project directory, run:

`npm install` then `npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Tools
Foam api - https://f-o-a-m.github.io/foam.developer/examples/foam_map_api.html \
3box.js - https://github.com/3box/3box-js\


#### License

`MIT License`

