# Social Media Analyser (SMA)

The **Social Media Analyser (SMA)** is a powerful AI-powered tool designed to provide instant insights and optimization suggestions for your social media strategy. It leverages advanced analytics and machine learning to help you make data-driven decisions and grow your online presence.

---

## Features

- **AI-Powered Analysis**: Get instant insights into your social media performance.
- **Prebuilt Prompts**: Use prebuilt prompts for quick analysis of engagement, trends, and optimization strategies.
- **Custom Prompts**: Submit custom prompts for tailored analysis.
- **Real-Time Streaming**: Stream real-time updates for ongoing analysis.
- **User-Friendly Interface**: Intuitive and responsive design for seamless user experience.
- **Dark Mode Support**: Switch between light and dark themes for comfortable usage.

---

## Technologies Used

- **Frontend**:
  - React (with TypeScript)
  - Vite (for fast development and bundling)
  - Tailwind CSS (for styling)
  - Framer Motion (for animations)
  - Lucide React (for icons)

- **Backend Integration**:
  - Langflow API (for AI-powered analysis)
  - Proxy Server (to handle CORS issues during development)

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarthaknimbalkar/social-media-analyser.git
   cd social-media-analyser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Langflow API token:
   ```env
   VITE_LANGFLOW_TOKEN=your_application_token_here
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Project Structure

```
social-media-analyser/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions and services
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

---

## Usage

### Prebuilt Prompts

The application provides prebuilt prompts for quick analysis. Click on any prompt card to see the analysis results.

### Custom Prompts

1. Enter your custom prompt in the search bar.
2. Click **Submit** to get tailored insights.

### Streaming Analysis

For real-time analysis, enable the **Stream** option when running a flow. The results will be streamed directly to the output window.

---

## Configuration

### Environment Variables

- `VITE_LANGFLOW_TOKEN`: Your Langflow API token.

### Proxy Configuration

The project uses a proxy server to handle CORS issues during development. Update the `vite.config.ts` file to point to your backend API:

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.langflow.astra.datastax.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

---

## Contributing

We welcome contributions! If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Langflow API**: For providing the AI-powered analysis backend.
- **Vite**: For the fast and efficient development environment.
- **Tailwind CSS**: For the utility-first CSS framework.
- **Framer Motion**: For the smooth animations.

---

Enjoy using the **Social Media Analyser**! 🚀
