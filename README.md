[1/7] - URL SHORTENER <br>
Mini projects to master Backend. <br>
Concepts covered: Routing, REST APIs, status codes, Schema Design. <br>
Just look at the image below you will get the whole idea of problem statement and proposed solution.

HLD and Concept :
<img width="1600" height="1262" alt="image" src="https://github.com/user-attachments/assets/2878429f-0c94-4208-be2c-a7e7c0bd7258" />

<br>
The Core Logic and flow 
Architecture: 

     POST /shorten
          │
          ▼
      Route
          │
          ▼
     createShortUrl()
          │
          ▼
      MongoDB
          │
          ▼
     Return Short URL

---------------------
      GET /:shortCode
             │
             ▼
         Route
             │
             ▼
        redirectUrl()
             │
             ▼
        Find in MongoDB
             │
    ┌──────────┴──────────┐
    │                     │
    Found               Not Found
    │                     │
    ▼                     ▼
    res.redirect()         404 Error
-------------------
