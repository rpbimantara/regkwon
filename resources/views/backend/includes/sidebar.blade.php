<aside id="leftsidebar" class="sidebar">
    <div class="navbar-brand">
        {{-- <button class="btn-menu ls-toggle-btn" type="button"><i class="zmdi zmdi-menu"></i></button> --}}
        <a href="index.html"><img src="{{asset('assets/global/taekwondo.png')}}" width="30" alt=""><span class="m-l-10">PengprovTi Jatim</span></a>
    </div>
    <div class="menu">
        <ul class="list">
            <li>
                <div class="user-info">
                    <a class="image" href="{{url('profile')}}"><img src="{{asset('assets/global/temmy.png')}}" width="50" alt="User"></a>
                    <div class="detail">
                        <h4>TEMMY</h4>
                        <small>Admin</small>
                    </div>
                </div>
            </li>
            <li class="active open"><a href="index.html"><i class="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
            <!-- ....MASTER.... -->
            <li><a href="{{url('atlet')}}"><i class="zmdi zmdi-account"></i><span>Master Atlet</span></a></li>
            <li><a href="{{url('tim')}}"><i class="zmdi zmdi-accounts"></i><span>Master Tim</span></a></li>
            <li><a href="{{url('acara')}}"><i class="zmdi zmdi-assignment"></i><span>Master Acara</span></a></li>
            <li><a href="{{url('cms')}}"><i class="zmdi zmdi-assignment"></i><span>Master CMS</span></a></li>
            <li><a href="{{url('help')}}"><i class="zmdi zmdi-help"></i><span>Layanan Bantuan</span></a></li>
            <li> <a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-assignment"></i><span>Laporan</span></a>
              <ul class="ml-menu">
                  <li><a href="project-list.html">Hasil</a></li>
                  <li><a href="taskboard.html">Atlet yang Mengikuti Events</a></li>
                  <li><a href="ticket-list.html">Total Dana</a></li>
                  <li><a href="ticket-detail.html">Custom</a></li>
              </ul>
            </li>
        </ul>
    </div>
</aside>
