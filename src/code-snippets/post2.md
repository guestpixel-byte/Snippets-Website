---
title: Hero Layout 1
tags: ["posts", "hero"]
URL: \code-preview\hero.html
cssCode: | 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
    }

    .hero {
        background: url('your-background-image.jpg') no-repeat center center/cover;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
    }

    .hero-content {
        max-width: 600px;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .cta-btn {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #007bff;
        color: white;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .cta-btn:hover {
        background-color: #0056b3;
    }

htmlCode: | 
    <section class="hero">
        <div class="hero-content">
            <h1>Your Hero Heading</h1>
            <p>Your subtext that gives more information about your heading and call to action.</p>
            <a href="#cta" class="cta-btn">Call to Action</a>
        </div>
    </section>
---