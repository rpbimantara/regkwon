@extends('backend.layouts.default')
@section('title','HOME')
@section('content')

<section class="content">
    <div class="body_scroll">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Petunjuk Penggunaan</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i> Home</a></li>
                        <li class="breadcrumb-item active">Penggunaan</li>
                    </ul>
                    <button class="btn btn-primary btn-icon mobile_menu" type="button"><i
                            class="zmdi zmdi-sort-amount-desc"></i></button>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <button class="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i
                            class="zmdi zmdi-arrow-right"></i></button>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <!-- Basic Example | Horizontal Layout -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Pengenalan </strong>Fitur - Fitur</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="zmdi zmdi-more"></i> </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                                <li class="remove">
                                    <a role="button" class="boxs-close"><i class="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div id="wizard_horizontal">
                                <h2>Mendaftarkan Atlet</h2>
                                <section>
                                    <img src="{{asset('assets/global/atlet.png')}}" alt="">
                                    <p>Master Atlet adalah fitur untuk mengelola data atlet untuk masuk ke menu master atlet,
                                        tekan menu "Master Atlet" di menu navigasi sebelah kiri, atau seperti gambar diatas.
                                    </p>
                                </section>
                                <h2>Mendaftarkan Tim</h2>
                                <section>
                                    <p>Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor. Nullam venenatis
                                        diam ac
                                        ligula elementum pellentesque. In lobortis sollicitudin felis non eleifend.
                                        Morbi
                                        tristique tellus est, sed tempor elit. Morbi varius, nulla quis condimentum
                                        dictum,
                                        nisi elit condimentum magna, nec venenatis urna quam in nisi. Integer hendrerit
                                        sapien
                                        a diam adipiscing consectetur. In euismod augue ullamcorper leo dignissim quis
                                        elementum
                                        arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                        leo
                                        velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus
                                        sagittis
                                        iaculis nec, malesuada a diam. Donec non pulvinar urna. Aliquam id velit lacus.
                                    </p>
                                </section>
                                <h2>Membuat Kejuaraan</h2>
                                <section>
                                    <p> Morbi ornare tellus at elit ultrices id dignissim lorem elementum. Sed eget nisl
                                        at justo
                                        condimentum dapibus. Fusce eros justo, pellentesque non euismod ac, rutrum sed
                                        quam.
                                        Ut non mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat volutpat.
                                        Donec diam massa, porta vel dictum sit amet, iaculis ac massa. Sed elementum dui
                                        commodo lectus sollicitudin in auctor mauris venenatis. </p>
                                </section>
                                <h2>Bantuan</h2>
                                <section>
                                    <p> Quisque at sem turpis, id sagittis diam. Suspendisse malesuada eros posuere
                                        mauris vehicula
                                        vulputate. Aliquam sed sem tortor. Quisque sed felis ut mauris feugiat iaculis
                                        nec
                                        ac lectus. Sed consequat vestibulum purus, imperdiet varius est pellentesque
                                        vitae.
                                        Suspendisse consequat cursus eros, vitae tempus enim euismod non. Nullam ut
                                        commodo
                                        tortor. </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection

@push('b-css_login')

@endpush

@push('b-script_login')

@endpush
