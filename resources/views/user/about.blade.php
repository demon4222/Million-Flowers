@extends('layouts.layoutMain')

@push('scripts')
    <script src="{{asset('js/filter.js')}}"></script>
@endpush

@section('content')

    <section class="block">
        <div class=" text-center my-5 title-block">
            <p>Про нас</p>
        </div>
        <div class="filter-wrapper mb-3 py-2 about-text">
            <p>Команда Million Flowers зробить все, щоб твій букет був найкращий і обов‘язково зробить так, щоб він подарував незабутню емоцію!</p>
            <br>
            <p>Ти маєш можливість зробити замовлення прямо зараз і ми доставимо його в будь-яку точку міста протягом 1 години!
            Також є можливість приїхати на наш склад, що знаходиться на Матроса Кошки, 10А і разом із флористом обрати квіти для твого букету</p>
            <br>
            <p>Наша компанія на квітковому ринку вже 2 роки і за цей час ми змогли створити справдні гарні умови для клієнтів: <br>
            -Найнижча ціна <br>
            -Найкращий сервіс <br>
            -Безкоштовна доставка <br>
            -Якісний асортимент <br>
            <br>
            З найкращими побажаннями, Million Flowers
        </div>
        <div>
            <img src="/img/about.jpg" alt="">
        </div>
    </section>

@endsection
