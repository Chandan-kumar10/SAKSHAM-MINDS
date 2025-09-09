# SAKSHAM-MINDS 

### Setup instruction

 1. Clone the project

```
      git clone https://github.com/Chandan-kumar10/SAKSHAM-MINDS.git
```

 2. Move into the directory

 ```
     cd SAKSHAM-MINDS
```

 3. install dependencies

 ```
     npm i
```

 4. run the server

 ```
     npm run dev
```



### Setup instruction for tailwind

[tailwind official instruction doc](https://v3.tailwindcss.com/docs/installation)

 1. Install tailwindcss

 ```
        npm install -D tailwindcss@3
```

 2. Create tailwind config file

 ```
        npx tailwindcss init
```

3. Add file extentions to tailwind config file in the content property
```
     "./src/**/*.{html,js,jsx,ts,tsx}"

```

4. Add the tailwind directives at the top of the  `index.css` file

```
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
```