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

### adding plugins and dependencies 

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```


### Configure auto import sort esline

1. Install simple import sort 

```
       npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in  `.eslint .cjs`

```
      'simple-import-sort/imports': 'error'
```

3. Add simple-import sort plugin in `.eslint .cjs`

```
       plugins: [..., 'simple-import-sort']
```

4. To enable auto import sorton file save in vscode

   - Open `setting.json` 
   - add the following config
```
     "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
```