# Full Screen Navigation Menu

[Live aplication](https://menu-full-screen.vercel.app/)

Enhance your website with the Full Screen Navigation Menu, a modern and interactive solution designed to elevate user experience.

## Features

- Sleek Design: The menu features a clean and contemporary design that adds a touch of sophistication to your website.
- Responsive Layout: The menu is crafted to ensure optimal performance on various screen sizes, making it user-friendly across devices.
- Easy integration with your website or web application
- Lightweight and customizable

## Installation

To use this full-screen navigation menu in your project, follow these steps:

1. Install plugin:

```bash
npm install menu-full-screen
```

2. Include jQuery and the plugin in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Other head elements -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="node_modules/full-screen-navigation-menu/menuFullScreen.js"></script>
</head>

<body>
  <!-- Your HTML content -->

  <script>
    $(document).ready(function () {
      // Initialize the plugin
      $('body').fullScreenMenu({
        menuTrigger: '.nav-trigger',
        closeButton: '.js_close_button',
        menuElement: '.nav-menu',
        animationDuration: 200
      });
    });
  </script>
</body>

</html>
```

3. Customize the menu styles and settings according to your preferences.

## Usage

```javascript
// Include the full-screen-menu plugin
$(document).ready(function () {
  // Initialize the plugin
  $('body').fullScreenMenu({
    menuTrigger: '.nav-trigger',
    closeButton: '.js_close_button',
    menuElement: '.nav-menu',
    animationDuration: 200
  });
});
```

## License

This project is licensed under the MIT License by BIASIOLO.
```

