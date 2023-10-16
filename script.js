// Import the 'http' and 'fs' modules for creating an HTTP server and reading files
var http = require('http');
var fs = require('fs');

// Read the content of the 'index.html' file and store it in the 'index' variable
var index = fs.readFileSync('index.html');

// Import necessary modules for serial communication with a hardware device
const SerialPort = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// Create a parser for reading data from the serial port, expecting lines ending with '\r\n'
const parsers = SerialPort.parsers;
const parser = new ReadlineParser({ delimiter: "\r\n" });

// Initialize the SerialPort to communicate with the hardware device
const port = new SerialPort.SerialPort({
  path: "/dev/cu.usbserial-10",  // Set the device path
  baudRate: 115200,  // Set the baud rate for serial communication
  dataBits: 8,  // Specify the number of data bits
  parity: "none",  // Specify no parity
  stopBits: 1,  // Specify the number of stop bits
  flowControl: false,  // Disable flow control
});

// Pipe the data received from the serial port through the parser
port.pipe(parser);

// Create an HTTP server using the 'http' module
var app = require('http').createServer(function(req, res){
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.end(index);  // Serve the 'index.html' content when a request is made
});

// Initialize a socket.io server on top of the HTTP server
var io = require('socket.io')(app);

// Event handler for when data is received from the serial port
parser.on("data", (data) => {
  console.log(data);  // Log the received data

  // Split the received data into an array, assuming it's formatted as comma-separated values
  const dataArray = data.split(",");
  
  // Check if the received data contains two values (humidity and temperature)
  if (dataArray.length === 2) {
    const humidity = dataArray[0];
    const temperature = dataArray[1];

    // Emit the humidity and temperature data to connected clients using socket.io
    io.emit('data', { humidity, temperature });
  }
});

// Start the HTTP server on port 3000
app.listen(3000);
