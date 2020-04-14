<section class="block">
    <!-- Footer -->
    <footer class="page-footer bg-white pt-4">

        <!-- Footer Links -->
        <div class="container-fluid text-dark ">

            <!-- Grid row -->
            <div class="row footer-colums">

                <div class="col-md-2 footer-about">
                    <div class="footer-menu-title mb-3">Про нас</div>
                    <ul class="footer-menu-links">
                        <li>
                            <a href="{{action('HomeController@about')}}" class="footer-menu-link">Про компанію</a>
                        </li>
                        <li>
                            <a href="{{action('HomeController@shops')}}" class="footer-menu-link">Магазини</a>
                        </li>
                        <li>
                            <a href="{{action('HomeController@contacts')}}" class="footer-menu-link">Контакти</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 footer-info ">
                    <div class="footer-menu-title mb-3">Інформація</div>
                    <ul class="footer-menu-links">
                        <li>
                            <a href="{{action('HomeController@delivery')}}" class="footer-menu-link">Доставка</a>
                        </li>
                        <li>
                            <a href="{{action('HomeController@pay')}}" class="footer-menu-link">Оплата</a>
                        </li>
                        <li>
                            <a href="{{action('HomeController@garanties')}}" class="footer-menu-link">Гарантії</a>
                        </li>
                        <li>
                            <a href="{{action('HomeController@recommendation')}}"
                               class="footer-menu-link">Рекомендації</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 footer-brand text-center"><img src="{{asset('img/brand.jpg')}}" alt=""></div>
                <div class="col-md-2 footer-networks">
                    <div class="footer-menu-title mb-3">Соц. мережі</div>
                    <ul class="footer-menu-links">
                        <li>
                            <a href="https://www.instagram.com/million.flowers.vn/?hl=ru" target="_blank"
                               class="footer-menu-link inst">
                                Instagram
                            </a>
                        </li>
{{--                        <li>--}}
{{--                            <a href="https://www.facebook.com/million.flowers.vn" target="_blank"--}}
{{--                               class="footer-menu-link inst">--}}
{{--                                Facebook--}}
{{--                            </a>--}}
{{--                        </li>--}}
{{--                        <li>--}}
{{--                            <a href="t.me/millionflowersvn" target="_blank" class="footer-menu-link inst">--}}
{{--                                Telegram--}}
{{--                            </a>--}}
{{--                        </li>--}}
                    </ul>
                </div>
                <div class="col-md-3 footer-contacts ">
                    <div class="footer-menu-title mb-3">Контакти</div>
                    <ul class="footer-menu-links">
                        <li>
                            <a href="tel:(093)-535-91-80" class="footer-menu-link">(093)-535-91-80 (Viber/Telegram)</a>
                        </li>
                        <li>
                            <a href="mailto:million.flowers.vn@gmail.com" class="footer-menu-link">million.flowers.vn@gmail.com</a>
                        </li>
                    </ul>
                </div>

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Links -->

    </footer>
</section>
