import CodeGenerator from "./_CodeGenerator";

class ArduinoGenerator extends CodeGenerator {
  protected generateHeaderFile(url): string {
    return `#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("WiFi connected");
}

void loop() {
  HTTPClient http;
  http.begin("${this.baseUrl}${url}");
`;
  }

  protected generateFooterFile(url): string {
    return `  http.end();
}\n`;
  }

  protected generateMimeTypeHeader(): string {
    if (this.mimeType === 'application/json') {
      return `  http.addHeader("Content-Type", "application/json");\n`;
    } else if (this.mimeType === 'multipart/form-data') {
      return `  http.addHeader("Content-Type", "multipart/form-data");\n`;
    } else {
      return '';
    }
  }

  protected generateHeaders(): string {
    let headersCode = '';
    this.params
      .filter(param => param.in === 'headers')
      .forEach(param => {
        headersCode += `  http.addHeader("${param.name}", "${param.value}");\n`;
      });
    return headersCode;
  }

  protected generateQueryParams(): string {
    let queryParams = '';
    this.params
      .filter(param => param.in === 'query')
      .forEach(param => {
        queryParams += `  http.addQueryParameter("${param.name}", "${param.value}");\n`;
      });
    return queryParams;
  }

  protected generateJsonPostData(): string {
    let jsonData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          jsonData += `  // File upload not supported in JSON data\n`;
        } else {
          jsonData += `  StaticJsonDocument<200> doc;\n`;
          jsonData += `  doc["${param.name}"] = "${param.value}";\n`;
          jsonData += `  String json;\n`;
          jsonData += `  serializeJson(doc, json);\n`;
          jsonData += `  http.sendRequest("POST", json);\n`;
        }
      });
    return jsonData;
  }

  protected generateMultipartPostData(): string {
    let multipartData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        if (param.type === 'file') {
          multipartData += `  http.addFileToUpload("${param.path}", "${param.name}");\n`;
        } else {
          multipartData += `  http.addFormField("${param.name}", "${param.value}");\n`;
        }
      });
    return multipartData;
  }

  protected generateOtherPostData(): string {
    let postData = '';
    this.params
      .filter(param => param.in === 'postData')
      .forEach(param => {
        postData += `  http.addHeader("Content-Type", "application/x-www-form-urlencoded");\n`;
        postData += `  String data = "${param.name}=${param.value}";\n`;
        postData += `  http.sendRequest("POST", data);\n`;
      });
    return postData;
  }

  protected generateCookie(): string {
    let cookieCode = '';
    this.params
      .filter(param => param.in === 'cookie')
      .forEach(param => {
        cookieCode += `  http.addHeader("Cookie", "${param.name}=${param.value}");\n`;
      });
    return cookieCode;
  }
}

export default ArduinoGenerator;
