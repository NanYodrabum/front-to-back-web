# Client

## Step 1 Install Vite
create folder client
```bash
npm create vite .
npm install
npm run dev
```
## Step 2 Install tailwind
https://tailwindcss.com/docs/installation/using-vite
```jsx
npm install tailwindcss @tailwindcss/vite
```
### Configure the Vite plugin

edit vite.config.js
```bash
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Import Tailwind CSS

import to index.css
```jsx
@import "tailwindcss"
```
and this this code to recheck
```jsx
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```
## Step 3 Install React-Router
https://reactrouter.com/start/library/installation
```bash
npm i react-router
```
and render a <BrowserRouter> around your application:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </>
)
```
### and then update AppRoutes
src/routes/AppRoutes.jsx
```jsx
import { Outlet, Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Register from "../pages/auth/Register"
import Login from "../pages/auth/Login"
import Dashboard from "../pages/admin/Dashboard"
import Manage from "../pages/admin/Manage"
import HomeUser from "../pages/user/HomeUser"

function AppRoutes() {
    return (
        <>
            <Routes>
                {/* Public */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="register" element={<Register/>} />
                    <Route path="login" element={<Login/>} />
                </Route>

                {/* Private [USER] */}
                <Route path="user" element={<Layout/>}>
                    <Route index element={<HomeUser/>} />
                </Route>

                {/* Proivate [Admin] */}
                <Route path="admin" element={<Layout/>}>
                    <Route index element={<Dashboard/>} />
                    <Route path="manage" element={<Manage/>} />
                </Route>

                <Route path="*" element={<h1>404 Not found</h1>} />
            </Routes >
        </>

    )
}

export default AppRoutes
```


### Create Home page
/src/pages/Home.jsx
```jsx

```
### Create About page
/src/pages/About.jsx
```jsx

```

### Create admin folder
#### Create Dashboard page
/src/pages/admin/Dashboard.jsx
```jsx

```

#### Create Manage page
/src/pages/admin/Manage.jsx
```jsx

```
### Create auth folder
#### Create Login page
/src/pages/admin/Login.jsx
```jsx

```

#### Create Register page
/src/pages/admin/Register.jsx
```jsx

```

### Create user folder
#### Create HomeUser page
/src/pages/admin/HomeUser.jsx
```jsx

```


### Create NotFound page
src/pages/NotFound.jsx
```jsx

```

## Step 4 Create MainNav
src/components/MainNav.jsx
```jsx

```
update in Layout
src/layouts/Layouts.jsx
```jsx
import { Outlet } from "react-router"
import MainNav from "../components/MainNav"

function Layout() {
    return (
        <div>
           <MainNav/>
            <hr />
            <Outlet />
            <hr />
            <h1>Footer</h1>
        </div>
    )
}

export default Layout
```
