<!doctype html>
<html class="no-js " lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="description" content="Responsive Bootstrap 4 and web Application ui kit.">
    <title>Sign In</title>

    @include('backend.includes.css_login')
    @stack('b-css_login')
  </head>
  <body class="theme-blush">
    @yield('content')

    @include('backend.includes.script_login')
    @stack('b-script_login')
  </body>
</html>
