<br />
<div align="center">

<h3 align="center">ESP32 Weather Station</h3>

<a href="https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9">
    <img src="images/Yellow Umbrella.png" alt="Logo" width="180" height="180">
  </a>

  <p align="center">
    The ESP32 Weather Station with a Node.js Website is a DIY project designed to provide real-time temperature and humidity monitoring and visualization. This project utilizes an ESP32 microcontroller and a DHT11 temperature sensor to collect temperature and humidity data. The collected data is then sent to a Node.js server, which hosts a user-friendly website. Users can access this website to view the temperature and humidity data in a visually appealing format. The project offers a practical and accessible way to monitor temperature and humidity fluctuations. Whether for personal use or educational purposes, this project offers an excellent starting point for building a fully customised weather station.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#demonstration">Demonstration</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#bibliography">Bibliography</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

- ESP32 Microcontroller
- DHT11 Temperature and Humidity Sensor
- USB-C Cable
- 3x Wires
- Arduino IDE
- VS Code
- GitHub
- Arc Browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To prepare all the required software installations for this project, follow these simple steps.

### Prerequisites

To prepare all the required software installations for this project, follow these simple steps.
<br></br>
npm installations - 
* serialport installation to view the output and send messages to the ESP32 serial monitor
  ```sh
  npm install serialport
  ```
* socket.io installation to enable communication between the client and server
  ```sh
  npm install socket.io
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
### Wiring
![image](https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/ebff2e6f-0dfa-4960-a72c-b681ca0a93a0)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Demonstration -->
## Demonstration

<img width="1271" alt="Screenshot 2023-10-16 at 11 29 51 am" src="https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/4c8b31f8-6bfb-4546-b709-69f402387a3b">


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Email - leo.linkebrown@cgs.act.edu.au

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Bibliography -->
## Bibliography

- KY-038 Microphone Sound Sensor Module with Arduino. (2021, December 7). Microcontrollers Lab. https://microcontrollerslab.com/ky-038-microphone-sound-sensor-module-arduino-tutorial/
- DHT11 ESP32 in Arduino Code: Measuring humidity & temperature. (n.d.). UPesy. Retrieved October 17, 2023, from https://www.upesy.com/blogs/tutorials/dht11-humidity-temperature-sensor-with-arduino-code-on-esp32-board#
- donsky. (2022, April 18). Using Node.js and React to display a chart of real-time sensor readings. Donskytech.com. https://www.donskytech.com/display-real-time-sensor-data-using-websockets/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
