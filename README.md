# Hotel Booking Website

A NextJS-based hotel booking platform that allows users to search, filter, and book hotel rooms.

## Features ✨

### 1. Home Page
- Advanced hotel search with:
  - City selection with autocomplete
  - Check-in/Check-out date picker
  - Guest and room quantity selector
- Last search history feature
- Responsive design for all devices
- Background image with overlay

### 2. Search Results Page
- List of hotels matching search criteria
- Filtering options:
  - Star rating (1-5 stars)
  - Facilities
  - Price range
- Hotel cards showing:
  - Hotel images
  - Basic information (name, stars, address)
  - Key facilities
  - Lowest room price
- Pagination support
- Responsive grid layout

### 3. Hotel Detail Page
- Hotel information sections:
  - Image gallery
  - Hotel description
  - Available facilities
  - Room types and pricing
  - Location with Google Maps integration
  - Hotel policies
- Sticky navigation
- Mobile-optimized layout

## Technical Implementation 🛠

### API Integration
- Server-side data fetching using NextJS App Router
- API endpoints used:
  - `/api/v1/cities` - City list
  - `/api/v1/hotels/search` - Hotel search
- Data caching implemented for better performance

### State Management
- React hooks for local state
- URL-based state for search parameters
- Local storage for search history

### Code Organization
- Clean component structure
- Separated business logic in hooks
- TypeScript for type safety
- Reusable components
- Proper error handling

### UI/UX
- Tailwind CSS for styling
- Responsive design patterns
- Loading states
- Error handling states
- Input validation
- Smooth transitions

## Test Requirements Completion ✅

1. ✅ UI Implementation
   - Search box with required inputs
   - Three main pages implemented
   - Responsive design following Figma guidelines

2. ✅ API Integration
   - Server-side API calls implemented
   - Data properly typed and validated
   - Error handling in place

3. ✅ NextJS Features
   - App Router utilized
   - Server components where appropriate
   - Dynamic imports for optimization
   - TypeScript integration

4. ✅ Additional Features
   - Search history
   - Advanced filtering
   - Interactive maps
   - Form validation
   - Loading states

## Best Practices 👌

1. Code Quality
   - TypeScript for type safety
   - ESLint configuration
   - Consistent code formatting
   - Meaningful component names

2. Performance
   - Image optimization
   - Code splitting
   - Lazy loading
   - Caching strategies

3. User Experience
   - Input validation
   - Error messages
   - Loading states
   - Responsive design

4. Maintainability
   - Clear file structure
   - Component documentation
   - Type definitions
   - Separation of concerns

## Setup & Development

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Open the browser and navigate to `http://localhost:3000`

