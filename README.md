# n8n-nodes-apaleo

![Apaleo Logo](nodes/Apaleo/apaleo.svg)

This package provides n8n nodes to interact with the [Apaleo API](https://docs.apaleo.com/), allowing you to automate workflows with Apaleo's property management system.

## Features

This integration provides two nodes:

- **Apaleo**: Perform operations on over 40 Apaleo resources including accounts, reservations, properties, and more
- **Apaleo Trigger**: Receive webhook events from Apaleo to trigger workflows

## Prerequisites

- [n8n](https://n8n.io/) (version 1.0.0 or later)
- Apaleo account with API credentials (Client ID and Client Secret)
- Node.js (version 20.15 or later)

## Installation

### In n8n Desktop / Self-hosted

1. Go to **Settings > Community Nodes**
2. Click on **Install**
3. Enter `n8n-nodes-apaleo` in the **Enter npm package name** field
4. Click on **Install**

### Manual Installation

1. Clone this repository:
   ```
   git clone https://github.com/apaleo/n8n-node.git
   ```
2. Navigate to the project directory:
   ```
   cd n8n-nodes-apaleo
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the package:
   ```
   npm run build
   ```
5. Link to your n8n installation:
   ```
   npm link
   ```
6. In your n8n installation directory:
   ```
   npm link n8n-nodes-apaleo
   ```

## Credentials

To use the Apaleo nodes, you need to set up credentials:

1. In n8n, go to **Credentials**
2. Click on **Create New**
3. Search for "Apaleo OAuth2 API"
4. Enter your Apaleo Client ID and Client Secret
5. Save the credentials

## Usage

### Apaleo Node

The Apaleo node allows you to interact with the following resources:

- Account management
- Availability checking
- Reservation management
- Property management
- Financial operations
- And many more

For each resource, you can select from available operations like GET, POST, PUT, DELETE, etc.

### Apaleo Trigger Node

Use this node to start workflows when specific events occur in Apaleo, such as:

- Reservation created
- Check-in completed
- Payment processed
- And more

## Development

If you want to contribute or modify the nodes:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start development mode:
   ```
   npm run dev
   ```
4. Make your changes
5. Build the package:
   ```
   npm run build
   ```
6. Test your changes locally

## License

[MIT](LICENSE.md)

## About Apaleo

[Apaleo](https://apaleo.com/) is a cloud-based property management system (PMS) that provides APIs for the hospitality industry, allowing seamless integration with various hotel systems and services.
