<br />
<div align="center">

<h3 align="center">ESP32 Weather Station</h3>

<a href="https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9">
    <img src="images/Yellow Umbrella.png" alt="Logo" width="180" height="180">
  </a>

  <p align="center">
    The ESP32 Weather Station with a Node.js Website is a DIY project designed to provide real-time temperature and humidity monitoring and visualization. This project utilizes an ESP32 microcontroller and a DHT11 temperature sensor to collect temperature and humidity data. The collected data is then sent to a Node.js server, which hosts a user-friendly website. Users can access this website to view the temperature and humidity data in a visually appealing format. The project offers a practical and accessible way to monitor temperature and humidity fluctuations. Whether for personal use or educational purposes, this project offers an excellent starting point for building a fully customised weather station.
    <br />
    This repository contains all the required tools and code to create this weather station ESP32 application.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
  ## Table of Contents
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
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#demonstration">Demonstration</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#bibliography">Bibliography</a></li>
  </ol>

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

### Setup

1. Fork this Repo and open it with VS Code
2. Install all required installations with NPM demonstrated in the "Prerequisites" section of this file
3. Setup the wiring of the ESP32 and DHT11 temperature sensor detailed in the next section and connect it to your computer through a USB cable
4. Select the correct port and board 
5. Run the code using the command in the terminal "node script.js"
6. Open the localhost:3000 server and observe the results!


### Wiring
![image](https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/ebff2e6f-0dfa-4960-a72c-b681ca0a93a0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Demonstration -->
## Demonstration

<img width="1271" alt="Screenshot 2023-10-16 at 11 29 51 am" src="https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/4c8b31f8-6bfb-4546-b709-69f402387a3b">
(No CSS)

<br></br>

![image](https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/4059154e-d2f1-4e1f-931e-eb1e6571402b)
(With CSS)

<br></br>

![image](https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/d8154117-583b-4d53-b9f1-d6bd4f229869)
DHT11 Image

<br></br>

![image](https://github.com/leolinkebrown/IoT_Assignment_LHLB_IT_9/assets/141324171/59c7432e-364c-4d9f-91ed-634ecae1a87b)
Connected Wiring Image 




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
- Temperature Sensor - ESP32-S2 - — ESP-IDF Programming Guide latest documentation. (n.d.). Docs.espressif.com. Retrieved October 18, 2023, from https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/api-reference/peripherals/temp_sensor.html#:~:text=The%20ESP32%2DS2%20has%20a
- ESP32 - Temperature Sensor. (n.d.). ESP32 Tutorial. Retrieved October 18, 2023, from https://esp32io.com/tutorials/esp32-temperature-sensor
- ESP32 DS18B20 Temperature Sensor with Arduino IDE (Single, Multiple, Web Server) | Random Nerd Tutorials. (2019, July 14). https://randomnerdtutorials.com/esp32-ds18b20-temperature-arduino-ide/
- Adams, E. (2020, November 4). How to Build Your Own ESP32 Temperature Monitor. Initial State. https://medium.com/initial-state/how-to-build-your-own-esp32-temperature-monitor-6967b797b913
- Interface DHT11 DHT22 with ESP32 & Display Values Using Web Server. (2018, August 16). Last Minute Engineers. https://lastminuteengineers.com/esp32-dht11-dht22-web-server-tutorial/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
