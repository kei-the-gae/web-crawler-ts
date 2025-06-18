# Web Crawler

This is a [guided project](https://www.boot.dev/courses/build-web-crawler-typescript) I completed as a part of the Boot.dev back-end developer curriculum. This is a web crawler that makes HTTP requests and parses HTML to generate reports on the amount of found internal links. This project focuses on CLI argument parsing, HTTP requests, and HTML parsing.

[![typescript](https://badgen.net/badge/TypeScript/5.8.3/blue?icon=https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)](https://www.typescriptlang.org/)
[![node.js](https://badgen.net/badge/Node.js/22.15.0/green?icon=https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg)](https://nodejs.org/en)

## Features

- Fetches and parses HTML from a given URL
- Provides a report on the number of internal links found

## Usage

Node version 22.15.0 is required to run this project and must be installed beforehand.

To install the application, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/kei-the-gae/web-crawler-ts.git web-crawler
cd web-crawler
```

Then run the following command to install the dependencies:

```bash
npm install
```

To run the application, use the following command:

```bash
npm run start "<url>"
```

where `<url>` is the URL of the website you want to crawl.
