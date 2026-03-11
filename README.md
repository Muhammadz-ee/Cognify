<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://cognify-development.vercel.app/images/cognify-logo.svg" />
</div>

# Run and deploy the app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js
### Installation

1. Clone the repository:
```bash
git clone https://github.com/Muhammadz-ee/Cognify.git
cd Cognify
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Deploy on Other Platforms

- **Docker**: Create a Dockerfile for containerization
- **GitHub Pages**: Configure `.github/workflows` for auto-deployment
- **Traditional Hosting**: Build and upload the `out` folder

## Project Structure

```
cognify/
├── pages/
├── components/
├── styles/
├── public/
└── package.json
```

## Technologies Used

- Next.js
- React
- Node.js
- Vercel

## Contributing

Pull requests are welcome. For major changes, open an issue first.

## License

This project is licensed under the MIT License.

## Support

For issues and questions, visit [GitHub Issues](https://github.com/Muhammadz-ee/Cognify/issues).