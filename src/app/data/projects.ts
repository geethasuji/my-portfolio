export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  images?: string[];
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "CRM Platform",
    type: "Current live development",
    description:
      "A full-stack CRM application for managing leads, companies, deals, and support tickets through a centralized admin platform.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Django",
      "PostgreSQL",
    ],

    features: [
      "Leads, Companies, Deals, and Tickets modules",
      "REST API integration",
      "Authentication and protected functionality",
      "CRUD operations",
      "Global search",
    ],

    images: [
      "/projects/crm/login.png",
      "/projects/crm/dashboard.png",
      "/projects/crm/leads.png",
      "/projects/crm/companies.png",
      "/projects/crm/deals.png",
      "/projects/crm/tickets.png",
      "/projects/crm/globalsearch.png",
      "/projects/crm/notification.png",
      "/projects/crm/leadsdetail.png",
      "/projects/crm/createtask.png",
      "/projects/crm/schedulemeeting.png",
      "/projects/crm/activity.png",
      "/projects/crm/createnote.png",
      "/projects/crm/newmail.png",
      "/projects/crm/importcsv.png",
    ],

    demo: "https://crm-live-project-frontend-5h5x.vercel.app",
  },

  {
    number: "02",
    title: "SHOP.CO",
    type: "Full Stack E-Commerce Application",
    description:
      "A responsive e-commerce web application featuring product browsing, product details, shopping cart functionality, and dedicated information pages.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST API",
    ],

    features: [
      "Responsive home page",
      "Product listing",
      "Product detail pages",
      "Cart page",
      "About Us page",
    ],

    images: [
      "/projects/shopco/home.png",
      "/projects/shopco/login.png",
      "/projects/shopco/register.png",
      "/projects/shopco/product1.png",
      "/projects/shopco/product2.png",
      "/projects/shopco/product3.png",
      "/projects/shopco/product-details.png",
      "/projects/shopco/ordersummary.png",
      "/projects/shopco/cart.png",
      "/projects/shopco/footer.png",
    ],
  },

  {
    number: "03",
    title: "Shoppy",
    type: "Next.js Mini Project",
    description:
      "An e-commerce application developed as a Next.js assignment using both App Router and Pages Router approaches. The application includes product browsing, product details, cart functionality, and informational pages.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "App Router",
      "Pages Router",
      "Bootstrap",
    ],

    features: [
      "Responsive home page",
      "Product listing",
      "Product detail pages",
      "Cart page",
      "About Us page",
      "Contact page",
      "Order summary",
    ],

    images: [
      "/projects/shoppy/home.png",
      "/projects/shoppy/products.png",
      "/projects/shoppy/product-details.png",
      "/projects/shoppy/cart.png",
      "/projects/shoppy/about.png",
      "/projects/shoppy/about1.png",
      "/projects/shoppy/contact.png",
      "/projects/shoppy/contact1.png",
      "/projects/shoppy/ordersummary.png",
      "/projects/shoppy/footer.png",
    ],

    demo: "https://shoppy-ecommerce-flax.vercel.app/",
  },
];