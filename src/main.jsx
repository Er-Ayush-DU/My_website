import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromChildren , Route  } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, { GithubLoadFollwer } from './components/Github/Github.jsx';
import User from './components/User/User.jsx';
import Service from './components/Service/Service.jsx';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <Github />
//       }
//     ]
//   },

// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route loader={GithubLoadFollwer} path="github" element={<Github />} /> */}
      <Route path="user/:userid" element={<User/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
