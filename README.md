# VroomVault

A TypeScript / Next.js / React-based app that fetches data from a car API to display various car models with a fully functional search bar and filter components.

[Live Project Link](https://car-showcase-93id.vercel.app/)

## How It's Made

**Tech Stack**:  
- **Frontend**: TypeScript, React, Next.js, Tailwind CSS
- **UI Components**: Headless UI
- **API**: Car data fetched from RapidAPI

## Optimizations

This project serves as a strong starting point for displaying car models with search and filter features. Future optimizations could include expanding the app's functionality, adding more robust filtering options, or exploring ways to improve performance.

## Lessons Learned

Working on this app provided valuable experience in the following areas:

- **TypeScript**: Building components with TypeScript improved code structure and type safety, which will be especially useful for scaling and maintaining the app.
- **Component Organization**: Organized components, constants, types, utils, and hooks. This structure, though initially time-intensive, simplifies scaling and maintenance in the long run.
- **Next.js & Server-Side Rendering (SSR)**: Originally built with server-side rendering, but switched to client-side due to an issue in Next.js 13 where interacting with the search or filter components caused unwanted page scrolling. As of Nov 4, 2023, I intend to revisit this issue with the release of Next.js 14 to see if it has been resolved.

## How to Use

1. **Visit the Live Link**: Click the [project link](https://car-showcase-93id.vercel.app/) to access the app's landing page.
2. **Explore the Car Catalog**: Scroll down to view the car catalog, where you can:
   - **Search** by car make and model.
   - **Filter** results by year, fuel type (gas or electric), etc.
3. **Note**: This project focuses on frontend functionality and pulling data from RapidAPI. As such, external links are currently disabled and serve as placeholders.

---
## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as long as the original license is included in any substantial portions of the code. See the [LICENSE](./LICENSE) file for more details.

