@extends('layouts.layoutMain')

@push('scripts')
    <script src="{{asset('js/filter.js')}}"></script>
@endpush

@section('content')

    <section class="block">
        <div class=" text-center my-5 title-block">
            <p>Оплата</p>
        </div>
        <div class="filter-wrapper mb-3 py-2">
        </div>
        <div>
            <h1>
                <stong>ОПЛАТИТИ СВОЄ ЗАМОВЛЕННЯ МОЖНА БУДЬ-ЯКИМ ЗРУЧНИМ СПОСОБОМ!</stong>
            </h1>

            <p>
                Готівка в майстерні або кур'єру при отриманні букета (в разі доставки).
                Переказ грошей на картку Приватбанку.
                Онлайн-оплата замовлення карткою прямо на сайті - карткою VISA, MASTERCARD будь-якого банку світу
                (будь-якої валюти).
            </p>

            <h2>НЕ ЗНАЄТЕ ЩО ВИБРАТИ, ВСЕ ПОДОБАЄТЬСЯ? ТЕЛЕФОНУЙТЕ, МИ ДОПОМОЖЕМО!</h2>
            <a href="tel:+38 (93) 5359180">+38 (93) 5359180</a>
        </div>
    </section>

@endsection
