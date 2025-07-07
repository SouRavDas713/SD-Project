import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Restaurant. All rights reserved.</p>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li>Contact Us: <a href="mailto:info@myrestaurant.com">info@myrestaurant.com</a></li>
        </ul>
      </div>
      <style>
        {`
          footer {
            background-color: #f0f0f0;
            padding: 20px 0;
            text-align: center;
            font-size: 0.9em;
            color: #555;
          }

          .container {
            max-width: 960px;
            margin: 0 auto;
            padding: 0 20px;
          }

          ul {
            list-style: none;
            padding: 0;
            margin-top: 10px;
          }

          li {
            display: inline;
            margin: 0 10px;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;