<!doctype html>
<html class="no-js " lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="description" content="Responsive Bootstrap 4 and web Application ui kit.">
    <title>@yield('title','Home') | Taekwondo</title>

    @include('backend.includes.css')
    @stack('b-css')
  </head>

  <body class="theme-blush">
    <div class="page-loader-wrapper">
      <div class="loader">
        <div class="m-t-30"><img class="zmdi-hc-spin" src="{{asset('assets/backend/images/loader.svg')}}" width="48" height="48" alt="Aero"></div>
        <p>Please wait...</p>
      </div>
    </div>

    <div class="overlay"></div>
    @include('backend.includes.sidebar')

    @yield('content')

    @include('backend.includes.script')
    @stack('b-script')
  </body>
</html>
