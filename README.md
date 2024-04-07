# Frontend Coding Test with Merquri

Using React and pure CSS.

## Project Structure

There are /components, /sections, and /css folders to separate codes.

## Run the app

Clone the project and run `npm start`.

## Things to improve

Build theme switch.

Create a `ThemeProvider` with `React.createContext`, wrap in `index.js`, then create a switch and handle change using `useState`.

The `theme` value will be appended to children component's `className`. Like `className="Search-result ${theme}`

Lastly, write custom css for `${theme}`.

