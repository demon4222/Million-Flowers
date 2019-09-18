@extends('layouts.layoutMain')

@push('scripts')
    <script src="{{asset('js/filter.js')}}"></script>
@endpush

@section('content')

    <section class="block">
        <div class=" text-center my-5 title-block">
            <p>Про нас</p>
        </div>
        <div class="filter-wrapper mb-3 py-2">
        </div>
    </section>

@endsection
