#include "DHT.h"  // Include the DHT library for working with the DHT sensors

#define DHTPIN 21  // Define the pin to which the DHT sensor is connected
#define DHTTYPE DHT11  // Specify the type of DHT sensor (DHT11 in this case)

DHT dht(DHTPIN, DHTTYPE);  // Create a DHT object with the specified pin and type

void setup() {
  Serial.begin(115200);  // Initialize serial communication with a baud rate of 115200
  dht.begin();  // Initialize the DHT sensor
}

void loop() {
  delay(1000);  // Pause for 1 second (1000 milliseconds) to prevent rapid sensor readings

  // Read the humidity and temperature values from the DHT sensor
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  // Check if the sensor readings are valid (not NaN, which stands for "Not a Number")
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Error: Failed to read valid data from DHT11 sensor.");
  } else {
    // Print the humidity and temperature values to the serial monitor
    Serial.print("Humidity: ");
    Serial.print(humidity);
    Serial.print("%, Temperature: ");
    Serial.print(temperature);
    Serial.println("°C");
  }
}
