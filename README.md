Certainly, here's the entire structure in Markdown format:

markdown Copy code

# OTP Verification - Frontend

This repository contains the frontend code for the OTP Verification Exercise. The goal is to design two screens where a user can enter their mobile number, receive an OTP (One-Time Password) via a REST API, enter the OTP for verification, and see a success or failure message.

## Table of Contents

- [Screens and Workflow](#screens-and-workflow)
- [Design](#design)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Custom Approach](#custom-approach)
- [Minimum Requirements](#minimum-requirements)
- [Backend API](#backend-api)
- [Git Repository](#git-repository)
- [Suggested Folder Structure](#suggested-folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Screens and Workflow

The OTP verification process involves two screens:

1. **Mobile Number Screen (Screen 1):**

   - Allows users to enter their mobile number.
   - Provides the option to change the country if required.
   - Clicking on "Send OTP" triggers OTP generation via a REST API.

2. **OTP Verification Screen (Screen 2):**
   - Asks users to enter the OTP number by number.
   - Displays the generated OTP via a snackbar (on-screen notification).
   - Clicking on "Verify OTP" sends the OTP for verification via a REST API.
   - Displays a success screen or a failure snackbar based on OTP verification result.
3. **Success Screen (Optional):**
   - Optionally, you can implement a success screen for a successful OTP verification.

Please note that you can also choose to display the success message on Screen 2 itself.

## Design

The sample design for the OTP Verification screens can be found [here](https://www.figma.com/file/NW3SHq44yjrP0m54WL8Nwo/Login_dev?node-id=0%3A1). You are encouraged to match the design as closely as possible.

## Getting Started

Follow these steps to get the frontend of the OTP Verification Exercise up and running locally.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/damodar-reddy-pochampelly/otp-frontend.git
   Install dependencies:
   ```

bash Copy code npm install Start the development server:

bash Copy code npm start The application will start locally and can be accessed in your web browser at http://localhost:3000.

Usage Open the application in your web browser.

Navigate through the screens following the workflow described above.

Custom Approach Feel free to implement your own custom approach to achieving the OTP verification process while keeping it as simple as possible.

Minimum Requirements Ensure the following minimum requirements are met:

Basic validations for fields (e.g., mobile number should be 10 digits and contain only numbers). Successful OTP verification should lead to a success screen. Failed OTP verification should display a proper error message. Backend API The backend API for OTP generation and verification is hosted at https://otp-generator-cadz.onrender.com.

Git Repository https://github.com/damodar-reddy-pochampelly/otp-frontend.git
