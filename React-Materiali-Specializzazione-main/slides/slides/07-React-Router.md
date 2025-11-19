---
revealOptions:
  transition: 'fade'
---

---

<img src="https://aulab.it/img/logo-aulab-horizontal-white.png">
<h3 class="r-fit-text">SPECIALIZZAZIONE REACT</h3>

---

# Creare sigle page app con React Router

---

## Obiettivi del modulo

* Definire Single Page Application <!-- .element: class="fragment" -->
* Creare una multi page React app con React Router <!-- .element: class="fragment" -->

---

## Definire Single Page Application

----

## Multi Page Application

<div class="mermaid">
sequenceDiagram
    participant B as Browser
    participant S as Static File Server
    B->>S: GET /
    S->>B: Responds with HTML page
    B->>B: Browser renders page
    par
      B->>S: GET /styles.css
      S->>B: Responds with css file
      B->>B: Browser applies styles
    and
      B->>S: GET /app.js
      S->>B: Responds with js file
      B->>B: Browser runs js
    end
    B->>B: User clicks link to about.html
    B->>S: GET /about.html
    S->>B: Responds with HTML page
    B->>B: Browser renders page
        par
      B->>S: GET /styles.css
      S->>B: Responds with css file
      B->>B: Browser applies styles
    and
      B->>S: GET /app.js
      S->>B: Responds with js file
      B->>B: Browser runs js
    end
</div>

----

## Single Page Application

> A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app. <!-- .element: class="fragment" -->

----

## Single Page Application

> In a SPA, a page refresh never occurs; instead, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.  <!-- .element: class="fragment" -->

[via Wikipedia](https://en.wikipedia.org/wiki/Single-page_application)

----

## Single Page Application

<div class="mermaid">
sequenceDiagram
    participant B as Browser
    participant S as Static File Server
    participant D as Dynamic JSON Server
    B->>S: GET /
    S->>B: Responds with HTML page
    B->>B: Browser renders page
    par
      B->>S: GET /styles.css
      S->>B: Responds with css file
      B->>B: Browser applies styles
    and
      B->>S: GET /app.js
      S->>B: Responds with js file
      B->>B: Browser runs js
    end
    B->>B: Browser shows about page and runs home page function
    B->>B: User clicks link to /about
    B->>B: Browser shows about page and runs about page function
    B->>D: GET /about-data.json
    D->>B: Responds with JSON data
    B->>B: Browser shows data on page
    B->>B: User clicks link to /
    B->>B: Browser shows home page and runs home page function
</div>

---

## Creare una multi page React app con React Router

---

## Obiettivi modulo recap

* Definire Client Side Routing e Single Page Application
* Creare una multi page React app con React Router
