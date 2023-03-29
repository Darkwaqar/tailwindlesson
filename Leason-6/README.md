# This is Lesson on of Tailwind

## 01: Setting up tailwind CSS 

### Steps to swtich from static webiste to react
1. Add dependies `pnpm i react react-dom` 
2. Add Dev Dependies `pnpm i -D @vitejs/plugin-react-refresh`
3. Add these line to content in tailwind.config.js `'./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'`
4. Add folder src.
5. Add main.jsx and App.jsx
6. Cut all the code in body and paste 
    `<div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>`
7. Move Css from root to src folder
7. Run the server `pnpm dev`

## preivew
![alt text](preview.png)