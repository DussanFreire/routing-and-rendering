# 🚀 Routing and Rendering

This repository demonstrates core concepts and features of **Next.js**, focusing on routing, layouts, and rendering techniques.

---

## 📚 **Key Concepts**

### 🖼️ **Page and Layout Relationship**
- **Explanation:** Layouts in Next.js wrap pages and provide shared UI components (like headers, footers, or sidebars).  
- **Example:**
```jsx
// layout.js
export default function Layout({ children }) {
  return (
    <div>
      <header>Header Content</header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
}

// page.js
export default function Page() {
  return <h1>Welcome to the Page!</h1>;
}
```
## 🏷️ **Root Page Metadata**

- **Why no <header> in the root page?:**
Layouts in Next.js wrap pages and provide shared UI components (like headers, footers, or sidebars).  
- **Example:** 
```jsx
export const metadata = {
  title: 'Home',
  description: 'Welcome to my website!',
};
```

## 🌟 **Default App Icon**
- **Why is there an icon in the root app folder?**
- **Example:** Add a file named icon.png in the app directory.


## **🖼️ Special Features of Next.js <Image> Tag**
- Supports **lazy loading** and converts images to **.webp** format for better performance.
- **Example:**
```jsx
import Image from 'next/image';

export default function Example() {
  return <Image src="/example.jpg" alt="Example" width={500} height={300} />;
}
```

## 🔄 **Event Handling Without Full Client Components**
-	Use actions within a <form> element:
- Steps:
1.	Create a function with the "use server" directive.
2.	Use useActionState() to manage states.
3.	Add "use client" to the specific client-side component.
- **Example:**
```jsx
"use client";
import { useActionState } from 'react';

const action = async (state) => {
  console.log(state);
};

export default function Form() {
  const [state, setState] = useActionState(action, {});

  return (
    <form action={action}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🔃 **Revalidation with revalidatePath()**
- **Why needed?** To ensure up-to-date data after specific actions.
- **Usage:** Revalidate specific pages or layouts.
- **Example:**
```jsx
import { revalidatePath } from 'next/cache';

async function updateData() {
  // Perform update logic
  revalidatePath('/example');
}
```

## 📌 **Parallel Routes**
- **Definition:** Two or more routes rendered simultaneously in the same layout.
- **Example:**
```jsx
// layout.js
export default function Layout({ children, explore, discover }) {
  return (
    <div>
      <main>{children}</main>
      <section>{explore}</section>
      <section>{discover}</section>
    </div>
  );
}
```

## 🛠️ **Catch-All Routes**
- **Definition:** Captures all nested paths in an array format.
- **Syntax:** [[...yourRoute]]
- **Example:** Useful for filters like /products/[...filters].js.


## 🛤️ **Getting the Current Pathname**
- Use the usePathname() hook to retrieve the current URL path.
- **Example:** 
```jsx
import { usePathname } from 'next/navigation';

export default function PathnameExample() {
  const path = usePathname();
  return <p>Current path: {path}</p>;
}
```

## 🖇️ **Interceptors**
- **Definition:** Control segment routing using (.), (..), or (…) syntax.
- **Use Case:** Ideal for modals.
- **Example:** Create (.)modal folder and add your modal logic.

## 🗂️ **Route Groups**
- **Definition:** Group routes sharing the same layout without changing the URL.
- **Syntax:** (groupName)
- **Example:** (marketing) folder for marketing-related routes.

- ## 🔌 **API Route Handler**
- **Definition:** An API endpoint inside Next.js.
- **Example:** 
```jsx
// app/api/route.js
export async function GET(request) {
  return new Response('Hello, API!');
}
```

- ## 🛡️ **Middleware**
- **Definition:** Middleware functions redirect or manipulate requests.
- **Example:** 
```jsx
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  if (!request.headers.get('authorization')) {
    return NextResponse.redirect('/login');
  }
}
```

## 🏁 **Getting Started**

1.	Clone the repository:
```bash
git clone https://github.com/DussanFreire/routing-and-rendering.git
```
2.	Navigate to the directory:
```bash
cd routing-and-rendering
```

3.	Install dependencies:
```bash
npm install
```

4.	Run the development server:
```bash
npm run dev
```

5.	Open your browser at [http://localhost:3000](http://localhost:3000) to explore the app.

## 🛠️ **Technologies Used**

- Next.js
- React
