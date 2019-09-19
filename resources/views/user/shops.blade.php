@extends('layouts.layoutMain')

@push('scripts')
    <script src="{{asset('js/filter.js')}}"></script>
@endpush

@section('content')

    <section class="block">
        <div class=" text-center my-5 title-block">
            <p>Магазини</p>
        </div>
        <div class="filter-wrapper mb-3 py-2">

        </div>

        <div class="">
            <p>Неш склад знаходиться за адресою Матроса Кошки 10а🌿
                Працюємо кожного дня з 10:00-20:00
                Без вихідних
                Контактна інформація: +38(093)535-91-80</p>

            <div class="text-center"></div>
                👇<img src="{{asset('img/shop.jpg')}}" class="my-5"/>
            </div>
        </div>
    </section>

@endsection
