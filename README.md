# Food List Page - Food Delivery App

This is simple Food List Page in Food Delivery App is written by React.js and Typescript.

## Techstack

- [React.js](https://react.dev/): The library for web and native user interfaces
- [Typescript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [React Query](https://tanstack.com/query/v3/): Powerful asynchronous state management for TS/JS, React. Cause we just have one page and all data will be handled in this page. Then instead of handling state with React Context or Redux I choose React Query cause we just need to manage asynchronous operations between your server and client and don't need to stored. Also there is some advantage points: caching, retries, ...
- [React Icon](https://react-icons.github.io/react-icons/): provide icons setf
- [Nock](https://github.com/nock/nock): used to test modules that perform HTTP requests in isolation.
- [Lodash](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance & extras.

## Structure

<img width="529" alt="Screenshot 2023-09-26 at 21 11 41" src="https://github.com/nguyennghi3489/wego/assets/5178516/3e918a38-2f28-4ed1-a127-be29677b9ad5">

## Events

- SearchNameEvent: typing in search text will trigger this event and update query.name state then useQuery hook will refetch the api to update food list
- CategoryChangeEvent: click on category buttons will trigger this event and update query.categoryId state then useQuery hook will refetch the api to update food list
- LoadMoreEvent: click on loadMore it will trigger fetchData will nextCursor from latest food list api.

## Layout

<img width="670" alt="Screenshot 2023-09-26 at 21 37 56" src="https://github.com/nguyennghi3489/wego/assets/5178516/9d929d99-d47b-4725-87e2-983ab4108912">

## Styling

- This project is used [CSS Module](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) for styling.
- There are some tokens for keep the styling consistency includes: spacing, color, font-size, ...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
