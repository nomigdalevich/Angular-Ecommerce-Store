# Angular E-Commerce Store

Angular-based e-commerce application for browsing, viewing, and managing products. Users can see product lists, view detailed information, and add items to the cart. Data is currently loaded from a local JSON file, with future plans to connect to an external API during the course.

## Features
- Browse products in a list
- View detailed information for each product
- Add products to the shopping cart
- Admin can manage products (add, edit, delete)
- Data loaded locally from a JSON file

## Technologies
- Angular
- TypeScript
- HTML & CSS
- RxJS & Signals for state management
- HttpClient for future API integration

## Architecture
- **AppComponent** – main container with navbar and router-outlet  
- **HomeComponent** – general homepage content  
- **ProductListComponent** – displays the list of products  
- **ProductCardComponent** – individual product card inside the list  
- **ProductDetailsComponent** – detailed view of a single product  
- **ProductEditComponent** – reusable form for adding or editing products  
- **ProductService** – handles data fetching, state management (Signals), and cart count  

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/nomigdalevich/YourRepositoryName.git
```

2. Navigate to the project folder:

cd YourRepositoryName


3. Install dependencies:

npm install


4. Start the development server:

ng serve

Open http://localhost:4200 in your browser to view the application.

## Notes

- Currently, the project uses a local JSON file for data.

- Developed individually as part of Full Stack studies.

- Designed for learning purposes and showcasing Angular skills.

- Future integration with a backend API using Node.js is planned.
