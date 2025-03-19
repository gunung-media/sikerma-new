<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact" dir="ltr"
    data-theme="theme-default" data-assets-path="{{ asset('assets') }}" data-template="vertical-menu-template"
    data-style="light">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <title inertia>{{ config('app.name', 'FeedbackHub') }}</title>
    <meta name="description"
        content="Sikerma adalah Sistem Kerjasama Universitas Palangkaraya yang membantu mengelola dokumen kerjasama seperti MoU, MoA, dan IA secara efisien." />
    <meta name="keywords"
        content="Sikerma, Sistem Kerjasama, Universitas Palangkaraya, MoU, MoA, IA, Manajemen Dokumen Kerjasama" />
    <meta name="author" content="Universitas Palangkaraya" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Social Media Meta Tags -->
    <meta property="og:title" content="Sikerma - Sistem Kerjasama Universitas Palangkaraya" />
    <meta property="og:description"
        content="Kelola dokumen kerjasama seperti MoU, MoA, dan IA dengan mudah menggunakan Sikerma." />
    <meta property="og:image" content="{{ asset('android-chrome-512x512.png') }}" />
    <meta property="og:url" content="https://sikerma.upr.ac.id/" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Sikerma - Sistem Kerjasama Universitas Palangkaraya" />
    <meta name="twitter:description" content="Sistem untuk mengelola dokumen kerjasama seperti MoU, MoA, dan IA." />
    <meta name="twitter:image" content="{{ asset('android-chrome-512x512.png') }}" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
        rel="stylesheet" />

    <!-- Icons -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/fontawesome.min.css"
        integrity="sha512-lauN4D/0AgFUGvmMR+knQnbOADyD/XuQ8VF18I8Ll0+TLvsujshyxvU+uzogmQbSq6qJd5jnUdYtK8ShxXMlSg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/rtl/core.css') }}" class="template-customizer-core-css" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/rtl/theme-default.css') }}"
        class="template-customizer-theme-css" />
    <link rel="stylesheet" href="{{ asset('assets/css/demo.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/custom-font.css') }}" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/datatable/datatables.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/datatable/buttons.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/editor/katex.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/editor/editor.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/calendar/flatpickr.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/calendar/fullcalendar.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/typeahead-js/typeahead.css') }}" />

    <!-- Helpers -->
    <script src="{{ asset('assets/vendor/js/helpers.js') }}"></script>
    <script src="{{ asset('assets/js/config.js') }}"></script>
    <style>
        .swal2-container.swal2-center.swal2-backdrop-show {
            z-index: 9999
        }
    </style>

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
    @inertiaHead
</head>

<body class="antialiased">
    @inertia
</body>

<!-- Core JS -->
<script src="{{ asset('assets/vendor/libs/jquery/jquery.js') }}"></script>
<script src="{{ asset('assets/vendor/libs/popper/popper.js') }}"></script>
<script src="{{ asset('assets/vendor/js/bootstrap.js') }}"></script>
<script src="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
<script src="{{ asset('assets/vendor/libs/hammer/hammer.js') }}"></script>
<script src="{{ asset('assets/vendor/libs/i18n/i18n.js') }}"></script>
<script src="{{ asset('assets/vendor/libs/typeahead-js/typeahead.js') }}"></script>
<script src="{{ asset('assets/vendor/js/menu.js') }}"></script>

<!-- Main JS -->
<script src="{{ asset('assets/js/main.js') }}"></script>

</html>
