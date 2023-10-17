# Dynamic Redux State Loading Engine

This web engine allows each page to have its own separate Redux State, which is loaded into the shared store only when a user visits that page.

Additionally, each page is dynamically imported from the "Screens" folder (using React.lazy / React.suspense technologies). To seamlessly integrate, adhere to the predefined structure provided by the engine. This architectural approach allows for a clear separation of engine development and page development, greatly simplifying team collaboration.

## How to Use

1. Clone the repository to your local machine.
2. Ensure you have made the necessary configurations and installed dependencies.
3. Create a new page, following the structure in the "Screens" folder.
4. Start the engine and navigate to the new page to witness dynamic Redux State loading in action.
