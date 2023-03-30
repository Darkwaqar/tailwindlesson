# This is Lesson on of Tailwind

## Tailwindcss From plugin

### Step to include forms
1. Install the plugin from npm:
`npm install -D @tailwindcss/forms` or `pnpm install -D @tailwindcss/forms`
2. then add the plugin to your tailwind.config.js file:
`// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}`
3. remove all the classed and add to base layar with the type selector add all the style there
`@layer base {
    [type='text'],
          [type='email'],
          [type='url'],
          [type='password'],
          [type='number'],
          [type='date'],
          [type='datetime-local'],
          [type='month'],
          [type='search'],
          [type='tel'],
          [type='time'],
          [type='week'],
          [multiple],
          textare,
          select{
            /* border-radius: theme('borderRadius.lg'); */
            @apply w-full 
            border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500
          }
          [type='checkbox'], [type='radio']{
           @apply rounded border-gray-300 
              text-indigo-500 focus:ring-indigo-500
          }
          
}`
4. wolla your done every sytle in the project will have same size and color and theme

## preivew
![alt text](preview.png)