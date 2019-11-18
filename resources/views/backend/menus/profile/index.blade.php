@extends('backend.layouts.default')
@section('title','Profile')
@section('content')

<section class="content">
    <div class="body_scroll">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Profile</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i> Aero</a></li>
                        <li class="breadcrumb-item">Pages</li>
                        <li class="breadcrumb-item active">Profile</li>
                    </ul>
                    <button class="btn btn-primary btn-icon mobile_menu" type="button"><i
                            class="zmdi zmdi-sort-amount-desc"></i></button>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <button class="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i
                            class="zmdi zmdi-arrow-right"></i></button>
                    <a href="profile-edit.html" class="btn btn-info btn-icon float-right"><i
                            class="zmdi zmdi-edit"></i></a>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-4 col-md-12">
                    <div class="card mcard_3">
                        <div class="body">
                            <a href="profile.html"><img src="{{asset('assets/global/temmy.png')}}"
                                    class="rounded-circle shadow " alt="profile-image"></a>
                            <h4 class="m-t-10">Temmy Kurniawan</h4>
                            <div class="row">
                                <div class="col-12">
                                    <ul class="social-links list-unstyled">
                                        <li><a title="facebook" href="javascript:void(0);"><i
                                                    class="zmdi zmdi-facebook"></i></a></li>
                                        <li><a title="twitter" href="javascript:void(0);"><i
                                                    class="zmdi zmdi-twitter"></i></a></li>
                                        <li><a title="instagram" href="javascript:void(0);"><i
                                                    class="zmdi zmdi-instagram"></i></a></li>
                                    </ul>
                                    <p class="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                </div>
                                <div class="col-4">
                                    <small>Following</small>
                                    <h5>852</h5>
                                </div>
                                <div class="col-4">
                                    <small>Followers</small>
                                    <h5>13k</h5>
                                </div>
                                <div class="col-4">
                                    <small>Post</small>
                                    <h5>234</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="card">
                        <div class="body">
                            <small class="text-muted">Email address: </small>
                            <p>michael_dorsey@gmail.com</p>
                            <hr>
                            <small class="text-muted">Phone: </small>
                            <p>+ 202-555-0191</p>
                            <hr>
                            <small class="text-muted">Email address: </small>
                            <p>michael_dorsey@gmail.com</p>
                            <hr>
                            <small class="text-muted">Phone: </small>
                            <p>+ 202-555-0191</p>
                            <hr>
                            <small class="text-muted">Email address: </small>
                            <p>michael_dorsey@gmail.com</p>
                            <hr>
                            <small class="text-muted">Phone: </small>
                            <p>+ 202-555-0191</p>
                            <hr>
                            <small class="text-muted">Email address: </small>
                            <p>michael_dorsey@gmail.com</p>
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
